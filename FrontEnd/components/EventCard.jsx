import React, { useState } from "react";
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

  const handleApply = async () => {
    try {
      // Simulate an API call
      await fetch("http://localhost:9000/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: event.id }),
      });

      setIsApplied(true); // Mark as applied
      setShowPrompt(false); // Close the prompt
    } catch (error) {
      console.error("Error applying for the event:", error);
    }
  };

  return (
    <motion.div
      key={`event-card-${event.id}`}
      className="w-full sm:w-80 md:w-96 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
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
          transition={{ duration: 0.5, delay: 0.2 }}>
          {event.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          {event.description}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-700 text-sm sm:text-base"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <span className="font-medium mb-2 sm:mb-0">{formattedDate}</span>
          <span className="font-medium">{event.location}</span>
        </motion.div>
      </div>

      {/* Apply Button */}
      <motion.div
        className="px-4 sm:px-6 py-4 flex justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        {isApplied ? (
          <button
            className="bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow-lg flex items-center justify-center gap-2"
            disabled>
            <FaCheck /> Applied
          </button>
        ) : (
          <button
            onClick={() => setShowPrompt(true)} // Show the prompt on click
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
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
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all">
                Yes
              </button>
              <button
                onClick={() => setShowPrompt(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all">
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
