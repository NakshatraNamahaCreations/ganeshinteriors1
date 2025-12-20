import React from "react";
import "./Gallery.css";
import g1 from "../assets/work2.jpg";
import g2 from "../assets/work5.jpg";
import g3 from "../assets/work7.jpg";
import g4 from "../assets/service2.jpg";
import g5 from "../assets/service3.jpg";
import g6 from "../assets/service1.jpg";
import bannerImg from "../assets/work2.jpg"; // Banner image on top

const Gallery = () => {
  const images = [
    { id: 1, src: g1, title: "" },
    { id: 2, src: g2, title: "" },
    { id: 3, src: g3, title: "" },
    { id: 4, src: g4, title: "" },
    { id: 5, src: g5, title: "" },
    { id: 6, src: g6, title: "" },
  ];

  return (
    <div className="gallery-wrapper">
      {/* Banner Section */}
      <section
        className="gallery-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.11)), url(${bannerImg})`,
        }}
      >
        <div className="banner-content">
          <h1>Gallery</h1>
          <p>Explore our collection of elegant and modern interior designs</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-page">
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div
              key={img.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img src={img.src} alt={img.title} />
              <div className="overlay">
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
