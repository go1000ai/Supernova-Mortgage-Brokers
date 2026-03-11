import { createClient } from '@supabase/supabase-js';

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  email?: string;
  phone?: string;
  order: number;
}

function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, key);
}

export async function getTeam(): Promise<TeamMember[]> {
  const supabase = getAdminClient();
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('order', { ascending: true });

  if (error || !data) return [];
  return data as TeamMember[];
}

export async function addTeamMember(member: Omit<TeamMember, 'id'>): Promise<TeamMember> {
  const supabase = getAdminClient();
  const { data, error } = await supabase
    .from('team_members')
    .insert(member)
    .select()
    .single();

  if (error || !data) throw new Error(error?.message ?? 'Insert failed');
  return data as TeamMember;
}

export async function updateTeamMember(id: string, updates: Partial<Omit<TeamMember, 'id'>>): Promise<TeamMember> {
  const supabase = getAdminClient();
  const { data, error } = await supabase
    .from('team_members')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error || !data) throw new Error(error?.message ?? 'Update failed');
  return data as TeamMember;
}

export async function deleteTeamMember(id: string): Promise<void> {
  const supabase = getAdminClient();
  const { error } = await supabase.from('team_members').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

export async function uploadTeamImage(file: File): Promise<string> {
  const supabase = getAdminClient();
  const ext = file.name.split('.').pop() ?? 'jpg';
  const filename = `${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from('team-photos')
    .upload(filename, file, { upsert: true, contentType: file.type });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from('team-photos').getPublicUrl(filename);
  return data.publicUrl;
}
