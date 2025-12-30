
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import ban1 from "../assets/ban1.jpg";
import ban2 from "../assets/ban2.jpg";
import ban3 from "../assets/ban3.jpg";

const BannerSection = () => {
  const gold = "#FBE900";

  const slides = [
    {
      id: 1,
      title: "Interior Designs From The Future",
      highlight: "Designs",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: ban1,
    },
    {
      id: 2,
      title: "Luxury Living Made Truly Timeless",
      highlight: "Luxury",
      content:
        "We blend innovation with elegance to create spaces that tell your story — uniquely and beautifully.",
      image: ban2,
    },
    {
      id: 3,
      title: "Transform Your Dream Space Into Reality",
      highlight: "Dream",
      content:
        "Experience the perfect fusion of art, architecture, and design excellence built for modern living.",
      image: ban3,
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        fontFamily: "'Montserrat', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        style={{ height: "100%" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: "120px",
                animation: "bgZoom 12s ease-in-out infinite alternate",
              }}
            >
              {/* Dark Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.55)",
                  zIndex: 1,
                }}
              ></div>

              {/* Text Content with Border Frame */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  color: "#fff",
                  border: "4px solid rgba(255,255,255,0.8)",
                  borderTop: "none",
                  borderRight: "none",
                  padding: "70px 80px",
                  maxWidth: "650px",
                  animation: "fadeUp 1.5s ease forwards",
                }}
              >
                {/* Corner Accents */}
                <div
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "0",
                    width: "70px",
                    height: "4px",
                    backgroundColor: "#fff",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "-4px",
                    width: "4px",
                    height: "70px",
                    backgroundColor: "#fff",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: "0",
                    width: "70px",
                    height: "4px",
                    backgroundColor: "#fff",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "-4px",
                    width: "4px",
                    height: "70px",
                    backgroundColor: "#fff",
                  }}
                ></div>

                {/* Heading */}
                <h1
                  style={{
                    fontSize: "54px",
                    fontWeight: "700",
                    lineHeight: "1.1",
                    marginBottom: "25px",
                  }}
                >
                  {slide.title.split(" ").map((word, i) =>
                    word === slide.highlight ? (
                      <span key={i} style={{ color: gold }}>
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </h1>

                {/* Description */}
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.8",
                    color: "#ffffffff",
                    marginBottom: "40px",
                    maxWidth: "520px",
                  }}
                >
                  {slide.content}
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "20px" }}>
                  <button
                    style={{
                      backgroundColor: gold,
                      border: "none",
                      color: "#111",
                      padding: "14px 36px",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.border = `1.5px solid ${gold}`;
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = gold;
                      e.target.style.color = "#111";
                      e.target.style.border = "none";
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animations */}
      <style>
        {`
          @keyframes bgZoom {
            0% { background-size: 100%; }
            100% { background-size: 108%; }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 992px) {
            h1 {
              font-size: 42px !important;
            }
            p {
              font-size: 15px !important;
            }
            div[style*="padding: 70px 80px"] {
              padding: 40px 30px !important;
            }
          }

          @media (max-width: 600px) {
            h1 {
              font-size: 32px !important;
              line-height: 1.3 !important;
            }
            section {
              justify-content: center !important;
              padding-left: 0 !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default BannerSection;
