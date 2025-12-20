import React from "react";
import "./OurBrand.css";

const partners = [
  { src: "/media/jaguar1.png", alt: "Partner 1" },
  { src: "/media/saint-gobain.png", alt: "Partner 2" },
  { src: "/media/hettich.png", alt: "Partner 4" },
  { src: "/media/merino.png", alt: "Partner 5" },
  { src: "/media/cera.png", alt: "Partner 6" },
  { src: "/media/khajaria.png", alt: "Partner 7" },
  { src: "/media/rehu.png", alt: "Partner 8" },
  { src: "/media/hafele.png", alt: "Partner 9" },
  { src: "/media/ebco.png", alt: "Partner 10" },
  { src: "/media/greenlam.png", alt: "Partner 11"}
];

export default function OurBrand({ speed = 18 }) {
  // Duplicate the logos so the marquee loops seamlessly
  const logos = partners.concat(partners);

  return (
    <section className="op-section">
      <div className="op-container">
       <div className="op-row">
  <div className="op-meta">
    <p
      className="op-tagline"
      style={{
        color: "#FBE900",
        fontSize: "15px",
        textTransform: "uppercase",
        letterSpacing: "2px",
        marginBottom: "10px",
        fontWeight: 400,
        paddingTop: "0",
      }}
    >
      OUR BRANDS
    </p>

    <h3 className="op-title">Our Clients</h3>
  </div>

  <div
    className="op-marquee"
    style={{ ["--marquee-duration"]: `${speed}s` }}
    aria-hidden="false"
    role="region"
    aria-label="Our clients logos scrolling"
  >
    <div className="op-track">
      {logos.map((p, i) => (
        <div key={i} className="op-logoWrap" tabIndex={0}>
          <img
            src={p.src}
            alt={p.alt}
            className="op-logo"
            loading="lazy"
            width="160"
            height="80"
          />
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
