import React, { useState, useEffect } from "react";
import axios from "axios";
import NavDash from "../components/NavDash";
import EventCard from "../components/EventCard";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/events",
          {
            params: { query: searchQuery },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setEvents(response.data);
      } catch (error) {
        window.location.href = "/login";
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, [searchQuery]);

  // Filter events based on search query, status, and category
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter ? event.status === statusFilter : true;
    const matchesCategory = categoryFilter
      ? event.category === categoryFilter
      : true;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <NavDash />

      {/* Filters and Search */}
      <div className="p-6 bg-white shadow-md flex flex-wrap items-center space-x-4">
        <button
          onClick={() => (window.location.href = "/dashboard/events")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Host Event
        </button>
        <input
        
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Categories</option>
          <option value="sports">Sports</option>
          <option value="music">Music</option>
          <option value="art">Art</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="business">Business</option>
          <option value="travel">Travel</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Event Cards */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
            ))
          : filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
      </div>
    </div>
  );
};

export default Dashboard;
