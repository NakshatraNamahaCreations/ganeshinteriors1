// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
// import bgImg from "../assets/bannerinteriors2.jpg"; // ✅ Background image
// import client1 from "../assets/client1.png";
// import client2 from "../assets/client2.png";

// const TestimonialsSection = () => {
//   const gold = "#FBE900";

//   const testimonials = [
//     {
//       id: 1,
//       name: "Seshapriya V",
//       role: "Home Owner",
//       image: client1,
//       rating: 5,
//       text: "They did a fabulous job in remodeling our house. We had a very good rapport. Rajalakshmi, the owner suggested lots of ideas suiting our taste and executed it very well. She delivered the project on time. Will definitely recommend Ganesh interior designs.",
//     },
//     {
//       id: 2,
//       name: "Suresh Prabhu Mithaala",
//       role: "Office Renovation",
//       image: client1,
//       rating: 5,
//       text: "Ganesh Interior Designs did our Living room partition and the whole journey has been very pleasant and the fruitful. From the very first interaction, planning and execution their services has been very professional, transparent and meticulous. Thanks to Mrs. Rajalakshmi for overseeing the work and completing it on time and within budget.",
//     },
//     {
//       id: 3,
//       name: "Lekha vaidyanathan",
//       role: "Apartment Interiors",
//       image: client2,
//       rating: 5,
//       text: "Highly impressed with the way in which the overall interior work was planned executed and by Smt.Rajalakshmi and her team. She thought of even the smallest details and went the extra mile to make execution hassle free.This came as a boon to us as both my husband and myself are senior citizens.She is a true professional and we would rate her services as excellent and highly recommend her",
//     },
//     {
//       id: 4,
//       name: "Avinash Deshpande",
//       role: "Café Owner",
//       image: client2,
//       rating: 5,
//       text: "Ganesh Interiors has done a great job in making our home a beautiful one. We are happy with quality of work and service provided by them. Mrs Rajalakshmi was able to easily understand our requirements and come up with design solutions. She has a great team for execution.Her timely inputs and ability to foresight issues related to re-innovation are appreciable.",
//     },
//     {
//       id: 5,
//       name: "Rashmi S",
//       role: "Villa Renovation",
//       image: client2,
//       rating: 5,
//       text: "GID has done an excellent work with our home interiors. Their quality of their work is great. Mrs. Rajalakshmi(owner), is sincere and very dedicated and gives attention to every small details. I would definitely recommend GID. Wishing all the best in their future endeavors.",
//     },
//     {
//       id: 5,
//       name: "Sajay",
//       role: "Corporate Design",
//       image: client2,
//       rating: 5,
//       text: "Our kitchen and utility area was designed by Ganesh interiors.The work was very good and was completed in record time inspite of festive holiday.Thanks .",
//     },
//   ];

//   return (
//     <section
//       style={{
//         position: "relative",
//         backgroundImage: `url(${bgImg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         color: "#fff",
//         textAlign: "center",
//         padding: "0px 0 100px",
//         fontFamily: "'Syne', sans-serif",
//       }}
//     >
//       {/* Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(255, 255, 255, 1)",
//           zIndex: 1,
//         }}
//       ></div>

//       <div style={{ position: "relative", zIndex: 2 }}>
//         {/* Title */}
//         <p
//           style={{
//             color: "#c3b608ff",
//             fontSize: "15px",
//             textTransform: "uppercase",
//             letterSpacing: "2px",
//             marginBottom: "10px",
//             fontWeight: 900,
//           }}
//         >
//           Testimonials
//         </p>

//         <h2
//           style={{
//             fontSize: "38px",
//             fontWeight: 900,
//             marginBottom: "60px",
//             lineHeight: "1.4",
//             color: "#112A49",
//           }}
//         >
//           What Our Clients Say
//         </h2>

