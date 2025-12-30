// import React from "react";

// const MovingTextSection = () => {
//   const gold = "#D4AF37"; // refined metallic gold
//   const bg = "#112A49"; // elegant deep black

//   return (
//     <section
//       style={{
//         backgroundColor: bg,
//         position: "relative",
//         overflow: "hidden",
//         padding: "50px 0",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* Gradient fade left & right for depth */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100px",
//           height: "100%",
//           background: `linear-gradient(to right, ${bg} 0%, transparent 100%)`,
//           zIndex: 2,
//         }}
//       ></div>
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           width: "100px",
//           height: "100%",
//           background: `linear-gradient(to left, ${bg} 0%, transparent 100%)`,
//           zIndex: 2,
//         }}
//       ></div>

//       {/* Moving Text */}
//       <div
//         style={{
//           whiteSpace: "nowrap",
//           display: "inline-block",
//           animation: "scrollLuxury 30s linear infinite",
//         }}
//       >
//         {[...Array(2)].map((_, i) => (
//           <span
//             key={i}
//             style={{
//               fontSize: "42px",
//               fontWeight: 700,
//               letterSpacing: "4px",
//               color: "#fff",
//               textTransform: "uppercase",
//               marginRight: "160px",
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "40px",
//             }}
//           >
//             <span style={dotStyle(gold)}></span> Luxury Home{" "}
//             <span style={dotStyle(gold)}></span> Architecture{" "}
//             <span style={dotStyle(gold)}></span> Building{" "}
//             <span style={dotStyle(gold)}></span> Interior Design{" "}
//             <span style={dotStyle(gold)}></span> Modern Spaces{" "}
//             <span style={dotStyle(gold)}></span> Dream Projects{" "}
//             <span style={dotStyle(gold)}></span>
//           </span>
//         ))}
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes scrollLuxury {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }

//           @keyframes pulseGold {
//             0%, 100% {
//               box-shadow: 0 0 8px rgba(212, 175, 55, 0.5);
//             }
//             50% {
//               box-shadow: 0 0 20px rgba(212, 175, 55, 0.9);
//             }
//           }

//           @media (max-width: 992px) {
//             span {
//               font-size: 28px !important;
//               letter-spacing: 2px !important;
//               gap: 20px !important;
//             }
//           }

//           @media (max-width: 600px) {
//             span {
//               font-size: 20px !important;
//               gap: 10px !important;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// // 🔹 Dot styling with animation
// const dotStyle = (gold) => ({
//   width: "14px",
//   height: "14px",
//   borderRadius: "50%",
//   backgroundColor: gold,
//   boxShadow: `0 0 10px ${gold}`,
//   animation: "pulseGold 2.5s infinite ease-in-out",
// });

// export default MovingTextSection;
import React from "react";

const MovingTextSection = () => {
  const gold = "#D4AF37"; 
  const bg = "#112A49";

  return (
    <section
      style={{
        backgroundColor: bg,
        position: "relative",
        overflow: "hidden",
        padding: "10px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Gradient Fades */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100px",
          height: "100%",
          background: `linear-gradient(to right, ${bg} 0%, transparent 100%)`,
          zIndex: 2,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100px",
          height: "100%",
          background: `linear-gradient(to left, ${bg} 0%, transparent 100%)`,
          zIndex: 2,
        }}
      ></div>

      {/* Moving Text */}
      <div
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          animation: "scrollLuxury 30s linear infinite",
        }}
      >
        {[...Array(2)].map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: "42px",
              fontWeight: 700,
              letterSpacing: "4px",
              color: "#fff",
              textTransform: "uppercase",
              marginRight: "160px",
              display: "inline-flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <PremiumIcon /> Luxury Home <PremiumIcon /> Architecture{" "}
            <PremiumIcon /> Building <PremiumIcon /> Interior Design{" "}
            <PremiumIcon /> Modern Spaces <PremiumIcon /> Dream Projects{" "}
            <PremiumIcon />
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes scrollLuxury {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* Premium Diamond Glow */
          @keyframes goldPulse {
            0%, 100% { box-shadow: 0 0 12px rgba(212,175,55,0.6); }
            50% { box-shadow: 0 0 20px rgba(212,175,55,1); }
          }

          @keyframes rotateDiamond {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @media (max-width: 992px) {
            span {
              font-size: 28px !important;
              letter-spacing: 2px !important;
              gap: 20px !important;
            }
          }

          @media (max-width: 600px) {
            span {
              font-size: 20px !important;
              gap: 10px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

/* ✅ Premium Diamond Icon Component */
const PremiumIcon = () => {
  return (
    <div
      style={{
        width: "16px",
        height: "16px",
        background: "linear-gradient(135deg, #f8e488, #d4af37, #b89520)",
        transform: "rotate(45deg)",
        animation: "rotateDiamond 6s linear infinite, goldPulse 2.5s ease-in-out infinite",
        borderRadius: "3px",
      }}
    ></div>
  );
};

export default MovingTextSection;
