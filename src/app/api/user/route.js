import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

export async function GET(request){
  try{
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
          address_id: true,
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
    const token = request.cookies.get("session")?.value;
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, JWT_SECRET);
    const customerId = Number(decoded.sub);

    const body = await request.json();
    const { name, email, phone } = body;

    const updated = await prisma.customer.update({
      where: { id: customerId },
      data: {
        name: body.name,
        email: body.email,
        phone_number: body.phone,
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error('Prisma update error:', err);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
