
// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaHome, FaCheckCircle } from "react-icons/fa";

// export default function BhkCalculator() {
//   const navigate = useNavigate();
//   const [selectedBhk, setSelectedBhk] = useState("");
//   const [selectedPackage, setSelectedPackage] = useState("");

//   const estimateData = {
//     "1bhk": { basic: "₹2.8L – ₹3.5L", premium: "₹4.5L – ₹9L" },
//     "2bhk": { basic: "₹5.5L – ₹6.5L", premium: "₹7.5L – ₹12L" },
//     "3bhk": { basic: "₹5.5L – ₹8L", premium: "₹7.5L – ₹14L" },
//     "4bhk": { basic: "₹9L – ₹11L", premium: "₹12.5L – ₹20L" },
//   };

//   const handleGetQuote = () => {
//     if (!selectedBhk || !selectedPackage) {
//       alert("Please select BHK and Package");
//       return;
//     }
//     navigate("/get-quote", { state: { selectedBhk, selectedPackage } });
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         background: "linear-gradient(135deg,#ffffff,#fff8e1)",
//         minHeight: "100vh",
//         padding: "40px 16px",
//         marginTop: "100px",
//         marginBottom: "100px",
//       }}
//     >
//       <Container
//         style={{
//           maxWidth: "1300px",
//           background: "#fff",
//           borderRadius: "24px",
//           padding: "48px 36px",
//           boxShadow: "0 8px 30px rgba(17,42,73,0.08)",
//           position: "relative",
//         }}
//       >
//         {/* Top Gradient Bar */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             height: "8px",
//             borderRadius: "24px 24px 0 0",
//             background: "linear-gradient(90deg,#112A49,#112A49,#FBE900)",
//           }}
//         />

//         {/* HEADER */}
//         <Row className="text-center mb-4">
//           <Col>
//             <h1
//               style={{
//                 fontSize: "40px",
//                 fontWeight: 800,
//                 color: "#0b2340",
//               }}
//             >
//               Interior Cost Calculator{" "}
//               <span
//                 style={{
//                   background: "#FBE900",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                 }}
//               >
//                 Made Simple
//               </span>
//             </h1>
//             <p style={{ color: "#555", fontWeight: 500 }}>
//               Select your home type and package
//             </p>
//           </Col>
//         </Row>

//         {/* BHK SELECT */}
//         <div style={{ marginBottom: "24px" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//             <FaHome size={24} color="#FBE900" />
//             <h3 style={{ fontWeight: 700 }}>Select Your BHK</h3>
//           </div>

//           <select
//             value={selectedBhk}
//             onChange={(e) => setSelectedBhk(e.target.value)}
//             style={selectStyle}
//           >
//             <option value="">Select BHK Type</option>
//             <option value="1bhk">1 BHK</option>
//             <option value="2bhk">2 BHK</option>
//             <option value="3bhk">3 BHK</option>
//             <option value="4bhk">4 BHK</option>
//           </select>
//         </div>

//         {/* ESTIMATE */}
//         {selectedBhk && (
//           <div
//             style={{
//               background: "#fffbea",
//               border: "1px solid #FBE900",
//               borderRadius: "16px",
//               padding: "18px",
//               marginBottom: "24px",
//             }}
//           >
//             <h4 style={{ fontWeight: 700, color: "#112A49" }}>
//               Estimated Cost
//             </h4>

//             <EstimateRow
//               label="Basic Package"
//               value={estimateData[selectedBhk].basic}
//             />
//             <EstimateRow
//               label="Premium Package"
//               value={estimateData[selectedBhk].premium}
//             />
//           </div>
//         )}

//         {/* PACKAGE SELECT */}
//         <div style={{ marginBottom: "24px" }}>
//           <h3 style={{ fontWeight: 700 }}>Choose Package ✨</h3>
//           <select
//             value={selectedPackage}
//             onChange={(e) => setSelectedPackage(e.target.value)}
//             style={selectStyle}
//           >
//             <option value="">Select Package</option>
//             <option value="basic">Basic – Budget Friendly</option>
//             <option value="premium">Premium – Luxury Finish</option>
//           </select>
//         </div>

//         {/* PACKAGE DETAILS */}
//   <div
//   style={{
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "16px",
//     marginBottom: "24px",
//   }}
// >
//   <PackageCard
//     title="Basic Package Includes"
//     items={[
//       "Kitchen, Wardrobe, Vanity",
//       "16mm Ply with Matt Finish",
//       "1mm Laminates",
//       "Cost Optimised Hardware",
//     ]}
//     selected={selectedPackage === "basic"}
//     onSelect={() => setSelectedPackage("basic")}
//   />

