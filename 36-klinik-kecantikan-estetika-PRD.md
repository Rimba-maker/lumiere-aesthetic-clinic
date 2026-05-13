# PRD: Lumière Aesthetic Clinic — Klinik Kecantikan & Estetika

## 1. Brand Identity

**Nama Brand:** Lumière Aesthetic Clinic
**Alasan Naming:** "Lumière" (Prancis: cahaya) memberi kesan glow, kemewahan, dan elegant. Cocok untuk premium beauty clinic. Asosiasi langsung dengan "glowing skin" yang jadi goals target market.

**Tagline:** *"Glow From Within, Powered By Science."*

**Target Audience:**
- Wanita usia 25-45 (primary)
- Pria urban yang aware skincare (secondary, 20%)
- SES A-B+, willing to invest dalam perawatan
- Bride-to-be (segmen high-ticket, paket bridal glow)
- Tinggal di kota besar (Jakarta, Surabaya, Bandung, Medan)

**Brand Voice:**
- Tone: Elegant, ilmiah tapi accessible, empowering
- Style copywriting: Confidence-building, edukatif, evidence-based (mention bahan aktif, FDA-approved tech)
- Avoid: Body-shaming, fear-based marketing, overpromise ("hilang dalam 1 sesi")

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo elegant, nav, CTA "Book Konsultasi" |
| 2 | Hero | React island `client:load` | Visual stunning + premium positioning |
| 3 | Signature Treatments | React island `client:visible` | 6 treatment unggulan dengan card luxury |
| 4 | Treatment Categories | React island `client:visible` | Face • Body • Laser • Injectable • Skincare |
| 5 | Technology | React island `client:visible` | FDA-approved devices showcase |
| 6 | Before & After | React island `client:visible` | Slider before/after dengan consent visible |
| 7 | Our Doctors | React island `client:visible` | Tim dokter dengan kredensial |
| 8 | Clinic Tour | React island `client:visible` | Gallery interior klinik (sterile, premium) |
| 9 | Membership / Package | `.astro` static | Bridal, monthly, annual package |
| 10 | Testimonial | React island `client:visible` | Real client journey |
| 11 | Booking CTA | React island `client:visible` | Konsultasi gratis form |
| 12 | Footer | `.astro` static | Lokasi cabang, kontak, sosmed |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Treatment • Teknologi • Dokter • Membership • Lokasi
- CTA: **Book Konsultasi**

### Hero
- **Headline:** Kulit Sehat Yang Bercahaya, Tanpa Filter.
- **Subheadline:** Klinik kecantikan dengan teknologi FDA-approved, ditangani dokter spesialis. Solusi personal untuk setiap concern kulit Anda.
- **CTA Primary:** Book Konsultasi Gratis
- **CTA Secondary:** Lihat Treatment

Trust badges di bawah hero: "10.000+ Treatment", "Tim Dokter Spesialis", "FDA-Approved Tech", "ISO Certified"

### Signature Treatments
- **Heading:** Signature Treatments
- **Subheading:** Kombinasi teknologi dan keahlian dokter untuk hasil yang sustainable.

6 treatment cards:
1. **Lumière Glow Facial** — Multi-step facial dengan LED therapy. *Rp 850k / sesi*
2. **HydraFacial MD** — Deep cleansing + serum infusion. *Rp 1.5jt / sesi*
3. **Pico Laser** — Hilangkan flek, scar, dan rejuvenasi. *Rp 2.2jt / sesi*
4. **Skin Booster Injection** — Hidrasi mendalam dari dalam. *Rp 3.5jt / sesi*
5. **RF Microneedling** — Tighten & smooth skin texture. *Rp 2.8jt / sesi*
6. **Botox & Filler** — Anti-aging by certified doctor. *Mulai Rp 4jt*

### Treatment Categories
- **Heading:** Solusi Untuk Setiap Concern
- Tab horizontal:
  - **Face:** Acne, anti-aging, pigmentation, brightening
  - **Body:** Slimming, cellulite, stretch mark
  - **Laser:** Hair removal, tattoo removal, scar treatment
  - **Injectable:** Botox, filler, skin booster, threadlift
  - **Skincare:** Konsultasi produk personalized

