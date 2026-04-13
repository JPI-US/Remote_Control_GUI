import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export const dynamic = 'force-dynamic';

export async function GET(request) {
    try{
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");
        
        // Read from cookie
        const token = request.cookies.get("session")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        //Verify JWT
        const decoded = jwt.verify(token, JWT_SECRET);
        const customerId = Number(decoded.sub);
        const userRole = String(decoded.role).toUpperCase(); // ← normalize casing
        console.log(`My systems customer ID: ${customerId}`);
        console.log(`My systems user role: ${userRole}`);

        
        let systems;
        if (userRole === "ADMIN"){// Admin sees all systems
            systems = await prisma.systems.findMany();
        }else if ((userRole === "USER")){ // Regular users see only systems linked via customer_system
            systems = await prisma.systems.findMany({
                where: {
                    customer_system: {
                        some: { customer_id: customerId },
                    },
                },
            });
        }else{// Validation check
            console.error("Error fetching user role: unexpected role", userRole);
            return NextResponse.json(
                { error: "Incorrect USER Role value" },
                { status: 404 }
            );
        }

        return NextResponse.json(systems);
    }catch (err){
        console.error("Error fetching systems:", err);
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
}