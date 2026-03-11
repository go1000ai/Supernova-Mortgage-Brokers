import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getTeam, saveTeam, uploadTeamImage, TeamMember } from '@/lib/team-storage';
import { randomUUID } from 'crypto';

function isAuthed(): Promise<boolean> {
  return cookies().then(c => c.get('admin_session')?.value === 'authenticated');
}

export async function GET() {
  const team = await getTeam();
  return NextResponse.json(team);
}

export async function POST(req: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const contentType = req.headers.get('content-type') ?? '';
  let imageUrl = '/logo-transparent.png';
  let name = '', title = '', bio = '', email = '', phone = '';

  if (contentType.includes('multipart/form-data')) {
    const form = await req.formData();
    name = form.get('name') as string;
    title = form.get('title') as string;
    bio = form.get('bio') as string;
    email = (form.get('email') as string) ?? '';
    phone = (form.get('phone') as string) ?? '';
    const imageFile = form.get('image') as File | null;
    if (imageFile && imageFile.size > 0) {
      try {
        imageUrl = await uploadTeamImage(imageFile);
      } catch { /* keep default */ }
    }
  } else {
    const body = await req.json();
    name = body.name; title = body.title; bio = body.bio;
    email = body.email ?? ''; phone = body.phone ?? '';
    if (body.image) imageUrl = body.image;
  }

  const team = await getTeam();
  const newMember: TeamMember = {
    id: randomUUID(),
    name, title, bio, email, phone,
    image: imageUrl,
    order: team.length,
  };

  team.push(newMember);
  await saveTeam(team);
  return NextResponse.json(newMember, { status: 201 });
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const contentType = req.headers.get('content-type') ?? '';
  let id = '', name = '', title = '', bio = '', email = '', phone = '', imageUrl = '';

  if (contentType.includes('multipart/form-data')) {
    const form = await req.formData();
    id = form.get('id') as string;
    name = form.get('name') as string;
    title = form.get('title') as string;
    bio = form.get('bio') as string;
    email = (form.get('email') as string) ?? '';
    phone = (form.get('phone') as string) ?? '';
    imageUrl = (form.get('currentImage') as string) ?? '';
    const imageFile = form.get('image') as File | null;
    if (imageFile && imageFile.size > 0) {
      try {
        imageUrl = await uploadTeamImage(imageFile);
      } catch { /* keep existing */ }
    }
  } else {
    const body = await req.json();
    id = body.id; name = body.name; title = body.title;
    bio = body.bio; email = body.email ?? ''; phone = body.phone ?? '';
    imageUrl = body.image ?? '';
  }

  const team = await getTeam();
  const idx = team.findIndex(m => m.id === id);
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  team[idx] = { ...team[idx], name, title, bio, email, phone, image: imageUrl || team[idx].image };
  await saveTeam(team);
  return NextResponse.json(team[idx]);
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await req.json();
  const team = await getTeam();
  const filtered = team.filter(m => m.id !== id).map((m, i) => ({ ...m, order: i }));
  await saveTeam(filtered);
  return NextResponse.json({ ok: true });
}

export async function PATCH(req: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Reorder: body is array of { id, order }
  const updates: { id: string; order: number }[] = await req.json();
  const team = await getTeam();
  for (const u of updates) {
    const m = team.find(t => t.id === u.id);
    if (m) m.order = u.order;
  }
  team.sort((a, b) => a.order - b.order);
  await saveTeam(team);
  return NextResponse.json({ ok: true });
}
