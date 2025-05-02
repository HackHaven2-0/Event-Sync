import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
// import HowItWorks from './HowItWorks';
// import Testimonials from './Testimonials';
// import CallToAction from './CallToAction';
// import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full font-[Poppins] text-gray-800 bg-white overflow-x-hidden">
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
