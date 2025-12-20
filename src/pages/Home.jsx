import React from "react";
import Helmet from "react-helmet"
import BannerSection from "./BannerSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import WhyChooseUs from "./WhyChooseUs";
import MovingTextSection from "./MovingTextSection";
import RecentWorkSection from "./RecentWorkSection";
import TestimonialsSection from "./TestimonialsSection";
import EnquirySection from "./EnquirySection";
import CallToActionSection from "./CallToActionSection";
import BlogSection from "./BlogSection";
import CalculatorHome from "../Calculator/CalculatorHome";
import OurBrand from "./OurBrand";
import PersonalAttention from "./PersonalAttention";

const Home = () => {
  return (
    <>
      
      <Helmet>
        <title>Interior Design Services | Modern & Luxury Interiors</title>
        <meta
          name="description"
          content="Professional interior design company offering residential and commercial interiors, Modular Kitchen Designs, and luxury home design solutions."
        />
      </Helmet>

      {/* Page Sections */}
      <BannerSection />
      <AboutSection />
      <PersonalAttention/>
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUs />
      <MovingTextSection />
      {/* <EstimateSection/> */}
      <CalculatorHome />
      <RecentWorkSection />
      <TestimonialsSection />
      {/* <EnquirySection /> */}
      <OurBrand />
      <CallToActionSection />
      <BlogSection />
    </>
  );
};

export default Home;
