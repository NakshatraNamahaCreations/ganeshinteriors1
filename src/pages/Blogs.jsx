import React from "react";
import BlogSection from "./BlogSection";
import bannerImg from "../assets/work4.jpg"; // <-- your banner image path
function Blogs() {
  return (
    <div>
      {/* 🌄 Banner Section */}
      <section
        className="contact-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-overlay">
          <h1 style={{fontFamily:"poppins"}}>
            Blog <span></span>
          </h1>
        </div>
      </section>
      <BlogSection />
    </div>
  );
}

export default Blogs;
