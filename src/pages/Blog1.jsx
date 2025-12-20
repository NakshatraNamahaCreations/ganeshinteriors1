// src/pages/Blog1.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Box,
  Palette,
  PanelsTopLeft,
  Cpu,
  Database,
  Coffee,
  Feather,
  Sun,
  Leaf,
  ChevronDown,
} from "lucide-react";

import heroImg from "../assets/work1.jpg"; // update path if needed
import "./Blog1.css";

export default function Blog1() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const cardAnim = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const FEATURES = [
    {
      id: 1,
      icon: LayoutGrid,
      title: "Minimalist and Clean Line Kitchens",
      highlight: "Calm, clutter-free & open.",
      desc:
        "Minimalism continues to inspire contemporary kitchen interiors. Clean lines, subtle colours and clutter-free surfaces create a calming environment that feels open and organised. Handleless profiles and push-to-open cabinets give a seamless look — ideal for small urban kitchens.",
    },
    {
      id: 2,
      icon: Box,
      title: "Smart Storage & Space Optimisation",
      highlight: "Maximise every inch.",
      desc:
        "As apartments become smaller, intelligent storage solutions are essential. Pull-out pantry units, corner carousels, bottle pull-outs, skirting drawers and vertical organisers maintain a neat and efficient kitchen.",
    },
    {
      id: 3,
      icon: Palette,
      title: "Two-Tone Colour Combinations",
      highlight: "Depth, contrast & personality.",
      desc:
        "Two-tone kitchens bring depth and balance. Pair dark lower cabinets with lighter uppers — matte navy + white, forest green + ash grey or earthy brown + cream — for a luxurious appeal.",
    },
    {
      id: 4,
      icon: PanelsTopLeft,
      title: "Open Shelving for Display & Accessibility",
      highlight: "Airy display & quick access.",
      desc:
        "Open shelving breaks the monotony of closed cabinets and allows easy access to frequently used items. Mix open shelves with closed units to strike a balance between display and storage.",
    },
    {
      id: 5,
      icon: Cpu,
      title: "Integrated Appliances for a Sleek Finish",
      highlight: "Seamless appliance integration.",
      desc:
        "Integrated appliances — built-in microwaves, dishwashers, refrigerators and cooktops — blend with cabinetry for a cohesive, high-end look while saving space and reducing visual clutter.",
    },
    {
      id: 6,
      icon: Database,
      title: "Island Kitchens with Multi-Purpose Functionality",
      highlight: "Prep, dine & socialise.",
      desc:
        "Kitchen islands serve multiple purposes: prep space, dining counter, storage, and a social spot. Add drawers, shelves or built-in appliances to increase functionality and make the island a centrepiece.",
    },
    {
      id: 7,
      icon: Feather,
      title: "Use of Natural Materials & Textures",
      highlight: "Warmth & natural richness.",
      desc:
        "Natural materials — wood textures, quartz countertops and stone-effect tiles — add richness and depth. Wood-grain laminates and rattan elements create an inviting, textured kitchen aesthetic.",
    },
    {
      id: 8,
      icon: Sun,
      title: "Ambient & Task Lighting Enhancements",
      highlight: "Layered lighting for mood & work.",
      desc:
        "Layered lighting (ambient, task and accent) is essential: LED strips under cabinets, pendant lights over islands and recessed ceiling lights create both mood and functionality.",
    },
    {
      id: 9,
      icon: Coffee,
      title: "Bold Backsplashes for Character",
      highlight: "Instant style with backsplash.",
      desc:
        "Bold backsplashes — patterned tiles, textured stone or back-painted glass — are used as a canvas to showcase personality and can transform the overall appearance of the kitchen.",
    },
    {
      id: 10,
      icon: Leaf,
      title: "Eco-Friendly & Sustainable Kitchens",
      highlight: "Greener materials & appliances.",
      desc:
        "Sustainable choices are on the rise: bamboo, recycled wood, low-VOC laminates and energy-efficient appliances deliver a healthier kitchen and reduced environmental impact.",
    },
  ];

  const FAQS = [
    {
      q: "What makes modular kitchens better than traditional kitchens?",
      a:
        "Modular kitchens offer better organisation, customisation and space utilisation. They include specialised storage units, built-in appliances and modern layouts that improve efficiency.",
    },
    {
      q: "Which layout is best among modular kitchen design ideas?",
      a:
        "The ideal layout depends on your space: L-shaped or straight for small kitchens; U-shaped and island for larger homes with more workspace.",
    },
    {
      q: "What materials are recommended for modular kitchens?",
      a:
        "High-quality laminates, acrylic finishes, wood grain textures, quartz countertops and stainless steel accessories are commonly used for durability and style.",
    },
    {
      q: "How do I maintain a modular kitchen easily?",
      a:
        "Regular cleaning, organised storage, proper appliance maintenance and using soft-closing hardware help keep modular kitchens functional for years.",
    },
    {
      q: "Are modular kitchens suitable for small apartments?",
      a:
        "Yes. Modular kitchens maximise vertical storage, use compact layouts and smart accessories to make small spaces highly efficient.",
    },
  ];

  return (
    <div className="blog1-page">
      {/* HERO */}
      <header className="blog1-hero">
        <img src={heroImg} alt="Modular Kitchen" className="blog1-hero-img" />
        <div className="blog1-hero-overlay" />
        <div className="blog1-hero-content">
          <span className="blog1-tag">Modular Kitchen • Trends</span>
          <h1 className="blog1-title">Trending Modular Kitchen Design Ideas</h1>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="blog1-content container">
        {/* INTRO PARAGRAPHS */}
        <section className="intro-text">
          <motion.p variants={cardAnim} initial="hidden" animate="show">
            A modular kitchen is no longer a luxury in modern homes. It has become a practical,
            stylish and highly efficient solution for families who want a clutter free cooking
            experience. Over the years, modular kitchen design ideas have evolved dramatically,
            blending beauty, comfort and smart functionality in ways that were never seen before.
            Today homeowners look for kitchens that simplify daily tasks, maximise storage and
            reflect their personal style. If you are planning to renovate your cooking space or
            build a new one, understanding the latest trends can help you make confident decisions
            that enhance both aesthetics and usability.
          </motion.p>
        </section>

        {/* FEATURE CARDS */}
        <section className="cards-section">
          <motion.div
            className="cards-grid"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <motion.article
                  key={f.id}
                  className="feature-card"
                  variants={cardAnim}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  <div className="feature-media">
                    <div className="feature-icon-wrap">
                      <Icon size={22} className="feature-icon" />
                    </div>

                    <h3 className="feature-title">{f.title}</h3>
                    <p className="feature-highlight">{f.highlight}</p>
                  </div>

                  <div className="feature-body">
                    <p>{f.desc}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* CONCLUSION */}
        <section className="conclusion">
          <h2 className="blog1-heading">Conclusion</h2>
          <p>
            Modular kitchen design ideas are becoming more innovative, practical and visually
            appealing every year. The latest trends highlight a perfect balance of style, comfort
            and intelligent functionality. Whether you prefer a minimalist look, a bold colour
            palette, a highly equipped modern setup or a warm natural aesthetic, there is a
            modular kitchen design that suits your needs. A well planned modular kitchen not only
            enhances your cooking experience but also adds value to your home for the long term.
          </p>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <h2 className="blog1-heading">FAQs</h2>

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
