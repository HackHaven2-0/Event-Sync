import React from "react";
import { Routes, Route, BrowserRouter, Link, Outlet } from "react-router-dom";
import LandingPage from "../pages/TempLandingPage";
import "./App.css";
import DashBoard from "../pages/Dashboard";
import EventForm from "../pages/EventForm";
import EventCard from "../components/EventCard";
import LoginSignup from "../components/LoginSignup";

function DashboardLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">Welcome to the dashboard!</p>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/events">Events</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <main className="mt-6 w-full max-w-4xl">
        {/* Render nested routes */}
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/card" element={<EventCard />} />
          <Route path="/login" element={<LoginSignup flag={true} />} />
          <Route path="/signup" element={<LoginSignup flag={false} />} />

          {/* Dashboard with Nested Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="events" element={<EventForm />} />
            <Route path="profile" element={<div>Profile Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;