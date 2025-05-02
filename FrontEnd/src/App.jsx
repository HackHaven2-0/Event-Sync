import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/TempLandingPage";
import "./App.css";
import LoginSignup from "../components/LoginSignup";
// No changes needed as the import already matches the correct casing

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignup />} />
        {/* Add more routes as you build out your application */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
}
export default App;
