import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

const FALLBACK_SYSTEM_ID = 2; // TEMPORARY

export async function GET(request) {
    try {
        const token = request.cookies.get("session")?.value;

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customerId = decoded.sub;

        const system = await prisma.systems.findUnique({
            where: {
                id: FALLBACK_SYSTEM_ID
            },
            select: {
                system_name: true,
                inverter_type: true,
                timezone: true,
                max_pv_kw: true,
                latitude: true,
                longitude: true,
                // api_key intentionally excluded
                towers: {
                    select: {
                        id: true,
                        model: true,
                        current_angle: true,
                        order_id: true,
                        state: true,
                        software_version: true,
                    },
                },
            },
        });

        if (!system) {
            console.warn(`No system for customer ${customerId}, using fallback system ${FALLBACK_SYSTEM_ID}`);

            system = await prisma.systems.findUnique({
                where: { id: FALLBACK_SYSTEM_ID },
                select: {
                    id: true,
                    system_name: true,
                    inverter_type: true,
                    timezone: true,
                    max_pv_kw: true,
                    towers: true,
                    latitude: true,
                    longitude: true,
                },
            });
        }

        if (!system) {
            return NextResponse.json({ error: "System not found" }, { status: 404 });
        }

        return NextResponse.json(system);
    }catch (err) {
    console.error("System fetch error:", err);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}