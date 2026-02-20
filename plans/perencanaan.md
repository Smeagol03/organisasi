# 📋 Perencanaan Website Organisasi

> **Stack Utama:** React + Vite + TypeScript | Tailwind CSS + shadcn/ui | Clerk Auth | Supabase | Vercel
> **Versi Dokumen:** 1.3 (+ Admin Panel, shadcn/ui, Clerk Auth)
> **Tanggal:** Februari 2026

---

## 1. 🗂️ Struktur Proyek

```
my-org-website/
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   └── robots.txt
│
├── src/
│   ├── assets/                    # Gambar, font, ikon statis
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/                # Komponen reusable
│   │   ├── common/                # Komponen umum (Button, Card, Badge, dll)
│   │   │   ├── AppButton.tsx
│   │   │   ├── AppCard.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   ├── layout/                # Layout komponen
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PageWrapper.tsx
│   │   │   └── admin/
│   │   │       ├── AdminLayout.tsx     # Shell layout admin (sidebar + topbar)
│   │   │       ├── AdminSidebar.tsx    # Navigasi sidebar admin
│   │   │       ├── AdminTopbar.tsx     # Header admin (user info, logout)
│   │   │       └── ProtectedRoute.tsx  # Guard route — redirect jika belum login
│   │   └── sections/              # Section per halaman
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ProgramsSection.tsx
│   │       ├── NewsSection.tsx
│   │       ├── MembersSection.tsx
│   │       ├── GallerySection.tsx
│   │       ├── PartnersSection.tsx
│   │       └── ContactSection.tsx
│   │
│   ├── pages/                     # Halaman utama (route level)
│   │   ├── public/                # Halaman publik (tanpa auth)
│   │   │   ├── HomePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ProgramsPage.tsx
│   │   │   ├── NewsPage.tsx
│   │   │   ├── NewsDetailPage.tsx
│   │   │   ├── MembersPage.tsx
│   │   │   ├── GalleryPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   └── admin/                 # Halaman admin (butuh auth)
│   │       ├── AdminLoginPage.tsx
│   │       ├── AdminDashboardPage.tsx
│   │       ├── AdminNewsPage.tsx
│   │       ├── AdminNewsFormPage.tsx   # Create & Edit
│   │       ├── AdminProgramsPage.tsx
│   │       ├── AdminProgramFormPage.tsx
│   │       ├── AdminMembersPage.tsx
│   │       ├── AdminMemberFormPage.tsx
│   │       ├── AdminGalleryPage.tsx
│   │       ├── AdminMessagesPage.tsx
│   │       └── AdminSettingsPage.tsx
│   │
│   ├── hooks/                     # Custom React Hooks
│   │   ├── useSupabase.ts
│   │   ├── useNews.ts
│   │   ├── useMembers.ts
│   │   └── usePrograms.ts
│   │
│   ├── lib/                       # Konfigurasi library eksternal
│   │   ├── clerk.ts               # Clerk client init
│   │   ├── supabase.ts            # Supabase client init
│   │   └── queryClient.ts         # React Query client
│   │
│   ├── services/                  # API / data fetching layer
│   │   ├── newsService.ts
│   │   ├── membersService.ts
│   │   ├── programsService.ts
│   │   └── galleryService.ts
│   │
│   ├── store/                     # State management (Zustand)
│   │   ├── useAppStore.ts
│   │   └── useAuthStore.ts
│   │
│   ├── types/                     # TypeScript type definitions
│   │   ├── news.types.ts
│   │   ├── member.types.ts
│   │   ├── program.types.ts
│   │   └── supabase.types.ts      # Generated dari Supabase CLI
│   │
│   ├── utils/                     # Helper functions
│   │   ├── formatDate.ts
│   │   ├── truncateText.ts
│   │   └── slugify.ts
│   │
│   ├── config/                    # Konfigurasi aplikasi
│   │   ├── site.ts                # Site metadata & config
│   │   └── navigation.ts          # Navigation menu config
│   │
│   ├── routes/                    # Konfigurasi routing
│   │   ├── AppRoutes.tsx          # Root router
│   │   ├── PublicRoutes.tsx       # Route publik
│   │   └── AdminRoutes.tsx        # Route admin (wrapped ProtectedRoute)
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .env                           # Environment variables (jangan di-commit)
├── .env.example                   # Template env untuk tim
├── .gitignore
├── vercel.json                    # Konfigurasi Vercel
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 2. 🎨 Palet Warna

### Rekomendasi: Tema Profesional & Terpercaya

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Brand colors
        brand: {
          50:  '#E8F0FE',
          100: '#C5D6FC',
          200: '#9EBCFA',
          300: '#78A1F7',
          400: '#568AF5',
          500: '#2563EB',   // ← Primary (Trust Blue)
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1E3166',
        },
        // Accent colors
        accent: {
          50:  '#FFF7ED',
          100: '#FFEDD5',
          300: '#FD9A4A',
          500: '#F97316',   // ← Energy Orange
          700: '#C2410C',
          900: '#7C2D12',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
```

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;   /* brand.500 */
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 24.6 95% 53.1%;       /* accent.500 */
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 24.6 95% 53.1%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

