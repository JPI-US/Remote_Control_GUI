import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export const dynamic = 'force-dynamic';

export async function GET(request) {
    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

        const token = request.cookies.get("session")?.value;

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const customerId = Number(decoded.sub);
        const userRole = String(decoded.role).toUpperCase();
        const activeSystemId = decoded.activeSystemId || null;

        if (!activeSystemId) {
            return NextResponse.json({ error: "No active system selected" }, { status: 400 });
        }

        const system = await prisma.systems.findFirst({
            where: {
                id: activeSystemId,
                status: "ACTIVE",
                ...(userRole !== "ADMIN" && {
                    customer_system: { some: { customer_id: customerId } },
                }),
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

        const towerIds = system.towers.map((t) => BigInt(t.id));
        const towerDataRows = await prisma.tower_data.findMany({
            where: { tower_id: { in: towerIds } },
            select: { tower_id: true, tower_angle: true },
        });
        const angleByTowerId = Object.fromEntries(
            towerDataRows.map((r) => [r.tower_id.toString(), r.tower_angle])
        );
        const towers = system.towers.map((t) => ({
            ...t,
            tower_angle: angleByTowerId[t.id.toString()] ?? null,
        }));

        return NextResponse.json({
            system: {
                system_name: system.system_name,
                towers,
                timezone: system.timezone,
                max_pv_kw: system.max_pv_kw,
                latitude: system.latitude,
                longitude: system.longitude,
            },
        });

    }catch (err) {
        console.error("Error fetching system:", err);
        return NextResponse.json({ error: "Failed to fetch system" }, { status: 401 });
    }
}

export async function PUT(request) {
    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");
        
        // Get token from cookie
        const token = request.cookies.get("session")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Verify JWT
        const decoded = jwt.verify(token, JWT_SECRET);
        const customerId = Number(decoded.sub);
        const userRole = String(decoded.role).toUpperCase();
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
                status: "ACTIVE",
                ...(userRole !== "ADMIN" && {
                    customer_system: { some: { customer_id: customerId } },
                }),
            },
        });

        if (!system) {
            return NextResponse.json({ error: "System not found or unauthorized" }, { status: 404 });
        }

        // Update the system
        const updatedSystem = await prisma.systems.update({
            where: { id: activeSystemId },
            data: { system_name },
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