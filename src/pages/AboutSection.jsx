

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import about1 from "../assets/about1.png";
import bgPattern from "../assets/bannerinteriors.jpg";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48

const AboutSection = () => {
  const gold = "#FBE900";

  return (
    <section
      style={{
        position: "relative",
        // backgroundImage: `url(${bgPattern})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#000000ff",
        fontFamily: "'Poppins', sans-serif", // ✅ Changed to Poppins
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      {/* Semi-transparent overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(229, 231, 234, 0.96)",
          zIndex: 1,
        }}
      ></div>

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
        {/* Left Image */}
        <div
          style={{
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src={about1}
            alt="About"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "8px",
              transition: "transform 0.8s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Right Content */}
        <div style={{ position: "relative", marginLeft: "-60px" }}>
          <p
            style={{
              color: "#c6ba0aff",
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

          {/* <h4
            style={{
              fontSize: "17px",
              fontWeight: 500,
              marginBottom: "25px",
              color: "#000000ff",
              borderLeft: `3px solid ${gold}`,
              paddingLeft: "15px",
              lineHeight: "1.6",
            }}
          >
            “Spaces designed with meaning — where every detail speaks luxury.”
          </h4> */}
<p  style={{
              fontSize: "15.5px",
              lineHeight: "1.8",
              color: "#181818ff",
              marginBottom: "45px",
              maxWidth: "540px",
              fontWeight: 400,
            }}> Driven by passion, our team has been transforming dream spaces to reality for over 15 years, specializing in renovations and turnkey interior creation. We create environments that sustain positive energy, inspire passion, and provide lasting comfort. Simplicity, integrity, value, and utility have been the guiding principles for us throughout the years.</p>
          <p
            style={{
              fontSize: "15.5px",
              lineHeight: "1.8",
              color: "#181818ff",
              marginBottom: "45px",
              maxWidth: "540px",
              fontWeight: 400,
            }}
          >
            
Ganesh Interior Designs, a company that specializes in Interior Design & Execution in both the residential and commercial fronts. Initially conceptualized in Mumbai and flourishing in Bangalore. From renovation specialists to turnkey design and execution, our company has demonstrated resilience and excellence in the interiors domain.
          </p>

          {/* Read More Button */}
<<<<<<< HEAD
          <Link
            to="/about-us"
=======
          <a
            href="#"
>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48
            style={{
              color: "#112a49ff",
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "15px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#112A49")}
          >
            Learn More
            <span
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: `1.8px solid ${"#112A49"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = gold;
                e.currentTarget.querySelector("svg").style.color = "#fff"; // 👈 change arrow to white
                e.currentTarget.style.transform = "rotate(45deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.querySelector("svg").style.color = "#112A49"; // 👈 revert arrow color
                e.currentTarget.style.transform = "rotate(0deg)";
              }}
            >
              <FiArrowUpRight
                style={{
                  fontSize: "22px",
                  color: gold,
                  transition: "all 0.3s ease",
                }}
              />
            </span>
<<<<<<< HEAD
          </Link>
=======
          </a>
>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48
        </div>
      </div>

      {/* Floating Gold Accent Circle */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          right: "120px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,233,0,0.25), transparent 70%)",
          zIndex: 0,
          filter: "blur(40px)",
        }}
      ></div>

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 1100px) {
            div[style*='grid-template-columns'] {
              grid-template-columns: 1fr;
              text-align: center;
            }
            div[style*='padding: 0 50px'] {
              padding: 0 30px;
            }
            h2 {
              font-size: 36px !important;
            }
          }

          @media (max-width: 700px) {
            section {
              padding: 80px 0 !important;
            }
            h4 {
              font-size: 16px !important;
            }
            p {
              font-size: 14px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