| Token         | Hex       | Penggunaan                         |
|---------------|-----------|------------------------------------|
| `brand.500`   | `#2563EB` | CTA utama, link aktif, highlight   |
| `brand.700`   | `#1E40AF` | Hover state, header background     |
| `accent.500`  | `#F97316` | Badge, tag, highlight sekunder     |
| `neutral.900` | `#0F172A` | Teks utama (heading)               |
| `neutral.500` | `#64748B` | Teks body / deskripsi              |
| `neutral.50`  | `#F8FAFC` | Background halaman                 |

> 💡 Sesuaikan `--primary` CSS variable dengan warna primer organisasi kamu jika berbeda.

---

## 3. 🧱 Section & Halaman

### 3.1 Halaman Utama (`/`)

| # | Section          | Deskripsi                                               |
|---|------------------|---------------------------------------------------------|
| 1 | **Hero**         | Tagline, CTA utama, visual organisasi                   |
| 2 | **Stats**        | Angka pencapaian (anggota, program, tahun berdiri, dll) |
| 3 | **About (Singkat)** | Visi misi singkat + link ke halaman About           |
| 4 | **Program Unggulan** | 3–4 program/kegiatan terbaru atau utama            |
| 5 | **Berita Terbaru** | Grid 3 artikel terbaru                               |
| 6 | **Galeri**       | Preview foto kegiatan                                   |
| 7 | **Partners/Sponsor** | Logo mitra organisasi                              |
| 8 | **CTA Bergabung** | Ajakan bergabung / kontak                              |

### 3.2 Halaman Tentang (`/about`)

- Sejarah & profil organisasi
- Visi, Misi, dan Nilai
- Struktur kepengurusan (grid foto + jabatan)
- Landasan hukum / legalitas (jika perlu)

### 3.3 Halaman Program (`/programs`)

- List semua program/kegiatan
- Filter by kategori / tahun
- Detail per program (bisa nested route `/programs/:slug`)

### 3.4 Halaman Berita (`/news`)

- Grid artikel / berita
- Search & filter kategori
- Pagination atau infinite scroll
- Detail artikel (`/news/:slug`) dengan rich text (dari Supabase)

### 3.5 Halaman Anggota (`/members`)

- Profil pengurus & anggota aktif
- Filter jabatan / divisi
- (Opsional) halaman profil per anggota

### 3.6 Halaman Galeri (`/gallery`)

- Grid foto kegiatan
- Filter by event / tahun
- Lightbox viewer

### 3.7 Halaman Kontak (`/contact`)

- Form kontak (dengan validasi)
- Info kontak: email, telepon, alamat
- Peta lokasi (Google Maps embed)
- Link media sosial

### 3.8 Halaman 404

- Custom not found page

---

## 4. 🔐 Admin Panel (`/admin/*`)

Semua route admin berada di bawah prefix `/admin` dan dilindungi oleh **Clerk Authentication** — pengguna yang belum login akan diredirect ke `/sign-in`.

### 4.1 Autentikasi Admin dengan Clerk

Route: `/sign-in` dan `/sign-up` (Clerk components)

- Login menggunakan **Clerk** dengan dukungan OAuth (Google, GitHub, dll)
- Multi-factor authentication (MFA) tersedia
- Session dikelola otomatis oleh Clerk
- Admin users dibuat melalui Clerk Dashboard atau diundang via email

```tsx
// Contoh protected route dengan Clerk
import { useAuth } from '@clerk/clerk-react'

export const ProtectedPage = () => {
  const { isLoaded, isSignedIn, userId } = useAuth()

  if (!isLoaded) return <div>Loading...</div>
  if (!isSignedIn) return <div>Sign in to view this page</div>

  return <div>Hello user {userId}!</div>
}
```

