-- بوصلة+ | مخطط قاعدة البيانات الأولي (Supabase / PostgreSQL)
-- شغّل هذا الملف من: Supabase Dashboard > SQL Editor

-- ملفات المستخدمين (تمتد فوق جدول auth.users المدمج في Supabase)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  role text default 'user' check (role in ('user', 'company', 'admin')),
  bio text,
  avatar_url text,
  created_at timestamptz default now()
);

-- تفعيل أمان الصفوف (RLS)
alter table public.profiles enable row level security;

create policy "المستخدم يرى ملفه الشخصي"
  on public.profiles for select
  using (auth.uid() = id);

create policy "المستخدم يعدّل ملفه الشخصي"
  on public.profiles for update
  using (auth.uid() = id);

-- إنشاء الملف الشخصي تلقائيًا عند التسجيل
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- اختبارات اكتشاف الكفاءات (المرحلة القادمة)
create table if not exists public.assessments (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  created_at timestamptz default now()
);

create table if not exists public.assessment_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  assessment_id uuid references public.assessments(id) on delete cascade,
  scores jsonb,
  completed_at timestamptz default now()
);

alter table public.assessment_results enable row level security;

create policy "المستخدم يرى نتائجه فقط"
  on public.assessment_results for select
  using (auth.uid() = user_id);
