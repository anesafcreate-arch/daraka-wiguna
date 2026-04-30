# CV. NISFI SABAR Company Profile

Modern Next.js website with:
- Company profile sections (Home, About Us, Services, Portfolio, Advantages, Contact)
- WhatsApp direct integration
- Supabase authentication (register/login)
- Superadmin dashboard for user role management

## 1) Run locally (localhost)

```bash
npm install
cp .env.example .env.local
```

Fill `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
SUPERADMIN_EMAIL=your-email@example.com
```

Run:

```bash
npm run dev
```

Open: `http://localhost:3000`

## 2) Supabase setup

1. Create a Supabase project.
2. Open SQL Editor and run: `supabase/schema.sql`
3. In Auth settings:
   - Enable Email/Password provider.
   - Optionally disable email confirmation if you want instant login after registration.

## 3) Superadmin activation

1. Register/login with the email defined in `SUPERADMIN_EMAIL`.
2. Open `/admin`.
3. Click **Activate My Superadmin** (works only once when no superadmin exists yet).
4. After activation, you can edit roles and delete users from the admin table.

## 4) Portfolio images source

Portfolio references are loaded from:

- `public/portfolio/minimalis.jpg`
- `public/portfolio/portfolio-2.jpg`
- `public/portfolio/portfolio-3.jpg`
- `public/portfolio/portfolio-4.jpg`
- `public/portfolio/portfolio-5.jpg`
- `public/portfolio/portfolio-6.jpg`

## 5) GitHub upload

```bash
git init
git add .
git commit -m "Initial company profile with Supabase auth and admin panel"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 6) Deploy to Vercel

1. Import this GitHub repository in Vercel.
2. Add environment variables in Vercel Project Settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `SUPERADMIN_EMAIL`
3. Deploy.

## Notes

- Never expose `SUPABASE_SERVICE_ROLE_KEY` to browser/client code.
- Current admin routes are server-only and protected by superadmin role checks.
