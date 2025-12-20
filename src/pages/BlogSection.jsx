import React from "react";
import { useNavigate } from "react-router-dom";  // ✅ for redirect
import service1 from "../assets/work1.jpg";
import service2 from "../assets/work2.jpg";
import service3 from "../assets/commercial.webp";
import bannerShape from "../assets/shapebackground.png";

const BlogSection = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Trending Modular Kitchen Design Ideas",
      img: service1,
    },
    {
      id: 2,
      title: "A Complete Guide to Home Interior Design",
      img: service2,
    },
    {
      id: 3,
      title: "10 Office Interior Design Ideas",
      img: service3,
    },
  ];

  return (
    <section
      style={{
        background: `url(${bannerShape}) no-repeat center top`,
        backgroundSize: "cover",
        padding: "100px 0",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.65)",
          zIndex: 0,
        }}
      ></div>

      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            color: "#FBED01",
            fontSize: "15px",
            letterSpacing: "2px",
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          DISCOVER
        </p>

        <h2
          style={{
            fontSize: "45px",
            fontWeight: 700,
            color: "#112A49",
            margin: 0,
          }}
        >
          Our Insights
        </h2>
      </div>

      {/* Blog Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "35px",
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.id}`)}  // ✅ REDIRECT TO BLOG PAGE
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              overflow: "hidden",
              transition: "0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 20px 35px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.08)";
            }}
          >
            {/* Image */}
            <div style={{ height: "240px", overflow: "hidden" }}>
              <img
                src={blog.img}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>

            {/* Text */}
            <div style={{ padding: "25px 25px 30px" }}>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#111",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                {blog.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Styles */}
      <style>
        {`
        @media (max-width: 992px) {
          h2 {
            font-size: 34px !important;
          }
          h4 {
            font-size: 16px !important;
          }
        }

        @media (max-width: 600px) {
          section {
            padding: 70px 0 !important;
          }
        }
      `}
      </style>
    </section>
  );
};

export default BlogSection;