### 4.1.1 Integrasi Clerk di React + Vite

```tsx
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)
```

### 4.1.2 Middleware untuk Protect Routes (Optional di Vercel)

Untuk proteksi di level server/edge (jika deploy di Vercel dengan Next.js):

```typescript
// middleware.ts (jika menggunakan Next.js)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)'],
}
```

### 4.2 Layout Admin

Semua halaman admin menggunakan `AdminLayout` yang terdiri dari:

```
┌─────────────────────────────────────────┐
│            AdminTopbar                   │  ← Logo, UserButton Clerk, logout
├──────────────┬──────────────────────────┤
│              │                          │
│  AdminSide   │     <Outlet />           │  ← Konten halaman
│  bar         │     (Halaman Admin)      │
│              │                          │
│  - Dashboard │                          │
│  - Berita    │                          │
│  - Program   │                          │
│  - Anggota   │                          │
│  - Galeri    │                          │
│  - Pesan     │                          │
│  - Pengaturan│                          │
└──────────────┴──────────────────────────┘
```

### 4.3 ProtectedRoute Component dengan Clerk

```tsx
// src/components/layout/admin/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { Skeleton } from '@/components/ui/skeleton'

export const ProtectedRoute = () => {
  const { isLoaded, isSignedIn } = useAuth()

  // Handle loading state
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    )
  }

  // Redirect to sign-in if not authenticated
  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />
  }

  return <Outlet />
}
```

### 4.4 AdminTopbar dengan Clerk UserButton

```tsx
// src/components/layout/admin/AdminTopbar.tsx
import { UserButton } from '@clerk/clerk-react'
import { SidebarTrigger } from '@/components/ui/sidebar'

export const AdminTopbar = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4">
      <SidebarTrigger className="-ml-1" />
      <div className="flex-1" />
      <UserButton
        showName
        appearance={{
          elements: {
            rootBox: 'cursor-pointer',
            avatarBox: 'w-8 h-8',
          },
        }}
      />
    </header>
  )
}
```

### 4.5 Route Config Admin

```tsx
// src/routes/AdminRoutes.tsx
import { Route } from 'react-router-dom'
import { ProtectedRoute } from '@/components/layout/admin/ProtectedRoute'
import { AdminLayout } from '@/components/layout/admin/AdminLayout'

export const adminRoutes = [
  <Route path="/admin" element={<ProtectedRoute />}>
    <Route element={<AdminLayout />}>
      <Route index element={<Navigate to="dashboard" />} />
      <Route path="dashboard" element={<AdminDashboardPage />} />
      <Route path="news" element={<AdminNewsPage />} />
      <Route path="news/create" element={<AdminNewsFormPage />} />
      <Route path="news/edit/:id" element={<AdminNewsFormPage />} />
      <Route path="programs" element={<AdminProgramsPage />} />
      <Route path="programs/create" element={<AdminProgramFormPage />} />
      <Route path="programs/edit/:id" element={<AdminProgramFormPage />} />
      <Route path="members" element={<AdminMembersPage />} />
      <Route path="members/create" element={<AdminMemberFormPage />} />
      <Route path="members/edit/:id" element={<AdminMemberFormPage />} />
      <Route path="gallery" element={<AdminGalleryPage />} />
      <Route path="messages" element={<AdminMessagesPage />} />
      <Route path="settings" element={<AdminSettingsPage />} />
    </Route>
  </Route>,
]
```

### 4.6 Sign In/Sign Up Pages

```tsx
// src/pages/public/SignInPage.tsx
import { SignIn } from '@clerk/clerk-react'

export const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <SignIn
        appearance={{
          elements: {
            rootBox: 'mx-auto',
            card: 'bg-card shadow-lg',
          },
        }}
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        afterSignInUrl="/admin/dashboard"
      />
    </div>
  )
}

// src/pages/public/SignUpPage.tsx
import { SignUp } from '@clerk/clerk-react'

export const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        afterSignUpUrl="/admin/dashboard"
      />
    </div>
  )
}
```

### 4.7 Dashboard (`/admin/dashboard`)

