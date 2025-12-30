// import React from "react";
// import {
//   FaComments,
//   FaDraftingCompass,
//   FaPalette,
//   FaCogs,
//   FaLightbulb,
// } from "react-icons/fa";
// import { motion } from "framer-motion"; // ✅ Import animation library

// const ProcessSection = () => {
//   const gold = "#c19b6b";

//   const steps = [
//     {
//       id: 1,
//       title: "Consultation",
//       desc: "Understanding your lifestyle, needs, and preferences.",
//       icon: <FaComments size={45} color={"#112A49"} />,
//     },
//     {
//       id: 2,
//       title: "Concept Design",
//       desc: "Creating mood boards, sketches, and layout options.",
//       icon: <FaDraftingCompass size={45} color={"#112A49"} />,
//     },
//     {
//       id: 3,
//       title: "Material Selection",
//       desc: "Choosing finishes, textures, and color schemes.",
//       icon: <FaPalette size={45} color={"#112A49"} />,
//     },
//     {
//       id: 4,
//       title: "Execution",
//       desc: "Coordinating construction, furniture, and décor installation.",
//       icon: <FaCogs size={45} color={"#112A49"} />,
//     },
//     {
//       id: 5,
//       title: "Final Styling",
//       desc: "Lighting, accessories, and finishing touches that complete your dream interior.",
//       icon: <FaLightbulb size={45} color={"#112A49"} />,
//     },
//   ];

//   // ✅ Motion variants for entrance animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.25, // delay between each card
//       },
//     },
//   };

//   const itemVariants = (index) => ({
//     hidden: {
//       opacity: 0,
//       y: index % 2 === 0 ? 50 : -50, // alternate up/down entry
//       x: index % 2 === 0 ? -30 : 30, // alternate left/right
//     },
//     show: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   });

//   return (
//     <section
//       style={{
//         backgroundColor: "#fff",
//         padding: "0px 0 70px 0",
//         textAlign: "center",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         style={{ marginBottom: "60px" }}
//       >
//         <p
//           style={{
//             color: "#C6BA0A",
//             fontWeight: 600,
//             textTransform: "uppercase",
//             letterSpacing: "2px",
//             marginBottom: "10px",
//             paddingTop:'40px',
//           }}
//         >
//           Our Process
//         </p>
//         <h2
//           style={{
//             fontSize: "38px",
//             fontWeight: 700,
//             color: "#112A49",
//             marginBottom: "10px",
//           }}
//         >
//           How Our Interior Design Process Works
//         </h2>
//       </motion.div>

//       {/* Steps */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           maxWidth: "1300px",
//           margin: "0 auto",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {steps.map((step, i) => (
//           <motion.div
//             key={step.id}
//             variants={itemVariants(i)}
//             whileHover={{ y: -10, scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 150 }}
//             style={{
//               flex: "1 1 18%",
//               minWidth: "200px",
//               textAlign: "center",
//               position: "relative",
//               transition: "all 0.4s ease",
//             }}
//           >
//             {/* Icon Circle */}
//             <div
//               style={{
//                 width: "130px",
//                 height: "130px",
//                 borderRadius: "50%",
//                 border: `2px dashed ${"#112A49"}`,
//                 margin: "0 auto 25px",
//                 position: "relative",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "all 0.4s ease",
//               }}
//             >
//               {/* Step Number */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "-15px",
//                   right: "-15px",
//                   width: "35px",
//                   height: "35px",
//                   borderRadius: "50%",
//                   border: `2px solid ${"#112A49"}`,
//                   backgroundColor: "#fff",
//                   color: gold,
//                   fontWeight: 600,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 {step.id}
//               </div>
//               {step.icon}
//             </div>

//             {/* Title */}
//             <h4
//               style={{
//                 fontSize: "18px",
//                 fontWeight: 700,
//                 color: "#111",
//                 marginBottom: "8px",
//               }}
//             >
//               {step.title}
//             </h4>

//             {/* Description */}
//             <p
//               style={{
//                 fontSize: "15px",
//                 color: "#777",
//                 lineHeight: "1.6",
//                 maxWidth: "240px",
//                 margin: "0 auto",
//               }}
//             >
//               {step.desc}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Responsive */}
//       <style>
//         {`
//           @media (max-width: 992px) {
//             div[style*="flex: 1 1 18%"] {
//               flex: 1 1 45%;
//             }
//           }

//           @media (max-width: 600px) {
//             div[style*="flex: 1 1 18%"] {
//               flex: 1 1 100%;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default ProcessSection;
import React from "react";
import {
  FaComments,
  FaDraftingCompass,
  FaPalette,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";
import shapeBg from "../assets/shapeBackground.png"; // ✅ Import your background

const ProcessSection = () => {
  const gold = "#c19b6b";

  const steps = [
    {
      id: 1,
      title: "Consultation",
      desc: "Understanding your space, needs, and lifestyle.",
      icon: <FaComments size={45} color={"#112A49"} />,
    },
    {
      id: 2,
      title: "Concept Design",
      desc: " Layouts, mood boards, and design directions.",
      icon: <FaDraftingCompass size={45} color={"#112A49"} />,
    },
    {
      id: 3,
      title: "Material Selection",
      desc: "Choosing high-quality materials, textures, and finishes.",
      icon: <FaPalette size={45} color={"#112A49"} />,
    },
    {
      id: 4,
      title: "Execution",
      desc: " Professional handling of interiors, modular work, and renovations.",
      icon: <FaCogs size={45} color={"#112A49"} />,
    },
    {
      id: 5,
      title: "Styling & Handover",
      desc: "Décor, lighting, and final touches.",
      icon: <FaLightbulb size={45} color={"#112A49"} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = (index) => ({
    hidden: {
      opacity: 0,
      y: index % 2 === 0 ? 50 : -50,
      x: index % 2 === 0 ? -30 : 30,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  return (
    <section
      style={{
        background: `url(${shapeBg}) no-repeat center top`,
        backgroundSize: "cover", // ✅ use cover for full coverage
        padding: "0px 0 70px 0",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
      }}
    >
      {/* ✅ Optional light overlay to soften background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.7)", // ✅ makes background lighter
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: "60px", position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            color: "#C6BA0A",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "10px",
            paddingTop: "40px",
          }}
        >
          Our Process
        </p>

        <h2
          style={{
            fontSize: "38px",
            fontWeight: 700,
            color: "#112A49",
            marginBottom: "10px",
          }}
        >
          How Our Interior & Renovation Process Works
        </h2>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: "1300px",
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            variants={itemVariants(i)}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            style={{
              flex: "1 1 18%",
              minWidth: "200px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                border: `2px dashed #112A49`,
                margin: "0 auto 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-15px",
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  border: "2px solid #112A49",
                  backgroundColor: "#fff",
                  color: gold,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {step.id}
              </div>

              {step.icon}
            </div>

            <h4
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#111",
                marginBottom: "8px",
              }}
            >
              {step.title}
            </h4>

            <p
              style={{
                fontSize: "15px",
                color: "#777",
                lineHeight: "1.6",
                maxWidth: "240px",
                margin: "0 auto",
              }}
            >
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProcessSection;
