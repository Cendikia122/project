import { NextResponse } from 'next/server';
import { verifyAdmin } from '@/lib/auth';

export async function GET(request) {
  try {
    const user = verifyAdmin(request);

    if (!user) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({
      authenticated: true,
      user,
    });
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
