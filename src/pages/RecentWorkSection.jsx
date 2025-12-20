// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { FiArrowUpRight } from "react-icons/fi";

// /* ✅ Replace with your actual image imports */
// import work1 from "../assets/work1.jpg";
// import work2 from "../assets/work2.jpg";
// import work3 from "../assets/work3.jpg";
// import work4 from "../assets/work4.jpg";
// import work5 from "../assets/work5.jpg";
// import work6 from "../assets/work6.jpg";
// import work7 from "../assets/work7.jpg";
// import work8 from "../assets/work8.jpg";

// const RecentWorkSection = () => {
//   const gold = "";

//   const works = [
//     {
//       id: 1,
//       title: "Kawa - Glamorous Penthouse",
//       subtitle: "Luxury Living • Bangalore",
//       image: work1,
//     },
//     {
//       id: 2,
//       title: "Urban Chic Apartment",
//       subtitle: "Modern Interior • Hyderabad",
//       image: work2,
//     },
//     {
//       id: 3,
//       title: "Serenity Villa",
//       subtitle: "Natural Elegance • Kerala",
//       image: work3,
//     },
//     {
//       id: 4,
//       title: "Elite Work Studio",
//       subtitle: "Corporate Design • Pune",
//       image: work4,
//     },
//     {
//       id: 5,
//       title: "The Zen Retreat",
//       subtitle: "Minimal Living • Chennai",
//       image: work5,
//     },
//     {
//       id: 6,
//       title: "Royal Heritage Bungalow",
//       subtitle: "Classic Theme • Mysore",
//       image: work6,
//     },
//     {
//       id: 7,
//       title: "Coastal Breeze Villa",
//       subtitle: "Beachside Elegance • Goa",
//       image: work7,
//     },
//     {
//       id: 8,
//       title: "Arka - Smart Living Home",
//       subtitle: "Contemporary Space • Mumbai",
//       image: work8,
//     },
//   ];

//   return (
//     <section
//       style={{
//         backgroundColor: "#fff",
//         padding: "100px 0",
//         fontFamily: "'Poppins', sans-serif",
//         overflow: "hidden",
//       }}
//     >
//       {/* Header */}
//       <div style={{ textAlign: "center", marginBottom: "70px" }}>
//         <p
//           style={{
//             color: "#C6BA0A",
//             fontSize: "14px",
//             letterSpacing: "3px",
//             fontWeight: 600,
//             textTransform: "uppercase",
//             marginBottom: "10px",
//           }}
//         >
//           Our Gallery
//         </p>
//         <h2
//           style={{
//             color: "#112A49",
//             fontSize: "40px",
//             fontWeight: 700,
//             margin: 0,
//             lineHeight: "1.3",
//           }}
//         >
//           From Vision to Reality — Our <br />
//           Design Journey in Pictures
//         </h2>
//       </div>

//       {/* Swiper */}
//       <div style={{ width: "100%", position: "relative" }}>
//         <Swiper
//           spaceBetween={40}
//           slidesPerView={1.3}
//           centeredSlides={true}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           modules={[Autoplay, Pagination]}
//           style={{
//             width: "100%",
//             maxWidth: "1400px",
//             margin: "0 auto",
//             paddingBottom: "60px",
//           }}
//           breakpoints={{
//             768: { slidesPerView: 1.4, spaceBetween: 50 },
//             1024: { slidesPerView: 1.7, spaceBetween: 60 },
//             1400: { slidesPerView: 1.9, spaceBetween: 80 },
//           }}
//         >
//           {works.map((work) => (
//             <SwiperSlide key={work.id}>
//               <div
//                 style={{
//                   position: "relative",
//                   overflow: "hidden",
//                   borderRadius: "10px",
//                   cursor: "pointer",
//                   boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//                 }}
//               >
//                 {/* Image */}
//                 <img
//                   src={work.image}
//                   alt={work.title}
//                   style={{
//                     width: "100%",
//                     height: "520px",
//                     objectFit: "cover",
//                     transition: "transform 1s ease",
//                     filter: "brightness(80%)",
//                   }}
//                   className="work-image"
//                 />

//                 {/* Overlay on hover */}
//                 <div
//                   className="overlay"
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     background:
//                       "linear-gradient(to top, rgba(17,42,73,0.9), rgba(17,42,73,0.2))",
//                     opacity: 0,
//                     transition: "opacity 0.5s ease",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#fff",
//                     padding: "20px",
//                   }}
//                 >
//                   <p
//                     style={{
//                       fontSize: "15px",
//                       marginBottom: "8px",
//                       opacity: 0.85,
//                       letterSpacing: "0.5px",
//                     }}
//                   >
//                     {work.subtitle}
//                   </p>
//                   <h3
//                     style={{
//                       fontSize: "20px",
//                       fontWeight: 600,
//                       marginBottom: "20px",
//                       textAlign: "center",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     {work.title}
//                   </h3>

