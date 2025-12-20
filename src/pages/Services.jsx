
import React from "react";
import "./Services.css";
import {
  FaHome,
  FaBuilding,
  FaUtensils,
  FaTools,
  FaCubes,
  FaDraftingCompass,
} from "react-icons/fa";
import bg1 from "../assets/service1.jpg";
import bg2 from "../assets/service2.jpg";
import bg3 from "../assets/kitchen.jpg";
import bg4 from "../assets/renov.jpg";
import bg5 from "../assets/work6.jpg";
import bg6 from "../assets/archi.jpg";
import bannerImg from "../assets/work3.jpg";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Residential Interior Design",
      desc: "From cozy apartments to luxury villas, we bring comfort and sophistication to your home.",
      icon: <FaHome />,
      bg: bg1,
    },
    {
      id: "02",
      title: "Commercial Interior Design",
      desc: "Offices, retail stores, and showrooms designed for productivity and brand identity.",
      icon: <FaBuilding />,
      bg: bg2,
    },
    {
      id: "03",
      title: "Modular Kitchen Designs & Wardrobes",
      desc: "Smart, space-saving solutions with high-end finishes for modern living.",
      icon: <FaUtensils />,
      bg: bg3,
    },
    {
      id: "04",
      title: "Renovation & Remodeling",
      desc: "Refresh and upgrade your space with contemporary style and expert craftsmanship.",
      icon: <FaTools />,
      bg: bg4,
    },
    {
      id: "05",
      title: "3D Visualization & Space Planning",
      desc: "Preview your design with realistic virtual models and efficient space layouts.",
      icon: <FaCubes />,
      bg: bg5,
    },
    {
      id: "06",
      title: "Concept Design",
      desc: "From creative sketches to complete layout plans, we shape spaces with innovation.",
      icon: <FaDraftingCompass />,
      bg: bg6,
    },
  ];

  return (
    <section className="services-page">
      {/* ===== Banner Section ===== */}
      <section
        className="gallery-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner-content">
          <h1>
            Our <span>Services</span>
          </h1>
          <p>
            Explore our collection of elegant and modern interior design
            solutions crafted with creativity and precision.
          </p>
        </div>
      </section>

      {/* ===== Services Grid ===== */}
      <div className="services-header">
        <h1>
          What We <span>Offer</span>
        </h1>
        <p>
          Whether it's a residential makeover or a commercial setup, our
          services bring life, function, and emotion to every space.
        </p>
      </div>

      <div className="services-grid">
        {services.map((srv, index) => (
          <div
            key={index}
            className="service-card"
            style={{ "--bg-img": `url(${srv.bg})` }}
          >
            <div className="card-content">
              <div className="icon-box">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            
              <span className="service-num">{srv.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
