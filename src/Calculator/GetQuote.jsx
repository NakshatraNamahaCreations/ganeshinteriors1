import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";


export default function GetQuote() {
  const navigate = useNavigate();
const location = useLocation();
const { selectedBhk, selectedPackage } = location.state || {};

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: true,
  });

  

  const handleChange = (key) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.name.trim()) return alert("Please enter your name");
  if (!form.email.trim()) return alert("Please enter your email");
  if (!form.phone.trim()) return alert("Please enter your phone number");

  navigate("/estimation", {
    state: {
      name: form.name,
      email: form.email,
      phone: form.phone,
      whatsapp: form.whatsapp,
      bhk: selectedBhk,
      package: selectedPackage,
    },
  });
};



  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffffff, #ffffff)",
        padding: "40px 20px",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(12px)",
                borderRadius: "20px",
                padding: "48px 40px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                animation: "fadeInUp 0.6s ease-out",
              }}
            >
              {/* HEADER */}
              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#1a1a2e",
                    marginBottom: "8px",
                  }}
                >
                  You're one step away!
                </h2>
                <p style={{ color: "#555", fontSize: "16px", margin: 0 }}>
                  Get your personalized interior quote in minutes
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit}>
                {/* NAME */}
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange("name")}
                  style={inputStyle}
                  required
                />

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange("email")}
                  style={inputStyle}
                  required
                />

                {/* PHONE */}
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  style={inputStyle}
                  required
                />

                {/* CHECKBOX */}
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14.5px",
                    color: "#444",
                    margin: "20px 0 24px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form.whatsapp}
                    onChange={handleChange("whatsapp")}
                    style={{ marginRight: "10px" }}
                  />
                  Send updates & quote on WhatsApp
                </label>

                {/* LEGAL */}
                <div
                  style={{
                    fontSize: "12.5px",
                    color: "#777",
                    textAlign: "center",
                    marginBottom: "32px",
                  }}
                >
                  By submitting, you agree to our{" "}
                  <span style={linkStyle}>Privacy Policy</span> and{" "}
                  <span style={linkStyle}>Terms of Service</span>.
                </div>

                {/* ACTION BUTTONS */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    style={{
                      flex: 1,
                      padding: "14px",
                      borderRadius: "30px",
                      background: "#112A49",
                      color: "#fff",
                      fontWeight: "600",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      padding: "14px",
                      borderRadius: "12px",
                      fontWeight: "600",
                      background:
                        "linear-gradient(135deg, #667eea, #764ba2)",
                      border: "none",
                      cursor: "pointer",
                      boxShadow:
                        "0 8px 20px rgba(102,126,234,0.3)",
                    }}
                  >
                    Get My Quote
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const inputStyle = {
  width: "100%",
  padding: "16px 20px",
  borderRadius: "12px",
  border: "1.5px solid #e0e0e0",
  fontSize: "16px",
  background: "#fafafa",
  outline: "none",
  marginBottom: "20px",
};

const linkStyle = {
  color: "#667eea",
  cursor: "pointer",
  fontWeight: 500,
};
