import { NextResponse } from "next/server";
import { DateTime } from 'luxon';

const BASE_URL = "https://api.solarweb.com/swqapi/pvsystems";

const headers = {
    accept: "application/json",
    AccessKeyId: process.env.SOLAR_KEY_ID,
    AccessKeyValue: process.env.SOLAR_KEY_VALUE,
};

const deviceTimezoneOffset = -6;

/**
 * Generic SolarWeb fetch helper
 */
async function fetchSolar(url, label) {
    const res = await fetch(url, {
        method: "GET",
        headers,
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`${label} failed (${res.status})`);
    }

    return res.json();
}

export async function GET(request) {
    try {
        if (!headers.AccessKeyId || !headers.AccessKeyValue) {
            throw new Error("Missing SolarWeb API credentials");
        }

        const { searchParams } = new URL(request.url);
        const systemId = searchParams.get("systemId");
        const year = searchParams.get("year");
        const month = searchParams.get("month");

        if (!systemId) {
            return NextResponse.json(
                { error: "systemId is required" },
                { status: 400 }
            );
        }

        const timezoneOffsetHours = -5; // customer Timezone offset Update from postgres
        const now = new Date(); //Get current datetime from current location
        console.log(`Current date: ${now}`);

        // Current location date
        const y = String(year ?? now.getFullYear());
        const m = String(month ?? now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');

        // Build From & today at
        const current_loc_date = `${y}-${m}-${d}`;
        console.log(`Current location date: ${current_loc_date}`);

        // Current location time
        const hrs = String(now.getHours()).padStart(2, '0'); 
        const mins = String(now.getMinutes()).padStart(2, '0'); 

        // Hour & minute calculation with 30 minute subtract
        const tempDate = new Date(); // Create date object
        tempDate.setHours(parseInt(hrs, 10)); // Set hours
        tempDate.setMinutes(parseInt(mins, 10)); // Set mins
        tempDate.setMinutes(tempDate.getMinutes() - 30); //Subtract 30 minutes for delay
        const calc_hour = tempDate.getHours(); // Get the hours after delay
        const hour_actual = String(calc_hour-(timezoneOffsetHours)).padStart(2, '0');// Perfom timezone offset calculation
        const minute_actual = tempDate.getMinutes().toString().padStart(2, '0'); //Get the minutes after delay

        if (m < 1 || m > 12) {
            return NextResponse.json(
                { error: "month must be between 1 and 12" },
                { status: 400 }
            );
        }

        // Solar web endpoints
        const endpoints = {
            live: `${BASE_URL}/${systemId}/LiveData`,
            dailyproductionforMonth: `${BASE_URL}/${systemId}/aggdata/years/${y}/months/${m}/days`,
            dailyProduction:`${BASE_URL}/${systemId}/histdata` +
                `?From=${current_loc_date}T06%3A00%3A00Z` +
                `&To=${current_loc_date}T${hour_actual}%3A${minute_actual}%3A00Z` + 
                `&Channel=EnergyProductionTotal&Limit=10000&Offset=0`,
        };
        // ${y} 
        const results = await Promise.allSettled(
            Object.entries(endpoints).map(([key, url]) =>
                fetchSolar(url, key).then(data => [key, data])
            )
        );

        const response = {
            systemId,
            period: { year: y, month: m, day: d },
            data: {},
            errors: [],
        };


        for (const result of results) {
            if (result.status === "fulfilled") {
                const [key, data] = result.value;

                if (key === "dailyproductionforMonth") {
                    response.data.production = normalizeMonthlyProduction(data);
                }

                if (key === "dailyProduction") {
                    response.data.energy = normalizeDailyProduction(data);
                }

                if (key === "live") {
                    response.data.live = normalizeLiveData(data);
                }
            } else {
                response.errors.push(result.reason.message);
            }
        }

        return NextResponse.json(response);

    } catch (error){
        console.error("SolarWeb API error:", error);

        return NextResponse.json(
            { error: "Failed to fetch solar data" },
            { status: 500 }
        );   
    }
}
/**
 * Normalize daily aggregated energy values (kWh)
 */
function normalizeDailyProduction(data) {
    const entries = data?.data;

    if (!Array.isArray(entries)) {
        return { labels: [], values: [] };
    }

    const sortedEntries = entries
        .map(entry => {
            const channel = entry.channels?.find(
                c => c.channelName === "EnergyProductionTotal"
            );

            if (!channel || typeof channel.value !== "number") {
                return null;
            }

            const energyWh = channel.value;

            // Convert from energy to power
            const duration = 300/3600; // 5 minutes in an hour
            const powerW = energyWh / duration;

            // Convert UTC string to Luxon DateTime in CT
            const utcDate = DateTime.fromISO(entry.logDateTime, { zone: 'utc' });
            const ctDate = utcDate.setZone('America/Chicago');

            return {
                deviceTime: ctDate.toJSDate(), 
                powerW,
            };
        })
        .filter(Boolean)
        .sort(
            (a, b) => a.deviceTime - b.deviceTime
        );

    return {
        labels: sortedEntries.map(e =>
            e.deviceTime.toISOString().slice(11, 16)// HH:mm
        ), 
        values: sortedEntries.map(e =>
            Math.round(Number(e.powerW))
        )
    };
}

/**
 * Normalize daily aggregated energy values for the month (kWh)
 */
function normalizeMonthlyProduction(data) {
    const channels = data?.data?.channels;

    if (!Array.isArray(channels)) {
        return { labels: [], values: [] };
    }

    const channel = channels.find(
        c => c.channelName === "EnergyOutput"
    );

    if (!channel?.values) {
        return { labels: [], values: [] };
    }

    const entries = Object.entries(channel.values)
        .sort(([a], [b]) => Number(a) - Number(b));

    return {
        labels: entries.map(([day]) => `Day ${day}`),
        values: entries.map(([, value]) => value / 1000), // Wh → kWh
    };
}

/**
 * Normalize real-time LiveData power flow
 * (structure may vary slightly per system)
 */
function normalizeLiveData(data) {
    if (!data?.systemChannels) {
        return { pvPower: 0 };
    }
    
    const channels = Object.fromEntries(
        data.systemChannels.map(ch => [
            ch.channelName,
            ch.value ?? 0,
        ])
    );

    return {
        timestamp: new Date().toISOString(),
        pvPower: channels.PowerPV ?? 0, 
        online: data.status?.isOnline ?? false,
    };
}