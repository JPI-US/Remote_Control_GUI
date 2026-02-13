import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function GET(request) {
    try {
        const token = request.cookies.get("session")?.value;

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customerId = Number(decoded.sub);
        const activeSystemId = decoded.activeSystemId || null;

        let system;

        if (activeSystemId) {
            // Load the selected system
            system = await prisma.systems.findFirst({
                where: {
                    id: activeSystemId,
                    customer_system: { some: { customer_id: customerId } }, // make sure user owns it
                    status: "ACTIVE",
                },
                select: {
                    id: true,
                    system_name: true,
                    inverter_type: true,
                    timezone: true,
                    max_pv_kw: true,
                    latitude: true,
                    longitude: true,
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
        }

        if (!system) {
            // Fallback: pick the first active system the customer has
            const firstSystem = await prisma.systems.findMany({
                where: {
                    customer_system: { some: { customer_id: customerId } },
                    status: "ACTIVE",
                },
                select: { id: true },
                orderBy: { id: "asc" },
            });

            if (!firstSystem) {
                return NextResponse.json(
                    { error: "No active system assigned to this customer" },
                    { status: 404 }
                );
            }

            system = await prisma.systems.findUnique({
                where: { id: firstSystem.id },
                select: {
                    id: true,
                    system_name: true,
                    inverter_type: true,
                    timezone: true,
                    max_pv_kw: true,
                    latitude: true,
                    longitude: true,
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