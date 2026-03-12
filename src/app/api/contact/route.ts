import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, loanType, message } = await req.json();

  if (!firstName || !email) {
    return NextResponse.json({ error: 'First name and email are required.' }, { status: 400 });
  }

  const tags = ['website-contact'];
  if (loanType) tags.push(loanType);

  const ghlPayload: Record<string, unknown> = {
    locationId: process.env.GHL_LOCATION_ID,
    firstName,
    lastName: lastName ?? '',
    email,
    phone: phone ?? '',
    source: 'Supernova Mortgage Website',
    tags,
  };

  // Store loan type + message in the website field if provided
  if (loanType || message) {
    ghlPayload.website = [loanType, message].filter(Boolean).join(' — ');
  }

  const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      'Content-Type': 'application/json',
      Version: '2021-07-28',
    },
    body: JSON.stringify(ghlPayload),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('GHL error:', res.status, err);
    return NextResponse.json({ error: 'Failed to submit. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
