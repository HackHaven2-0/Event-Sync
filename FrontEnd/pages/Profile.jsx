import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";

const Profile = () => {
  const [user, setUser] = useState({ email: "", username: "" });
  const [organizedEvents, setOrganizedEvents] = useState([]);
  const [attendedEvents, setAttendedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      try {
        // Fetch user profile data
        const userResponse = await axios.get(
          "http://localhost:9000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setUser(userResponse.data.data);

        // Fetch organized events
        const organizedResponse = await axios.get(
          "http://localhost:9000/api/users/organizer/events",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(organizedResponse.data);
        setOrganizedEvents(organizedResponse.data.data);

        // Fetch attended events
        const attendedResponse = await axios.get(
          "http://localhost:9000/api/users/attended/events",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setAttendedEvents(attendedResponse.data.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* User Info */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-indigo-600">Profile</h1>
        <p className="text-gray-700 mt-2">
          <strong>Username:</strong> {user.username}
        </p>
        <p className="text-gray-700 mt-1">
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      {/* Organized Events */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">
          Organized Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-md animate-pulse">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
              ))
            : organizedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
        </div>
      </div>

      {/* Attended Events */}
      <div>
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">
          Attended Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-md animate-pulse">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
              ))
            : attendedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
