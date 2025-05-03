import React from "react";

const NavDash = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="ml-6 text-4xl font-bold text-indigo-600">Event-Sync</h1>
      <button
        onClick={() => (window.location.href = "/dashboard/profile")}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
        Profile
      </button>
    </nav>
  );
};

export default NavDash;
