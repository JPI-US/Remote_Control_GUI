/* import { signJwt } from '@/lib/jwt'; */
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import Settings from '@/components/general';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not set');
}
const JWT_SECRET = process.env.JWT_SECRET;


export async function POST(request) {
  try {
    const loginSchema = z.object({
      email: z.string().email().max(254).transform(e => e.toLowerCase()),
      password: z.string().max(128) // PRODUCTION ADDITION .min(8)
    });

    const body = await request.json();
    const { email, password } = loginSchema.parse(body);
    //const { email, password } = await request.json();//OLD

    // Fetch user by email
    const user = await prisma.customer.findUnique({
      where: { email },
      include: {setting: true}
    });

    const fakeHash = '$2b$10$C6UzMDM.H6dfI/f/IKcEe.ejJ9z2ZzZzZzZzZzZzZzZzZzZzZz';
    if (!user) {
      await bcrypt.compare(password, fakeHash);
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Update last_login timestamp
    if (user.setting) {
      await prisma.settings.update({
        where: { settings_id: user.setting.settings_id },
        data: { last_login: new Date() },
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        sub: user.id,
      },
      JWT_SECRET,
      { expiresIn: '7d' } // adjust session duration
    );

    const response = NextResponse.json({ success: true });
    response.cookies.set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 Days
    });

    // Return token
    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}