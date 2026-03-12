import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, loanType, message } = await req.json();

  if (!firstName || !email) {
    return NextResponse.json({ error: 'First name and email are required.' }, { status: 400 });
  }

  const ghlPayload: Record<string, unknown> = {
    firstName,
    lastName: lastName ?? '',
    email,
    phone: phone ?? '',
    source: 'Supernova Mortgage Website',
    tags: ['website-contact'],
  };

  if (loanType) ghlPayload.customField = [{ id: 'loan_type', value: loanType }];
  if (message) ghlPayload.message = message;

  const res = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ghlPayload),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('GHL error:', err);
    return NextResponse.json({ error: 'Failed to submit. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
