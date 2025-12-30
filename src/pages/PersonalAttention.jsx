import React from "react";
import { motion } from "framer-motion";
import "./PersonalAttention.css";

const steps = [
  { id: 1, title: " Clear communication.", image: "/media/communication.png" },
  { id: 2, title: " Faster decisions.", image: "/media/decision.png" },
  { id: 3, title: "Honest guidance", image: "/media/guidence.png" },
  { id: 4, title: " Consistent quality", image: "/media/quality.png" },
];

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PersonalAttention() {
  return (
    <section className="pa-section" aria-labelledby="pa-heading">
      <div className="pa-inner">
        <div className="pa-intro">
          <h2 id="pa-heading" className="pa-title">
            Personal Attention in <br />
            <span className="accent">Every Project</span>
          </h2>
          <p className="pa-lead">
            Each and every project is handled with complete dedication by a single point of contact, ensuring seamless coordination and personalized attention.
            Instead of dealing with multiple coordinators or outsourced teams, you work directly 
            with the expert who understands design, renovation, materials, planning, and finishing.
          </p>
        </div>

        {/* Animate the whole card group */}
        <motion.div 
          className="pa-cards"
          role="list"
          aria-label="Process steps"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((s) => (
            <motion.article
              className="pa-card"
              key={s.id}
              role="listitem"
              aria-roledescription="step card"
              variants={cardVariant}
            >
              <div className="pa-card-media">
                <img src={s.image} alt={s.title} />
              </div>

              <div className="pa-card-body">
                <div className="pa-card-top">
                  <div className="pa-card-num">{String(s.id).padStart(2, "0")}</div>
                  <h3 className="pa-card-title">{s.title}</h3>
                </div>
                {/* Optional if s.text doesn't exist */}
                {s.text && <p className="pa-card-text">{s.text}</p>}
              </div>

              <div className="pa-card-huge" aria-hidden="true">
                {String(s.id).padStart(2, "0")}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
