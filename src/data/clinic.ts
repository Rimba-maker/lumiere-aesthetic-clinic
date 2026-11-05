// One source for every fact on the page: one value, one wording (skill copy.md "each fact once").

export const brand = {
  name: 'Lumière',
  fullName: 'Lumière Aesthetic Clinic',
  tagline: 'Glow from within, powered by science.',
  mainAction: 'Book konsultasi gratis',
  year: 2026,
} as const;

export const photo = (name: string) => `/assets/img/${name}.webp`;

export interface Treatment {
  key: string;
  name: string;
  line: string;
  price: string;
  img: string;
  alt: string;
}

export const treatments: Treatment[] = [
  { key: 'glow', name: 'Lumière Glow Facial', line: 'Facial multi-step dengan LED therapy.', price: 'Rp 850 rb / sesi', img: 'tx-glow', alt: 'Masker LED merah menyala saat sesi glow facial' },
  { key: 'hydra', name: 'HydraFacial MD', line: 'Deep cleansing dan serum infusion.', price: 'Rp 1,5 jt / sesi', img: 'tx-hydra', alt: 'Terapis memijat wajah klien saat HydraFacial' },
  { key: 'pico', name: 'Pico Laser', line: 'Atasi flek dan scar, remajakan kulit.', price: 'Rp 2,2 jt / sesi', img: 'tx-pico', alt: 'Dokter dengan kacamata pelindung menjalankan pico laser' },
  { key: 'booster', name: 'Skin Booster Injection', line: 'Hidrasi mendalam dari dalam.', price: 'Rp 3,5 jt / sesi', img: 'tx-booster', alt: 'Jarum skin booster pada kulit wajah' },
  { key: 'rf', name: 'RF Microneedling', line: 'Kencangkan dan haluskan tekstur kulit.', price: 'Rp 2,8 jt / sesi', img: 'tx-rf', alt: 'Dokter menjalankan microneedling pada pipi klien' },
  { key: 'botox', name: 'Botox & Filler', line: 'Anti-aging oleh dokter bersertifikat.', price: 'Mulai Rp 4 jt', img: 'tx-botox', alt: 'Dokter menyuntikkan botox pada area mata' },
];

export const concerns = [
  { name: 'Wajah', line: 'Acne, anti-aging, pigmentasi, brightening.', img: 'cn-wajah', alt: 'Close-up wajah dengan kulit halus', pos: '50% 40%' },
  { name: 'Tubuh', line: 'Slimming, cellulite, stretch mark.', img: 'cn-tubuh', alt: 'Klien berbaring saat perawatan tubuh', pos: '50% 40%' },
  { name: 'Laser', line: 'Hair removal, tattoo removal, scar treatment.', img: 'cn-laser', alt: 'Perangkat laser di kaki klien', pos: '50% 35%' },
  { name: 'Injectable', line: 'Botox, filler, skin booster, threadlift.', img: 'cn-injectable', alt: 'Dokter merawat wajah klien dengan sarung tangan', pos: '60% 45%' },
  { name: 'Skincare', line: 'Konsultasi produk yang personal untuk kulit Anda.', img: 'cn-skincare', alt: 'Produk skincare tertata di kain krem', pos: '50% 50%' },
  { name: 'Pria', line: 'Perawatan kulit untuk pria urban yang peduli skincare.', img: 'cn-pria', alt: 'Pria mengoleskan krim wajah', pos: '50% 35%' },
] as const;

export const devices = [
  { name: 'Picosure Pro', line: 'Pico laser tercepat untuk pigmentation' },
  { name: 'HydraFacial MD', line: 'Original dari Amerika Serikat' },
  { name: 'Morpheus8', line: 'RF microneedling deep dermal' },
  { name: 'Ultherapy', line: 'Skin lifting tanpa operasi' },
  { name: 'Lumecca IPL', line: 'Photofacial untuk redness dan sun damage' },
] as const;

export const steps = [
  { n: 1, title: 'Konsultasikan concern kulit Anda', line: 'Dokter menganalisis kondisi kulit lalu merekomendasikan treatment yang sesuai. Konsultasi pertama gratis.', img: 'step-konsultasi', alt: 'Dokter memeriksa kulit dengan dermatoskop dan tablet', pos: '50% 40%' },
  { n: 2, title: 'Jalani treatment bersama dokter', line: 'Treatment dikerjakan dokter dengan teknologi FDA-approved, di ruang yang nyaman.', img: 'step-treatment', alt: 'Klien menjalani treatment wajah dengan perangkat klinis', pos: '50% 50%' },
  { n: 3, title: 'Kontrol hasil perawatan', line: 'Kami memantau hasil dan menyesuaikan rencana. Hasil dapat bervariasi tiap individu.', img: 'step-kontrol', alt: 'Klien menjalani perawatan wajah dengan steamer', pos: '50% 45%' },
] as const;

