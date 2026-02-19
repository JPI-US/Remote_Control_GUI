import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import prisma from '@/lib/prisma'; // adjust path as needed

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

export async function PUT(req) {
    try {
        // Get token from cookie
        const token = req.cookies.get("session")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        
        // Verify JWT
        const decoded = jwt.verify(token, JWT_SECRET);
        const authUserId = Number(decoded.sub); // the ID of the authenticated user

        // Parse request body
        const { currentPassword, newPassword } = await req.json();

        if (!currentPassword || !newPassword) {
            return NextResponse.json({ error: "Missing passwords" }, { status: 400 });
        }
        
        // Fetch user from DB
        const user = await prisma.customer.findUnique({
            where: { id: authUserId },
        });
      
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
      
        // Compare current password
        const isMatch = await bcrypt.compare(currentPassword, user.password_hash);
        if (!isMatch) {
            return NextResponse.json({ error: 'Incorrect current password' }, { status: 401 });
        }
      
        // Hash new password
        const newHash = await bcrypt.hash(newPassword, 12);
      
        // Update password in DB
        await prisma.customer.update({
            where: { id: authUserId },
            data: { password_hash: newHash },
        });
      
        return NextResponse.json({ message: 'Password changed successfully' });
    } catch{
        console.error('Error changing password:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
