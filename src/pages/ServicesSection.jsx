<<<<<<< HEAD
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCouch, FaTools, FaHome, FaPaintBrush } from "react-icons/fa";
import { Link } from "react-router-dom";
=======

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCouch, FaTools, FaHome, FaPaintBrush } from "react-icons/fa";
>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48

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
<<<<<<< HEAD
=======
      id: 1,
>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48
      title: "Residential Interior Design",
      desc: "We design warm, functional, and visually appealing homes tailored to your lifestyle.",
      img: img1,
      icon: <FaHome size={28} color="#fff" />,
<<<<<<< HEAD
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
=======
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
>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48
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
<<<<<<< HEAD
      {/* Floating Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
=======
      {/* Floating animated background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48
          background: `url(${shapeBg}) no-repeat center`,
          backgroundSize: "contain",
          opacity: 0.12,
          animation: "floatBg 16s ease-in-out infinite alternate",
          pointerEvents: "none",
        }}
<<<<<<< HEAD
      />

      {/* HEADER */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <h2 style={{ fontSize: 42, fontWeight: 700, color: navy }}>
=======
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
>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48
          Our Interior Design <span style={{ color: gold }}>Solutions</span>
        </h2>

        <div
          style={{
<<<<<<< HEAD
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

      {/* SERVICE CARDS */}
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

              {/* ICON */}
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

      {/* VIEW ALL BUTTON */}
      <div style={{ textAlign: "center", marginTop: 70 }}>
        <Link to="/services" className="viewAllBtn">
          View All Services <FiArrowRight />
        </Link>
      </div>

      {/* STYLES */}
=======
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

>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48
      <style>
        {`
          @keyframes floatBg {
            0% { transform: translateY(-20px) scale(1); }
            100% { transform: translateY(20px) scale(1.06); }
          }

<<<<<<< HEAD
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

=======
          /* ✅ Button Hover Animation */
>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48
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