### Technology
- **Heading:** Teknologi Berstandar Internasional
- **Body:** Kami invest dalam alat-alat aesthetic terdepan yang sudah teruji klinis dan disetujui FDA/CE. Karena hasil terbaik datang dari teknologi terbaik di tangan ahli.

Showcase 4-5 alat dengan foto & spec singkat:
- **Picosure Pro** — Pico laser tercepat untuk pigmentation
- **HydraFacial MD** — Original from US
- **Morpheus8** — RF microneedling deep dermal
- **Ultherapy** — Non-invasive skin lifting
- **Lumecca IPL** — Photofacial untuk redness & sun damage

### Before & After
- **Heading:** Hasil Yang Berbicara
- **Disclaimer:** *Semua foto adalah klien Lumière dengan consent tertulis. Hasil dapat bervariasi tiap individu.*
- Slider interaktif before/after per treatment

### Our Doctors
- **Heading:** Ditangani Oleh Yang Terbaik
- 3-4 dokter card:
  - **Dr. Anisa Rahmawati, Sp.KK** — Dermatologist, 12+ tahun pengalaman
  - **Dr. Kevin Hartono, M.Biomed (AAM)** — Aesthetic Medicine, ahli injectable
  - **Dr. Linda Wijaya, Sp.KK** — Laser specialist, sertifikasi internasional
  - **Dr. Raka Pratama** — General practitioner, body treatment lead

### Clinic Tour
- **Heading:** Ruang Yang Membuat Anda Nyaman
- **Body:** Setiap sudut klinik kami didesain untuk memberi pengalaman seperti spa premium — bukan rumah sakit kaku.
- Gallery 6-8 foto interior: lobby, treatment room, recovery lounge, consultation room

### Membership / Package
- **Heading:** Paket & Membership
- 3 cards:

**🎀 Bridal Glow Package**
*Rp 12.5jt / 3 bulan (hemat 30%)*
- 6x HydraFacial
- 3x Skin Booster
- Konsultasi 1-on-1 dengan dokter
- Free LED therapy 4 sesi

**✨ Lumière Member**
*Rp 5jt / 6 bulan*
- 10% off all treatment
- Priority booking
- Free birthday treatment
- Quarterly skin analysis

**💎 VIP Annual**
*Rp 25jt / tahun (hemat 40%)*
- Unlimited HydraFacial
- 6x signature treatment pilihan
- Personal aesthetician
- Home skincare bundle

### Testimonial
- **Heading:** Cerita Transformasi
- 4-5 testimonial dengan foto profile + breakdown journey:
  - Treatment yang diambil, durasi, hasil
  - Quote real client

### Booking CTA
- **Heading:** Mulai Perjalanan Glow Anda
- **Body:** Konsultasi pertama gratis. Tim kami akan analisis kondisi kulit dan rekomendasikan treatment yang sesuai untuk Anda.
- Form: Nama, WA, Concern, Cabang preferensi, Tanggal booking
- CTA: **Book Konsultasi Gratis**

### Footer
- Tagline: *"Where science meets beauty."*
- Cabang: Jakarta (PIK, Kemang, Senopati), Surabaya, Bandung
- Sosmed: IG, TikTok, YouTube (showcase treatment & edu)
- Sertifikasi badges: ISO, BPOM, sertifikasi dokter

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/asian-woman-glowing-skin | "Wanita kulit bercahaya natural" | 1920x1080 |
| Treatment - Facial | Unsplash | https://unsplash.com/s/photos/facial-treatment-spa | "Glow facial treatment" | 800x600 |
| Treatment - HydraFacial | Pexels | https://www.pexels.com/search/hydrafacial%20treatment/ | "HydraFacial procedure" | 800x600 |
| Treatment - Laser | Unsplash | https://unsplash.com/s/photos/laser-treatment-face | "Pico laser session" | 800x600 |
| Treatment - Injection | Pexels | https://www.pexels.com/search/skin%20booster%20injection/ | "Skin booster procedure" | 800x600 |
| Treatment - Microneedling | Unsplash | https://unsplash.com/s/photos/microneedling-treatment | "RF microneedling" | 800x600 |
| Treatment - Botox | Pexels | https://www.pexels.com/search/botox%20clinic/ | "Botox injection by doctor" | 800x600 |
| Technology - devices | Unsplash | https://unsplash.com/s/photos/aesthetic-clinic-device | "Aesthetic technology" | 800x600 |
| Doctors | Pexels | https://www.pexels.com/search/female%20doctor%20asian/ | Portrait dokter | 600x800 |
| Clinic interior | Unsplash | https://unsplash.com/s/photos/luxury-spa-interior | "Lobby klinik premium" | 1600x900 |
| Treatment room | Unsplash | https://unsplash.com/s/photos/aesthetic-treatment-room | "Ruang treatment elegan" | 1200x800 |
| Recovery lounge | Pexels | https://www.pexels.com/search/spa%20relaxation%20lounge/ | "Lounge recovery klien" | 1200x800 |
| Testimonial avatars | Pexels | https://www.pexels.com/search/asian%20woman%20portrait%20natural/ | Portrait klien | 200x200 |

