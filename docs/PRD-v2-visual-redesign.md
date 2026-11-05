# PRD v2: Lumière Aesthetic Clinic — Visual Redesign

Upgrade dari PRD v1 (`36-klinik-kecantikan-estetika-PRD.md`, tersimpan di git history commit `55e467e`).
Konten bisnis (brand, harga, dokter, paket) tetap dari PRD v1. Yang berubah: sistem visual, struktur halaman,
foto, dan semua spec animasi. Dibangun dengan skill `design-taste-frontend` (tasteskill 2.5).

## 1. Kind & arah visual

- **Kind:** `service` (klinik: orang dipekerjakan/datang untuk dokter). `data-type="service"`, `site-kind=other`.
- **Artinya:** fotografi memimpin (2+ foto per layar), ground flat, tipografi + warna brand, tanpa efek shader,
  scene, moment, atau loop. Interaksi hanya lewat hover micro-animation dari motion layer.
- **Referensi level:** figma.com / x.ai — satu sistem, satu section per layar, edge kiri-kanan sama.
- **Bahasa:** Indonesia; label tombol diawali kata kerja (Book, Lihat).

### Deal (bukan selera, hasil `deal.mjs` / `start.mjs`)

| Bagian | Hasil |
|---|---|
| Hero | `split` (teks span-5, foto span-6 start-7) |
| Tipografi | Source Serif 4 (display, 400) + Libre Franklin (teks) — cocok untuk health |
| Palette | Brand sendiri via `start.mjs brand`: ivory `#fbf8f4`, surface `#f1e9e0`, ink `#2a1f19`, muted `#6b5b50`, aksen bronze-gold `#8a5a2b` (turunan "gold" PRD v1, kontras 5:1+) |
| Radius | `soft` |
| Tombol | `block` |
| Nav | `nav-mega` |
| Close | `close-type` |
| Footer | `footer-columns` (footer-visit di-deal ulang: butuh jam buka, brief tidak memberi) |
| Rhythm | `space` (satu ground, section dipisah ruang) |
| Mark | `wordmark` (nama saja) |

## 2. Rencana layar (1440×900)

Aksi utama, kata per kata sama di nav, hero, close, phone bar: **Book konsultasi gratis**.

| # | Section | Satu ide | Gambar (kind) | Layar |
|---|---|---|---|---|
| 1 | `hero` | Klinik estetika dokter spesialis di Jakarta | foto fasial dengan device (use) | 1 |
| 2 | `#treatment` | 6 signature treatment + harga, foto berganti saat hover/fokus (peek-list) | 6 foto treatment | 1 |
| 3 | `#concern` | Concern → treatment, 6 tile | 6 foto | 2 |
| 4 | `#teknologi` | 5 perangkat klinis, spec rows | 1 foto device besar | 1 |
| 5 | `#proses` | Konsultasi → treatment → kontrol (3 langkah) | 3 foto | 1 |
| 6 | `#dokter` | 4 dokter + kredensial | 4 potret | 1 |
| 7 | `#klinik` | Ruang klinik (photo wall) | 6 foto interior | 1 |
| 8 | `#membership` | 3 paket (Bridal, Member, VIP) | 3 foto | 1 |
| 9 | `#faq` | 6 pertanyaan, jawaban terbuka | — (halaman sudah punya foto di sekitarnya) | 1 |
| 10 | `#booking` | Form konsultasi gratis + foto | 1 foto | 1 |
| 11 | `footer.closing` | Close + direktori + cabang | — | 1 |

Total **31 foto unik** dari Pexels (v1: 8). Tidak ada foto dipakai dua kali.

## 3. Perubahan dari PRD v1 (dan alasannya)