//   <PackageCard
//     title="Premium Package Includes"
//     items={[
//       "Full Home Storage Units",
//       "Acrylic / PU / Veneer Finish",
//       "Premium Hardware",
//       "False Ceiling & Lighting",
//     ]}
//     selected={selectedPackage === "premium"}
//     onSelect={() => setSelectedPackage("premium")}
//   />
// </div>


//         {/* CTA */}
//         <div style={{ textAlign: "center" }}>
//           <button
//             onClick={handleGetQuote}
//             style={{
//               background: "#FBE900",
//               color: "#112A49",
//               border: "none",
//               padding: "14px 42px",
//               fontWeight: 700,
//               borderRadius: "50px",
//               cursor: "pointer",
//               boxShadow: "0 8px 30px rgba(251,233,0,0.25)",
//             }}
//           >
//             Get My Free Quote
//           </button>
//         </div>
//       </Container>
//     </div>
//   );
// }

// /* ---------- SMALL COMPONENTS ---------- */

// const selectStyle = {
//   width: "100%",
//   padding: "14px 20px",
//   borderRadius: "12px",
//   border: "2px solid #e9ecef",
//   fontSize: "16px",
//   fontWeight: 500,
//   marginTop: "12px",
// };

// const EstimateRow = ({ label, value }) => (
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "space-between",
//       padding: "10px 0",
//       fontWeight: 600,
//     }}
//   >
//     <span>{label}</span>
//     <strong>{value}</strong>
//   </div>
// );

// const PackageCard = ({ title, items, selected, onSelect }) => (
//   <div
//     onClick={onSelect}
//     style={{
//       border: selected ? "2px solid #FBE900" : "1px solid #e9ecef",
//       background: selected ? "#fffbea" : "#fff",
//       borderRadius: "16px",
//       padding: "18px",
//       cursor: "pointer",
//       transition: "all 0.25s ease",
//       boxShadow: selected
//         ? "0 12px 30px rgba(251,233,0,0.25)"
//         : "none",
//     }}
//   >
//     <h5 style={{ fontWeight: 700 }}>
//       {title}
//       {selected && (
//         <span style={{ marginLeft: 8, color: "#FBE900" }}>✓</span>
//       )}
//     </h5>

//     <ul style={{ listStyle: "none", padding: 0 }}>
//       {items.map((i, idx) => (
//         <li
//           key={idx}
//           style={{
//             display: "flex",
//             gap: "10px",
//             marginBottom: "10px",
//             fontSize: "14px",
//           }}
//         >
//           <FaCheckCircle color="#FBE900" /> {i}
//         </li>
//       ))}
//     </ul>
//   </div>
// );


import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHome, FaCheckCircle, FaCube } from "react-icons/fa";

