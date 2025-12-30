import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Wrench,
  Hammer,
  Lightbulb,
  Paintbrush,
  Box,
  X,
  Phone,
} from "lucide-react";

import "./RenovationTurnkey.css";

// IMPORT YOUR IMAGES HERE (replace with your actual paths)
import heroImg from "../assets/rev4.png";
import cardA from "../assets/rev3.jpg";
import cardB from "../assets/rev4.png";
import cardC from "../assets/rev5.jpg";

import gallery1 from "../assets/ren1.jpg";
import gallery2 from "../assets/ren2.jpg";
import gallery3 from "../assets/renov.jpg";
import gallery4 from "../assets/renv.jpg";

const FEATURES = [
  {
    icon: Home,
    title: "Full Home Remodeling",
    desc: "Complete makeover solutions to modernize layouts & enhance functionality.",
  },
  {
    icon: Wrench,
    title: "Kitchen & Bathroom Upgrades",
    desc: "Smart layouts, premium finishes & durable solutions.",
  },
  {
    icon: Hammer,
    title: "Structural & Layout Improvements",
    desc: "Wall removals, extensions & improved space planning.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Electrical",
    desc: "Modern lighting, wiring upgrades & energy-efficient solutions.",
  },
];

const DETAILS = [
  {
    title: "Full Home Remodeling",
    list: [
      "Complete redesign & execution",
      "Enhanced functionality & resale value",
      "Room-by-room transformation",
    ],
  },
  {
    title: "Kitchen & Bathroom Renovation",
    list: [
      "Smart layouts & tiling",
      "Premium fixtures & materials",
      "Plumbing & electrical updates",
    ],
  },
  {
    title: "False Ceilings, Flooring & Walls",
    list: [
      "Gypsum ceilings & LED profiles",
      "Wooden/vitrified flooring",
      "Texture paints & panels",
    ],
  },
  {
    title: "Custom Carpentry & Storage",
    list: [
      "Wardrobes & modular units",
      "Built-in storage solutions",
      "High-quality finishes",
    ],
  },
  {
    title: "Lighting & Electrical",
    list: [
      "Smart lighting concepts",
      "Complete rewiring",
      "Safety-enhanced installations",
    ],
  },
  {
    title: "Painting & Finishing",
    list: [
      "Premium interior painting",
      "Polishing & refinishing",
      "Final touch-ups & styling",
    ],
  },
  {
    title: "Plumbing Upgrades",
    list: [
      "Bathroom piping solutions",
      "Premium fittings installation",
      "Leak-proof execution",
    ],
  },
  {
    title: "Turnkey Execution",
    list: [
      "From planning to finishing",
      "Single-point project management",
      "Quality-controlled delivery",
    ],
  },
];

