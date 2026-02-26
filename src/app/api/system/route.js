import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { decryptSystemId } from "@/lib/froniusCrypto"; // make sure this path matches your project

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

export async function GET(request) {
    try {
        const token = request.cookies.get("session")?.value;

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
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

export async function PUT(request) {
    try {
        // Get token from cookie
        const token = request.cookies.get("session")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Verify JWT
        const decoded = jwt.verify(token, JWT_SECRET);
        const customerId = Number(decoded.sub);
        const activeSystemId = decoded.activeSystemId;

        if (!activeSystemId) {
            return NextResponse.json({ error: "No active system selected" }, { status: 400 });
        }

        // Parse request body
        const body = await request.json();
        const { system_name } = body;

        // Validate input
        if (!system_name) {
            return NextResponse.json({ error: "System name is required" }, { status: 400 });
        }

        // Check ownership and system status
        const system = await prisma.systems.findFirst({
            where: {
                id: activeSystemId,
                customer_system: { some: { customer_id: customerId } },
                status: "ACTIVE",
            },
        });

        if (!system) {
            return NextResponse.json({ error: "System not found or unauthorized" }, { status: 404 });
        }

        // Update the system
        const updatedSystem = await prisma.systems.update({
            where: { id: activeSystemId },
            data: {
                system_name,
            },
        });

        return NextResponse.json({
            message: "System updated successfully",
            system: {
                system_name: updatedSystem.system_name,
            },
        });
    } catch (err) {
        console.error("Error updating system:", err);
        return NextResponse.json({ error: "Failed to update system" }, { status: 500 });
    }

}