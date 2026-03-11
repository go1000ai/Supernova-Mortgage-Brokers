import { NextRequest, NextResponse } from 'next/server';

const COOKIE = 'admin_session';
const MAX_AGE = 60 * 60 * 8; // 8 hours

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const correct = process.env.ADMIN_PASSWORD ?? 'Super123!';

  if (password !== correct) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const isProd = process.env.NODE_ENV === 'production';
  const cookieValue = `${COOKIE}=authenticated; Path=/; Max-Age=${MAX_AGE}; HttpOnly; SameSite=Lax${isProd ? '; Secure' : ''}`;

  return new NextResponse(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': cookieValue,
    },
  });
}

export async function DELETE() {
  return new NextResponse(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`,
    },
  });
}
