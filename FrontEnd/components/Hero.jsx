import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-white py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      {/* Internal CSS for animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientMove {
            background: linear-gradient(to right, #e0e7ff, #ffffff, #e0e7ff);
            background-size: 200% 200%;
            animation: gradientMove 8s ease infinite;
            opacity: 0.3;
            position: absolute;
            inset: 0;
            z-index: 0;
          }
        `}
      </style>

      {/* Animated Background Layer */}
      <div className="animate-gradientMove"></div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Plan and Manage Events with Ease
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            The all-in-one platform for creating, managing, and promoting your events. 
            From small gatherings to large conferences — we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="/signup" 
              className="bg-indigo-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 hover:bg-indigo-700"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full md:w-1/2">
          <img 
            src="https://devfolio.co/static/community-4-90a8b18ff177d862991ea8cc7a1de011.png" 
            alt="Event Management" 
            className="w-full h-60 md:h-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
