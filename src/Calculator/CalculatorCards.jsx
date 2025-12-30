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
          Plan Your Home Interiors with Confidence
        </h2>

        {/* Subtitle */}
        <p className="calc-sub-text">
          Get a quick cost estimate tailored to your home size and design needs
        </p>

        {/* SINGLE CARD */}
        <div
          className="calc-single-card"
          style={{ backgroundImage: `url(${FullHomeImg})` }}
        >
          {/* Overlay */}
          <div className="calc-single-overlay">
         

            <h3 className="calc-single-title">
              Complete Home Interior Cost Calculator
            </h3>

            <p className="calc-single-desc">
              Understand your interior budget before you begin. Estimate costs
              for your living room, kitchen, bedrooms, wardrobes, storage units,
              and finishes — all in just a few simple steps.
            </p>

            <button
              className="calc-btn"
              onClick={() => navigate("/BhkCalculator")}
            >
              Start Cost Calculation
            </button>
          </div>
        </div>

      </Container>
    </section>
  );
}
