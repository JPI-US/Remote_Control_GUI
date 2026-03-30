import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

export async function GET(request) {
  try {
    const token = request.cookies.get('session')?.value;

    if (!token) {
      return NextResponse.json({ authenticated: false });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    return NextResponse.json({
      authenticated: true,
      sub: decoded.sub,
      role: decoded.role,
      planTier: decoded.planTier,
      activeSystemId: decoded.activeSystemId || null,
    });
  } catch (err) {
    return NextResponse.json({ authenticated: false });
  }
}
