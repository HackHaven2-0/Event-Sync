
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-indigo-500 mb-2">Event-Sync</h1>
          <p className="text-sm text-gray-300">
            Simplifying event management and planning with seamless sync across platforms.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><a href="/#features" className="hover:text-white">Features</a></li>
            <li><a href="/#events" className="hover:text-white">Events</a></li>
            <li><Link to="/#contact" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-sm text-gray-300">Email: support@eventsync.com</p>
          <p className="text-sm text-gray-300">Phone: +91-9876543210</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Event-Sync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
