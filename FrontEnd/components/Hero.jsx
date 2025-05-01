import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Plan and Manage Events with Ease</h1>
        <p>
          The all-in-one platform for creating, managing, and promoting your events. 
          From small gatherings to large conferences - we've got you covered.
        </p>
        <div className="hero-btns">
          <Link to="/signup" className="btn-primary">
            Get Started Free
          </Link>
          <Link to="/demo" className="btn-secondary">
            Request Demo
          </Link>
        </div>
      </div>
      <div className="hero-image">
        {/* You would add your hero image or illustration here */}
        <div className="placeholder-image">Event Planning Illustration</div>
      </div>
    </div>
  );
};

export default Hero;
