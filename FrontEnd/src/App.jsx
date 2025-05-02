import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/TempLandingPage";
import "./App.css";
import EventCard from "../components/EventCard";
// No changes needed as the import already matches the correct casing

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/card" element={<EventCard />} />
        {/* Add more routes as you build out your application */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
}
export default App;
