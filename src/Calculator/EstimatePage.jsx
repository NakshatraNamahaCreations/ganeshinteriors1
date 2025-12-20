import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaCheckCircle,
  FaCheckDouble,
  FaMedal,
  FaMoneyBill,
} from "react-icons/fa";
import { Modal } from "react-bootstrap";

export default function EstimateResult({ low, high, currency = "₹", summary }) {
  const navigate = useNavigate();
  const loc = useLocation();
  const [showModal, setShowModal] = useState(false);

  const routeState = loc.state || {};
  const {
  name,
  phone,
  bhk,
  package: selectedPackage,
} = routeState;
  const lowVal = routeState.low ?? low ?? "2L";
  const highVal = routeState.high ?? high ?? "3L";
  const currencySym = routeState.currency ?? currency;
  const planSummary =
    routeState.summary ??
    summary ??
    "Indicative range based on your selections.";

  return (
    <Container
      style={{
        padding: "30px 12px",
        fontFamily: "Poppins, sans-serif",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "880px",
          margin: "24px auto 80px",
          background: "hsl(207, 82%, 96%)",
          borderRadius: "10px",
          boxShadow: "0 18px 40px rgba(18,42,73,0.06)",
          overflow: "hidden",
        }}
      >
        {/* TOP */}
        <div style={{ padding: "28px 28px 6px", textAlign: "center" }}>
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: "#e6eef8",
              color: "#112a49",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            ✓
          </div>

          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#2e2e2e",
            }}
          >
            Here's a quick estimate
          </div>

          <div
            style={{
              marginTop: "8px",
              color: "#6b6670",
              fontSize: "13px",
            }}
          >
            Based on your choices — not final, but a good starting point
          </div>
        </div>

        {/* MIDDLE */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            padding: "18px",
            borderTop: "1px solid #f3eef0",
            borderBottom: "1px solid #f7f4f5",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT */}
          <div style={{ flex: 1.1, textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "13px", color: "#7b6b6b" }}>
                Estimated budget range
              </div>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: "#112a49",
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  alignItems: "baseline",
                  marginTop: "8px",
                }}
              >
                <span style={{ fontSize: "18px" }}>{currencySym}</span>
                <span style={priceTag}>{lowVal}</span>
                —
                <span style={priceTag}>{highVal}</span>
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#777",
                  marginTop: "8px",
                }}
              >
                Final price varies with finishes, appliances & custom work.
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ flex: 0.9 }}>
            <div
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "12px",
                border: "1px solid #f1ecef",
                boxShadow: "0 6px 12px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ fontWeight: "700", marginBottom: "6px" }}>
                Project snapshot
              </div>
              <div style={{ fontSize: "13px", color: "#595959" }}>
                {planSummary}
              </div>

              <button
                onClick={() => setShowModal(true)}
                style={outlineBtn}
              >
                View detailed summary
              </button>
            </div>
          </div>
        </div>

        {/* CTA BAND */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            background: "#112a49",
            padding: "40px",
            alignItems: "center",
          }}
        >
          <div style={{ color: "#fff", fontWeight: "600", flex: 1 }}>
            Want a tailored, accurate quote from a designer? Book a free
            consultation — we’ll refine this estimate.
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button style={secondaryBtn} onClick={() => navigate(-1)}>
              Back
            </button>
            <button style={primaryBtn} onClick={() => navigate("/get-quote")}>
              Get Detailed Quote
            </button>
          </div>
        </div>

        {/* WHY SECTION */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            padding: "22px",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {[
            ["Trusted designers", "Experienced team", FaMedal],
            ["Transparent pricing", "Clear breakdown", FaMoneyBill],
            ["Quality checks", "Inspected before handover", FaCheckCircle],
            ["EMI options", "Flexible plans", FaCheckDouble],
          ].map(([title, desc, Icon], i) => (
            <div
              key={i}
              style={{
                flex: "1 1 180px",
                textAlign: "center",
              }}
            >
              <Icon
                size={40}
                color="#112a49"
                style={{
                  background: "#fcf2bd",
                  padding: "10px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <div style={{ fontWeight: "700", fontSize: "14px" }}>
                {title}
              </div>
              <div style={{ fontSize: "13px", color: "#7b6b6b" }}>
                {desc}
              </div>
            </div>
          ))}
        </div>

        {/* DISCLAIMER */}
        <div
          style={{
            padding: "18px 22px 34px",
            fontSize: "12px",
            color: "#8b7f82",
            borderTop: "1px solid #f6eff0",
          }}
        >
          *This is an indicative estimate. Final quote depends on selected
          finishes, measurements and additional services.
        </div>
      </div>

      {/* MODAL */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "Poppins",
              color: "#112a49",
              fontWeight: "700",
            }}
          >
            Detailed Project Summary
          </Modal.Title>
        </Modal.Header>

      <Modal.Body>
  <ul style={{ listStyle: "none", padding: 0 }}>
    {[
      ["Name", name || "—"],
      ["Phone", phone || "—"],
      ["BHK", bhk ? bhk.toUpperCase() : "—"],
      ["Package", selectedPackage ? selectedPackage.toUpperCase() : "—"],
    ].map(([label, value], i) => (
      <li
        key={i}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 0",
          borderBottom: "1px solid #f1f1f1",
          fontWeight: "600",
        }}
      >
        <span>{label}</span>
        <span>{value}</span>
      </li>
    ))}
  </ul>
</Modal.Body>

      </Modal>
    </Container>
  );
}

/* ----------------- INLINE HELPERS ----------------- */

const priceTag = {
  background: "linear-gradient(90deg,#fdf5c7,#fff)",
  padding: "6px 12px",
  borderRadius: "8px",
};

const outlineBtn = {
  marginTop: "10px",
  padding: "6px 10px",
  borderRadius: "8px",
  border: "1px solid #e8dfe1",
  background: "#fff",
  fontWeight: "600",
  cursor: "pointer",
};

const primaryBtn = {
  background: "#fffdc8",
  color: "#112a49",
  border: "none",
  padding: "10px 18px",
  borderRadius: "28px",
  fontWeight: "700",
  cursor: "pointer",
};

const secondaryBtn = {
  background: "transparent",
  color: "#fff",
  border: "1px solid #efe5e6",
  padding: "8px 14px",
  borderRadius: "28px",
  fontWeight: "700",
  cursor: "pointer",
};
