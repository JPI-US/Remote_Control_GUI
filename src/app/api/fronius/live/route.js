import { NextResponse } from "next/server";
import {
    SOLARWEB_BASE_URL,
    fetchSolar,
    resolveFroniusSystem,
    normalizeLiveData,
    normalizeFlowData,
} from "@/lib/froniusApi";

export const dynamic = 'force-dynamic';

/**
 * Lightweight endpoint for the 10s live poll — only live power + flow data.
 * Historical/aggregate production data is served by /api/fronius on its own 5-min poll.
 */
export async function GET(request) {
    try {
        const resolved = await resolveFroniusSystem(request);
        if (resolved.error) {
            return NextResponse.json({ error: resolved.error.message }, { status: resolved.error.status });
        }
        const { systemId } = resolved;

        const endpoints = {
            live: `${SOLARWEB_BASE_URL}/${systemId}/LiveData`,
            flowData: `${SOLARWEB_BASE_URL}/${systemId}/FlowData`,
        };

        const results = await Promise.allSettled(
            Object.entries(endpoints).map(([key, url]) =>
                fetchSolar(url, key).then(data => [key, data])
            )
        );

        const response = { systemId, data: {}, errors: [] };

        for (const result of results) {
            if (result.status === "fulfilled") {
                const [key, data] = result.value;
                if (key === "live") {
                    response.data.live = normalizeLiveData(data);
                } else if (key === "flowData") {
                    response.data.flow = normalizeFlowData(data);
                }
            } else {
                response.errors.push(result.reason.message);
            }
        }

        return NextResponse.json(response);

    } catch (error) {
        console.error("SolarWeb live API error:", error);

        return NextResponse.json(
            { error: "Failed to fetch live solar data" },
            { status: 500 }
        );
    }
}
