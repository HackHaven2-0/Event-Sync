import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-white  p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">Event-Sync</Link>

          {/* Desktop Center Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-indigo-600">Home</Link>
            <Link to="/features" className="text-gray-800 hover:text-indigo-600">Features</Link>
            <Link to="/pricing" className="text-gray-800 hover:text-indigo-600">Events</Link>
            <Link to="/contact" className="text-gray-800 hover:text-indigo-600">About</Link>
          </div>

          {/* Desktop Auth Links */}
          <div className="hidden md:flex space-x-4">
            <Link to="/login" className="text-gray-800 hover:text-indigo-600">Log In</Link>
            <Link
              to="/signup"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Right Section: Log In + Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/login" className="text-gray-800 hover:text-indigo-600">Log In</Link>
            <button onClick={toggleMenu} className="text-gray-800 text-2xl">☰</button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (no login/signup here) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-4 shadow-lg">
            <Link to="/" onClick={toggleMenu} className="block text-gray-800 hover:text-indigo-600">Home</Link>
            <Link to="/features" onClick={toggleMenu} className="block text-gray-800 hover:text-indigo-600">Features</Link>
            <Link to="/pricing" onClick={toggleMenu} className="block text-gray-800 hover:text-indigo-600">Events</Link>
            <Link to="/contact" onClick={toggleMenu} className="block text-gray-800 hover:text-indigo-600">About</Link>
          </div>
        )}
      </nav>

      {/* Search Bar Below Navbar */}
      <div className="bg-gray-50 p-4 shadow-md mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-1/2 py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 ml-4">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
