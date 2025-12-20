// import React, { useEffect, useState } from "react";

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const move = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);

//     // Detect hover over clickable elements
//     const hoverTargets = document.querySelectorAll("a, button, .hover-target");
//     hoverTargets.forEach((el) => {
//       el.addEventListener("mouseenter", () => setHovered(true));
//       el.addEventListener("mouseleave", () => setHovered(false));
//     });

//     return () => {
//       window.removeEventListener("mousemove", move);
//       hoverTargets.forEach((el) => {
//         el.removeEventListener("mouseenter", () => setHovered(true));
//         el.removeEventListener("mouseleave", () => setHovered(false));
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Outer ring cursor */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: hovered ? 60 : 40,
//           height: hovered ? 60 : 40,
//           borderRadius: "50%",
//           border: `2px solid #FBE900`, // gold border instead of fill
//           transform: `translate(${position.x - (hovered ? 30 : 20)}px, ${
//             position.y - (hovered ? 30 : 20)
//           }px)`,
//           pointerEvents: "none",
//           transition: "all 0.2s ease-out",
//           zIndex: 9999,
//           mixBlendMode: "difference", // keeps visibility across all backgrounds
//         }}
//       ></div>

//       {/* Subtle inner ring for depth */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: hovered ? 20 : 10,
//           height: hovered ? 20 : 10,
//           borderRadius: "50%",
//           border: "1px solid rgba(251,233,0,0.5)", // faint inner outline
//           transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
//           pointerEvents: "none",
//           transition: "all 0.15s ease-out",
//           zIndex: 9999,
//         }}
//       ></div>
//     </>
//   );
// };

// export default Cursor;
