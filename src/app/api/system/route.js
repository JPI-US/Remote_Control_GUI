import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { decryptSystemId } from "@/lib/froniusCrypto"; // make sure this path matches your project

export async function GET(request) {
    try {
        const token = request.cookies.get("session")?.value;

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customerId = Number(decoded.sub);
        const activeSystemId = decoded.activeSystemId || null;

        if (!activeSystemId) {
            return NextResponse.json({ error: "No active system selected" }, { status: 400 });
        }

        const system = await prisma.systems.findFirst({
            where: {
                id: activeSystemId,
                customer_system: { some: { customer_id: customerId } }, // make sure user owns it
                status: "ACTIVE",
            },
            select: {
                id: true,
                system_name: true,
                system_cipher: true,
                system_iv: true,
                system_tag: true,
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

        if (!system) {
            return NextResponse.json({ error: "System not found" }, { status: 404 });
        }

        /* if (!system) {
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
                    system_cipher: true,
                    system_iv: true,
                    system_tag: true,
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
        } */        

        // Decrypt Fronius ID
        let froniusSystemId = null;
        try {
            if (system.system_cipher && system.system_iv && system.system_tag) {
                froniusSystemId = decryptSystemId({
                    system_cipher: system.system_cipher,
                    system_iv: system.system_iv,
                    system_tag: system.system_tag,
                });
            }
        } catch (err) {
            console.error("Failed to decrypt Fronius system ID:", err);
        }

        return NextResponse.json({
            system: {
                system_name: system.system_name,
                towers: system.towers,
                timezone: system.timezone,
                max_pv_kw: system.max_pv_kw,
                latitude: system.latitude,
                longitude: system.longitude,
            },
            froniusSystemId, // separate field for API calls
        });

    }catch (err) {
        console.error("Error fetching system:", err);
        return NextResponse.json({ error: "Failed to fetch system" }, { status: 401 });
    }
}