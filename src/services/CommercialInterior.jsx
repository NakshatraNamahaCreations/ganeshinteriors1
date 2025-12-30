import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  LayoutGrid,
  Users,
  Monitor,
  Lightbulb,
  Phone,
  X,
} from "lucide-react";

import "./CommercialInterior.css";

// images (keep your existing imports)
import heroImg from "../assets/cms.webp";
import cardA from "../assets/commercial1.jpg";
import cardB from "../assets/commercial2.jpg";
import cardC from "../assets/commercial3.jpg";
import gallery1 from "../assets/cg1.jpg";
import gallery2 from "../assets/cg2.webp";
import gallery3 from "../assets/cg3.jpg";
import gallery4 from "../assets/cg4.jpg";

const FEATURES = [
  { id: 1, title: "Space Planning & Layout", text: "Smooth circulation, optimised seating & efficient zoning.", icon: LayoutGrid },
  { id: 2, title: "Modern Workspace Concepts", text: "Hybrid setups, cabins, open zones & collaboration spaces.", icon: Users },
  { id: 3, title: "Custom Furniture", text: "Modular desks, reception counters & conference tables.", icon: Monitor },
  { id: 4, title: "Lighting & Electrical", text: "Ambient, task & accent lighting with efficient wiring.", icon: Lightbulb },
];

const DETAILS = [
  { title: "1. Space Planning & Layout Design", text: "Strategic layouts ensuring efficient movement, seating optimisation & zoning." },
  { title: "2. Modern Workspace Concepts", list: ["Open collaboration workspaces","Hybrid hot-desking zones","Focus rooms & breakout areas","Executive cabins","Creative brainstorming corners"] },
  { title: "3. Custom Furniture & Workstations", text: "Modular workstations, reception counters, storage units & conference tables." },
  { title: "4. Lighting & Electrical Planning", text: "Balanced ambient, task & accent lighting with energy-efficient layouts." },
  { title: "5. Brand-Focused Styling", text: "Brand themes, logo walls, color palettes & identity-driven décor." },
  { title: "6. Conference Rooms", text: "Acoustics, AV technology, seating & professional meeting arrangements." },
  { title: "7. Breakout Zones & Cafeterias", text: "Lounges, pantry areas & recreational spaces for relaxation." },
  { title: "8. Turnkey Execution", text: "Civil, flooring, electrical, carpentry, painting & complete handover." },
];

const GALLERY = [gallery1, gallery2, gallery3, gallery4];

const heroVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const fadeUp = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function CommercialInterior() {
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });
  const controls = useAnimation();

  // gentle hero parallax on mouse move
  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10; // -5 -> 5
      const y = (e.clientY / innerHeight - 0.5) * 6; // -3 -> 3
      controls.start({ transform: `translate(${x}px, ${y}px) scale(1.03)` });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [controls]);

  return (
    <div className="ci-page">

      {/* HERO */}
      <header className="ci-hero">
        <div className="ci-hero-overlay" />
        <motion.img
          src={heroImg}
          alt="Commercial Interiors"
          className="ci-hero-img"
          animate={controls}
          initial={{ transform: "translate(0px,0px) scale(1.06)" }}
        />

        <motion.div className="ci-hero-inner" variants={heroVariants} initial="hidden" animate="show">
          <div className="ci-pre">Commercial Interiors • Office Spaces</div>

          <motion.h1
            className="ci-title"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.8 }}
          >
            Designing Modern, Productive & Brand-Driven Workplaces
          </motion.h1>

          <motion.p className="ci-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22, duration: 0.7 }}>
            Transforming workspaces with smart space planning, modern concepts, ergonomic designs & complete turnkey execution.
          </motion.p>

       
        </motion.div>
      </header>

      {/* INTRO FEATURES */}
      <section className="ci-intro container">
        <motion.div className="ci-intro-grid" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          {FEATURES.map((f) => (
            <motion.div key={f.id} className="ci-intro-card" variants={fadeUp} whileHover={{ translateY: -6, boxShadow: "0 16px 40px rgba(12,15,22,0.08)" }}>
              <div className="ci-intro-icon"><f.icon size={22} /></div>
              <div>
                <h3 className="ci-feature-title">{f.title}</h3>
                <p className="ci-feature-text">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SERVICE CARDS */}
      <section className="ci-services container">
        <motion.h2 className="ci-section-title" variants={fadeUp} initial="hidden" animate="show">Services We Deliver</motion.h2>

        <motion.div className="ci-services-grid" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          {[
            { bg: cardA, title: "Brand-Focused Styling", sub: "Themes • Colors • Identity", desc: "Impactful design aligned with your brand personality." },
            { bg: cardB, title: "Conference Rooms", sub: "Acoustics • AV Setup", desc: "Smart meeting spaces built for productivity." },
            { bg: cardC, title: "Breakout Zones", sub: "Relax • Refresh", desc: "Well-designed lounges & pantry areas." },
          ].map((c, idx) => (
            <motion.article key={idx} className="ci-card" variants={fadeUp} whileHover={{ scale: 1.025, y: -8 }} transition={{ type: "spring", stiffness: 180, damping: 14 }}>
              <div className="ci-card-media" style={{ backgroundImage: `url(${c.bg})` }} />
              <div className="ci-card-body">
                <h3>{c.title}</h3>
                <small className="ci-card-sub">{c.sub}</small>
                <p className="ci-card-desc">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* DETAILED OFFERINGS */}
      <section className="ci-details container">
        <motion.h2 variants={fadeUp} initial="hidden" animate="show">Detailed Offerings</motion.h2>

        <motion.div className="ci-details-grid" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.06 } } }}>
          {DETAILS.map((item, i) => (
            <motion.div key={i} className="ci-detail-card" variants={fadeUp} whileHover={{ translateY: -6 }}>
              <h4>{item.title}</h4>
              {item.list ? <ul>{item.list.map((l, k) => <li key={k}>{l}</li>)}</ul> : <p>{item.text}</p>}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="ci-gallery container">
        <motion.h2 variants={fadeUp} initial="hidden" animate="show">Case Studies</motion.h2>

        <motion.div className="ci-gallery-grid" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.05 } } }}>
          {GALLERY.map((img, i) => (
            <motion.div key={i} className="ci-gallery-item" variants={fadeUp} whileHover={{ scale: 1.05 }} onClick={() => setLightbox({ open: true, idx: i })}>
              <img src={img} alt={`office-${i}`} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div className="ci-lightbox" onClick={() => setLightbox({ open: false, idx: 0 })}>
          <div className="ci-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="ci-lightbox-close" onClick={() => setLightbox({ open: false, idx: 0 })}><X size={18} /></button>
            <img src={GALLERY[lightbox.idx]} alt="preview" className="ci-lightbox-img" />
            <div className="ci-lightbox-actions">
              <button className="ci-lb-btn" onClick={() => setLightbox(s => ({ ...s, idx: (s.idx - 1 + GALLERY.length) % GALLERY.length }))}>Prev</button>
              <button className="ci-lb-btn" onClick={() => setLightbox(s => ({ ...s, idx: (s.idx + 1) % GALLERY.length }))}>Next</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
