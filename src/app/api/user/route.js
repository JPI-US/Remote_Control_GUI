import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request){
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
      console.log(`Select systems customer ID: ${customerId}`);

      if (isNaN(customerId)) {
        return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
      }

      const user = await prisma.customer.findUnique({
        where: { id: customerId },
        select: {
          id: true,
          name: true,
          email: true,
          phone_number: true,
        },
      });

      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
        
      return NextResponse.json(user);
    } catch (error) {
      console.error('Unexpected error in /api/user/[id]:', error);
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
export async function PUT(request) {
  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");
    
    const token = request.cookies.get("session")?.value;
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, JWT_SECRET);
    const customerId = Number(decoded.sub);

    const body = await request.json();

    // Whitelist the only columns this route is allowed to touch
    const allowedFields = ["name", "email", "phone_number"];
    const fieldMap = { name: body.name, email: body.email, phone_number: body.phone };
    const safeData = Object.fromEntries(
      Object.entries(fieldMap)
        .filter(([key, val]) => allowedFields.includes(key) && val !== undefined)
    );

    if (Object.keys(safeData).length === 0) {
      return NextResponse.json({ error: "No valid fields provided" }, { status: 400 });
    }

    const updated = await prisma.customer.update({
      where: { id: customerId },
      data: safeData,
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error('Prisma update error:', err);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