| Widget | Deskripsi |
|--------|-----------|
| **Stat Cards** | Total berita, program, anggota, pesan masuk |
| **Pesan Belum Dibaca** | Notifikasi pesan kontak baru |
| **Berita Terbaru** | Tabel 5 artikel terakhir yang ditambahkan |
| **Quick Actions** | Tombol shortcut: Tambah Berita, Tambah Program |

### 4.4 Manajemen Berita (`/admin/news`)

**List Page** — tabel semua artikel: Judul, Kategori, Status (Published/Draft), Tanggal, Aksi (Edit/Hapus). Tersedia search by judul dan filter by status & kategori.

**Form Page** (`/admin/news/create` & `/admin/news/edit/:id`):
- Input: Judul, Slug (auto-generate), Excerpt
- **Rich Text Editor** (Tiptap) untuk konten utama
- Upload Cover Image ke **Supabase Storage**
- Pilih Kategori, Penulis (dropdown dari tabel `members`)
- Toggle Published / Draft + tombol Preview

### 4.5 Manajemen Program (`/admin/programs`)

**List Page** — tabel semua program dengan filter by status (active / completed / upcoming).

**Form Page** (`/admin/programs/create` & `/admin/programs/edit/:id`):
- Input: Judul, Slug, Deskripsi (Tiptap), Kategori, Status
- Tanggal Mulai & Selesai, Upload Cover Image

### 4.6 Manajemen Anggota (`/admin/members`)

**List Page** — tabel anggota/pengurus dengan filter by divisi & status aktif.

**Form Page** (`/admin/members/create` & `/admin/members/edit/:id`):
- Input: Nama, Jabatan, Divisi, Bio, Email, Periode (e.g. "2024–2025")
- Upload Foto ke Supabase Storage, Toggle Aktif / Non-aktif

### 4.7 Manajemen Galeri (`/admin/gallery`)

- Grid foto yang sudah diunggah
- Upload foto baru (single/bulk) ke Supabase Storage
- Isi metadata: Judul, Nama Event, Tanggal Diambil
- Hapus foto (otomatis hapus dari Storage juga)

### 4.8 Manajemen Pesan Kontak (`/admin/messages`)

- Tabel semua pesan masuk dari form kontak publik
- Kolom: Nama, Email, Subjek, Tanggal, Status Baca
- Klik baris → buka detail pesan (otomatis tandai sudah dibaca)
- Filter: Semua / Belum Dibaca

### 4.9 Pengaturan (`/admin/settings`)

- **Profil Organisasi**: Nama, deskripsi singkat, logo, kontak resmi
- **Media Sosial**: Link Instagram, Twitter/X, Facebook, YouTube, dll
- **Akun**: Ganti email & password admin
- (Opsional) Manajemen admin users lain

---

## 5. 🔒 Keamanan — Clerk Auth + Supabase RLS

### 5.1 Row Level Security (RLS) dengan Clerk

Aktifkan RLS di semua tabel. Gunakan Clerk user ID untuk policy. Contoh policy dasar:

```sql
-- Hanya user yang login bisa mengelola berita
CREATE POLICY "Admin can manage news"
ON news FOR ALL TO authenticated
USING (
  auth.uid() IN (
    SELECT id FROM auth.users 
    WHERE raw_user_meta_data->>'clerk_id' IS NOT NULL
  )
) 
WITH CHECK (true);

-- Publik hanya bisa READ berita published
CREATE POLICY "Public can read published news"
ON news FOR SELECT TO anon
USING (published = true);

-- Pesan kontak: publik INSERT, admin SELECT
CREATE POLICY "Anyone can send message"
ON contact_messages FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Admin can read messages"
ON contact_messages FOR SELECT TO authenticated 
USING (
  auth.uid() IN (
    SELECT id FROM auth.users 
    WHERE raw_user_meta_data->>'clerk_id' IS NOT NULL
  )
);
```

> 💡 **Catatan:** Simpan Clerk user ID di `raw_user_meta_data` Supabase saat user pertama kali akses, atau gunakan API endpoint untuk sinkronisasi user.

### 5.2 Sinkronisasi Clerk User ke Supabase

```ts
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'
import { useAuth } from '@clerk/clerk-react'

// Setelah user login dengan Clerk, simpan user info ke Supabase
export const syncClerkUserToSupabase = async (clerkUserId: string) => {
  const { getToken } = useAuth()
  const token = await getToken({ template: 'supabase' })
  
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  )
  
  // Insert or update user di Supabase
  const { data, error } = await supabase
    .from('users')
    .upsert({ 
      clerk_id: clerkUserId,
      // ... user data lainnya
    })
  
  return { data, error }
}
```

