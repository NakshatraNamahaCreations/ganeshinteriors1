import React from "react";
import { Container } from "react-bootstrap";
import "./CalculatorHome.css";
import { useNavigate } from "react-router-dom";

// Image
import FullHomeImg from "../assets/fullhouse.jpg";

export default function CalculatorCards() {
  const navigate = useNavigate();

  return (
    <section className="calc-section">
      <Container>

        {/* Title */}
        <h2 className="calc-main-title">
          Get an estimate for your interior design
        </h2>

        <p className="calc-sub-text">
          Calculate the approximate cost for your complete home interiors
        </p>

        {/* SINGLE CARD */}
        <div
          className="calc-single-card"
          style={{ backgroundImage: `url(${FullHomeImg})` }}
        >
          {/* Overlay */}
          <div className="calc-single-overlay">
       

            <h3 className="calc-single-title">
              Full Home Interior Calculator
            </h3>

            <p className="calc-single-desc">
              Get an instant estimate for your complete home interiors including
              living room, kitchen, bedrooms, wardrobes, and more.
            </p>

            <button
              className="calc-btn"
              onClick={() => navigate("/BhkCalculator")}
            >
              Calculate Now
            </button>
          </div>
        </div>

      </Container>
    </section>
  );
}
