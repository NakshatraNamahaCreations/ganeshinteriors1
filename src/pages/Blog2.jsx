import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import heroImg from "../assets/work1.jpg"; // SAME as Blog1 banner
import "./Blog2.css";

export default function Blog2() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const FAQS = [
    {
      q: "What is the first step in home interior design?",
      a:
        "The first step is understanding your space, lifestyle needs and the theme you want to achieve. This guides colour choices, layout and furniture planning.",
    },
    {
      q: "Why are modular kitchen design ideas important?",
      a:
        "They improve workflow, maximise storage and support efficient cooking. Modular setups are modern, easy to maintain and customisable.",
    },
    {
      q: "How do I choose colours for my home?",
      a:
        "Choose colours based on mood and lighting. Neutrals create calm spaces while bold colours add energy and personality.",
    },
    {
      q: "How can I make a small home look bigger?",
      a:
        "Use light shades, mirrors, minimal furniture and vertical storage. Keep the layout open and clutter-free.",
    },
    {
      q: "What materials are best for modular kitchen cabinets?",
      a:
        "High-quality plywood with laminate, acrylic or membrane finish offers durability and easy maintenance.",
    },
  ];

  const KITCHEN_FEATURES = [
    {
      title: "Work Triangle Concept",
      desc: "Improves workflow between stove, sink and refrigerator.",
    },
    {
      title: "L-Shaped & U-Shaped Layouts",
      desc: "Perfect for larger kitchens with more counter space.",
    },
    {
      title: "Straight & Parallel Layouts",
      desc: "Best for compact modern apartments.",
    },
    {
      title: "Smart Storage Solutions",
      desc: "Tall units, deep drawers, spice pull-outs and carousels.",
    },
    {
      title: "Durable Material Choices",
      desc: "Quartz countertops with strong plywood cabinetry.",
    },
    {
      title: "Lighting & Accessories",
      desc: "LED strips, soft-close drawers and breakfast counters.",
    },
  ];

  return (
    <div className="blog2-page">
      {/* HERO */}
      <header className="blog2-hero">
        <img src={heroImg} alt="Interior Design Banner" className="blog2-hero-img" />
        <div className="blog2-hero-overlay" />

        <div className="blog2-hero-content">
          <span className="blog2-tag">Home Interior • Guide</span>
          <h1 className="blog2-title">A Complete Guide to Home Interior Design</h1>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="blog2-content container">
        
        {/* INTRO */}
        <section className="blog2-intro">
          <motion.p variants={fadeUp} initial="hidden" animate="show">
            Designing a home blends creativity, comfort and function. A well-designed home reflects 
            your lifestyle and ensures long-term practicality. This guide covers planning, furniture, 
            lighting, colours and modular kitchen ideas to help you create a harmonious living space.
          </motion.p>
        </section>

        {/* BASICS */}
        <section className="blog2-section">
          <h2 className="blog2-heading">Understanding the Basics of Interior Design</h2>
          <p>
            Interior design relies on balance, proportion, colour harmony, texture, lighting and 
            smart space utilisation. When these elements work together, they create visually calm 
            and functional environments.
          </p>
        </section>

        {/* THEME */}
        <section className="blog2-section">
          <h2 className="blog2-heading">Choosing the Right Theme</h2>
          <p>
            Themes like Scandinavian, modern minimalistic, industrial, traditional Indian and 
            luxury classic help create cohesion. Choose one that reflects your taste and lifestyle.
          </p>
        </section>

        {/* SPACE PLANNING */}
        <section className="blog2-section">
          <h2 className="blog2-heading">Space Planning & Layout</h2>
          <p>
            Efficient layouts improve daily living. Use vertical storage in small homes, avoid 
            overcrowding and create functional zones like reading corners or entertainment spaces.
          </p>
        </section>

        {/* COLOURS */}
        <section className="blog2-section">
          <h2 className="blog2-heading">Colour Selection & Wall Treatments</h2>
          <p>
            Light shades make rooms feel spacious, while bold tones add personality. Accent walls, 
            textured paint, wallpapers, fluted panels and wood cladding elevate aesthetics.
          </p>
        </section>

        {/* FURNITURE */}
        <section className="blog2-section">
          <h2 className="blog2-heading">Furniture Selection & Arrangement</h2>
          <p>
            Choose durable, ergonomic furniture. Avoid oversized pieces in smaller rooms and 
            maintain healthy walking space for comfort.
          </p>
        </section>

        {/* LIGHTING */}
        <section className="blog2-section">
          <h2 className="blog2-heading">Lighting Essentials</h2>
          <p>
            Natural light enhances mood, while layered lighting (ambient, task and accent) adds 
            depth and character. Warm lights work best for cosy settings.
          </p>
        </section>

        {/* KITCHEN FEATURES (GRID LIKE BLOG1 CARDS) */}
        <section className="blog2-section">
          <h2 className="blog2-heading">Modular Kitchen Design Ideas</h2>

          <motion.div
            className="blog2-cards-grid"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {KITCHEN_FEATURES.map((f, i) => (
              <motion.article
                key={i}
                className="blog2-card"
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <h3 className="card-title">{f.title}</h3>
                <p>{f.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* CONCLUSION */}
        <section className="blog2-section">
          <h2 className="blog2-heading">Conclusion</h2>
          <p>
            With thoughtful planning and intentional design choices, your home becomes more than 
            a living space — it becomes a reflection of your personality, comfort and lifestyle.
          </p>
        </section>

        {/* FAQ */}
        <section className="blog2-section">
          <h2 className="blog2-heading">FAQs</h2>

          <div className="faq-wrap">
            {FAQS.map((faq, idx) => (
              <div className="faq-card" key={idx}>
                <button className="faq-question" onClick={() => toggleFAQ(idx)}>
                  <span>{faq.q}</span>
                  <ChevronDown className={`faq-arrow ${openFAQ === idx ? "rotate" : ""}`} />
                </button>

                <motion.div
                  className="faq-answer-wrapper"
                  initial={false}
                  animate={openFAQ === idx ? "open" : "closed"}
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.32 }}
                >
                  <p className="faq-answer">{faq.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
