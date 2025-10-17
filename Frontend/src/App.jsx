import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Components
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";

// Page Components
import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/hero.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import AboutUsPage from "./landing_page/about/aboutPage.jsx";
import ProductPage from "./landing_page/product/ProductPage.jsx";
import PricingPage from "./landing_page/pricing/Pricing.jsx";


import EmailTester from "./emailTester.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />

        {/* ✅ New route for testing emails */}
        <Route path="/email-test" element={<EmailTester />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