//         {/* Swiper Carousel */}
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={40}
//           slidesPerView={2}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             1024: { slidesPerView: 2 },
//           }}
//           style={{
//             maxWidth: "1200px",
//             margin: "0 auto",
//             paddingBottom: "40px",
//           }}
//         >
//           {testimonials.map((t) => (
//             <SwiperSlide key={t.id}>
//               <div
//                 style={{
//                   backgroundColor: "#112a49ff",
//                   borderRadius: "8px",
//                   padding: "40px 30px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "20px",
//                   borderRight: `2px solid ${gold}`,
//                   boxShadow: "0 5px 20px rgba(0,0,0,0.4)",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-6px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 10px 25px rgba(0,0,0,0.5)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow =
//                     "0 5px 20px rgba(0,0,0,0.4)";
//                 }}
//               >
//                 {/* Left - Client Image */}
//                 <div
//                   style={{
//                     flexShrink: 0,
//                     textAlign: "center",
//                     position: "relative",
//                   }}
//                 >
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     style={{
//                       width: "80px",
//                       height: "80px",
//                       borderRadius: "50%",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div
//                     style={{
//                       position: "absolute",
//                       bottom: "-10px",
//                       left: "50%",
//                       transform: "translateX(-50%)",
//                       backgroundColor: gold,
//                       borderRadius: "50%",
//                       width: "28px",
//                       height: "28px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <FaQuoteLeft size={14} color="#fff" />
//                   </div>
//                 </div>

//                 {/* Right - Content */}
//                 <div style={{ textAlign: "left" }}>
//                   <p
//                     style={{
//                       color: "#ccc",
//                       fontSize: "14px",
//                       lineHeight: "1.8",
//                       marginBottom: "15px",
//                     }}
//                   >
//                     {t.text}
//                   </p>

//                   {/* Stars */}
//                   <div style={{ color: gold, marginBottom: "10px" }}>
//                     {Array.from({ length: t.rating }).map((_, i) => (
//                       <FaStar key={i} style={{ marginRight: "3px" }} />
//                     ))}
//                   </div>

//                   <h4
//                     style={{
//                       fontSize: "16px",
//                       fontWeight: 600,
//                       color: "#fff",
//                       marginBottom: "4px",
//                     }}
//                   >
//                     {t.name}
//                   </h4>
//                   <p
//                     style={{
//                       color: "#999",
//                       fontSize: "13px",
//                     }}
//                   >
//                     {t.role}
//                   </p>
//                 </div>

//                 {/* Quote Icon Right */}
//                 <FaQuoteRight
//                   size={30}
//                   color="#ffffffff"
//                   style={{
//                     position: "absolute",
//                     right: "30px",
//                     bottom: "20px",
//                   }}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

import bgImg from "../assets/shapebackground.png"; // ✅ Updated background
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";

const TestimonialsSection = () => {
  const gold = "#FBE900";

  const testimonials = [
    {
      id: 1,
      name: "Seshapriya V",
      role: "Home Owner",
      image: client1,
      rating: 5,
      text: "They did a fabulous job in remodeling our house. Rajalakshmi suggested lots of ideas suiting our taste and executed it very well.",
    },
    {
      id: 2,
      name: "Suresh Prabhu Mithaala",
      role: "Office Renovation",
      image: client1,
      rating: 5,
      text: "Their planning and execution were very professional. Transparent and meticulous service. Completed on time and within budget.",
    },
    {
      id: 3,
      name: "Lekha Vaidyanathan",
      role: "Apartment Interiors",
      image: client2,
      rating: 5,
      text: "Highly impressed with their attention to detail. As senior citizens, their support made the entire execution hassle-free.",
    },
    {
      id: 4,
      name: "Avinash Deshpande",
      role: "Café Owner",
      image: client2,
      rating: 5,
      text: "Great job making our home beautiful. They understood our requirements clearly and delivered quality work on time.",
    },
    {
      id: 5,
      name: "Rashmi S",
      role: "Villa Renovation",
      image: client2,
      rating: 5,
      text: "Excellent work! Mrs. Rajalakshmi is sincere, dedicated and pays attention to every detail. Highly recommended!",
    },
    {
      id: 6, // ✅ fixed duplicate ID
      name: "Sajay",
      role: "Corporate Design",
      image: client2,
      rating: 5,
      text: "Kitchen & utility area designed very well and finished quickly despite holidays. Very good work.",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "0 0 120px",
        fontFamily: "'Syne', sans-serif",
        height: "500px"
      }}
    >
      {/* ✅ Soft white overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255, 255, 255, 0.4)",
          zIndex: 1,
        }}
      ></div>

      {/* ✅ Foreground content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* TITLE */}
        <p
          style={{
            color: "#FBE900",
            fontSize: "15px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "10px",
            fontWeight: 900,
            textAlign: "center",
            paddingTop:'60px',
          }}
        >
          Testimonials
        </p>

        <h2
          style={{
            fontSize: "38px",
            fontWeight: 900,
            marginBottom: "60px",
            lineHeight: "1.4",
            color: "#112A49",
            textAlign: "center",
              fontFamily:'"Poppins", sans-serif',
           
          }}
        >
          What Our Clients Say
        </h2>

        {/* ✅ Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingBottom: "40px",
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                style={{
                  backgroundColor: "#112A49",
                  borderRadius: "8px",
                  padding: "40px 30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  borderRight: `3px solid ${gold}`,
                  position: "relative",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
                  transition: "0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-7px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* LEFT - Image */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: gold,
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaQuoteLeft size={14} color="#fff" />
                  </div>
                </div>

                {/* RIGHT - Content */}
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      color: "#ddd",
                      fontSize: "14px",
                      lineHeight: "1.8",
                      marginBottom: "15px",
                    }}
                  >
                    {t.text}
                  </p>

                  <div style={{ color: gold, marginBottom: "10px" }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <h4
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "4px",
                    }}
                  >
                    {t.name}
                  </h4>

                  <p
                    style={{
                      color: "#999",
                      fontSize: "13px",
                    }}
                  >
                    {t.role}
                  </p>
                </div>

                {/* Quote Icon Right */}
                <FaQuoteRight
                  size={30}
                  color="#ffffff"
                  style={{
                    position: "absolute",
                    right: "30px",
                    bottom: "20px",
                    opacity: 0.7,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
