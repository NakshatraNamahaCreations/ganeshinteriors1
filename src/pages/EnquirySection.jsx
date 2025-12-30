

// import React from "react";
// import { FiEdit3 } from "react-icons/fi";
// import { FaChevronDown } from "react-icons/fa";
// import queryImage from "../assets/service2.jpg";

// const EnquirySection = () => {
//   const primary = "#112A49";
//   const gold = "#FBE900"; // Elegant interior gold accent

//   return (
//     <section
//       style={{
//         display: "grid",
//         gridTemplateColumns: "1.1fr 1fr",
//         minHeight: "100vh",
//         fontFamily: "'Poppins', sans-serif",
//         background: "#ffffff",
//       }}
//     >
//       {/* LEFT IMAGE PANEL */}
//       <div
//         style={{
//           backgroundImage: `url(${queryImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative",
//         }}
//       >
//         {/* Gold vertical line overlay */}
//         <div
//           style={{
//             position: "absolute",
//             right: 0,
//             top: 0,
//             height: "100%",
//             width: "8px",
//             background: gold,
//           }}
//         ></div>
//       </div>

//       {/* RIGHT FORM PANEL */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           padding: "80px 60px",
//           position: "relative",
//         }}
//       >
//         <div style={card}>
//           {/* TOP LABEL */}
//           <p
//             style={{
//               fontSize: "13px",
//               letterSpacing: "2px",
//               color: primary,
//               textTransform: "uppercase",
//               fontWeight: 600,
//               marginBottom: "8px",
//             }}
//           >
//             Book Appointment
//           </p>

//           {/* HEADING */}
//           <h2
//             style={{
//               fontSize: "42px",
//               fontWeight: 800,
//               color: "#111",
//               marginBottom: "8px",
//               lineHeight: "1.1",
//             }}
//           >
//             Let's Discuss  
//             <span style={{ color: gold }}> Your Project</span>
//           </h2>

//           {/* Subline */}
//           <div
//             style={{
//               width: "70px",
//               height: "3px",
//               background: primary,
//               margin: "18px 0 35px 0",
//             }}
//           ></div>

//           {/* FORM */}
//           <form style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
//             {/* Row 1 */}
//             <div style={{ display: "flex", gap: "20px" }}>
//               <input type="text" placeholder="Full Name" style={input} />
//               <input type="email" placeholder="Email Address" style={input} />
//             </div>

//             {/* Dropdown */}
//             <div style={{ position: "relative" }}>
//               <select style={{ ...input, appearance: "none" }}>
//                 <option>Select Query Type</option>
//                 <option>Interior Design</option>
//                 <option>Home Renovation</option>
//                 <option>Space Planning</option>
//               </select>
//               <FaChevronDown size={18} color="#777" style={arrow} />
//             </div>

//             {/* Message */}
//             <div style={{ position: "relative" }}>
//               <textarea
//                 placeholder="Write your message..."
//                 rows={4}
//                 style={{ ...input, resize: "none" }}
//               ></textarea>
//               <FiEdit3 size={18} color={primary} style={editIcon} />
//             </div>

//             {/* SUBMIT BUTTON */}
//             <button type="submit" style={btn}>
//               Submit Query
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* RESPONSIVE */}
//       <style>
//         {`
//           @media (max-width: 992px) {
//             section {
//               grid-template-columns: 1fr !important;
//             }
//             div[style*="padding: 80px"] {
//               padding: 40px 25px !important;
//             }
//             h2 {
//               font-size: 30px !important;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// /* CARD */
// const card = {
//   background: "#fff",
//   padding: "50px",
//   borderRadius: "14px",
//   width: "100%",
//   maxWidth: "550px",
//   boxShadow: "0 12px 45px rgba(0,0,0,0.08)",
// };

