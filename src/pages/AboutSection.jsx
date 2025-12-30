import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import about1 from "../assets/about1.png";
import bgPattern from "../assets/bannerinteriors.jpg";

const AboutSection = () => {
  const gold = "#FBE900";

  return (
    <section
      style={{
        position: "relative",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#000",
        fontFamily: "'Poppins', sans-serif",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(229,231,234,0.96)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          alignItems: "center",
          gap: "60px",
          position: "relative",
          zIndex: 2,
          padding: "0 50px",
        }}
      >
        {/* Image */}
        <div style={{ borderRadius: "8px", overflow: "hidden" }}>
          <img
            src={about1}
            alt="About Ganesh Interiors"
            style={{
              width: "80%",
              borderRadius: "8px",
              transition: "transform 0.8s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        </div>

        {/* Content */}
        <div style={{ marginLeft: "-60px" }}>
          <p
            style={{
              color: "#c6ba0a",
              fontSize: "16px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            About Our Interior Design Studio
          </p>

          <h1
            style={{
              fontSize: "46px",
              fontWeight: 700,
              lineHeight: "1.3",
              marginBottom: "20px",
              color: "#112A49",
            }}
          >
            Interior Design & Renovation Services
          </h1>

          <p
            style={{
              fontSize: "15.5px",
              lineHeight: "1.8",
              color: "#181818",
              marginBottom: "28px",
              maxWidth: "540px",
            }}
          >
            Driven by passion, our team has been transforming dream spaces
            into reality for over 15 years. We specialize in renovations and
            turnkey interior creation, designing environments that inspire,
            energize, and provide lasting comfort.
          </p>

          <p
            style={{
              fontSize: "15.5px",
              lineHeight: "1.8",
              color: "#181818",
              marginBottom: "45px",
              maxWidth: "540px",
            }}
          >
            Ganesh Interior Designs specializes in residential and commercial
            interior design and execution. Originating in Mumbai and now
            flourishing in Bangalore, we deliver excellence from concept to
            completion.
          </p>

          {/* Button */}
          <Link
            to="/about-us"
            style={{
              color: "#112A49",
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            Learn More
            <span
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1.8px solid #112A49",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.3s",
              }}
            >
              <FiArrowUpRight style={{ fontSize: 22, color: gold }} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
