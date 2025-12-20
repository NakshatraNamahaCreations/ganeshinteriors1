
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCouch, FaTools, FaHome, FaPaintBrush } from "react-icons/fa";

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
      id: 1,
      title: "Residential Interior Design",
      desc: "We design warm, functional, and visually appealing homes tailored to your lifestyle.",
      img: img1,
      icon: <FaHome size={28} color="#fff" />,
    },
    {
      id: 2,
      title: "Home Renovation ",
      desc: "As trusted renovation specialists, we turn old, outdated, or poorly planned homes",
      img: img2,
      icon: <FaCouch size={28} color="#fff" />,
    },
    {
      id: 3,
      title: "Modular Kitchens & Wardrobes",
      desc: "Our modular kitchens and wardrobes are designed to be stylish, practical, and highly efficient.",
      img: img3,
      icon: <FaTools size={28} color="#fff" />,
    },
    {
      id: 4,
      title: "Commercial Interior Design",
      desc: "Our commercial interior design services focus on creating professional spaces",
      img: img4,
      icon: <FaPaintBrush size={28} color="#fff" />,
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
      {/* Floating animated background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `url(${shapeBg}) no-repeat center`,
          backgroundSize: "contain",
          opacity: 0.12,
          animation: "floatBg 16s ease-in-out infinite alternate",
          pointerEvents: "none",
        }}
      ></div>

      {/* Header */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 700,
            color: navy,
            marginBottom: "10px",
          }}
        >
          Our Interior Design <span style={{ color: gold }}>Solutions</span>
        </h2>

        <div
          style={{
            width: "70px",
            height: "3px",
            backgroundColor: '#FBE900',
            margin: "0 auto 25px auto",
            borderRadius: "3px",
          }}
        ></div>

        <p
          style={{
            color: "#333",
            fontSize: "16px",
            marginBottom: "60px",
          }}
        >
          We provide end-to-end design and renovation services for modern homes:
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "35px",
          padding: "0 20px",
          position: "relative",
          zIndex: 2,
         
        }}
      >
        {services.map((srv) => (
          <div
            key={srv.id}
            style={{
              background: "#112A49",
              borderRadius: "0px 0px 6px 6px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div style={{ height: "230px", overflow: "hidden" }}>
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
            <div
              style={{
                position: "absolute",
                top: "195px",
                left: "30px",
                width: "80px",
                height: "80px",
                background: gold,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
              }}
            >
              {srv.icon}
            </div>

            <div style={{ padding: "60px 30px 30px" }}>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                {srv.title}
              </h3>

              <p
                style={{
                  color: "#ccc",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                {srv.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: gold,
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Read More <FiArrowRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ View All Services Button */}
      <div
        style={{
          textAlign: "center",
          marginTop: "70px",
          position: "relative",
          zIndex: 3,
        }}
      >
        <button
          className="viewAllBtn"
          style={{
            padding: "14px 35px",
            background: gold,
            color: navy,
            border: "none",
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "50px",
            cursor: "pointer",
            transition: "0.4s",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          View All Services <FiArrowRight />
        </button>
      </div>

      <style>
        {`
          @keyframes floatBg {
            0% { transform: translateY(-20px) scale(1); }
            100% { transform: translateY(20px) scale(1.06); }
          }

          /* ✅ Button Hover Animation */
          .viewAllBtn:hover {
            background: ${navy};
            color: ${gold};
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.25);
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
