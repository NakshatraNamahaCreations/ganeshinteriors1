import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bgImg from "../assets/work7.jpg"; // ✅ Background image

const CallToActionSection = () => {
  const gold = "#FBED01";

  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif", // ✅ Updated font
        textAlign: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 1,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Subtitle */}
        <p
          style={{
            color: gold,
            fontSize: "16px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          Ready to Transform Your Space?
        </p>

        {/* Title */}
        <h6
          style={{
            fontSize: "25px",
            fontWeight: 500,
            lineHeight: "1.5",
            marginBottom: "50px",
            maxWidth: "900px",
            margin: "0 auto 50px",
          }}
        >
          Let’s turn your vision into reality with expert interior design
          services tailored to your taste, space, and budget.
        </h6>

        {/* Get Started Button */}
        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "500",
            transition: "all 0.3s ease",
            fontFamily: "'Poppins', sans-serif", // ✅ Applied to button too
          }}
          onMouseEnter={(e) => {
            e.currentTarget.querySelector(".circle").style.backgroundColor =
              "#fff";
            e.currentTarget.querySelector(".arrow").style.color = gold;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector(".circle").style.backgroundColor =
              gold;
            e.currentTarget.querySelector(".arrow").style.color = "#fff";
          }}
        >
          Get in touch With Us
          <span
            className="circle"
            style={{
              backgroundColor: gold,
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
          >
            <FaArrowRight
              className="arrow"
              size={20}
              color="#fff"
              style={{ transition: "all 0.3s ease" }}
            />
          </span>
        </a>
      </div>

      {/* Responsive */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

          @media (max-width: 992px) {
            h2 {
              font-size: 42px !important;
            }
          }
          @media (max-width: 768px) {
            section {
              height: 80vh !important;
              padding: 0 20px;
            }
            h2 {
              font-size: 34px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default CallToActionSection;