---

## 6. 🗄️ Struktur Database Supabase

```sql
-- Tabel utama yang dibutuhkan

-- Berita / Artikel
CREATE TABLE news (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,
  slug        TEXT UNIQUE NOT NULL,
  excerpt     TEXT,
  content     TEXT,            -- Rich text / HTML / Markdown
  cover_image TEXT,            -- URL dari Supabase Storage
  category    TEXT,
  author_id   UUID REFERENCES members(id),
  published   BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- Program / Kegiatan
CREATE TABLE programs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,
  slug        TEXT UNIQUE NOT NULL,
  description TEXT,
  category    TEXT,
  status      TEXT CHECK (status IN ('active', 'completed', 'upcoming')),
  start_date  DATE,
  end_date    DATE,
  cover_image TEXT,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Anggota / Pengurus
CREATE TABLE members (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  position    TEXT,
  division    TEXT,
  photo_url   TEXT,
  bio         TEXT,
  email       TEXT,
  is_active   BOOLEAN DEFAULT true,
  period      TEXT,            -- e.g. "2024–2025"
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Galeri
CREATE TABLE gallery (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT,
  image_url   TEXT NOT NULL,
  event_name  TEXT,
  taken_at    DATE,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Pesan Kontak
CREATE TABLE contact_messages (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  subject     TEXT,
  message     TEXT NOT NULL,
  is_read     BOOLEAN DEFAULT false,
  created_at  TIMESTAMPTZ DEFAULT now()
);
```

> 💡 Generate TypeScript types dengan: `supabase gen types typescript --project-id YOUR_ID > src/types/supabase.types.ts`

---

## 7. 📦 Dependencies yang Direkomendasikan

### Core

| Package | Fungsi |
|---------|--------|
| `react` + `react-dom` | UI library |
| `vite` | Build tool |
| `typescript` | Type safety |
| `tailwindcss` + `postcss` + `autoprefixer` | Utility-first CSS framework |
| `shadcn/ui` | Komponen UI berbasis Radix UI + Tailwind |
| `lucide-react` | Icon library (direkomendasikan shadcn/ui) |
| `class-variance-authority` | Variant styles untuk komponen (shadcn/ui) |
| `clsx` + `tailwind-merge` | Utility untuk conditional classes |
| `tailwindcss-animate` | Animasi Tailwind (shadcn/ui) |

### Authentication

| Package | Fungsi |
|---------|--------|
| `@clerk/clerk-react` | Clerk authentication untuk React/Vite |
| `@clerk/themes` | Custom theme untuk Clerk components (opsional) |

### Database & API

| Package | Fungsi |
|---------|--------|
| `@supabase/supabase-js` | Supabase client |
| `@tanstack/react-query` | Data fetching, caching, sync state |

### Routing

| Package | Fungsi |
|---------|--------|
| `react-router-dom` v6+ | Client-side routing |

### State Management

| Package | Fungsi |
|---------|--------|
| `zustand` | Lightweight global state (UI state, non-auth state) |

> 💡 **Catatan:** Dengan Clerk, auth state sudah dikelola oleh Clerk hooks (`useAuth`, `useUser`, `useSession`). Zustand hanya untuk state non-auth.

### Form & Validasi

| Package | Fungsi |
|---------|--------|
| `react-hook-form` | Form management performant |
| `zod` | Schema validation TypeScript-first |
| `@hookform/resolvers` | Integrasi zod + react-hook-form |

### Utilitas

| Package | Fungsi |
|---------|--------|
| `date-fns` | Format & manipulasi tanggal |
| `react-helmet-async` | SEO meta tags per halaman |
| `@tanstack/react-table` | Tabel data yang powerful (jika butuh admin) |
| `yet-another-react-lightbox` | Lightbox galeri foto |
| `sonner` | Notifikasi toast (direkomendasikan shadcn/ui) |

### Rich Text (Untuk Konten Berita)

| Package | Fungsi |
|---------|--------|
| `@tiptap/react` + `@tiptap/starter-kit` | Rich text editor (jika ada CMS/admin panel) |
| `react-markdown` + `remark-gfm` | Render konten markdown dari Supabase |

### Dev & Tooling

