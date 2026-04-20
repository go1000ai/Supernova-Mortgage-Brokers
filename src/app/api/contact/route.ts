import { NextRequest, NextResponse } from 'next/server';

const GHL_HEADERS = {
  Authorization: `Bearer ${process.env.GHL_API_KEY}`,
  'Content-Type': 'application/json',
  Version: '2021-07-28',
};

// GHL custom field IDs for this location
const FIELD_LOAN_TYPE = 'TLn2Q2eYw2AOefBj3y1g';
const FIELD_NOTES = 'pBCUBrYdpE5dlKQV6Pzq';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, loanType, message, tags: extraTags } = await req.json();

  if (!firstName || !email) {
    return NextResponse.json({ error: 'First name and email are required.' }, { status: 400 });
  }

  const tags = ['website-contact'];
  if (loanType) tags.push(loanType);
  if (Array.isArray(extraTags)) {
    for (const tag of extraTags) {
      if (typeof tag === 'string' && tag.length > 0) tags.push(tag);
    }
  }

  const customFields = [];
  if (loanType) customFields.push({ id: FIELD_LOAN_TYPE, value: loanType });
  if (message) customFields.push({ id: FIELD_NOTES, value: message });

  const payload = {
    locationId: process.env.GHL_LOCATION_ID,
    firstName,
    lastName: lastName ?? '',
    email,
    phone: phone ?? '',
    source: 'Supernova Mortgage Website',
    tags,
    ...(customFields.length > 0 && { customFields }),
  };

  // Try to create contact
  const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: GHL_HEADERS,
    body: JSON.stringify(payload),
  });

  if (contactRes.ok) {
    return NextResponse.json({ ok: true });
  }

  const errData = await contactRes.json().catch(() => null);

  // On duplicate, update the existing contact with the new custom fields
  if (errData?.meta?.contactId) {
    const updateRes = await fetch(
      `https://services.leadconnectorhq.com/contacts/${errData.meta.contactId}`,
      {
        method: 'PUT',
        headers: GHL_HEADERS,
        body: JSON.stringify({ customFields }),
      }
    );
    if (updateRes.ok) return NextResponse.json({ ok: true });
  }

  console.error('GHL contact error:', contactRes.status, JSON.stringify(errData));
  return NextResponse.json({ error: 'Failed to submit. Please try again.' }, { status: 500 });
}
