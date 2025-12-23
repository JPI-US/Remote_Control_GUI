import { verifyJwt } from '@/lib/jwt';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const token = req.cookies.get('token')?.value;

  const decoded = verifyJwt(token);

  if (!decoded) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Protected content!', user: decoded });
}