const GALLERY = [gallery1, gallery2, gallery3, gallery4];

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RenovationTurnkey() {
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });

  return (
    <div className="rt-page">

      {/* ---------------- HERO SECTION ---------------- */}
      <header className="rt-hero">
        <div className="rt-hero-overlay"></div>
        <img src={heroImg} alt="Renovation Banner" className="rt-hero-img" />

        <motion.div
          className="rt-hero-inner"
          initial={fade.hidden}
          animate={fade.show}
        >
          <div className="rt-pre">Home Renovation • Turnkey Execution</div>

          <h1 className="rt-title">
            Modern Renovation Solutions for a Fresh, Functional Home
          </h1>

          <p className="rt-sub">
            We redesign outdated homes into stylish, practical and future-ready spaces.
            From structural upgrades to high-quality finishing — we handle everything end-to-end.
          </p>

        
        </motion.div>
      </header>

      {/* ---------------- FEATURES ---------------- */}
      <section className="rt-features container">
        <motion.div
          className="rt-feat-grid"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {FEATURES.map((f, i) => (
            <motion.div key={i} className="rt-feat-card" variants={fade}>
              <div className="rt-feat-icon">
                <f.icon size={24} />
              </div>
              <div>
                <h3 style={{fontSize: "22px", fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>{f.title}</h3>
                <p className="rt-feat-desc">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- SERVICE CARDS ---------------- */}
    {/* ---------------- SERVICE CARDS ---------------- */}
<section className="rt-services container">
  <motion.h2
    className="rt-section-title"
    initial={fade.hidden}
    animate={fade.show}
    style={{
      fontFamily: "Poppins, sans-serif",
      fontWeight: 700,
      fontSize: "28px",
    }}
  >
    Renovation Services We Offer
  </motion.h2>

  <motion.div
    className="rt-services-grid"
    initial="hidden"
    animate="show"
    variants={{ show: { transition: { staggerChildren: 0.12 } } }}
  >
    {[
      {
        bg: cardA,
        title: "Modern Home Makeovers",
        sub: "Redesign • Upgrade • Transform",
        desc: "Complete remodelling with improved layout and aesthetics.",
      },
      {
        bg: cardB,
        title: "Kitchen & Bathroom Remodel",
        sub: "Tiles • Storage • Plumbing",
        desc: "Smart, beautiful, durable kitchen and bathroom upgrades.",
      },
      {
        bg: cardC,
        title: "Premium Finishing",
        sub: "Painting • Panels • Lighting",
        desc: "High-quality finishing for a stylish, polished home.",
      },
    ].map((c, i) => (
      <motion.article
        key={i}
        className="rt-card"
        variants={fade}
        whileHover={{ scale: 1.03, y: -6 }}
      >
        <div
          className="rt-card-media"
          style={{ backgroundImage: `url(${c.bg})` }}
        ></div>

        <div className="rt-card-body">
          <h3
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              marginBottom: "6px",
            }}
          >
            {c.title}
          </h3>

          <small
            className="rt-card-sub"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            {c.sub}
          </small>

          <p
            className="rt-card-desc"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#333",
              marginTop: "8px",
              lineHeight: "1.5",
            }}
          >
            {c.desc}
          </p>
        </div>
      </motion.article>
    ))}
  </motion.div>
</section>

      {/* ---------------- DETAILS ---------------- */}
     <section className="rt-details container">
  <motion.h2
    initial={fade.hidden}
    animate={fade.show}
    style={{
      fontFamily: "Poppins, sans-serif",
      fontWeight: 700,
      fontSize: "28px",
      marginBottom: "16px",
      color: "#0a0f18",
    }}
  >
    Detailed Renovation Services
  </motion.h2>

  <motion.div
    className="rt-details-grid"
    initial="hidden"
    animate="show"
    variants={{ show: { staggerChildren: 0.05 } }}
  >
    {DETAILS.map((d, i) => (
      <motion.div
        key={i}
        className="rt-detail-card"
        variants={fade}
        style={{
          fontFamily: "Poppins, sans-serif",
          padding: "18px",
          borderRadius: "12px",
        }}
      >
        <h4
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "10px",
            color: "#0a0f18",
          }}
        >
          {d.title}
        </h4>

        <ul style={{ paddingLeft: "18px", margin: 0 }}>
          {d.list.map((p, idx) => (
            <li
              key={idx}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "15px",
                color: "#3a3a3a",
                marginBottom: "6px",
                lineHeight: "1.5",
              }}
            >
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </motion.div>
</section>


      {/* ---------------- GALLERY ---------------- */}
     <section
  id="gallery"
  className="rt-gallery container"
  style={{ fontFamily: "Poppins, sans-serif" }}
>
  <motion.h2
    initial={fade.hidden}
    animate={fade.show}
    style={{
      fontFamily: "Poppins, sans-serif",
      fontSize: "28px",
      fontWeight: 700,
      marginBottom: "16px",
      color: "#0a0f18",
    }}
  >
    Renovation Gallery
  </motion.h2>

  <motion.div
    className="rt-gallery-grid"
    initial="hidden"
    animate="show"
    variants={{ show: { staggerChildren: 0.05 } }}
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    {GALLERY.map((img, i) => (
      <motion.div
        key={i}
        className="rt-gallery-item"
        variants={fade}
        whileHover={{ scale: 1.05 }}
        onClick={() => setLightbox({ open: true, idx: i })}
        style={{
          cursor: "pointer",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <img
          src={img}
          alt="renovation"
          style={{
            width: "100%",
            height: "190px",
            objectFit: "cover",
            borderRadius: "12px",
            transition: "transform 0.35s ease",
            fontFamily: "Poppins, sans-serif",
          }}
        />
      </motion.div>
    ))}
  </motion.div>
</section>


      {/* LIGHTBOX */}
      {lightbox.open && (
        <div className="rt-lightbox" onClick={() => setLightbox({ open: false, idx: 0 })}>
          <div className="rt-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="rt-lightbox-close" onClick={() => setLightbox({ open: false, idx: 0 })}>
              <X size={18} />
            </button>

            <img src={GALLERY[lightbox.idx]} alt="preview" className="rt-lightbox-img" />

            <div className="rt-lightbox-actions">
              <button
                className="rt-lb-btn"
                onClick={() =>
                  setLightbox((s) => ({ ...s, idx: (s.idx - 1 + GALLERY.length) % GALLERY.length }))
                }
              >
                Prev
              </button>

              <button
                className="rt-lb-btn"
                onClick={() => setLightbox((s) => ({ ...s, idx: (s.idx + 1) % GALLERY.length }))}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- CONTACT CTA ---------------- */}
   <section id="contact" className="rt-contact container">
  <motion.div
    className="rt-contact-card"
    initial={fade.hidden}
    animate={fade.show}
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    <div>
      <h3
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "22px",
          fontWeight: 700,
          marginBottom: "6px",
          color: "#0a0f18",
        }}
      >
        Ready to Renovate Your Home?
      </h3>

      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "15px",
          color: "#3a3a3a",
          lineHeight: "1.5",
          maxWidth: "520px",
        }}
      >
        We redesign your space with modern style, upgraded functionality & durable finishes.
      </p>
    </div>

    <div className="rt-contact-actions" style={{ display: "flex", gap: "12px" }}>
      <a
        href="tel:+919999999999"
        className="rt-btn-primary"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          padding: "12px 20px",
          borderRadius: "12px",
        }}
      >
        Call Us
      </a>

      <a
        href="/get-quote"
        className="rt-btn-ghost"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          padding: "12px 20px",
          borderRadius: "12px",
        }}
      >
        Get Quote
      </a>
    </div>
  </motion.div>
</section>

    </div>
  );
}
