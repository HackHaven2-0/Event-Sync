import React from "react";
import { motion } from "framer-motion";

const EventCard = () => {
  const event = {
    title: "Art & Creativity Expo",
    description:
      "Explore the world of art and creativity with exhibitions, workshops, and live performances.",
    date: new Date("2025-07-20T12:00:00Z"),
    organizerId: "645a1b2c3d4e5f6789012348",
    attendees: ["645a1b2c3d4e5f6789012349", "645a1b2c3d4e5f6789012350"],
    location: "456 Art Street, New York, NY, USA",
    category: "art",
    banner:
      "https://img.freepik.com/free-psd/neon-horizontal-banner-template-electronic-music-with-female-dj_23-2148979684.jpg?t=st=1746213045~exp=1746216645~hmac=643d6ab7ff0eadae44ff0a70758d21b057c5a605057347ed134d673c72c3a996&w=1380",
    status: "upcoming",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      {/* Banner Image */}
      <motion.img
        className="w-full h-48 object-cover rounded-t-lg"
        src={event.banner}
        alt={event.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Event Details */}
      <div className="px-6 py-4">
        <motion.h2
          className="font-bold text-xl mb-2 text-gray-800"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          {event.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          {event.description}
        </motion.p>
        <motion.div
          className="flex justify-between items-center text-gray-700 text-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <span className="font-medium">{event.date.toLocaleDateString()}</span>
          <span className="font-medium">{event.location}</span>
        </motion.div>
      </div>

      {/* Apply Button */}
      <motion.div
        className="px-6 py-4 flex justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          Apply Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
