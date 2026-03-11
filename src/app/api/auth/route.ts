import { NextRequest } from 'next/server';

const COOKIE = 'admin_session';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const correct = process.env.ADMIN_PASSWORD ?? 'Super123!';

  if (password !== correct) {
    return Response.json({ error: 'Invalid password' }, { status: 401 });
  }

  const isProd = process.env.NODE_ENV === 'production';
  const cookieStr = `${COOKIE}=authenticated; Path=/; Max-Age=${60 * 60 * 8}; HttpOnly; SameSite=Lax${isProd ? '; Secure' : ''}`;

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': cookieStr,
    },
  });
}

export async function DELETE() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`,
    },
  });
}
