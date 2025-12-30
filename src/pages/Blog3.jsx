import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import heroImg from "../assets/ren1.jpg"; // SAME hero image as Blog1 / Blog2
import "./Blog3.css";

export default function Blog3() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const IDEAS = [
    {
      title: "Open Layouts That Encourage Collaboration",
      desc:
        "Open plans break down barriers and promote communication. They improve light flow and make teamwork easier while requiring quiet zones for focused work.",
    },
    {
      title: "Private Focus Zones",
      desc:
        "Small rooms or pods provide places for deep concentration, private calls and uninterrupted work — balancing collaboration with focus.",
    },
    {
      title: "Biophilic Elements for Wellbeing",
      desc:
        "Integrate plants, green walls, natural textures and daylight. Biophilic design reduces stress, boosts creativity and improves air quality.",
    },
    {
      title: "Ergonomic Furniture for Comfort",
      desc:
        "Choose chairs with lumbar support, height-adjustable desks and ergonomic accessories to reduce fatigue and improve posture over long shifts.",
    },
    {
      title: "Statement Reception Area",
      desc:
        "Design a welcoming reception using brand colors, warm lighting and clear visual hierarchy to form a strong first impression.",
    },
    {
      title: "Creative Meeting Rooms",
      desc:
        "Design meeting spaces with writable walls, flexible seating and mood lighting. Use color psychology to encourage creativity or focus.",
    },
    {
      title: "Smart Storage Solutions",
      desc:
        "Hidden cabinets, wall shelves and modular storage reduce clutter and support a minimal, efficient workspace.",
    },
    {
      title: "Breakout Areas for Relaxation",
      desc:
        "Provide comfy sofas, games or quiet corners to let employees recharge and connect informally — key for wellbeing and bonding.",
    },
    {
      title: "Branding Through Design",
      desc:
        "Reinforce brand identity with palettes, wall art and logos so the office feels cohesive and communicates company values.",
    },
    {
      title: "Technology Integration",
      desc:
        "Include cable management, built-in charging, video conferencing tools and smart lighting to keep the office efficient and future-proof.",
    },
  ];

  const FAQS = [
    {
      q: "What is office interior design and why is it important?",
      a:
        "Office interior design is the planning and decoration of a workplace to improve efficiency, comfort and aesthetics. It boosts productivity, employee wellbeing and brand image.",
    },
    {
      q: "How can I make a small office look spacious?",
      a:
        "Use light colours, glass partitions, minimal furniture, vertical storage and natural light. Smart space planning keeps the layout functional and airy.",
    },
    {
      q: "What colours work best for office spaces?",
      a:
        "Neutral tones like white, beige and grey create a calm base. Accent colours such as blue, green and yellow can be used to influence mood and brand identity.",
    },
    {
      q: "How do plants improve office interior design?",
      a:
        "Plants improve air quality, reduce stress and add warmth. They visually soften spaces and contribute to overall wellbeing.",
    },
    {
      q: "What are the main elements of a modern office interior design?",
      a:
        "Key elements include open layouts, ergonomic furniture, smart storage, biophilic features, technology integration and flexible zones for collaboration and privacy.",
    },
  ];

  return (
    <div className="blog3-page">
      {/* HERO */}
      <header className="blog3-hero">
        <img src={heroImg} alt="Office Interior Banner" className="blog3-hero-img" />
        <div className="blog3-hero-overlay" />
        <div className="blog3-hero-content">
          <span className="blog3-tag">Office Interiors • Ideas</span>
          <h1 className="blog3-title">10 Office Interior Design Ideas</h1>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="blog3-content container">
        {/* INTRO */}
        <section className="blog3-intro">
          <motion.p variants={fadeUp} initial="hidden" animate="show">
            Creating a productive and inspiring workplace starts with thoughtful office interior
            design. A well-designed office impacts motivation, workflow efficiency and company culture.
            Below are ten practical ideas to help you design a modern, comfortable and efficient workspace.
          </motion.p>
        </section>

        {/* IDEAS GRID */}
        <section className="blog3-section">
          <h2 className="blog3-heading">Office Design Ideas</h2>

          <motion.div
            className="blog3-cards-grid"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {IDEAS.map((item, idx) => (
              <motion.article
                key={idx}
                className="blog3-card"
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <h3 className="card-title">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* CONCLUSION */}
        <section className="blog3-section">
          <h2 className="blog3-heading">Conclusion</h2>
          <p>
            Effective office interior design considers how people move, interact and feel. Combining
            collaboration zones, private areas, biophilic elements, ergonomic furniture and integrated
            technology will result in a workspace that supports both business goals and human comfort.
          </p>
        </section>

        {/* FAQ */}
        <section className="blog3-section">
          <h2 className="blog3-heading">FAQs</h2>

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
