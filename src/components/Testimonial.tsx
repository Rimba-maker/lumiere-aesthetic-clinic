import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    initials: 'SH', cls: 'ta-1',
    name: 'Sari Handayani, 34',
    detail: 'Pico Laser · 4 sesi · Jakarta Selatan',
    text: 'Setelah 4 sesi Pico Laser, flek melasma yang sudah bertahun-tahun saya tanggung akhirnya memudar drastis. Dokter Anisa sangat detail dalam menjelaskan setiap tahap treatment. Hasilnya melebihi ekspektasi saya.',
  },
  {
    initials: 'RA', cls: 'ta-2',
    name: 'Rinda Amelia, 28',
    detail: 'Bridal Glow Package · Jakarta Pusat',
    text: 'Saya ambil Bridal Glow Package 3 bulan sebelum nikah. Kulit saya benar-benar glowing di hari H, tanpa perlu filter. Tim dokternya profesional dan kliniknya nyaman seperti spa mewah.',
  },
  {
    initials: 'DP', cls: 'ta-3',
    name: 'Dinda Pratiwi, 31',
    detail: 'HydraFacial MD · Lumière Member · Bandung',
    text: 'HydraFacial di Lumière beda dari tempat lain. Kulitku sensitif dan mudah breakout, tapi mereka super hati-hati. Langsung terasa bersih dan lembap habis treatment. Ini ke-8 kali dan saya tidak mau pindah ke klinik lain.',
  },
  {
    initials: 'BW', cls: 'ta-4',
    name: 'Budi Wicaksono, 42',
    detail: 'Botox Anti-aging · Surabaya',
    text: 'Sebagai pria, awalnya saya ragu. Tapi Dr. Kevin sangat profesional dan treatmentnya berbasis sains, bukan sekadar kecantikan. Botox untuk forehead lines hasilnya natural banget. Istri saya sampai tidak percaya.',
  },
  {
    initials: 'CN', cls: 'ta-5',
    name: 'Cynthia Natalja, 38',
    detail: 'VIP Annual Member · Jakarta Barat',
    text: 'VIP Annual Package worth every rupiah. Punya personal aesthetician yang selalu ingat kondisi kulit saya bikin treatment jadi lebih efektif. Plus unlimited HydraFacial — kulit saya sekarang seperti punya skincare routine premium setiap bulan.',
  },
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.3, ease: 'easeIn' } }),
};

export default function Testimonial() {
  const [[current, dir], setSlide] = useState([0, 1]);

  const go = useCallback((idx: number, d: number) => {
    setSlide([(idx + TESTIMONIALS.length) % TESTIMONIALS.length, d]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(current + 1, 1), 6000);
    return () => clearInterval(timer);
  }, [current, go]);

  const t = TESTIMONIALS[current];

  return (
    <section className="section section--dark" id="testimonial">
      <div className="container">
        <div className="section-header section-header--center">
          <p className="label-tag">Kata Mereka</p>
          <h2 className="section-heading section-heading--light">Cerita Transformasi</h2>
        </div>

        <div className="testimonial-track">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={current}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <span className="testimonial-quote">"</span>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-meta">
                <div className={`testimonial-avatar ${t.cls}`}>{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-detail">{t.detail}</div>
                  <div className="testimonial-stars">★★★★★</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="testimonial-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot${i === current ? ' active' : ''}`}
              onClick={() => go(i, i > current ? 1 : -1)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