//                   {/* Animated Circle */}
//                   <div
//                     style={{
//                       width: "55px",
//                       height: "55px",
//                       borderRadius: "50%",
//                       border: `2px solid ${gold}`,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       transition: "all 0.4s ease",
//                     }}
//                     className="hover-btn"
//                   >
//                     <FiArrowUpRight size={24} color={gold} />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Hover Animations */}
//       <style>
//         {`
//           .swiper-pagination-bullet {
//             background: #ccc !important;
//             opacity: 1 !important;
//             width: 10px;
//             height: 10px;
//             margin: 0 5px !important;
//             transition: all 0.3s ease;
//           }

//           .swiper-pagination-bullet-active {
//             background: ${gold} !important;
//             width: 12px;
//             height: 12px;
//           }

//           .swiper-slide:hover .overlay {
//             opacity: 1 !important;
//           }

//           .swiper-slide:hover .work-image {
//             transform: scale(1.08);
//             filter: brightness(95%);
//           }

//           .swiper-slide:hover .hover-btn {
//             transform: rotate(45deg);
//             background-color: ${gold};
//           }

//           .swiper-slide:hover .hover-btn svg {
//             color: #fff;
//           }

//           @media (max-width: 768px) {
//             img {
//               height: 400px !important;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default RecentWorkSection;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiArrowUpRight } from "react-icons/fi";

/* ✅ image imports */
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg";
import work6 from "../assets/work6.jpg";
import work7 from "../assets/work7.jpg";
import work8 from "../assets/work8.jpg";

/* ✅ background image */
import gidBanner from "../assets/gidbanner.png";

const RecentWorkSection = () => {
  const gold = "";

  const works = [
    {
      id: 1,
      title: "Kawa - Glamorous Penthouse",
      subtitle: "Luxury Living • Bangalore",
      image: work1,
    },
    {
      id: 2,
      title: "Urban Chic Apartment",
      subtitle: "Modern Interior • Hyderabad",
      image: work2,
    },
    {
      id: 3,
      title: "Serenity Villa",
      subtitle: "Natural Elegance • Kerala",
      image: work3,
    },
    {
      id: 4,
      title: "Elite Work Studio",
      subtitle: "Corporate Design • Pune",
      image: work4,
    },
    {
      id: 5,
      title: "The Zen Retreat",
      subtitle: "Minimal Living • Chennai",
      image: work5,
    },
    {
      id: 6,
      title: "Royal Heritage Bungalow",
      subtitle: "Classic Theme • Mysore",
      image: work6,
    },
    {
      id: 7,
      title: "Coastal Breeze Villa",
      subtitle: "Beachside Elegance • Goa",
      image: work7,
    },
    {
      id: 8,
      title: "Arka - Smart Living Home",
      subtitle: "Contemporary Space • Mumbai",
      image: work8,
    },
  ];

  return (
    <section
      style={{
        background: `url(${gidBanner}) no-repeat center top`,
        backgroundSize: "cover",
        padding: "100px 0",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ✅ Optional light overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.55)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "70px", position: "relative", zIndex: 1 }}>
        <p
          style={{
            color: "#C6BA0A",
            fontSize: "14px",
            letterSpacing: "3px",
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Our Gallery
        </p>
        <h2
          style={{
            color: "#112A49",
            fontSize: "40px",
            fontWeight: 700,
            margin: 0,
            lineHeight: "1.3",
          }}
        >
          From Vision to Reality — Our <br />
          Design Journey in Pictures
        </h2>
      </div>

      {/* Swiper */}
      <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <Swiper
          spaceBetween={40}
          slidesPerView={1.3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            paddingBottom: "60px",
          }}
          breakpoints={{
            768: { slidesPerView: 1.4, spaceBetween: 50 },
            1024: { slidesPerView: 1.7, spaceBetween: 60 },
            1400: { slidesPerView: 1.9, spaceBetween: 80 },
          }}
        >
          {works.map((work) => (
            <SwiperSlide key={work.id}>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "10px",
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  style={{
                    width: "100%",
                    height: "520px",
                    objectFit: "cover",
                    transition: "transform 1s ease",
                    filter: "brightness(80%)",
                  }}
                  className="work-image"
                />

                {/* overlay */}
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to top, rgba(17,42,73,0.9), rgba(17,42,73,0.2))",
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "8px",
                      opacity: 0.85,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {work.subtitle}
                  </p>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      marginBottom: "20px",
                      textAlign: "center",
                      lineHeight: "1.4",
                    }}
                  >
                    {work.title}
                  </h3>

                  <div
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      border: `2px solid ${gold}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.4s ease",
                    }}
                    className="hover-btn"
                  >
                    <FiArrowUpRight size={24} color={gold} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          .swiper-pagination-bullet {
            background: #ccc !important;
            opacity: 1 !important;
            width: 10px;
            height: 10px;
            margin: 0 5px !important;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: ${gold} !important;
            width: 12px;
            height: 12px;
          }

          .swiper-slide:hover .overlay {
            opacity: 1 !important;
          }

          .swiper-slide:hover .work-image {
            transform: scale(1.08);
            filter: brightness(95%);
          }

          .swiper-slide:hover .hover-btn {
            transform: rotate(45deg);
            background-color: ${gold};
          }

          .swiper-slide:hover .hover-btn svg {
            color: #fff;
          }

          @media (max-width: 768px) {
            img {
              height: 400px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default RecentWorkSection;