---

## 6. Animation Spec (Framer Motion)

### Hero (React island, `client:load`)
```tsx
// Slow Ken Burns effect untuk hero bg
const kenBurns = {
  scale: [1, 1.08],
  transition: { duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }
}

// Headline elegant reveal
const elegantReveal = {
  hidden: { opacity: 0, y: 20, letterSpacing: "0.2em" },
  visible: { 
    opacity: 1, 
    y: 0,
    letterSpacing: "0.05em",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
}

// Trust badges: fade-in stagger setelah headline
```

### Signature Treatments (React island, `client:visible`)
- 6 cards reveal stagger `staggerChildren: 0.08`
- Card design: glassmorphism elegant
- Hover: subtle lift `y: -8`, border accent glow gold
- Image inside card: parallax slow `y` shift on scroll

### Treatment Categories (React island, `client:visible`)
- Tab horizontal scroll on mobile, fixed grid on desktop
- Active tab: `layoutId` smooth underline animation
- Content panel: `AnimatePresence` mode `wait`, fade + slight slide

### Technology (React island, `client:visible`)
- Horizontal scroll showcase dengan momentum
- Device card: 3D tilt on hover pakai `useMotionValue` + `useTransform`
```tsx
const x = useMotionValue(0)
const rotateY = useTransform(x, [-100, 100], [-10, 10])
```

### Before & After (React island, `client:visible`)
- Draggable slider divider menggunakan `drag="x"` + `dragConstraints`
- Smooth divider line dengan accent color
- Reveal label "BEFORE" / "AFTER" pada hover

### Our Doctors (React island, `client:visible`)
- Cards reveal stagger
- Hover: image scale + overlay credentials slide-up
- Doctor card flip option (front: photo, back: bio) pakai `rotateY`

### Clinic Tour Gallery (React island, `client:visible`)
- Masonry grid layout
- Lightbox on click pakai `AnimatePresence` + `layoutId`
- Image transitions smooth `layout` prop

### Membership Cards (React island, `client:visible`)
- 3 cards stagger reveal
- VIP card: gold gradient border animated `backgroundPosition`
- Hover: card lift, shadow elevation, slight scale

### Testimonial (React island, `client:visible`)
- Carousel dengan auto-rotate 6s
- Smooth slide transition
- Progress dots dengan `layoutId`

### Booking Form
- Multi-step form animation dengan progress bar
- Field focus: smooth border color transition + label float up
- Submit button: loading state animation

### Scroll Reveal Pattern (reusable)
```tsx
const elegantFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  }
}
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Treatments, Categories, Technology, Before/After, Doctors, Gallery, Testimonial
- `client:idle` → Booking Form
- Footer & static sections: `.astro`

---

## 7. SEO Meta

- **Title:** Lumière Aesthetic Clinic — Klinik Kecantikan & Estetika Premium
- **Description:** Klinik kecantikan & estetika dengan teknologi FDA-approved. HydraFacial, Pico Laser, Botox, dan signature treatment lainnya. Konsultasi gratis.
- **Keywords:** klinik kecantikan jakarta, aesthetic clinic, hydrafacial, pico laser, botox jakarta, skin booster
- **OG Image:** Hero shot dengan logo overlay, elegant gold accent (1200x630)
- **Schema:** `MedicalClinic` + `MedicalProcedure` + `Physician` schema
