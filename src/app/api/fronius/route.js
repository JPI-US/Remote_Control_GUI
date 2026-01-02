import { NextResponse } from "next/server";

const BASE_URL = "https://api.solarweb.com/swqapi";

const headers = {
    accept: "application/json",
    AccessKeyId: process.env.SOLAR_KEY_ID,
    AccessKeyValue: process.env.SOLAR_KEY_VALUE,
};

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

        const now = new Date();
        const y = Number(year ?? now.getFullYear());
        const m = Number(month ?? now.getMonth() + 1);

        if (m < 1 || m > 12) {
            return NextResponse.json(
                { error: "month must be between 1 and 12" },
                { status: 400 }
            );
        }

        // Solar web endpoints
        const endpoints = {
            live: `${BASE_URL}/pvsystems/${systemId}/LiveData`,
            dailyproductionforMonth: `${BASE_URL}/pvsystems/${systemId}/aggdata/years/${y}/months/${m}/days`,
        };
        // ${y} 
        const results = await Promise.allSettled(
            Object.entries(endpoints).map(([key, url]) =>
                fetchSolar(url, key).then(data => [key, data])
            )
        );

        const response = {
            systemId,
            period: { year: y, month: m },
            data: {},
            errors: [],
        };


        for (const result of results) {
            if (result.status === "fulfilled") {
                const [key, data] = result.value;

                if (key === "dailyproductionforMonth") {
                    response.data.production = normalizeDailyEnergy(data);
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
function normalizeDailyEnergy(data) {
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