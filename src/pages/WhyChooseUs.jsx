
import React from "react";
import bgImage from "../assets/service3.jpg"; 
import shapeBg from "../assets/shapebackground.png";

// Icons
import { FaCity, FaLightbulb, FaCheckCircle, FaTools } from "react-icons/fa";

const WhyChooseUs = () => {
  const items = [
    {
      title: "One-Person Execution",
      text: "Your entire project is handled by one experienced professional who personally manages design, planning, and execution.",
      icon: <FaCity size={22} />,
    },
   
    {
      title: "Quality Materials",
      text: "Every material and finish is carefully selected to ensure durability, aesthetics, and long-term comfort.",
      icon: <FaCheckCircle size={22} />,
    },
    {
      title: "Transparent Pricing",
      text: "Clear budgets, structured timelines, and complete transparency at every stage of the project.",
      icon: <FaTools size={22} />,
    },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${shapeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffffff",
        padding: "120px 0",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Right-side curved interior image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "45%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: "350px",
          borderBottomLeftRadius: "350px",
        }}
      ></div>

      {/* MAIN CONTENT WRAPPER */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          position: "relative",
          zIndex: 5,
          padding: "0 40px",
        }}
      >
        {/* HEADING */}
        <h2
          style={{
            fontSize: "46px",
            fontWeight: 800,
            lineHeight: "1.1",
            textTransform: "uppercase",
            marginBottom: "20px",
            maxWidth: "600px",
            color:'#112A49',
          }}
        >
          Why Choose Us
        </h2>

        {/* SUBTEXT */}
        <p
          style={{
            maxWidth: "620px",
            color: "#ffffff",
            fontSize: "17px",
            lineHeight: "1.7",
            marginBottom: "45px",
            color:'black',
          }}
        >
          Here’s why homeowners trust us for both interior design and renovation projects:
        </p>

        {/* DARK CARD */}
        <div
          style={{
            background: "#112A49",
            padding: "60px",
            borderRadius: "10px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px 60px",
            }}
          >
            {items.map((item, index) => (
              <div key={index}>
                {/* ICON + TITLE */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "8px",
                      background: "#ececec20",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FBE900",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Line */}
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background: "#555",
                    margin: "12px 0",
                  }}
                ></div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#ffffffff",
                    lineHeight: "1.6",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>
        {`
          @media (max-width: 992px) {
            section div[style*='grid-template-columns'] {
              grid-template-columns: 1fr !important;
            }
            h2 {
              font-size: 32px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WhyChooseUs;
