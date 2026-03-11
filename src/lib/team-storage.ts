import { put, list, del } from '@vercel/blob';

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

const BLOB_KEY = 'team-data.json';

// Default team data used when no blob store is configured
const DEFAULT_TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Jorge Diaz',
    title: 'Founder & Senior Mortgage Broker',
    bio: 'With over 15 years of experience in the Florida mortgage market, Jorge founded Supernova Mortgage Brokers with a mission to make homeownership accessible to every family. He specializes in FHA, VA, and conventional loans.',
    image: '/logo-transparent.png',
    email: 'supernova@snmmortgage.com',
    phone: '(689) 242-4400',
    order: 0,
  },
];

export async function getTeam(): Promise<TeamMember[]> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (!token) {
    return DEFAULT_TEAM;
  }

  try {
    const { blobs } = await list({ prefix: BLOB_KEY });
    if (blobs.length === 0) return DEFAULT_TEAM;

    const res = await fetch(blobs[0].url, { cache: 'no-store' });
    if (!res.ok) return DEFAULT_TEAM;

    const data: TeamMember[] = await res.json();
    return data.sort((a, b) => a.order - b.order);
  } catch {
    return DEFAULT_TEAM;
  }
}

export async function saveTeam(members: TeamMember[]): Promise<void> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) throw new Error('BLOB_READ_WRITE_TOKEN is not configured');

  // Delete old blob first
  try {
    const { blobs } = await list({ prefix: BLOB_KEY });
    for (const blob of blobs) {
      await del(blob.url);
    }
  } catch { /* ignore */ }

  const json = JSON.stringify(members, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  await put(BLOB_KEY, blob, { access: 'public', addRandomSuffix: false });
}

export async function uploadTeamImage(file: File): Promise<string> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) throw new Error('BLOB_READ_WRITE_TOKEN is not configured');

  const ext = file.name.split('.').pop() ?? 'jpg';
  const filename = `team/${Date.now()}.${ext}`;
  const { url } = await put(filename, file, { access: 'public' });
  return url;
}
