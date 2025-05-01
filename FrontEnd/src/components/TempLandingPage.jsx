import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import Features from './features';
// import HowItWorks from './HowItWorks';
// import Testimonials from './Testimonials';
// import CallToAction from './CallToAction';
// import Footer from './Footer';
import '../styles/LandingPage.css';

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