import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import abt1 from "../assets/abt1.jpg";
import abt2 from "../assets/abt2.jpg";
import dotted from "../assets/dotted.png";
import { FaEye, FaBullseye, FaRegSmile } from "react-icons/fa";
import { Helmet } from "react-helmet";
import proj1 from "../assets/work1.jpg";
import proj2 from "../assets/work2.jpg";
import proj3 from "../assets/work3.jpg";
import proj4 from "../assets/work4.jpg";
import bannerImg from "../assets/work2.jpg"; // You can use a separate banner image if you prefer

const About = () => {
  const gold = "#FBE900";
  const dark = "#1B1B1B";

  const [active, setActive] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Exterior Design",
      category: "Room Wallpaper",
      desc: "Modern architecture with natural harmony and minimal lines.",
      img: proj1,
    },
    {
      id: 2,
      title: "Modern Wall Design",
      category: "Room Wallpaper",
      desc: "A refined modern style that merges art and texture with seamless detail.",
      img: proj2,
    },
    {
      id: 3,
      title: "Wall Paintings",
      category: "Room Wallpaper",
      desc: "Creative fusion of color, light, and emotion that transforms any wall.",
      img: proj3,
    },
    {
      id: 4,
      title: "Room Interior",
      category: "Room Wallpaper",
      desc: "Balanced warmth and elegance with timeless furnishing aesthetics.",
      img: proj4,
    },
  ];
  return (
    <>
    <Helmet>
        <title>About Us | Luxury Interior Design Company Living Spaces</title>
        <meta
          name="description"
          content="Discover our interior design studio crafting modern, elegant, and functional interiors for homes, offices and commercial spaces with creativity and precision"
        />
      </Helmet>
    <div style={{ fontFamily: "'Poppins', sans-serif", color: dark }}>
      {/* 🏞️ HERO BANNER */}
      <section
        style={{
          position: "relative",
          height: "75vh",
          backgroundImage: `linear-gradient(rgba(17,17,17,0.6), rgba(17,17,17,0.6)), url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            About <span style={{ color: "#c6ba0aff" }}>Us</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#f1f1f1",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
           Ever dream of a cozy reading nook, a dedicated work area, or a place to just wind down on a better day?<br/> Make your dream a reality with GD
          </p>
        </motion.div>
      </section>

      {/* 🏠 ABOUT SECTION (Ambed-style layout) */}
      <section
        style={{
          position: "relative",
          padding: "100px 20px",
          maxWidth: "1250px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Dotted Pattern */}
        <img
          src={dotted}
          alt="pattern"
          style={{
            position: "absolute",
            top: "60px",
            left: "0",
            width: "140px",
            opacity: 0.25,
            zIndex: 0,
          }}
        />

        {/* LEFT IMAGE STACK */}
        <div
          style={{
            flex: "1 1 45%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {/* Top Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              width: "85%",
              borderRadius: "0 80px 0 0",
              overflow: "hidden",
            }}
          >
            <img
              src={abt1}
              alt="Interior Design"
              style={{ width: "70%", borderRadius: "0 80px 0 0" }}
            />
          </motion.div>

          {/* Secondary Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              bottom: "-50px",
              right: "0",
              width: "70%",
              borderRadius: "80px 0 0 0",
              overflow: "hidden",
            }}
          >
            <img
              src={abt2}
              alt="Interior Work"
              style={{ width: "70%", borderRadius: "80px 0 0 0" }}
            />

            {/* Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "190px",

                background: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                padding: "35px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                top: "170px",
                marginRight: "-20px",
              }}
            >
              <h2 style={{ color: dark, fontSize: "40px", margin: 0 }}>15</h2>
              <div style={{ fontSize: "14px", fontWeight: 500, color: "#444" }}>
                <span>Years</span>
                <br />
                <span>Experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          style={{
            flex: "1 1 48%",
            position: "relative",
            zIndex: 2,
            marginLeft: "60px",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              color: gold,
              fontWeight: 600,
              letterSpacing: "2px",
              marginBottom: "8px",
            }}
          >
            Our Introduction
          </p>

          <h2
            style={{
              fontSize: "38px",
              fontWeight: 700,
              color: dark,
              lineHeight: "1.3",
              marginBottom: "20px",
            }}
          >  
          Designing spaces  <span style={{ color: gold }}>that tell your story</span>{" "}
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "16px",
              lineHeight: "1.8",
              marginBottom: "25px",
              maxWidth: "90%",
            }}
          >
            Ganesh Interior Designs, a company that specializes in Interior Design & Execution in both the residential and commercial fronts. Initially conceptualized in Mumbai and flourishing in Bangalore. From renovation specialists to turnkey design and execution, our company has demonstrated resilience and excellence in the interiors domain.
          </p>

          <ul style={{ listStyle: "none", padding: 0, marginBottom: "25px" }}>
            {[
              "Customized design concepts for every client.",
              "High-quality materials and finishing.",
              "Expert project supervision and delivery.",
              "Trusted by hundreds of satisfied customers.",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  color: "#333",
                  fontSize: "15.5px",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    border: `2px solid ${gold}`,
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                ></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
      {/* 🌟 VISION, MISSION, VALUES SECTION */}
      <section
        style={{
          padding: "100px 20px",
          background: "#f9f6f4",
          textAlign: "center",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            color: gold,
            fontWeight: 600,
            letterSpacing: "2px",
            marginBottom: "8px",
          }}
        >
          3 Core Principles
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            color: dark,
            marginBottom: "60px",
          }}
        >
          Our Vision, Mission & Values
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          {[
            {
              number: "01",
              title: "Our Vision",
              icon: <FaEye size={50} color={"#112A49"} />,
              text: "Challenging two poles, Subtle Luxury and Utility.",
            },
            {
              number: "02",
              title: "Our Mission",
              icon: <FaBullseye size={50} color={"#112A49"} />,
              text: "To convert dream spaces to reality, balancing Utility, Aesthetics and Value for Money.",
            },
            {
              number: "03",
              title: "Our Goals",
              icon: <FaRegSmile size={50} color={"#112A49"} />,
              text: "Providing customers Home/Commercial Interiors with the best possible value, luxury and utility.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                flex: "1 1 300px",
                background: "#f2ede9",
                borderRadius: "25px",
                padding: "50px 30px",
                position: "relative",
                textAlign: "left",
                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-25px",
                  left: "30px",
                  background: dark,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "18px",
                  borderRadius: "12px 12px 0 0",
                  padding: "10px 18px",
                }}
              >
                {card.number}
              </div>

              <div
                style={{
                  borderTop: `3px solid ${gold}`,
                  paddingTop: "25px",
                }}
              >
                <div style={{ marginBottom: "25px" }}>{card.icon}</div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "#555",
                    fontSize: "15px",
                    lineHeight: "1.8",
                  }}
                >
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* 🎨 FEATURED PROJECTS */}
      <section
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                flex: 1,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                height: "100%",
              }}
              animate={{
                flex: active === i ? 1.8 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.img
                src={p.img}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.7s ease",
                }}
                animate={{
                  scale: active === i ? 1.1 : 1,
                  filter: active === i ? "brightness(60%)" : "brightness(90%)",
                }}
              />

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      position: "absolute",
                      bottom: "20%",
                      left: "10%",
                      color: "#fff",
                      zIndex: 2,
                      maxWidth: "500px",
                      background: "rgba(0,0,0,0.6)",
                      padding: "30px 40px",
                      borderRadius: "10px",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <p
                      style={{
                        color: "#C19B6B",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      {p.category}
                    </p>
                    <h2
                      style={{
                        fontSize: "36px",
                        fontWeight: 700,
                        marginBottom: "15px",
                      }}
                    >
                      {p.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#ddd",
                        marginBottom: "25px",
                        lineHeight: "1.6",
                      }}
                    >
                      {p.desc}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: "#ffffff04",
                        color: "#000",
                        border: "none",
                        padding: "10px 24px",
                        borderRadius: "5px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#C19B6B")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "")
                      }
                    ></motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Static Bottom Text */}
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "40px",
                  color: "#fff",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#ccc",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  {p.category}
                </p>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {p.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
