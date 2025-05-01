import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
// import HowItWorks from './HowItWorks';
// import Testimonials from './Testimonials';
// import CallToAction from './CallToAction';
// import Footer from './Footer';
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>landing page</h1>
      <Navbar />
      <Hero />
      <Features />
      {/* <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer /> */}
    </div>
  );
};

export default LandingPage;
