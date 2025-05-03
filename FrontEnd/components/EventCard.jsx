import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      key={`event-card-${event.id}`}
      className="m-3 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      {/* Banner Image */}
      <motion.img
        className="w-full h-60 object-cover rounded-t-lg"
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
          <span className="font-medium">{formattedDate}</span>
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
