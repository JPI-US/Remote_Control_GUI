import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function GET(request) {
    try{
        // Read from cookie
        const token = request.cookies.get("session")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        //Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customerId = Number(decoded.sub);
        const userRole = String(decoded.role);
        console.log(`My systems customer ID: ${customerId}`);
        console.log(`My systems user role: ${userRole}`);

        // Admin sees all systems
        let systems;
        if (userRole === "ADMIN"){
            systems = await prisma.systems.findMany();
        }
        // Regular users see only systems linked via customer_system
        else if ((userRole === "USER")){
            systems = await prisma.systems.findMany({
                where: {
                    customer_system: {
                        some: { customer_id: customerId },
                    },
                },
            });
        }
        // Validation check
        else{
            console.error("Error fetching user role:", err);
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