export const doctors = [
  { name: 'Dr. Anisa Rahmawati, Sp.KK', role: 'Dermatologist', line: '12+ tahun pengalaman.', img: 'dr-anisa', alt: 'Dr. Anisa Rahmawati, Sp.KK', pos: '50% 25%' },
  { name: 'Dr. Kevin Hartono, M.Biomed (AAM)', role: 'Aesthetic Medicine', line: 'Ahli injectable.', img: 'dr-kevin', alt: 'Dr. Kevin Hartono, M.Biomed (AAM)', pos: '50% 20%' },
  { name: 'Dr. Linda Wijaya, Sp.KK', role: 'Laser specialist', line: 'Sertifikasi internasional.', img: 'dr-linda', alt: 'Dr. Linda Wijaya, Sp.KK', pos: '84% 30%' },
  { name: 'Dr. Raka Pratama', role: 'Dokter umum', line: 'Memimpin treatment tubuh.', img: 'dr-raka', alt: 'Dr. Raka Pratama', pos: '50% 20%' },
] as const;

export const tour = [
  { img: 'tour-lobby', alt: 'Lobi spa dengan kursi santai dan dinding hijau', pos: '50% 50%' },
  { img: 'tour-room', alt: 'Ruang treatment berlengkung dengan tempat tidur', pos: '50% 55%' },
  { img: 'tour-treatment', alt: 'Tempat tidur treatment dengan handuk dan lilin', pos: '50% 50%' },
  { img: 'tour-lounge', alt: 'Area santai dengan handuk tergulung dan dupa', pos: '50% 55%' },
  { img: 'tour-reception', alt: 'Ruang tunggu klinik yang terang dengan kursi biru', pos: '50% 55%' },
  { img: 'tour-bath', alt: 'Handuk linen di atas bak mandi', pos: '50% 35%' },
] as const;

export const plans = [
  {
    key: 'bridal', name: 'Bridal Glow Package', who: 'Persiapan kulit sebelum hari pernikahan.',
    price: 'Rp 12,5 jt', per: '/ 3 bulan', saving: 'Hemat 30%', img: 'plan-bridal', alt: 'Masker tidur bertuliskan Bride di meja rias', pos: '50% 50%',
    items: ['6x HydraFacial', '3x Skin Booster', 'Konsultasi 1-on-1 dengan dokter', 'Free LED therapy 4 sesi'],
  },
  {
    key: 'member', name: 'Lumière Member', who: 'Perawatan rutin dengan keuntungan member.',
    price: 'Rp 5 jt', per: '/ 6 bulan', saving: '', img: 'plan-member', alt: 'Handuk, lilin dan garam mandi di meja kayu', pos: '50% 60%',
    items: ['10% off semua treatment', 'Priority booking', 'Free birthday treatment', 'Quarterly skin analysis'],
  },
  {
    key: 'vip', name: 'VIP Annual', who: 'Satu tahun perawatan dengan aesthetician pribadi.',
    price: 'Rp 25 jt', per: '/ tahun', saving: 'Hemat 40%', img: 'plan-vip', alt: 'Botol serum putih di atas marmer', pos: '50% 55%',
    items: ['Unlimited HydraFacial', '6x signature treatment pilihan', 'Personal aesthetician', 'Home skincare bundle'],
  },
] as const;

export const faq = [
  { q: 'Apakah konsultasi pertama gratis?', a: 'Ya. Dokter menganalisis kondisi kulit Anda, lalu merekomendasikan treatment yang sesuai.' },
  { q: 'Apakah teknologi Lumière sudah teruji?', a: 'Alat kami teruji klinis dan disetujui FDA/CE, dan dioperasikan oleh dokter.' },
  { q: 'Berapa lama hasilnya terlihat?', a: 'Hasil dapat bervariasi tiap individu. Dokter menjelaskan perkiraan hasil sebelum treatment, tanpa janji berlebihan.' },
  { q: 'Berapa harga treatment?', a: 'Signature treatment mulai Rp 850 rb per sesi, botox dan filler mulai Rp 4 jt. Dokter memberi rencana setelah konsultasi.' },
  { q: 'Apakah ada treatment untuk pria?', a: 'Ya. Semua concern kulit bisa dikonsultasikan oleh wanita maupun pria.' },
  { q: 'Di mana saja cabang Lumière?', a: 'Jakarta (PIK, Kemang, Senopati), Surabaya, dan Bandung.' },
] as const;

export const branches = [
  'Jakarta, PIK',
  'Jakarta, Kemang',
  'Jakarta, Senopati',
  'Surabaya',
  'Bandung',
] as const;
