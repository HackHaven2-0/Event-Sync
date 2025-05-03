import React from "react";

const EventCard = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={event.banner}
        alt={event.title}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{event.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        <div className="flex justify-between items-center text-gray-700 text-sm">
          <span className="font-medium">{formattedDate}</span>
          <span className="font-medium">{event.location}</span>
        </div>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
