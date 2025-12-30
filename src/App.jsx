import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterSection from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import BhkCalculator from "./Calculator/BhkCalculator";
import GetQuote from "./Calculator/GetQuote";
import EstimateResult from "./Calculator/EstimatePage";

// Service Detail Pages
import ResidentialInteriorDesign from "./services/ResidentialInteriorDesign";
import CommercialInterior from "./services/CommercialInterior";
import ModularKitchen from "./services/ModularKitchen";
import RenovationTurnkey from "./services/RenovationTurnkey";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* ⭐ THESE ARE THE NEW ROUTES */}
        <Route
          path="/services/residential-interior-design"
          element={<ResidentialInteriorDesign />}
        />

        <Route
          path="/services/commercial-office-interiors"
          element={<CommercialInterior />}
        />

        <Route
          path="/services/modular-kitchen-wardrobe"
          element={<ModularKitchen />}
        />

        <Route
          path="/services/renovation-turnkey"
          element={<RenovationTurnkey />}
        />
<Route path="/blog/1" element={<Blog1 />} />
<Route path="/blog/2" element={<Blog2 />} />
<Route path="/blog/3" element={<Blog3 />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/BhkCalculator" element={<BhkCalculator />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/estimation" element={<EstimateResult />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