| Package | Fungsi |
|---------|--------|
| `eslint` + `@typescript-eslint/*` | Linting |
| `prettier` | Code formatting |
| `husky` + `lint-staged` | Pre-commit hooks |
| `@vitejs/plugin-react` | Vite plugin untuk React |

---

## 8. ⚙️ Konfigurasi Penting

### Setup Clerk Authentication

```bash
# Install Clerk
npm install @clerk/clerk-react

# Optional: Install Clerk themes
npm install @clerk/themes
```

### Setup shadcn/ui

```bash
# Inisialisasi shadcn/ui
npx shadcn-ui@latest init

# Tambahkan komponen yang dibutuhkan
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add table
npx shadcn-ui@latest add form
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add sonner
npx shadcn-ui@latest add sidebar
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add skeleton
npx shadcn-ui@latest add alert-dialog
npx shadcn-ui@latest add command
npx shadcn-ui@latest add popover
npx shadcn-ui@latest add select
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add tooltip
```

### `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### `tsconfig.json` — Path Alias

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### `components.json` — shadcn/ui Config

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### `src/lib/utils.ts` — shadcn/ui Utility

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

> ⚠️ Ini penting agar React Router berjalan dengan benar di Vercel (SPA routing).

### `.env.example`

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your-publishable-key
CLERK_SECRET_KEY=sk_test_your-secret-key

# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### `src/lib/clerk.ts` — Clerk Configuration (Optional)

```ts
// Optional: Custom Clerk configuration
import { Clerk } from '@clerk/clerk-js'

export const clerk = new Clerk(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)

// Initialize Clerk
export const initClerk = async () => {
  await clerk.load({
    // Optional: Custom appearance
    appearance: {
      variables: {
        colorPrimary: '#2563EB',
      },
    },
  })
}
```

### `src/lib/supabase.ts`

```ts
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
```

---

## 9. 🚀 Alur Deployment ke Vercel

