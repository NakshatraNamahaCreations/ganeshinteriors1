import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCouch, FaTools, FaHome, FaPaintBrush } from "react-icons/fa";
import { Link } from "react-router-dom";

import img1 from "../assets/service1.jpg";
import img2 from "../assets/service2.jpg";
import img3 from "../assets/service3.jpg";
import img4 from "../assets/commercial.webp";
import shapeBg from "../assets/shapebackground.png";

const ServicesSection = () => {
  const gold = "#FBE900";
  const navy = "#112A49";

  const services = [
    {
      title: "Residential Interior Design",
      desc: "We design warm, functional, and visually appealing homes tailored to your lifestyle.",
      img: img1,
      icon: <FaHome size={28} color="#fff" />,
      link: "/services/residential-interior-design",
    },
    {
      title: "Home Renovation",
      desc: "As trusted renovation specialists, we turn old or poorly planned homes into modern spaces.",
      img: img2,
      icon: <FaCouch size={28} color="#fff" />,
      link: "/services/renovation-turnkey",
    },
    {
      title: "Modular Kitchens & Wardrobes",
      desc: "Stylish, space-efficient modular kitchens and wardrobes designed for daily use.",
      img: img3,
      icon: <FaTools size={28} color="#fff" />,
      link: "/services/modular-kitchen-wardrobe",
    },
    {
      title: "Commercial Interior Design",
      desc: "Professional interior solutions for offices, retail, and commercial environments.",
      img: img4,
      icon: <FaPaintBrush size={28} color="#fff" />,
      link: "/services/commercial-office-interiors",
    },
  ];

  return (
    <section
      style={{
        background: `url(${shapeBg}) no-repeat center top`,
        backgroundSize: "cover",
        padding: "120px 0",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `url(${shapeBg}) no-repeat center`,
          backgroundSize: "contain",
          opacity: 0.12,
          animation: "floatBg 16s ease-in-out infinite alternate",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <h2 style={{ fontSize: 42, fontWeight: 700, color: navy }}>
          Our Interior Design <span style={{ color: gold }}>Solutions</span>
        </h2>

        <div
          style={{
            width: 70,
            height: 3,
            backgroundColor: gold,
            margin: "15px auto 25px",
            borderRadius: 3,
          }}
        />

        <p style={{ color: "#333", fontSize: 16 }}>
          We provide end-to-end design and renovation services for modern homes
        </p>
      </div>

      {/* Service Cards */}
      <div
        style={{
          maxWidth: 1350,
          margin: "60px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 35,
          padding: "0 20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {services.map((srv, index) => (
          <Link
            key={index}
            to={srv.link}
            style={{ textDecoration: "none" }}
          >
            <div className="serviceCard">
              <div style={{ height: 230, overflow: "hidden" }}>
                <img
                  src={srv.img}
                  alt={srv.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Icon */}
              <div className="serviceIcon">{srv.icon}</div>

              <div style={{ padding: "60px 30px 30px" }}>
                <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
                  {srv.title}
                </h3>

                <p
                  style={{
                    color: "#ccc",
                    fontSize: 15,
                    lineHeight: 1.6,
                    margin: "10px 0 20px",
                  }}
                >
                  {srv.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: gold,
                    fontWeight: 500,
                  }}
                >
                  Read More <FiArrowRight size={18} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div style={{ textAlign: "center", marginTop: 70 }}>
        <Link to="/services" className="viewAllBtn">
          View All Services <FiArrowRight />
        </Link>
      </div>

      {/* Styles */}
      <style>
        {`
          @keyframes floatBg {
            0% { transform: translateY(-20px) scale(1); }
            100% { transform: translateY(20px) scale(1.06); }
          }

          .serviceCard {
            background: ${navy};
            border-radius: 0 0 6px 6px;
            overflow: hidden;
            position: relative;
            transition: all 0.35s ease;
          }

          .serviceCard:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.4);
          }

          .serviceIcon {
            position: absolute;
            top: 195px;
            left: 30px;
            width: 80px;
            height: 80px;
            background: ${gold};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.4);
          }

          .viewAllBtn {
            padding: 14px 35px;
            background: ${gold};
            color: ${navy};
            font-size: 16px;
            font-weight: 600;
            border-radius: 50px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            transition: 0.4s;
          }

          .viewAllBtn:hover {
            background: ${navy};
            color: ${gold};
            transform: translateY(-4px);
          }

          @media (max-width: 992px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr 1fr !important;
            }
          }

          @media (max-width: 600px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ServicesSection;
