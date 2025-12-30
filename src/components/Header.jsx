
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logoii.png";
import aboutImage from "../assets/logoi.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const togglePopup = () => setShowPopup(!showPopup);
  const toggleServices = () => setShowServices(!showServices);

  return (
    <>
      {/* ===== Transparent Sticky Header ===== */}
      <header className="header">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Ganesh Interior Designs Logo" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

            
              {/* ===== Services with Dropdown ===== */}
            <li
  className="services-dropdown"
  onMouseEnter={() => setShowServices(true)}
  onMouseLeave={() => setShowServices(false)}
>
  <Link to="/services">
    Services <FaChevronDown className="dropdown-icon" />
  </Link>

  {showServices && (
    <ul className="dropdown-menu">
      <li>
        <Link to="/services/residential-interior-design">
          Residential Interior Design
        </Link>
      </li>
      <li>
        <Link to="/services/commercial-office-interiors">
          Commercial & Office Interiors
        </Link>
      </li>
      <li>
        <Link to="/services/modular-kitchen-wardrobe">
          Modular Kitchen & Wardrobe Design
        </Link>
      </li>
      <li>
        <Link to="/services/renovation-turnkey">
          Renovation & Turnkey Solutions
        </Link>
      </li>
    </ul>
  )}
</li>


              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
                <li>
                <Link to="/about-us">About Us</Link>
              </li>

            </ul>
          </nav>

          {/* Right Icons + CTA */}
          <div className="nav-right">
            <button className="book-btn" onClick={togglePopup}>
              GET IN TOUCH
            </button>
          </div>
        </div>
      </header>

      {/* ===== Sidebar Menu (Mobile) ===== */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>About Us</h3>
          <FaTimes className="close-icon" onClick={toggleMenu} />
        </div>

        <img src={aboutImage} alt="About" className="sidebar-img" />

        <p>
          Ganesh Interior Designs specializes in elegant and modern interiors,
          blending art and functionality to redefine living spaces.
        </p>

        <div className="contact-info">
          <h4>Contact Info</h4>
          <p>
            <FaMapMarkerAlt /> Bangalore
          </p>
          <p>
            <FaPhoneAlt /> +91 9845756562
          </p>
        </div>

        <Link to="/contact" className="about-btn" onClick={toggleMenu}>
          Get in Touch <FiArrowRight />
        </Link>
      </div>

      {/* Overlay for sidebar */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* ===== Popup Contact Form ===== */}
      {showPopup && (
        <>
          <div className="popup-overlay" onClick={togglePopup}></div>
          <div className="popup-form">
            <FaTimes className="popup-close" onClick={togglePopup} />
            <h2>Get In Touch</h2>
            <p>
              We'd love to hear from you! Please fill out the form below and our
              team will reach out shortly.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
                togglePopup();
              }}
            >
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Phone Number" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" className="popup-btn">
                Send Message
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
