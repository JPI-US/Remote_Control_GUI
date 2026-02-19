import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not set");

export async function GET(request) {
  try {
    const token = request.cookies.get('session')?.value;
    console.log('Token from cookie:', token);

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    return NextResponse.json({
      sub: decoded.sub,
      role: decoded.role,
      planTier: decoded.planTier,
      activeSystemId: decoded.activeSystemId || null,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
