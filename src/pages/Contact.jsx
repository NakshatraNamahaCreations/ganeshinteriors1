import React from "react";
import "./Contact.css";
import bannerImg from "../assets/work7.jpg"; // <-- your banner image path
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
    <Helmet>
       <title>Contact Our Interior Design | Modern Home & Office Design</title>
        <meta
          name="description"
          content="Reach out to our luxury interior design studio for tailored design consultations, project and expert guidance to craft elegant and functional interiors."
        />
    </Helmet>
    <div className="contact-page">
      {/* 🌄 Banner Section */}
      <section
        className="contact-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-overlay">
          <h1>
            Contact <span>Us</span>
          </h1>
        </div>
      </section>

      {/* 📨 Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Form Section */}
          <div className="contact-left">
            <p className="contact-subtitle">Contact Us</p>
            <h2 className="contact-title">Feel Free to Write</h2>

            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Email address" />
              </div>

              <div className="form-row">
                <input type="text" placeholder="Phone number" />
                <input type="text" placeholder="Subject" />
              </div>

              <textarea rows="5" placeholder="Write a message"></textarea>

              <button type="submit" className="send-btn">
                Send a Message
              </button>
            </form>
          </div>

          {/* Right Info Box */}
          <div className="contact-right">
            <div className="info-box">
              <div className="info-item">
                <p className="info-label">Call anytime</p>
                <h4 className="info-text">098457 56562</h4>
              </div>

              <div className="info-item">
                <p className="info-label">Send email</p>
                <h4 className="info-text">info@ganeshinteriorsdesigns.com</h4>
              </div>

              <div className="info-item">
                <p className="info-label">Visit Office</p>
                <h4 className="info-text">
                  Kothanur Main Rd, Nrupathunga Nagar, Kothnoor Dinne, 8th
                  Phase, J. P. Nagar, Bengaluru, Kothnur, Karnataka 560062
                </h4>
              </div>

              <div className="divider"></div>

              <div className="social-icons">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaPinterestP />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 📍 Google Map Section */}
      <section className="map-section">
        <iframe
          title="Google Map"
<<<<<<< HEAD
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.506560712583!2d77.58122327489136!3d12.879543887427387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae154a6f3abac1%3A0xe6161fd8c1d54765!2sGanesh%20Interior%20Designs!5e1!3m2!1sen!2sin!4v1766982446551!5m2!1sen!2sin"
=======
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.0274188215374!2d144.9631576153109!3d-37.81410797975101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f35f06f4b7b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1676741234567!5m2!1sen!2sin"
>>>>>>> 0247319fa34256abdc946b7fa26eea2e6c7a4f48
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
    </>
  );
};

export default Contact;
