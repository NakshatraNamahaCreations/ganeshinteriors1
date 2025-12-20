
import React, { useState, useEffect } from "react";
import bgShape from "../assets/shapebackground.png";
import img1 from "../assets/estimination1.webp";
import img2 from "../assets/estimination2.webp";

import {
  FaHome,
  FaRulerCombined,
  FaCouch,
  FaChevronDown,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { color } from "framer-motion";

/* ------------------------------------------------------
   ✅ GLOBAL PREMIUM DESIGN + BACKGROUND
------------------------------------------------------- */

const wrap = {
  position: "relative",
  padding: "140px 0",
  backgroundImage: `url(${bgShape})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  fontFamily: "Poppins, sans-serif",
};

const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(255,255,255,0.0)",
};

/* ✅ Layout Grid */
const container = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 40px",
  position: "relative",
  display: "grid",
  gridTemplateColumns: "0.9fr 1.1fr",
  gap: "70px",
  alignItems: "center",
  zIndex: 2,
};

/* ------------------------------------------------------
   ✅ LEFT BLOCK (Heading + Images)
------------------------------------------------------- */

const leftBlock = { position: "relative" };

const leftTextBlock = {
  marginBottom: "40px",
};

const leftHeading = {
  fontSize: "44px",
  fontWeight: 800,
  color: "#112A49",
  lineHeight: "1.2",
  marginBottom: "10px",
};

const leftSubheading = {
  fontSize: "18px",
  color: "#444",
  maxWidth: "340px",
  lineHeight: "1.6",
};

/* ✅ Images */
const imgStackWrap = {
  display: "flex",
  alignItems: "center",
  gap: "30px",
};

const imgCard = {
  width: "330px",
  height: "500px",
  borderRadius: "24px",
  objectFit: "cover",
  boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
  border: "1px solid rgba(0,0,0,0.1)",
};

const imgCardSecond = {
  ...imgCard,
  marginTop: "90px",
};

/* ------------------------------------------------------
   ✅ RIGHT FORM CARD
------------------------------------------------------- */

const rightCard = {
  background: "#112a49d7",
  padding: "55px 50px",
  borderRadius: "32px",
  color: "white",
  boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
  border: "1px solid rgba(255,255,255,0.15)",
  margin:'-45px',
};

const title = {
  fontSize: "36px",
  fontWeight: 800,
  marginBottom: "12px",
  lineHeight: "1.3",
};

const subtitle = {
  fontSize: "16px",
  opacity: 0.85,
  marginBottom: "25px",
};

/* ------------------------------------------------------
   ✅ INPUTS
------------------------------------------------------- */

const inputWrap = {
  display: "flex",
  alignItems: "center",
  background: "rgba(255, 255, 255, 0.43)",
  borderRadius: "16px",
  padding: "16px 20px",
  position: "relative",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  marginBottom: "18px",
  color:'white',
  width:'80%',
};

const inputStyle = {
  border: "none",
  outline: "none",
  width: "100%",
  paddingLeft: "45px",
  background: "transparent",
  fontSize: "16px",
  color: "#fff",
};

const iconStyle = {
  position: "absolute",
  left: "18px",
  fontSize: "19px",
  color: "#dce3ff",
};

const dropdownIcon = {
  position: "absolute",
  right: "18px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#ddd",
};

/* ------------------------------------------------------
   ✅ ROOMS GRID
------------------------------------------------------- */

const roomGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
};

const roomCard = {
  background: "rgba(255,255,255,0.07)",
  padding: "18px 20px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.15)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const roomLeft = {
  display: "flex",
  gap: "12px",
  alignItems: "center",
};

const roomIcon = {
  background: "rgba(255,255,255,0.15)",
  width: "42px",
  height: "42px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffffff",
};

/* ------------------------------------------------------
   ✅ FIXED: COUNTERS (Black icons, Round buttons)
------------------------------------------------------- */

const counterWrap = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const counterBtn = {
//   background: "#f8ececff",
//   border: "1px solid #ccc",
  width: "40px",
  height: "36x",
  borderRadius: "60%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  
};

const counterNum = {
  color: "white",
  fontSize: "18px",
  fontWeight: 700,
  color:'white',
};

/* ------------------------------------------------------
   ✅ PACKAGE CARDS
------------------------------------------------------- */

const packageRow = {
  display: "flex",
  gap: "15px",
  marginTop: "20px",
};

const packageCard = {
  flex: 1,
  background: "rgba(255,255,255,0.10)",
  padding: "20px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.15)",
  cursor: "pointer",
  textAlign: "center",
  transition: "0.2s",
};

const packageCardActive = {
  ...packageCard,
  background: "rgba(255,255,255,0.25)",
  borderColor: "#fff",
  transform: "scale(1.05)",
};

/* ------------------------------------------------------
   ✅ BUTTON
------------------------------------------------------- */

const buttonStyle = {
  width: "80%",
  padding: "18px",
  background: "#FBE900",
  border: "none",
  color: "#112A49",
  fontWeight: 700,
  borderRadius: "16px",
  cursor: "pointer",
  marginTop: "28px",
};

/* ------------------------------------------------------
   ✅ FINAL ESTIMATE
------------------------------------------------------- */

const finalBox = {
  background: "rgba(255,255,255,0.14)",
  padding: "25px",
  borderRadius: "20px",
  fontSize: "24px",
  fontWeight: 800,
  textAlign: "center",
};

const backBtn = {
  background: "transparent",
  border: "none",
  color: "#e4eaff",
  cursor: "pointer",
  marginBottom: "10px",
  fontSize: "16px",
};

/* ------------------------------------------------------
   ✅ MAIN COMPONENT
------------------------------------------------------- */

const EstimateSection = () => {
  const [step, setStep] = useState(1);

  const [bhkType, setBhkType] = useState("2 BHK (Spacious)");
  const [carpetArea, setCarpetArea] = useState(1200);
  const [selectedPackage, setSelectedPackage] = useState("premium");

  const [rooms, setRooms] = useState({
    living: 1,
    kitchen: 1,
    dining: 1,
    bedroom: 2,
    bathroom: 2,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: true,
  });

  const [estimatedCost, setEstimatedCost] = useState({ min: 0, max: 0 });

  const BHK_CONFIG = {
    "1 BHK (Small)": { rooms: { bedroom: 1, bathroom: 1 } },
    "2 BHK (Spacious)": { rooms: { bedroom: 2, bathroom: 2 } },
    "3 BHK (Standard)": { rooms: { bedroom: 3, bathroom: 2 } },
  };

  const PACKAGE_RATES = {
    essentials: { min: 800, max: 1200 },
    premium: { min: 1400, max: 1900 },
    luxe: { min: 2200, max: 3000 },
  };

  /* ✅ Auto adjust room count when BHK changes */
  useEffect(() => {
    const config = BHK_CONFIG[bhkType];
    if (config) {
      setRooms((prev) => ({
        ...prev,
        bedroom: config.rooms.bedroom,
        bathroom: config.rooms.bathroom,
      }));
    }
  }, [bhkType]);

  /* ✅ Estimate cost calculation */
  useEffect(() => {
    const rate = PACKAGE_RATES[selectedPackage];

    const multiplier =
      rooms.living * 1 +
      rooms.kitchen * 1.2 +
      rooms.dining * 0.8 +
      rooms.bedroom * 1 +
      rooms.bathroom * 0.7;

    const normalized = multiplier / 5.5;

    setEstimatedCost({
      min: Math.round((rate.min * carpetArea * normalized) / 100000),
      max: Math.round((rate.max * carpetArea * normalized) / 100000),
    });
  }, [rooms, carpetArea, selectedPackage]);

  const updateRoomCount = (room, delta) => {
    setRooms((prev) => ({
      ...prev,
      [room]: Math.max(0, prev[room] + delta),
    }));
  };

  return (
    <section style={wrap}>
      <div style={overlay}></div>

      <div style={container}>
        {/* ✅ LEFT */}
        <div style={leftBlock}>
          <div style={leftTextBlock}>
            <h2 style={leftHeading}>
              Get an estimate for your Bangalore home
            </h2>
            <p style={leftSubheading}>
              Calculate the approximate cost of doing up your interiors
            </p>
          </div>

          <div style={imgStackWrap}>
            <img src={img1} style={imgCard} />
            <img src={img2} style={imgCardSecond} />
          </div>
        </div>

        {/* ✅ RIGHT CARD */}
        <div style={rightCard}>
          <h2 style={title}>WHERE INNOVATION MEETS INTERIOR DESIGN</h2>
          <p style={subtitle}>
            Get premium, fast & accurate interior estimation crafted for
            Bangalore homes.
          </p>

          {/* ✅ STEP 1 */}
          {step === 1 && (
            <>
              <div style={inputWrap}>
                <FaCouch style={iconStyle} />
                <select
                  value={bhkType}
                  onChange={(e) => setBhkType(e.target.value)}
                  style={{ ...inputStyle, appearance: "none" }}
                >
                  {Object.keys(BHK_CONFIG).map((opt) => (
                    <option key={opt} style={{ color: "black" }}>
                      {opt}
                    </option>
                  ))}
                </select>
                <FaChevronDown style={dropdownIcon} />
              </div>

              <div style={inputWrap}>
                <FaRulerCombined style={iconStyle} />
                <input
                  type="number"
                  placeholder="Carpet Area (sq.ft)"
                  value={carpetArea}
                  onChange={(e) => setCarpetArea(Number(e.target.value))}
                  style={inputStyle}
                />
              </div>

              <h4 style={{ marginBottom: 12 }}>Rooms</h4>

              <div style={roomGrid}>
                {Object.entries(rooms).map(([room, count]) => (
                  <div key={room} style={roomCard}>
                    <div style={roomLeft}>
                      <div style={roomIcon}>
                        {room === "living" && <FaHome />}
                        {room === "kitchen" && <FaRulerCombined />}
                        {room === "dining" && <FaCouch />}
                        {room === "bedroom" && <FaCouch />}
                        {room === "bathroom" && <FaRulerCombined />}
                      </div>

                      <span style={{ fontWeight: 600 }}>
                        {room.charAt(0).toUpperCase() + room.slice(1)}
                      </span>
                    </div>

                    <div style={counterWrap}>
                      <button
                        // style={counterBtn}
                        disabled={count <= 0}
                        onClick={() => updateRoomCount(room, -1)}
                      >
                        <FaMinus size={14} color="#ffffffff" style={{zIndex:"999",borderRadius:'40px'}}/>
                      </button>

                      <span style={counterNum}>{count}</span>

                      <button
                        // style={counterBtn}
                        onClick={() => updateRoomCount(room, 1)}
                      >
                        <FaPlus size={14} color="#ffffffff" borderRadius="30px"/>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <h4 style={{ marginTop: 25 }}>Packages</h4>

              <div style={packageRow}>
                {[
                  { key: "essentials", name: "Essentials (₹₹)" },
                  { key: "premium", name: "Premium (₹₹₹)" },
                  { key: "luxe", name: "Luxe (₹₹₹₹)" },
                ].map((pkg) => (
                  <div
                    key={pkg.key}
                    style={
                      selectedPackage === pkg.key
                        ? packageCardActive
                        : packageCard
                    }
                    onClick={() => setSelectedPackage(pkg.key)}
                  >
                    <h5>{pkg.name}</h5>
                  </div>
                ))}
              </div>

              <button style={buttonStyle} onClick={() => setStep(2)}>
                Continue
              </button>
            </>
          )}

          {/* ✅ STEP 2 */}
          {step === 2 && (
            <>
              <button onClick={() => setStep(1)} style={backBtn}>
                ← Back
              </button>

              <input
                type="text"
                placeholder="Name"
                style={inputWrap}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="Email"
                style={inputWrap}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                type="number"
                placeholder="Phone Number"
                style={inputWrap}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <label style={{ display: "flex", gap: 10, marginTop: 10 }}>
                <input
                  type="checkbox"
                  checked={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.checked })
                  }
                />
                <span style={{ color: "#ffffffff" }}>
                  Send updates on WhatsApp
                </span>
              </label>

              <button style={buttonStyle} onClick={() => setStep(3)}>
                View Final Estimate
              </button>
            </>
          )}

          {/* ✅ STEP 3 */}
          {step === 3 && (
            <>
              <button onClick={() => setStep(2)} style={backBtn}>
                ← Back
              </button>

              <div style={finalBox}>
                ₹{estimatedCost.min} Lakhs – ₹{estimatedCost.max} Lakhs
              </div>

              <p style={{ marginTop: 12, color: "#eee" }}>
                Our experts will reach out shortly with the full breakdown.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default EstimateSection;
