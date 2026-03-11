create table if not exists team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text not null,
  bio text not null,
  image text not null default '',
  email text default '',
  phone text default '',
  "order" integer not null default 0,
  created_at timestamptz default now()
);

-- Seed with default member
insert into team_members (name, title, bio, image, email, phone, "order")
values (
  'Jorge Diaz',
  'Founder & Senior Mortgage Broker',
  'With over 15 years of experience in the Florida mortgage market, Jorge founded Supernova Mortgage Brokers with a mission to make homeownership accessible to every family. He specializes in FHA, VA, and conventional loans.',
  '/logo-transparent.png',
  'supernova@snmmortgage.com',
  '(689) 242-4400',
  0
);
