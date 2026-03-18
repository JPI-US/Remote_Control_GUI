import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { DateTime } from 'luxon';
import jwt from "jsonwebtoken";
import { decryptSystemId } from "@/lib/froniusCrypto";

export const dynamic = 'force-dynamic';

const BASE_URL = "https://api.solarweb.com/swqapi/pvsystems";

const headers = {
    accept: "application/json",
    AccessKeyId: process.env.SOLAR_KEY_ID,
    AccessKeyValue: process.env.SOLAR_KEY_VALUE,
};

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

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
        const token = request.cookies.get("session")?.value;
        
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        
        const decoded = jwt.verify(token, JWT_SECRET);
        const customerId = Number(decoded.sub);
        const activeSystemId = Number(decoded.activeSystemId) || null;

        if (!headers.AccessKeyId || !headers.AccessKeyValue) {
            throw new Error("Missing SolarWeb API credentials");
        }

        // Verify the user has access to this Fronius system
        const systemRecord = await prisma.systems.findFirst({
            where: {
                id: activeSystemId, 
                customer_system: { some: { customer_id: customerId } } 
            },
            select: { timezone: true },
        });

        if (!systemRecord) {
            return NextResponse.json({ error: "System not found for this customer" }, { status: 404 });
        }

        // Get System timezone
        const systemTZ = systemRecord.timezone ?? "America/Chicago";

        // Get current time based on system timezone
        const nowSystem = DateTime.now().setZone(systemTZ);

        // Get year, month, and day for current timezone
        const y = nowSystem.year;// 2026
        const m = nowSystem.month;// 1–12
        const d = nowSystem.day;// 1–31

        // Apply the same 30-minute delay
        const delayedSystemTime = nowSystem.minus({ minutes: 30 });

        // Start of today in system timezone
        const fromSystem = nowSystem.startOf("day");

        // Convert both to UTC which fronius uses
        const dalayedHour = delayedSystemTime.hour;     // 0-23
        const dalayedMinute = delayedSystemTime.minute; // 0-59

        // Convert both to UTC
        const fromUTC = fromSystem.toUTC();
        const toUTC   = delayedSystemTime.toUTC();

        //Fronius formatting
        const fromISO = fromUTC.toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
        const toISO   = toUTC.toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");

        // Assuming systemId comes from searchParams
        const { searchParams } = new URL(request.url);
        const systemId = searchParams.get("systemId");

        if (!systemId) {
        return NextResponse.json({ error: "systemId is required" }, { status: 400 });
        }

        console.log("Backend using systemId:", systemId);

        const endpoints = {
            live: `${BASE_URL}/${systemId}/LiveData`,
            flowData: `${BASE_URL}/${systemId}/FlowData`,
            dailyProduction: `${BASE_URL}/${systemId}/aggdata/years/${y}/months/${m}/days`,
            monthlyProduction: `${BASE_URL}/${systemId}/aggdata/years/${y}/months/`,
            yearlyProduction: `${BASE_URL}/${systemId}/aggdata/years/`,
            hourlyProduction:`${BASE_URL}/${systemId}/histdata` +
                `?From=${encodeURIComponent(fromISO)}` +
                `&To=${encodeURIComponent(toISO)}` + 
                `&Channel=EnergyProductionTotal&Limit=10000&Offset=0`,
            total: `${BASE_URL}/${systemId}/aggdata`,
        }; 

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

                if (key === "hourlyProduction") {
                    response.data.hourlyproduction = normalizeHourlyProduction(data, systemTZ);
                }
                else if (key === "dailyProduction") {
                    response.data.dailyproduction = normalizeDailyProduction(data, systemTZ);
                }
                else if (key === "monthlyProduction") {
                    response.data.monthlyproduction = normalizeMonthlyProduction(data);
                }
                else if (key === "yearlyProduction") {
                    response.data.yearlyproduction = normalizeYearlyProduction(data);
                }
                else if (key === "live") {
                    response.data.live = normalizeLiveData(data);
                }
                else if (key === "flowData") {
                    response.data.flow = normalizeFlowData(data);
                }
                else if (key === "total") {
                    response.data.total = normalizetotalData(data);
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
 * Normalize hourly aggregated energy values (kWh)
 */
function normalizeHourlyProduction(data, systemTZ = 'America/Chicago') {
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

            // Convert UTC string to Luxon DateTime in system timezone
            const utcDate = DateTime.fromISO(entry.logDateTime, { zone: 'utc' });
            const ctDate = utcDate.setZone(systemTZ);

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
function normalizeDailyProduction(data, systemTZ) {
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

    // Convert channel.values to a Map for easy lookup
    const dayMap = new Map(
        Object.entries(channel.values).map(([day, value]) => [Number(day), value])
    );

    // Determine month and number of days based on system timezone
    const nowSystem = DateTime.now().setZone(systemTZ);
    const daysInMonth = nowSystem.daysInMonth;

    const labels = [];
    const values = [];

    for (let day = 1; day <= daysInMonth; day++) {
        labels.push(day);
        values.push((dayMap.get(day) ?? 0) / 1000); // Wh → kWh
    }

    return { labels, values };
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

/**
 * Normalize FlowData — grid, load, battery, self-consumption rates
 * Channel names confirmed from live API probe:
 *   PowerFeedIn    — power exported TO the grid (W), positive = exporting
 *   PowerLoad      — house consumption (W)
 *   PowerBattCharge — battery charge power (W), positive = charging, negative = discharging
 *   PowerPV        — solar production (W)
 *   PowerOutput    — total inverter output (W)
 *   BattSOC        — battery state of charge (%), null if no battery
 *   RateSelfConsumption  — % of solar used on-site
 *   RateSelfSufficiency  — % of load covered by solar
 */
function normalizeFlowData(data) {
    if (!data?.data?.channels) {
        return {
            pvPower: 0,
            gridPower: 0,
            gridImport: false,
            loadPower: 0,
            battChargePower: 0,
            battSoc: null,
            hasBattery: false,
            selfConsumptionRate: null,
            selfSufficiencyRate: null,
            timestamp: new Date().toISOString(),
        };
    }

    // Build a lookup map from the channels array
    const ch = Object.fromEntries(
        data.data.channels.map(c => [c.channelName, c.value])
    );

    const pvPower        = ch.PowerPV         ?? 0;
    const feedIn         = ch.PowerFeedIn     ?? null; // positive = exporting
    const loadPower      = ch.PowerLoad       ?? 0;
    const battCharge     = ch.PowerBattCharge ?? null;
    const battSoc        = ch.BattSOC         ?? null;  // null = no battery
    const selfConsump    = ch.RateSelfConsumption ?? null;
    const selfSuffic     = ch.RateSelfSufficiency ?? null;

    // Derive grid power and direction:
    // - If PowerFeedIn > 0  → exporting to grid, gridPower = feedIn
    // - If PowerFeedIn <= 0 → likely importing; derive from load - pv
    // - If feedIn is null   → use load - pv as best estimate
    let gridPower  = 0;
    let gridImport = false;

    if (feedIn !== null && feedIn > 0) {
        // Actively exporting
        gridPower  = feedIn;
        gridImport = false;
    } else {
        // Importing or zero — derive: what load needs beyond what PV covers
        const netDemand = loadPower - pvPower;
        gridPower  = Math.max(0, netDemand);
        gridImport = gridPower > 0;
    }

    return {
        pvPower,
        gridPower:           Math.round(gridPower),
        gridImport,
        loadPower:           Math.round(loadPower),
        battChargePower:     battCharge !== null ? Math.round(battCharge) : null,
        battSoc,
        hasBattery:          battSoc !== null,
        selfConsumptionRate: selfConsump,
        selfSufficiencyRate: selfSuffic,
        timestamp:           data.data.logDateTime ?? new Date().toISOString(),
    };
}
//Normalized total data
function normalizetotalData(data){
    if (!data?.data?.channels){
        return 0;
    }

    const channel = data.data.channels.find(
        ch => ch.channelName === "EnergyProductionTotal"
    );

    if (!channel?.values?.total) return 0;
    
    return channel.values.total / 1000; // convert Wh -> kWh
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

    const monthMap = channel.values;
    const labels = [];
    const values = [];

    for (let month = 1; month <= 12; month++) {
        labels.push(month); // keep numeric months for consistency

        const raw = monthMap[String(month)] ?? 0;  // fill missing months
        values.push(raw / 1000);                   // Wh → kWh
    }

    return { labels, values };
}

/**
 * Normalize yearly aggregated energy values for the month (kWh)
 */
function normalizeYearlyProduction(data) {
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
        labels: entries.map(([year]) => Number(year)),
        values: entries.map(([, value]) => (value / 1000000).toFixed(2)), // Wh → MWh
    };
}