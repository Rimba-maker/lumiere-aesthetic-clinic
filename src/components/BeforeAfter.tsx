import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfter() {
  const [pos, setPos] = useState(50); // percentage 0–100
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dragging    = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  // Mouse
  const onMouseDown = (e: React.MouseEvent) => { dragging.current = true; updatePos(e.clientX); };
  const onMouseMove = useCallback((e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX); }, [updatePos]);
  const onMouseUp   = () => { dragging.current = false; };

  // Touch
  const onTouchStart = (e: React.TouchEvent) => { dragging.current = true; updatePos(e.touches[0].clientX); };
  const onTouchMove  = (e: React.TouchEvent) => { if (dragging.current) updatePos(e.touches[0].clientX); };
  const onTouchEnd   = () => { dragging.current = false; };

  return (
    <section className="section section--white" id="before-after">
      <div className="container">
        <div className="section-header section-header--center">
          <p className="label-tag">Hasil Nyata</p>
          <h2 className="section-heading">Hasil Yang Berbicara</h2>
          <p className="ba-disclaimer">
            Semua dokumentasi adalah klien Lumière dengan persetujuan tertulis. Hasil dapat
            bervariasi pada setiap individu berdasarkan kondisi kulit dan rencana perawatan.
          </p>
        </div>

        <motion.div
          ref={wrapperRef}
          className="ba-wrapper"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* AFTER layer (base) */}
          <div className="ba-after-panel">
            <div className="ba-glow" />
            <div className="ba-face-text ba-face-text--dark">Setelah Perawatan</div>
            <div className="ba-face-sub ba-face-sub--dark">Pico Laser · 4 sesi</div>
          </div>

          {/* BEFORE layer (clipped) */}
          <div
            className="ba-before-clip"
            style={{ width: `${pos}%` }}
          >
            <div className="ba-before-panel">
              <div className="ba-face-text ba-face-text--light">Sebelum</div>
              <div className="ba-face-sub ba-face-sub--light">Kondisi Awal</div>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="ba-divider"
            style={{ left: `${pos}%` }}
            animate={{ left: `${pos}%` }}
            transition={{ type: 'spring', stiffness: 600, damping: 40 }}
          >
            <div className="ba-handle">⟺</div>
          </motion.div>

          <span className="ba-label ba-label--before">BEFORE</span>
          <span className="ba-label ba-label--after">AFTER</span>
        </motion.div>

        <p className="ba-hint">Seret pembatas untuk membandingkan hasil</p>
      </div>
    </section>
  );
}
