import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHome, FaCheckCircle } from "react-icons/fa";

export default function BhkCalculator() {
  const navigate = useNavigate();
  const [selectedBhk, setSelectedBhk] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const estimateData = {
    "1bhk": { basic: "₹2.8L – ₹3.5L", premium: "₹4.5L – ₹9L" },
    "2bhk": { basic: "₹5.5L – ₹6.5L", premium: "₹7.5L – ₹12L" },
    "3bhk": { basic: "₹5.5L – ₹8L", premium: "₹7.5L – ₹14L" },
    "4bhk": { basic: "₹9L – ₹11L", premium: "₹12.5L – ₹20L" },
  };

  const handleGetQuote = () => {
    if (!selectedBhk || !selectedPackage) {
      alert("Please select BHK and Package");
      return;
    }
    navigate("/get-quote", { state: { selectedBhk, selectedPackage } });
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(135deg,#ffffff,#fff8e1)",
        minHeight: "100vh",
        padding: "40px 16px",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <Container
        style={{
          maxWidth: "1300px",
          background: "#fff",
          borderRadius: "24px",
          padding: "48px 36px",
          boxShadow: "0 8px 30px rgba(17,42,73,0.08)",
          position: "relative",
        }}
      >
        {/* Top Gradient Bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            borderRadius: "24px 24px 0 0",
            background: "linear-gradient(90deg,#112A49,#112A49,#FBE900)",
          }}
        />

        {/* HEADER */}
        <Row className="text-center mb-4">
          <Col>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: 800,
                color: "#0b2340",
              }}
            >
              Interior Cost Calculator{" "}
              <span
                style={{
                  background: "#FBE900",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Made Simple
              </span>
            </h1>
            <p style={{ color: "#555", fontWeight: 500 }}>
              Select your home type and package
            </p>
          </Col>
        </Row>

        {/* BHK SELECT */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaHome size={24} color="#FBE900" />
            <h3 style={{ fontWeight: 700 }}>Select Your BHK</h3>
          </div>

          <select
            value={selectedBhk}
            onChange={(e) => setSelectedBhk(e.target.value)}
            style={selectStyle}
          >
            <option value="">Select BHK Type</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
          </select>
        </div>

        {/* ESTIMATE */}
        {selectedBhk && (
          <div
            style={{
              background: "#fffbea",
              border: "1px solid #FBE900",
              borderRadius: "16px",
              padding: "18px",
              marginBottom: "24px",
            }}
          >
            <h4 style={{ fontWeight: 700, color: "#112A49" }}>
              Estimated Cost
            </h4>

            <EstimateRow
              label="Basic Package"
              value={estimateData[selectedBhk].basic}
            />
            <EstimateRow
              label="Premium Package"
              value={estimateData[selectedBhk].premium}
            />
          </div>
        )}

        {/* PACKAGE SELECT */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontWeight: 700 }}>Choose Package ✨</h3>
          <select
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            style={selectStyle}
          >
            <option value="">Select Package</option>
            <option value="basic">Basic – Budget Friendly</option>
            <option value="premium">Premium – Luxury Finish</option>
          </select>
        </div>

        {/* PACKAGE DETAILS */}
  <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "24px",
  }}
>
  <PackageCard
    title="Basic Package Includes"
    items={[
      "Kitchen, Wardrobe, Vanity",
      "16mm Ply with Matt Finish",
      "1mm Laminates",
      "Cost Optimised Hardware",
    ]}
    selected={selectedPackage === "basic"}
    onSelect={() => setSelectedPackage("basic")}
  />

  <PackageCard
    title="Premium Package Includes"
    items={[
      "Full Home Storage Units",
      "Acrylic / PU / Veneer Finish",
      "Premium Hardware",
      "False Ceiling & Lighting",
    ]}
    selected={selectedPackage === "premium"}
    onSelect={() => setSelectedPackage("premium")}
  />
</div>


        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleGetQuote}
            style={{
              background: "#FBE900",
              color: "#112A49",
              border: "none",
              padding: "14px 42px",
              fontWeight: 700,
              borderRadius: "50px",
              cursor: "pointer",
              boxShadow: "0 8px 30px rgba(251,233,0,0.25)",
            }}
          >
            Get My Free Quote
          </button>
        </div>
      </Container>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

const selectStyle = {
  width: "100%",
  padding: "14px 20px",
  borderRadius: "12px",
  border: "2px solid #e9ecef",
  fontSize: "16px",
  fontWeight: 500,
  marginTop: "12px",
};

const EstimateRow = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      fontWeight: 600,
    }}
  >
    <span>{label}</span>
    <strong>{value}</strong>
  </div>
);

const PackageCard = ({ title, items, selected, onSelect }) => (
  <div
    onClick={onSelect}
    style={{
      border: selected ? "2px solid #FBE900" : "1px solid #e9ecef",
      background: selected ? "#fffbea" : "#fff",
      borderRadius: "16px",
      padding: "18px",
      cursor: "pointer",
      transition: "all 0.25s ease",
      boxShadow: selected
        ? "0 12px 30px rgba(251,233,0,0.25)"
        : "none",
    }}
  >
    <h5 style={{ fontWeight: 700 }}>
      {title}
      {selected && (
        <span style={{ marginLeft: 8, color: "#FBE900" }}>✓</span>
      )}
    </h5>

    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((i, idx) => (
        <li
          key={idx}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
            fontSize: "14px",
          }}
        >
          <FaCheckCircle color="#FBE900" /> {i}
        </li>
      ))}
    </ul>
  </div>
);