1. Push project ke GitHub / GitLab
2. Import repo di [vercel.com](https://vercel.com)
3. Set **Framework Preset** → `Vite`
4. Tambahkan **Environment Variables** dari `.env`
5. Deploy — Vercel otomatis build & deploy setiap push ke `main`

### Branch Strategy (Rekomendasi)

```
main         → Production (auto-deploy ke Vercel)
staging      → Preview deploy (Vercel preview URL)
feature/*    → Development branch per fitur
```

---

## 10. 🧩 Komponen shadcn/ui + Clerk (Contoh Penggunaan)

### Contoh: Navbar dengan Clerk Authentication

```tsx
// src/components/layout/Navbar.tsx
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import { NavigationMenu } from '@/components/ui/navigation-menu'

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <NavigationMenu />
        
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: 'w-8 h-8',
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}
```

### Contoh: Button Component

```tsx
// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button'

export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-50 to-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Tagline Organisasi Anda
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Deskripsi singkat tentang organisasi dan dampak yang dibuat.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Bergabung Sekarang
          </Button>
          <Button size="lg" variant="outline">
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </div>
    </section>
  )
}
```

### Contoh: Card Component

```tsx
// src/components/sections/ProgramsSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const programs = [
  { title: 'Program A', category: 'Pendidikan', status: 'active' },
  { title: 'Program B', category: 'Sosial', status: 'upcoming' },
]

export const ProgramsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Program Unggulan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{program.title}</CardTitle>
                  <Badge variant={program.status === 'active' ? 'default' : 'secondary'}>
                    {program.status}
                  </Badge>
                </div>
                <CardDescription>{program.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Deskripsi singkat program...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Contoh: Form dengan react-hook-form + zod

```tsx
// src/pages/admin/AdminNewsFormPage.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

const newsSchema = z.object({
  title: z.string().min(1, 'Judul wajib diisi'),
  slug: z.string().min(1, 'Slug wajib diisi'),
  excerpt: z.string().min(1, 'Excerpt wajib diisi'),
  content: z.string().min(1, 'Konten wajib diisi'),
  category: z.string().min(1, 'Kategori wajib diisi'),
})

type NewsFormData = z.infer<typeof newsSchema>

export const AdminNewsFormPage = () => {
  const form = useForm<NewsFormData>({
    resolver: zodResolver(newsSchema),
  })

  const onSubmit = async (data: NewsFormData) => {
    try {
      // Save to Supabase...
      toast.success('Berita berhasil disimpan!')
    } catch (error) {
      toast.error('Gagal menyimpan berita')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Judul</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Masukkan judul berita" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Ringkasan berita" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Simpan</Button>
      </form>
    </Form>
  )
}
```

### Contoh: Admin Sidebar dengan shadcn/ui Sidebar + Clerk User

```tsx
// src/components/layout/admin/AdminSidebar.tsx
import { Link, useLocation } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { UserButton } from '@clerk/clerk-react'
import { LayoutDashboard, Newspaper, Users, Calendar, Image, Mail, Settings } from 'lucide-react'

const menuItems = [
  { title: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
  { title: 'Berita', icon: Newspaper, path: '/admin/news' },
  { title: 'Program', icon: Calendar, path: '/admin/programs' },
  { title: 'Anggota', icon: Users, path: '/admin/members' },
  { title: 'Galeri', icon: Image, path: '/admin/gallery' },
  { title: 'Pesan', icon: Mail, path: '/admin/messages' },
  { title: 'Pengaturan', icon: Settings, path: '/admin/settings' },
]

export const AdminSidebar = () => {
  const { user } = useUser()
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.path}>
                    <Link to={item.path}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      {/* Sidebar Footer dengan UserButton */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <UserButton showName appearance={{ elements: { avatarBox: 'w-8 h-8' } }} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
```

> 💡 Tambahkan font dari Google Fonts di `index.html`:
> `Inter` untuk body, `Plus Jakarta Sans` untuk heading — kombinasi profesional & modern.

---

## 11. 📅 Milestone Pengembangan (Saran)

| Fase | Durasi | Target |
|------|--------|--------|
| **Setup & Scaffold** | 1–2 hari | Init project, konfigurasi Vite, Tailwind CSS, shadcn/ui, **Clerk**, Supabase, routing |
| **Theme & Layout** | 2–3 hari | Navbar, Footer, konfigurasi warna Tailwind, tipografi, **Clerk SignIn/SignUp pages** |
| **Halaman Utama** | 3–5 hari | Hero, Stats, About, Program, Berita, CTA |
| **Halaman Sekunder** | 5–7 hari | About, Program, News, Members, Gallery, Contact |
| **Integrasi Supabase** | 3–4 hari | Koneksi data real, CRUD via services & hooks |
| **Admin Panel** | 5–7 hari | Login (**Clerk**), Dashboard, CRUD Berita/Program/Anggota/Galeri, Pesan |
| **Auth & RLS** | 1–2 hari | ProtectedRoute (**Clerk**), Supabase RLS policy, **user sync** |
| **SEO & Optimasi** | 1–2 hari | Meta tags, loading state, image optimization |
| **Testing & Review** | 2–3 hari | Cross-browser, responsif, review konten + admin flow |
| **Deploy ke Vercel** | 1 hari | Setup env, domain custom jika ada |

---

## 12. ✅ Checklist Sebelum Launch

- [ ] Semua `.env` sudah diset di Vercel (**Clerk + Supabase**)
- [ ] `vercel.json` sudah dikonfigurasi (SPA rewrite)
- [ ] SEO meta tags aktif di semua halaman (`react-helmet-async`)
- [ ] Semua form ada validasi (zod + react-hook-form)
- [ ] Gambar menggunakan format WebP atau dioptimasi
- [ ] Supabase RLS (Row Level Security) aktif di tabel sensitif
- [ ] `ProtectedRoute` (**Clerk**) berjalan dengan benar — redirect ke `/sign-in` jika belum login
- [ ] Clerk user ID tersinkronisasi dengan Supabase (untuk RLS policies)
- [ ] Tidak ada data sensitif admin yang bisa diakses via public endpoint
- [ ] Halaman admin tidak terindeks oleh search engine (`robots.txt` / `noindex`)
- [ ] Upload gambar ke Supabase Storage sudah berjalan (berita, anggota, galeri)
- [ ] Tiptap rich text editor bisa menyimpan dan merender konten dengan benar
- [ ] Error boundary sudah dipasang
- [ ] Favicon & OG image sudah diset
- [ ] Mobile responsive dicek di berbagai ukuran layar
- [ ] Lighthouse score > 80 (Performance, SEO, Accessibility)
- [ ] Clerk OAuth providers (Google, GitHub, dll) sudah dikonfigurasi (opsional)
- [ ] Clerk MFA (Multi-Factor Authentication) sudah diaktifkan untuk admin (opsional)

---

*Dokumen ini adalah panduan awal dan dapat diperbarui sesuai kebutuhan organisasi.*