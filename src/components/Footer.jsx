import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logoi.jpeg";

const FooterSection = () => {
  const gold = "#FBED01";
  const bgColor = "#112A49";
  const [showTop, setShowTop] = useState(false);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: bgColor,
        backgroundImage: "url('/pattern-dark.png')",
        backgroundSize: "cover",
        color: "#fff",
        padding: "80px 0 30px",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "60px",
          borderBottom: `1px solid rgba(255,255,255,0.1)`,
          paddingBottom: "60px",
        }}
      >
        {/* ---- Column 1: Logo & About ---- */}
        <div>
          <img
            src={logo}
            alt="Ganesh Interior Designs"
            style={{
              width: "110px",
              marginBottom: "25px",
              filter: "brightness(1.1)",
            }}
          />
          <p style={{ lineHeight: "1.7", color: "#ddd" }}>
            Ganesh Interior Designs blends tradition with contemporary
            aesthetics to create luxurious spaces. From concept to completion,
            we craft interiors that resonate with sophistication and comfort.
          </p>
        </div>

        {/* ---- Column 2: Quick Links ---- */}
        <div>
          <h4
            style={{
              fontSize: "22px",
              fontWeight: 600,
              marginBottom: "25px",
              color: "#fff",
              position: "relative",
            }}
          >
            Quick Links:
            <span
              style={{
                display: "block",
                width: "40px",
                height: "2px",
                background: gold,
                marginTop: "6px",
              }}
            ></span>
          </h4>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "#ddd",
              lineHeight: "2",
            }}
          >
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Services", path: "/services" },
              { name: "Gallery", path: "/gallery" },
              { name: "Blog", path: "/blog" },
              { name: "Contact Us", path: "/contact-us" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  style={{
                    textDecoration: "none",
                    color: "#ddd",
                    fontSize: "15px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ddd")}
                >
                  → {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Column 3: Our Services ---- */}
        <div>
          <h4
            style={{
              fontSize: "22px",
              fontWeight: 600,
              marginBottom: "25px",
              color: "#fff",
              position: "relative",
            }}
          >
            Our Services:
            <span
              style={{
                display: "block",
                width: "40px",
                height: "2px",
                background: gold,
                marginTop: "6px",
              }}
            ></span>
          </h4>

          <ul
            style={{ listStyle: "none", padding: 0, margin: 0, color: "#ddd" }}
          >
            {[
              "Residential Interior Design",
              "Commercial & Office Interiors",
              "Modular Kitchen & Wardrobe Design",
              "Renovation & Turnkey Solutions",
            ].map((service, i) => (
              <li
                key={i}
                style={{
                  marginBottom: "12px",
                  transition: "color 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ddd")}
              >
                • {service}
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Column 4: Contact Info ---- */}
        <div>
          <h4
            style={{
              fontSize: "22px",
              fontWeight: 600,
              marginBottom: "25px",
              color: "#fff",
              position: "relative",
            }}
          >
            Contact Info:
            <span
              style={{
                display: "block",
                width: "40px",
                height: "2px",
                background: gold,
                marginTop: "6px",
              }}
            ></span>
          </h4>

          <p style={{ color: "#fff", marginBottom: "10px" }}>
            <FaPhoneAlt style={{ color: gold, marginRight: "10px" }} />
            098457 56562
          </p>
          <p style={{ color: "#fff", marginBottom: "10px" }}>
            <FaMapMarkerAlt style={{ color: gold, marginRight: "10px" }} />
            Kothanur Main Rd, Nrupathunga Nagar, Kothnoor Dinne, 8th Phase, J.
            P. Nagar, Bengaluru, Kothnur, Karnataka 560062
          </p>
          <p style={{ color: "#fff" }}>
            <FaEnvelope style={{ color: gold, marginRight: "10px" }} />
            info@ganeshinteriorsdesigns.com
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: bgColor,
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = gold;
                    e.currentTarget.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = bgColor;
                  }}
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* ---- Copyright ---- */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p
          style={{
            color: "#ffffffff",
            fontSize: "15px",
            paddingTop: "20px",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.3px",
          }}
        >
          © 2025 Ganesh Interior Designs. All rights reserved.
        </p>
      </div>

      {/* ---- Scroll To Top Button ---- */}
      {showTop && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            backgroundColor: gold,
            color: bgColor,
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
            zIndex: 1000,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaArrowUp size={18} />
        </div>
      )}
    </footer>
  );
};

export default FooterSection;