| PRD v1 | v2 | Alasan |
|---|---|---|
| Hero React island + Ken Burns + letter-spacing reveal | Hero statis, split, foto penuh | Skill: tanpa reveal/entrance/Ken Burns; hero harus terlihat sejak paint pertama |
| Headline "Kulit Sehat Yang Bercahaya, Tanpa Filter." | h1 "Klinik estetika dokter spesialis di Jakarta"; tagline pindah ke footer (satu brand line) | h1 harus menyebut kategori + tempat, bukan slogan |
| Trust badges (4) | `hero-facts`: 10.000+ treatment, 4 dokter, 5 cabang (semua dari PRD) | Satu fakta keras per layar, bukan strip badge |
| Cards glassmorphism + stagger reveal + parallax | Peek-list + open tiles, hover lift 2px / zoom 1.03 | Satu card style, tanpa scroll animation |
| Tabs kategori (Face/Body/Laser/…) | Tile concern 6 item (+ Pria sebagai segmen sekunder PRD) | Tabs dilarang di service |
| Technology horizontal scroll + 3D tilt | Spec rows + foto device | Tanpa swipe row, tanpa tilt |
| Before & After slider | **Ditunda**: slot hanya diisi foto klien asli + consent tertulis. Diganti section `#proses` | Foto stock tidak boleh dijadikan "hasil klien"; bukti tidak boleh dikarang |
| Testimonial carousel auto-rotate 6s | **Dihapus** sampai ada kutipan klien asli + izin | Tanpa carousel/timed; tanpa testimoni karangan |
| Doctor card flip | Open tile potret | Tanpa rotasi/tilt |
| Gallery masonry + lightbox | Photo wall rata, 6 foto | Satu sistem; tanpa overlay |
| Membership VIP gold gradient border animated | 3 card plan, satu style | Tanpa gradient/animasi |
| Booking multi-step + float label | Form 5 field, label di atas, satu tombol | ≤6 field, tanpa modal |
| Tailwind + React + Framer Motion | Astro murni + design system skill (`public/assets`) | Satu sistem CSS, tanpa JS framework tak terpakai |

## 4. Upgrade PRD (tambahan)

- **Segmen pria** (PRD v1 §1: 20% sekunder) kini punya tile sendiri di `#concern`.
- **Bridal** (segmen high-ticket) punya paket sendiri dan foto sendiri di `#membership`.
- **Phone action bar** (fixed di bawah, ≤640px) dengan aksi utama.
- **Skema SEO**: `MedicalClinic` + `Physician` JSON-LD (PRD v1 §7), halaman `privacy`, `terms`, `credits` nyata.
- **Fakta satu sumber**: harga, dokter, cabang di `src/data/clinic.ts` — satu fakta, satu kata-kata.
- **Aksesibilitas**: kontras teks ≥ 4.5:1, semua link mendarat, form dengan label.

## 5. Yang harus disediakan klien (stand-in sekarang)

1. **Foto asli klinik** (hero, interior, ruang treatment): semua foto sekarang stock Pexels sebagai stand-in.
2. **Potret 4 dokter** (nama & kredensial dari PRD; wajah di halaman saat ini stock).
3. **Foto perangkat** (Picosure Pro, Morpheus8, Ultherapy, Lumecca IPL, HydraFacial MD) — foto sekarang generik.
4. **Before & after** dengan consent tertulis, dan **testimoni** nyata + izin → slot siap diisi.
5. **Alamat jalan tiap cabang** dan **jam buka** (footer sekarang menampilkan distrik saja).
6. **Nomor/akun WhatsApp & sosmed**, endpoint form booking, OG image 1200×630.
7. Konfirmasi klaim "10.000+ treatment", "FDA/CE", "ISO" sebelum rilis.

## 6. Kriteria selesai

- `consistency.mjs`, `layout/check.mjs`, `perf.mjs` tanpa FAIL di 1440, 1024, 820, 768, 390.
- Setiap section tepat 1 atau 2 layar, hero sendirian di layar pertama.
- Tidak ada gambar kosong, tidak ada caption di bawah gambar, kredit foto satu baris di footer.
