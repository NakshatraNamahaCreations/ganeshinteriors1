import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  LayoutGrid,
  Box,
  Sun,
  Layers,
  Feather,
  Phone,
  X,
} from "lucide-react";

import "./ResidentialInteriorDesign.css";

// Local images (replace with your uploads in /src/assets/residential/)
import heroImg from "../assets/heros.jpg";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import gallery1 from "../assets/card4.jpg";
import gallery2 from "../assets/card1.jpg";
import gallery3 from "../assets/card3.jpg";
import gallery4 from "../assets/card2.jpg";

const SERVICES = [
  {
    id: 1,
    title: "Complete Home Interior Design",

    desc:
      "End-to-end design & execution — tailored layouts, procurement and handover.",
    bg: card1,
    icon: Home,
  },
  {
    id: 2,
    title: "Concept & 2D/3D Visualizations",

    desc:
      "Photoreal 3D renders, detailed plans and material boards to visualize your home.",
    bg: card2,
    icon: LayoutGrid,
  },
  {
    id: 3,
    title: "Space Optimization & Storage",
  
    desc:
      "Built-in solutions and furniture that maximize usability without compromising style.",
    bg: card3,
    icon: Box,
  },
];

const GALLERY = [gallery1, gallery2, gallery3, gallery4].filter(Boolean);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ResidentialInteriorDesign() {
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });

  return (
    <div className="rid-page">
      {/* HERO */}
      <header className="rid-hero">
        <div className="hero-overlay" />
        <img src={heroImg} alt="Residential hero" className="hero-img" />
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-pretitle">Residential Interiors • Crafted for living</div>
          <h1 className="hero-title">
            Warm, functional & luxuriously livable homes
          </h1>
          <p className="hero-sub">
            We design spaces that marry comfort with aesthetic intelligence —
            from clever storage to curated material palettes.
          </p>

        
        </motion.div>
      </header>

      {/* INTRO / QUICK FEATURES */}
      <section className="rid-intro container">
        <motion.div
          className="intro-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="intro-card">
            <div className="intro-icon">
              <LayoutGrid size={26} />
            </div>
            <div>
           <h3 style={{ fontSize: "25px", fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>
Concept & Visualization</h3>
              <p>Create with confidence using moodboards, plans and photoreal renders.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="intro-card">
            <div className="intro-icon">
              <Sun size={26} />
            </div>
            <div>
                <h3 style={{ fontSize: "25px", fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>Lighting & Ambience</h3>
              <p>Layered lighting plans for mood and function in every room.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="intro-card">
            <div className="intro-icon">
              <Feather size={26} />
            </div>
            <div>
               <h3 style={{ fontSize: "25px", fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>Materials & Finishes</h3>
              <p>Curated palettes and tactile finishes for a lasting premium look.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES — Big Feature Cards */}
      <section className="rid-services container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          What we offer
        </motion.h2>

        <motion.div className="services-grid" variants={container} initial="hidden" animate="show">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.id}
              className="service-card"
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -6 }}
            >
              <div
                className="service-media"
                style={{ backgroundImage: `url(${s.bg})` }}
                aria-hidden
              />
              <div className="service-body">
                <div className="service-head">
                  <s.icon size={22} />
                  <div className="service-meta">
                    <h3>{s.title}</h3>
                    <small>{s.subtitle}</small>
                  </div>
                </div>
                <p className="service-desc">{s.desc}</p>

                <div className="service-cta">
              
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* PROCESS STEPS */}
      <section className="rid-process container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          Our process
        </motion.h2>

        <motion.ol className="process-steps" variants={container} initial="hidden" animate="show">
          <motion.li className="step" variants={fadeUp}>
            <div className="step-num">1</div>
            <div className="step-body">
              <h4>Discovery & Brief</h4>
              <p>We map your needs, daily flow and priorities to create a clear brief.</p>
            </div>
          </motion.li>

          <motion.li className="step" variants={fadeUp}>
            <div className="step-num">2</div>
            <div className="step-body">
              <h4>Design & Visuals</h4>
              <p>Layouts, material boards and 3D visuals help you finalize decisions.</p>
            </div>
          </motion.li>

          <motion.li className="step" variants={fadeUp}>
            <div className="step-num">3</div>
            <div className="step-body">
              <h4>Execution & Styling</h4>
              <p>Procurement, site work and final styling until the handover is flawless.</p>
            </div>
          </motion.li>
        </motion.ol>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="rid-gallery container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          Portfolio
        </motion.h2>

        <motion.div className="gallery-grid" variants={container} initial="hidden" animate="show">
          {GALLERY.map((img, idx) => (
            <motion.div
              key={idx}
              className="gallery-item"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              onClick={() => setLightbox({ open: true, idx })}
            >
              <img src={img} alt={`gallery-${idx}`} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LIGHTBOX / IMAGE VIEWER */}
      {lightbox.open && (
        <div className="lightbox" onClick={() => setLightbox({ open: false, idx: 0 })}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox({ open: false, idx: 0 })}>
              <X size={20} />
            </button>
            <img src={GALLERY[lightbox.idx]} alt="open" className="lightbox-img" />
            <div className="lightbox-actions">
              <button
                onClick={() => setLightbox((s) => ({ ...s, idx: (s.idx - 1 + GALLERY.length) % GALLERY.length }))}
                className="lb-btn"
              >
                Prev
              </button>
              <button
                onClick={() => setLightbox((s) => ({ ...s, idx: (s.idx + 1) % GALLERY.length }))}
                className="lb-btn"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