// /* INPUTS */
// const input = {
//   flex: 1,
//   padding: "16px 20px",
//   border: "1px solid #e5e5e5",
//   borderRadius: "10px",
//   fontSize: "15px",
//   outline: "none",
//   backgroundColor: "#fcfcfc",
//   color: "#333",
//   transition: "0.3s ease",
// };

// /* SUBMIT BUTTON */
// const btn = {
//   background: "#112A49",
//   color: "#fff",
//   border: "none",
//   borderRadius: "50px",
//   padding: "16px 38px",
//   fontSize: "17px",
//   fontWeight: 600,
//   cursor: "pointer",
//   marginTop: "10px",
//   width: "fit-content",
// };

// /* ICONS */
// const arrow = {
//   position: "absolute",
//   right: "18px",
//   top: "50%",
//   transform: "translateY(-50%)",
// };

// const editIcon = {
//   position: "absolute",
//   right: "18px",
//   bottom: "16px",
// };

// export default EnquirySection;
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { PiUserListLight } from "react-icons/pi";

const EnquirySection = () => {
  const gold = "#C7BC92"; // premium gold
  const darkBg = "#1A1A1A";
  const formBg = "#1F1F1F";

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        minHeight: "100vh",
        background: "#0F0F0F",
        padding: "80px 60px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* ✅ LEFT FORM BOX */}
      <div
        style={{
          background: formBg,
          padding: "50px 60px",
          borderRadius: "6px",
          width: "100%",
          maxWidth: "700px",
        }}
      >
        {/* FULL FORM */}
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <input type="text" placeholder="Your Name" style={inputField} />
          <input type="email" placeholder="Email Address" style={inputField} />
          <input type="text" placeholder="Your Phone" style={inputField} />
          <input type="text" placeholder="Subject" style={inputField} />

          {/* Message */}
          <textarea
            placeholder="How can we help you? Feel free to get in touch!"
            rows={4}
            style={{ ...inputField, resize: "none" }}
          ></textarea>

          {/* Submit Button */}
          <button style={submitBtn}>Learn More ↗</button>
        </div>
      </div>

      {/* ✅ RIGHT CONTENT */}
      <div
        style={{
          paddingLeft: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {/* Heading */}
        <h2 style={rightHeading}>
          DO YOU NEED ANY HELP?
          <br />
          SEND MESSAGE.
        </h2>

        {/* Contact Box */}
        <div style={contactBox}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <PiUserListLight size={50} color="#fff" />
          </div>

          <div>
            <p style={{ color: "#fff", opacity: 0.7, marginBottom: 4 }}>
              Call us for any inquiry
            </p>

            <h3 style={{ color: "#fff", fontSize: "20px", margin: 0 }}>
              ( 484 ) 4987 989
            </h3>
          </div>
        </div>
      </div>

      {/* ✅ RESPONSIVE DESIGN */}
      <style>
        {`
          @media (max-width: 992px) {
            section {
              grid-template-columns: 1fr !important;
              padding: 40px 20px !important;
            }
            .right-panel {
              padding-left: 0 !important;
              margin-top: 40px;
            }
          }
        `}
      </style>
    </section>
  );
};

/* ✅ INPUT FIELD DESIGN */
const inputField = {
  width: "100%",
  padding: "15px 18px",
  borderRadius: "5px",
  border: "1px solid #3A3A3A",
  background: "#121212",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
};

/* ✅ SUBMIT BUTTON */
const submitBtn = {
  background: "#C7BC92",
  color: "#000",
  padding: "14px 36px",
  borderRadius: "4px",
  fontSize: "15px",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  width: "fit-content",
  marginTop: "10px",
};

/* ✅ RIGHT SIDE HEADING */
const rightHeading = {
  fontSize: "36px",
  fontWeight: 800,
  lineHeight: "1.3",
  marginBottom: "40px",
};

/* ✅ CONTACT BOX */
const contactBox = {
  background: "#C7BC92",
  padding: "35px 40px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  border: "3px dashed rgba(255,255,255,0.5)",
  maxWidth: "350px",
};

export default EnquirySection;
