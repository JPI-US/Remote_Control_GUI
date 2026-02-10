import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function GET(request, context){
  try{
    await (context.params);
    const token = request.cookies.get('session')?.value;
      if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const authUserId = decoded.sub;

      const idParam = (await (context.params)).id;
      const userId = parseInt(idParam);

      if (isNaN(userId)) {
        return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
      }

      // Only allow the user to access their own data
      if (userId !== authUserId) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }

      const user = await prisma.customer.findUnique({
        where: { id: authUserId },
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
export async function PUT(request, context) {
  try {
    await (context.params);
    const token = request.cookies.get('session')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const authUserId = decoded.sub;

    const idParam = (await (context.params)).id;
    const userId = parseInt(idParam);
    
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    // Only allow the user to update their own data
    if (userId !== authUserId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    console.log("Update setttings body: ")

    const updated = await prisma.customer.update({
      where: { id: authUserId },
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
/* export async function PUT(req, context) {
    const { params } = context;
    const userId = parseInt(params.id);

    console.log("User ID:", userId);

    try {
        const body = await req.json();

        console.log("Request body:", body);

        if (isNaN(userId)) {
            return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
        }

        const updated = await prisma.customer.update({
            where: { id: userId },
            data: {
                name: body.first_name,
                email: body.email,
            },
        });

        return NextResponse.json( updated );
    } catch (error) {
        console.error('Prisme update error:', error);
        return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }
} */
