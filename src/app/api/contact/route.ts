import { NextRequest, NextResponse } from 'next/server';

const GHL_HEADERS = {
  Authorization: `Bearer ${process.env.GHL_API_KEY}`,
  'Content-Type': 'application/json',
  Version: '2021-07-28',
};

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, loanType, message } = await req.json();

  if (!firstName || !email) {
    return NextResponse.json({ error: 'First name and email are required.' }, { status: 400 });
  }

  const tags = ['website-contact'];
  if (loanType) tags.push(loanType);

  // Create contact
  const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: GHL_HEADERS,
    body: JSON.stringify({
      locationId: process.env.GHL_LOCATION_ID,
      firstName,
      lastName: lastName ?? '',
      email,
      phone: phone ?? '',
      source: 'Supernova Mortgage Website',
      tags,
    }),
  });

  if (!contactRes.ok) {
    const err = await contactRes.text();
    console.error('GHL contact error:', contactRes.status, err);
    return NextResponse.json({ error: 'Failed to submit. Please try again.' }, { status: 500 });
  }

  const { contact } = await contactRes.json();

  // Add note with loan type + message so {{ contact.notes }} works in automations
  if (contact?.id && (loanType || message)) {
    const noteLines: string[] = [];
    if (loanType) noteLines.push(`Loan Type: ${loanType}`);
    if (message) noteLines.push(`Message: ${message}`);

    await fetch(`https://services.leadconnectorhq.com/contacts/${contact.id}/notes`, {
      method: 'POST',
      headers: GHL_HEADERS,
      body: JSON.stringify({
        userId: contact.id,
        body: noteLines.join('\n'),
      }),
    }).catch(e => console.error('GHL note error:', e));
  }

  return NextResponse.json({ ok: true });
}
