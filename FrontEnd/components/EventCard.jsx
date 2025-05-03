import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa"; // Importing a tick mark icon

const EventCard = ({ event }) => {
  const [isApplied, setIsApplied] = useState(false); // State to track if the user has applied
  const [showPrompt, setShowPrompt] = useState(false); // State to show/hide the prompt

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const checkIfApplied = async () => {
      try {
        const eventId = event._id; // Ensure the event ID is passed correctly
        const response = await fetch(
          `http://localhost:9000/api/events/${eventId}/checkIfApplied`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setIsApplied(data.isApplied); // Set the applied state based on the response
      } catch (error) {
        console.error("Error checking application status:", error);
      }
    };

    checkIfApplied(); // Call the function to check if the user has applied
  }, [event._id]);

  const handleApply = async () => {
    try {
      const eventId = event._id; // Ensure the event ID is passed correctly
      const response = await fetch(
        `http://localhost:9000/api/events/${eventId}/apply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token for authentication
          },
        }
      );
      if (response.status === 202) {
        console.log("You cannot apply to your own event");
        setShowPrompt(false); // Close the prompt
        alert("You cannot apply to your own event"); // Show an alert message
        return; // Exit if the user is trying to apply to their own event
      }

      if (response.ok) {
        setIsApplied(true); // Mark as applied
        setShowPrompt(false); // Close the prompt
      } else {
        console.error("Failed to apply for the event:", await response.json());
      }
    } catch (error) {
      console.error("Error applying for the event:", error);
    }
  };

  return (
    <motion.div
      key={`event-card-${event._id}`}
      className="w-full sm:w-80 md:w-96 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Banner Image */}
      <motion.img
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
        src={event.banner}
        alt={event.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Event Details */}
      <div className="px-4 sm:px-6 py-4">
        <motion.h2
          className="font-bold text-lg sm:text-xl mb-2 text-gray-800"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {event.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {event.description}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-700 text-sm sm:text-base"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="font-medium mb-2 sm:mb-0">{formattedDate}</span>
          <span className="font-medium">{event.location}</span>
        </motion.div>
      </div>

      {/* Apply Button */}
      <motion.div
        className="px-4 sm:px-6 py-4 flex justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {isApplied ? (
          <button
            className="bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow-lg flex items-center justify-center gap-2"
            disabled
          >
            <FaCheck /> Applied
          </button>
        ) : (
          <button
            onClick={() => setShowPrompt(true)} // Show the prompt on click
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            Apply Now
          </button>
        )}
      </motion.div>

      {/* Prompt Modal */}
      {showPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Do you want to apply for this event?
            </h3>
            <div className="flex justify-between">
              <button
                onClick={handleApply}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
              >
                Yes
              </button>
              <button
                onClick={() => setShowPrompt(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default EventCard;