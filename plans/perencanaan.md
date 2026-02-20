# 📋 Perencanaan Website Organisasi

> **Stack Utama:** React + Vite + TypeScript | Chakra UI | Supabase | Vercel  
> **Versi Dokumen:** 1.1 (+ Admin Panel)  
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
│   │   ├── useAuth.ts             # Auth state & session
│   │   ├── useNews.ts
│   │   ├── useMembers.ts
│   │   └── usePrograms.ts
│   │
│   ├── lib/                       # Konfigurasi library eksternal
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
│   ├── theme/                     # Konfigurasi Chakra UI Theme
│   │   ├── index.ts               # Main theme export
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   └── components.ts          # Override komponen Chakra
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
// src/theme/colors.ts

export const colors = {
  brand: {
    50:  "#E8F0FE",
    100: "#C5D6FC",
    200: "#9EBCFA",
    300: "#78A1F7",
    400: "#568AF5",
    500: "#2563EB",   // ← Primary (Trust Blue)
    600: "#1D4ED8",
    700: "#1E40AF",
    800: "#1E3A8A",
    900: "#1E3166",
  },
  accent: {
    50:  "#FFF7ED",
    100: "#FFEDD5",
    300: "#FD9A4A",
    500: "#F97316",   // ← Accent (Energy Orange)
    700: "#C2410C",
    900: "#7C2D12",
  },
  neutral: {
    50:  "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    500: "#64748B",
    700: "#334155",
    900: "#0F172A",
  },
  success: "#16A34A",
  warning: "#D97706",
  error:   "#DC2626",
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

> 💡 Sesuaikan `brand` dengan warna primer organisasi kamu jika berbeda.

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

Semua route admin berada di bawah prefix `/admin` dan dilindungi oleh `ProtectedRoute` — pengguna yang belum login akan diredirect ke `/admin/login`.

### 4.1 Autentikasi Admin

Route: `/admin/login`

- Form login email + password menggunakan **Supabase Auth**
- Tidak ada halaman registrasi publik — admin dibuat langsung dari Supabase Dashboard
- Session disimpan otomatis oleh Supabase (`localStorage`)
- Zustand `useAuthStore` menyimpan state session aktif

```ts
// Contoh login
const { error } = await supabase.auth.signInWithPassword({ email, password })
```

### 4.2 Layout Admin

Semua halaman admin menggunakan `AdminLayout` yang terdiri dari:

```
┌─────────────────────────────────────────┐
│            AdminTopbar                   │  ← Logo, nama user, tombol logout
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

### 4.3 Dashboard (`/admin/dashboard`)

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

## 5. 🔒 Keamanan Admin — Supabase RLS & Auth

### Row Level Security (RLS)

Aktifkan RLS di semua tabel. Contoh policy dasar:

```sql
-- Hanya user yang login bisa mengelola berita
CREATE POLICY "Admin can manage news"
ON news FOR ALL TO authenticated
USING (true) WITH CHECK (true);

-- Publik hanya bisa READ berita published
CREATE POLICY "Public can read published news"
ON news FOR SELECT TO anon
USING (published = true);

-- Pesan kontak: publik INSERT, admin SELECT
CREATE POLICY "Anyone can send message"
ON contact_messages FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Admin can read messages"
ON contact_messages FOR SELECT TO authenticated USING (true);
```

### ProtectedRoute Component

```tsx
// src/components/layout/admin/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/store/useAuthStore'

export const ProtectedRoute = () => {
  const { session } = useAuthStore()
  if (!session) return <Navigate to="/admin/login" replace />
  return <Outlet />
}
```

### Route Config Admin

```tsx
// src/routes/AdminRoutes.tsx
<Route path="/admin/login" element={<AdminLoginPage />} />
<Route path="/admin" element={<ProtectedRoute />}>
  <Route element={<AdminLayout />}>
    <Route index element={<Navigate to="dashboard" />} />
    <Route path="dashboard"         element={<AdminDashboardPage />} />
    <Route path="news"              element={<AdminNewsPage />} />
    <Route path="news/create"       element={<AdminNewsFormPage />} />
    <Route path="news/edit/:id"     element={<AdminNewsFormPage />} />
    <Route path="programs"          element={<AdminProgramsPage />} />
    <Route path="programs/create"   element={<AdminProgramFormPage />} />
    <Route path="programs/edit/:id" element={<AdminProgramFormPage />} />
    <Route path="members"           element={<AdminMembersPage />} />
    <Route path="members/create"    element={<AdminMemberFormPage />} />
    <Route path="members/edit/:id"  element={<AdminMemberFormPage />} />
    <Route path="gallery"           element={<AdminGalleryPage />} />
    <Route path="messages"          element={<AdminMessagesPage />} />
    <Route path="settings"          element={<AdminSettingsPage />} />
  </Route>
</Route>
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
| `@chakra-ui/react` + `@emotion/react` + `@emotion/styled` + `framer-motion` | UI Component Library |

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
| `zustand` | Lightweight global state (auth, UI state) |

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
| `react-hot-toast` | Notifikasi toast yang ringan |
| `lucide-react` | Icon library modern & konsisten |

### Rich Text (Untuk Konten Berita)

| Package | Fungsi |
|---------|--------|
| `@tiptap/react` | Rich text editor (jika ada CMS/admin panel) |
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
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
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

## 10. 🧩 Komponen Tema Chakra UI (Contoh Setup)

```ts
// src/theme/index.ts
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { colors } from './colors'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body:    `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'neutral.50',
        color: 'neutral.900',
      },
    },
  },
})
```

> 💡 Tambahkan font dari Google Fonts di `index.html`:  
> `Inter` untuk body, `Plus Jakarta Sans` untuk heading — kombinasi profesional & modern.

---

## 11. 📅 Milestone Pengembangan (Saran)

| Fase | Durasi | Target |
|------|--------|--------|
| **Setup & Scaffold** | 1–2 hari | Init project, konfigurasi Vite, Chakra, Supabase, routing |
| **Theme & Layout** | 2–3 hari | Navbar, Footer, tema warna, tipografi |
| **Halaman Utama** | 3–5 hari | Hero, Stats, About, Program, Berita, CTA |
| **Halaman Sekunder** | 5–7 hari | About, Program, News, Members, Gallery, Contact |
| **Integrasi Supabase** | 3–4 hari | Koneksi data real, CRUD via services & hooks |
| **Admin Panel** | 5–7 hari | Login, Dashboard, CRUD Berita/Program/Anggota/Galeri, Pesan |
| **Auth & RLS** | 1–2 hari | ProtectedRoute, Supabase RLS policy, session handling |
| **SEO & Optimasi** | 1–2 hari | Meta tags, loading state, image optimization |
| **Testing & Review** | 2–3 hari | Cross-browser, responsif, review konten + admin flow |
| **Deploy ke Vercel** | 1 hari | Setup env, domain custom jika ada |

---

## 12. ✅ Checklist Sebelum Launch

- [ ] Semua `.env` sudah diset di Vercel
- [ ] `vercel.json` sudah dikonfigurasi (SPA rewrite)
- [ ] SEO meta tags aktif di semua halaman (`react-helmet-async`)
- [ ] Semua form ada validasi (zod + react-hook-form)
- [ ] Gambar menggunakan format WebP atau dioptimasi
- [ ] Supabase RLS (Row Level Security) aktif di tabel sensitif
- [ ] `ProtectedRoute` berjalan dengan benar — redirect ke `/admin/login` jika belum login
- [ ] Tidak ada data sensitif admin yang bisa diakses via `anon` key
- [ ] Halaman admin tidak terindeks oleh search engine (`robots.txt` / `noindex`)
- [ ] Upload gambar ke Supabase Storage sudah berjalan (berita, anggota, galeri)
- [ ] Tiptap rich text editor bisa menyimpan dan merender konten dengan benar
- [ ] Error boundary sudah dipasang
- [ ] Favicon & OG image sudah diset
- [ ] Mobile responsive dicek di berbagai ukuran layar
- [ ] Lighthouse score > 80 (Performance, SEO, Accessibility)

---

*Dokumen ini adalah panduan awal dan dapat diperbarui sesuai kebutuhan organisasi.*