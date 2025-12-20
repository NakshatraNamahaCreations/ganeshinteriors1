import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Cpu, LayoutGrid, Box, Wrench, Phone, X } from "lucide-react"; 
import "./ModularKitchen.css";

// Images
import heroImg from "../assets/kt2.jpg";
import featureA from "../assets/kt1.jpg";
import featureB from "../assets/kt2.jpg";
import featureC from "../assets/kt3.jpg";
import gallery1 from "../assets/k4.webp";
import gallery2 from "../assets/kt5.jpeg";
import gallery3 from "../assets/kt6.jpg";
import gallery4 from "../assets/kt7.webp";

const FEATURES = [
  {
    id: 1,
    title: "Smart Kitchen Layouts",
    desc: "L-shape, U-shape, island & straight kitchens — optimized for workflow and ergonomics.",
    icon: LayoutGrid,
  },
  {
    id: 2,
    title: "Premium Hardware",
    desc: "Soft-close hinges, quality shutters, and durable countertops for years of trouble-free use.",
    icon: Wrench,
  },
  {
    id: 3,
    title: "Built-in Appliances",
    desc: "Neat integration for ovens, chimneys, dishwashers, microwaves & refrigerators.",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Smart Storage Systems",
    desc: "Magic corners, tall units, pull-outs and carousel units for maximum utility.",
    icon: Box,
  },
];

const DETAILS = [
  {
    title: "Modular Kitchens — What we offer",
    points: [
      "L-shape, U-shape, island & straight kitchens",
      "Soft-close hinges & premium hardware",
      "High-quality shutters & countertop choices",
      "Built-in appliances integration",
      "Smart storage: tall units, magic corners, carousel units",
    ],
  },
  {
    title: "Modular Wardrobes — Options",
    points: [
      "Sliding & hinged wardrobe systems",
      "Walk-in wardrobe designs",
      "Internal organizing systems (drawers, shelves, accessory units)",
      "Premium finishes: laminate, PU, veneer, glass & more",
    ],
  },
  {
    title: "Design Approach",
    points: [
      "Ergonomic countertop heights",
      "Work triangle optimization",
      "Material & color selection",
      "3D visualization & layout planning",
      "On-site supervision & turnkey execution",
    ],
  },
  {
    title: "Why Choose Us",
    points: [
      "Tailored modular solutions",
      "High durability finishes",
      "Transparent costing & timelines",
      "Post-installation support & warranty",
    ],
  },
];

const GALLERY = [gallery1, gallery2, gallery3, gallery4];

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ModularKitchen() {
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });
  const controls = useAnimation();

  // Parallax Hero Animation
  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 6;
      controls.start({ transform: `translate(${x}px, ${y}px) scale(1.06)` });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [controls]);

  return (
    <div className="mk-page">
      {/* HERO */}
      <header className="mk-hero">
        <div className="mk-hero-overlay" />
        <motion.img
          src={heroImg}
          alt="Modular Kitchen hero"
          className="mk-hero-img"
          animate={controls}
          initial={{ transform: "translate(0px,0px) scale(1.06)" }}
        />

        <motion.div className="mk-hero-inner" variants={heroVariants} initial="hidden" animate="show">
          <div className="mk-pre">Modular Kitchens & Wardrobes</div>

          <h1 className="mk-title">
            Stylish Modular Kitchens & Smart Wardrobes — Built for Everyday Living
          </h1>

          <p className="mk-sub">
            Designed for efficiency, built for durability — every module crafted to simplify your daily routine.
          </p>

      
        </motion.div>
      </header>

      {/* FEATURES */}
      <section className="mk-features container">
        <motion.div
          className="mk-feat-grid"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {FEATURES.map((f) => (
            <motion.div key={f.id} className="mk-feat-card" variants={fadeUp}>
              <div className="mk-feat-icon"><f.icon size={22} /></div>
              <div>
                <h3 className="mk-feat-title">{f.title}</h3>
                <p className="mk-feat-desc">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SERVICE CARDS */}
      <section className="mk-services container">
        <h2 className="mk-section-title">What We Deliver</h2>

        <motion.div className="mk-services-grid" initial="hidden" animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            { bg: featureA, title: "End-to-end Design", sub: "Plan • Visualize • Deliver", desc: "From layout planning to installation — complete project delivery." },
            { bg: featureB, title: "Premium Materials", sub: "Laminate • PU • Veneer", desc: "Durable finishes to match your style & budget." },
            { bg: featureC, title: "Space-Saving Systems", sub: "Magic Corners • Tall Units", desc: "Innovative storage to utilize every inch." }
          ].map((c, idx) => (
            <motion.article key={idx} className="mk-card" variants={fadeUp} whileHover={{ scale: 1.02, y: -6 }}>
              <div className="mk-card-media" style={{ backgroundImage: `url(${c.bg})` }} />
              <div className="mk-card-body">
                <h3>{c.title}</h3>
                <small className="mk-card-sub">{c.sub}</small>
                <p className="mk-card-desc">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* DETAILS */}
      <section className="mk-details container">
        <h2>Modular Kitchen & Wardrobe Details</h2>

        <motion.div className="mk-details-grid" initial="hidden" animate="show"
          variants={{ show: { staggerChildren: 0.06 } }}
        >
          {DETAILS.map((d, i) => (
            <motion.div key={i} className="mk-detail-card" variants={fadeUp}>
              <h4>{d.title}</h4>
              <ul>
                {d.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mk-gallery container">
        <h2>Installations & Examples</h2>

        <motion.div className="mk-gallery-grid" initial="hidden" animate="show"
          variants={{ show: { staggerChildren: 0.06 } }}
        >
          {GALLERY.map((g, i) => (
            <motion.div key={i} className="mk-gallery-item" variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              onClick={() => setLightbox({ open: true, idx: i })}
            >
              <img src={g} alt={`gallery-${i}`} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div className="mk-lightbox" onClick={() => setLightbox({ open: false, idx: 0 })}>
          <div className="mk-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="mk-lightbox-close" onClick={() => setLightbox({ open: false, idx: 0 })}>
              <X size={18} />
            </button>

            <img src={GALLERY[lightbox.idx]} alt="preview" className="mk-lightbox-img" />

            <div className="mk-lightbox-actions">
              <button className="mk-lb-btn"
                onClick={() =>
                  setLightbox((s) => ({ ...s, idx: (s.idx - 1 + GALLERY.length) % GALLERY.length }))
                }
              >
                Prev
              </button>
              <button className="mk-lb-btn"
                onClick={() =>
                  setLightbox((s) => ({ ...s, idx: (s.idx + 1) % GALLERY.length }))
                }
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