export default function BhkCalculator() {
  const navigate = useNavigate();

  const [selectedBhk, setSelectedBhk] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [step, setStep] = useState(1);

  const packageDetails = {
    basic: {
      title: "Basic Package",
      desc: "Essential interiors for functional living",
      items: [
        "Kitchen, Wardrobe & Vanity",
        "16mm Plywood",
        "Matt Finish",
        "Standard Accessories",
      ],
    },
    premium: {
      title: "Premium Package",
      desc: "Designer interiors with premium finishes",
      items: [
        "Full Home Storage",
        "Acrylic / PU Finish",
        "False Ceiling & Lights",
        "Premium Hardware",
      ],
    },
  };

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

    navigate("/get-quote", {
      state: { selectedBhk, selectedPackage },
    });
  };

  return (
    <div style={page}>
      <Container style={wrapper}>
        {/* HEADER */}
        <div style={header}>
          <h1 style={title}>Interior Cost Calculator</h1>
          <p style={subtitle}>
            Step-by-step estimate based on your home
          </p>
        </div>

        <div style={layout}>
          {/* TIMELINE */}
          <div style={timeline}>
            <TimelineStep active={step >= 1} icon={<FaHome />} text="Select BHK" />
            <TimelineStep active={step >= 2} icon={<FaCube />} text="Choose Package" />
            <TimelineStep active={step >= 3} text="Get Estimate" />
          </div>

          {/* CONTENT */}
          <div>
            {/* STEP 1 */}
        {/* STEP 1 */}
<Section title="Your Home Type">
  <select
    value={selectedBhk}
    onChange={(e) => {
      setSelectedBhk(e.target.value);
      setSelectedPackage("");
      setStep(1);
    }}
    style={select}
  >
    <option value="">Select BHK</option>
    <option value="1bhk">1 BHK</option>
    <option value="2bhk">2 BHK</option>
    <option value="3bhk">3 BHK</option>
    <option value="4bhk">4 BHK</option>
  </select>

  <div style={btnRow}>
    {/* Back button even in BHK */}
    <button
  style={secondaryBtn}
  onClick={() => {
    // Reset calculator state only
    setSelectedBhk("");
    setSelectedPackage("");
    setStep(1);
  }}
>
  Back
</button>


    {selectedBhk && (
      <button style={primaryBtn} onClick={() => setStep(2)}>
        Go
      </button>
    )}
  </div>
</Section>


            {/* STEP 2 */}
            {step >= 2 && (
              <Section title="Choose Package">
                <div style={packageRow}>
                  {["basic", "premium"].map((key) => (
                    <PackageStrip
                      key={key}
                      title={packageDetails[key].title}
                      desc={packageDetails[key].desc}
                      active={selectedPackage === key}
                      onClick={() => setSelectedPackage(key)}
                    />
                  ))}
                </div>

                {selectedPackage && (
                  <div style={btnRow}>
                    <button style={secondaryBtn} onClick={() => setStep(1)}>
                      Back
                    </button>
                    <button style={primaryBtn} onClick={() => setStep(3)}>
                     Go
                    </button>
                  </div>
                )}
              </Section>
            )}

            {/* STEP 3 */}
            {step === 3 && selectedPackage && (
              <>
                <div style={estimateBar}>
  <div>
    <strong>Estimated Cost</strong>
    <p style={{ margin: 0, fontSize: 14 }}>
      {selectedBhk.toUpperCase()} • {selectedPackage.toUpperCase()}
    </p>
  </div>

  {/* Amount on same line, right aligned */}
  <div style={estimateValue}>
    {estimateData[selectedBhk][selectedPackage]}
  </div>
</div>


                <div style={detailPanel}>
                  <h4>{packageDetails[selectedPackage].title} Includes</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {packageDetails[selectedPackage].items.map((item, i) => (
                      <li key={i} style={detailItem}>
                        <FaCheckCircle color="#facc15" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={btnRow}>
                  <button style={secondaryBtn} onClick={() => setStep(2)}>
                    Back
                  </button>
                  <button style={cta} onClick={handleGetQuote}>
                    Get Free Quote
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const TimelineStep = ({ icon, text, active }) => (
  <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: active ? "#facc15" : "#e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon || "✓"}
    </div>
    <span style={{ fontWeight: 600 }}>{text}</span>
  </div>
);

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 30 }}>
    <h4 style={{ fontWeight: 800 }}>{title}</h4>
    {children}
  </div>
);

const PackageStrip = ({ title, desc, active, onClick }) => (
  <div
    onClick={onClick}
    style={{
      padding: 20,
      borderRadius: 16,
      cursor: "pointer",
      background: active ? "#fffbea" : "#fff",
      border: active ? "2px solid #facc15" : "1px solid #e5e7eb",
      flex: 1,
    }}
  >
    <h5>{title}</h5>
    <p style={{ fontSize: 14 }}>{desc}</p>
  </div>
);

/* ---------------- STYLES ---------------- */

const page = { padding: "80px 16px", background: "#fff7ed" };
const wrapper = { maxWidth: 1100, background: "#fff", borderRadius: 24, padding: 40 };
const header = { textAlign: "center", marginBottom: 40 };
const title = { fontSize: 36, fontWeight: 900 };
const subtitle = { color: "#555" };
const layout = { display: "grid", gridTemplateColumns: "220px 1fr", gap: 40 };
const timeline = {};
const select = { width: "100%", padding: 14, borderRadius: 12 };
const packageRow = { display: "flex", gap: 16 };
const btnRow = { display: "flex", gap: 16, marginTop: 24 , border:"none"};
const detailPanel = { background: "#fff", padding: 24, borderRadius: 16 };
const detailItem = { display: "flex", gap: 10, marginBottom: 10 };
const estimateBar = {
  marginTop: 30,
  padding: "20px 26px",
  background: "#0f172a",
  color: "#fff",
  borderRadius: 18,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const estimateValue = {
  fontSize: 24,
  fontWeight: 900,
  whiteSpace: "nowrap",
};

const primaryBtn = { background: "#facc15", padding: "14px 36px", borderRadius: 40 , border:"none"};
const secondaryBtn = { background: "#e5e7eb", padding: "14px 36px", borderRadius: 40, border:"none" };
const cta = { background: "#facc15", padding: "16px 46px", borderRadius: 50 , border:"none"};
