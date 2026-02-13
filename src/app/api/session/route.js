import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request) {
  try {
    const token = request.cookies.get('session')?.value;
    console.log('Token from cookie:', token);

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

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
