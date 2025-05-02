import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
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
            <Link 
              to="/demo" 
              className="bg-transparent border-2 border-indigo-600 text-indigo-600 py-3 px-6 rounded-md font-medium transition-all duration-300 hover:bg-indigo-100"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-gray-300 w-full h-60 md:h-80 rounded-lg flex justify-center items-center text-gray-600 font-medium">
            Event Planning Illustration
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
