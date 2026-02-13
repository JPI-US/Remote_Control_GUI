import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

export async function POST(request) {
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
        console.log(`Select systems customer ID: ${customerId}`);
        console.log(`Select systems user role: ${userRole}`);

        // Get systemID from request body
        const body = await request.json();
        const { systemId } = body;

        if (!systemId) {
            return NextResponse.json({ error: "System ID is required" }, { status: 400 });
        }

        // Check user has access to this system (unless admin)
        if (userRole !== "ADMIN") {
            const allowed = await prisma.customerSystem.findFirst({
                where: {
                    customerId: customerId,
                    systemId: systemId,
                },
            });

            if (!allowed) {
                return NextResponse.json({ error: "Forbidden: You do not have access to this system" }, { status: 403 });
            }
        }
        
        // Generate new JWT with activeSystemId
        const newToken = jwt.sign(
            {
                sub: customerId,
                role: userRole,
                planTier: decoded.planTier,
                activeSystemId: systemId,
            },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Set JWT in HttpOnly cookie
        const response = NextResponse.json({ success: true });
        response.cookies.set("session", newToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return response;
    }catch (err){
        console.error("Error selecting system:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}