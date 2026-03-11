import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import {
  getTeam,
  addTeamMember,
  updateTeamMember,
  deleteTeamMember,
  uploadTeamImage,
} from '@/lib/team-storage';

async function isAuthed(req: NextRequest): Promise<boolean> {
  const token = req.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) return false;
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data: { user } } = await supabase.auth.getUser(token);
  return !!user;
}

export async function GET() {
  const team = await getTeam();
  return NextResponse.json(team);
}

export async function POST(req: NextRequest) {
  if (!(await isAuthed(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const form = await req.formData();
  const name = form.get('name') as string;
  const title = form.get('title') as string;
  const bio = form.get('bio') as string;
  const email = (form.get('email') as string) ?? '';
  const phone = (form.get('phone') as string) ?? '';
  let image = (form.get('currentImage') as string) || '/logo-transparent.png';

  const imageFile = form.get('image') as File | null;
  if (imageFile && imageFile.size > 0) {
    try { image = await uploadTeamImage(imageFile); } catch { /* keep default */ }
  }

  const team = await getTeam();
  const member = await addTeamMember({ name, title, bio, email, phone, image, order: team.length });
  return NextResponse.json(member, { status: 201 });
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthed(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const form = await req.formData();
  const id = form.get('id') as string;
  const name = form.get('name') as string;
  const title = form.get('title') as string;
  const bio = form.get('bio') as string;
  const email = (form.get('email') as string) ?? '';
  const phone = (form.get('phone') as string) ?? '';
  let image = (form.get('currentImage') as string) ?? '';

  const imageFile = form.get('image') as File | null;
  if (imageFile && imageFile.size > 0) {
    try { image = await uploadTeamImage(imageFile); } catch { /* keep existing */ }
  }

  const updated = await updateTeamMember(id, { name, title, bio, email, phone, image });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthed(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await req.json();
  await deleteTeamMember(id);
  return NextResponse.json({ ok: true });
}

export async function PATCH(req: NextRequest) {
  if (!(await isAuthed(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Reorder: array of { id, order }
  const updates: { id: string; order: number }[] = await req.json();
  await Promise.all(updates.map(u => updateTeamMember(u.id, { order: u.order })));
  return NextResponse.json({ ok: true });
}
