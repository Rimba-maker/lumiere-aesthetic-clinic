import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Item = { icon: string; name: string; desc: string };
type Tab  = { key: string; label: string; items: Item[] };

const TABS: Tab[] = [
  {
    key: 'face', label: '🌸 Face',
    items: [
      { icon: '✨', name: 'Acne Treatment',   desc: 'Deep cleansing, extraction, dan LED untuk kulit berjerawat aktif.' },
      { icon: '⏳', name: 'Anti-Aging',        desc: 'Minimalisir garis halus dan kerutan dengan teknologi terkini.' },
      { icon: '🌟', name: 'Pigmentation',      desc: 'Atasi flek, melasma, dan hiperpigmentasi secara bertahap.' },
      { icon: '💫', name: 'Brightening',       desc: 'Cerahkan dan ratakan warna kulit untuk glow natural.' },
    ],
  },
  {
    key: 'body', label: '💪 Body',
    items: [
      { icon: '🔥', name: 'Body Slimming',     desc: 'Reduksi lemak lokal tanpa operasi dengan teknologi RF.' },
      { icon: '🌊', name: 'Cellulite Treatment', desc: 'Perhalus tekstur kulit dengan kombinasi massage & teknologi.' },
      { icon: '✦',  name: 'Stretch Mark',      desc: 'Samarkan stretch mark dengan microneedling dan laser fraksi.' },
      { icon: '💆', name: 'Body Sculpting',    desc: 'Definisikan kontur tubuh tanpa prosedur invasif.' },
    ],
  },
  {
    key: 'laser', label: '⚡ Laser',
    items: [
      { icon: '⚡', name: 'Hair Removal',      desc: 'Laser Alexandrite untuk bulu tidak diinginkan secara permanen.' },
      { icon: '🎯', name: 'Tattoo Removal',    desc: 'Pico laser untuk menghapus tato dengan minimal nyeri.' },
      { icon: '🌟', name: 'Scar Treatment',    desc: 'Atasi bekas luka dengan kombinasi laser dan growth factor.' },
      { icon: '✨', name: 'Photofacial IPL',   desc: 'Lumecca IPL untuk redness, sun damage, dan kulit merata.' },
    ],
  },
  {
    key: 'injectable', label: '💉 Injectable',
    items: [
      { icon: '💉', name: 'Botox',             desc: 'Relaxkan otot ekspresi untuk tampilan lebih muda dan segar.' },
      { icon: '💎', name: 'Dermal Filler',     desc: 'Isi volume wajah dan pertegas kontur secara natural.' },
      { icon: '💧', name: 'Skin Booster',      desc: 'Hidrasi mendalam dengan micro-injection HA premium.' },
      { icon: '✦',  name: 'Thread Lift',       desc: 'Angkat kulit kendur tanpa operasi menggunakan benang PDO.' },
    ],
  },
  {
    key: 'skincare', label: '🌿 Skincare',
    items: [
      { icon: '🌿', name: 'Skin Analysis',     desc: 'Analisis mendalam kondisi kulit dengan teknologi VISIA.' },
      { icon: '🧴', name: 'Konsultasi Dokter', desc: 'Sesi 1-on-1 dengan dokter spesialis untuk rencana perawatan personal.' },
      { icon: '📋', name: 'Skincare Regimen',  desc: 'Rekomendasi produk personalized sesuai kondisi kulit Anda.' },
      { icon: '🎯', name: 'Treatment Planning', desc: 'Program perawatan jangka panjang untuk hasil yang optimal.' },
    ],
  },
];

const panelVariants = {
  enter:  { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, y: -10, transition: { duration: 0.22, ease: 'easeIn' } },
};

export default function TreatmentCategories() {
  const [active, setActive] = useState('face');
  const currentTab = TABS.find(t => t.key === active)!;

  return (
    <section className="section section--canvas" id="categories">
      <div className="container">
        <div className="section-header">
          <p className="label-tag">Semua Layanan</p>
          <h2 className="section-heading">Solusi Untuk Setiap Concern</h2>
          <p className="section-sub">
            Dari wajah hingga tubuh, kami punya treatment yang tepat untuk kondisi kulit Anda.
          </p>
        </div>

        <nav className="tab-nav" role="tablist" aria-label="Kategori treatment">
          {TABS.map(tab => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={active === tab.key}
              className={`tab-btn${active === tab.key ? ' active' : ''}`}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={panelVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="category-grid"
          >
            {currentTab.items.map((item) => (
              <div className="category-item" key={item.name}>
                <div className="category-item-icon">{item.icon}</div>
                <div>
                  <div className="category-item-name">{item.name}</div>
                  <div className="category-item-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
