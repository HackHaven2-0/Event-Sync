import React from "react";

const EventCard = () => {
  const event = {
    title: "Art & Creativity Expo",
    description:
      "Explore the world of art and creativity with exhibitions, workshops, and live performances.",
    date: new Date("2025-07-20T12:00:00Z"),
    organizerId: "645a1b2c3d4e5f6789012348", // Replace with a valid ObjectId
    attendees: ["645a1b2c3d4e5f6789012349", "645a1b2c3d4e5f6789012350"], // Replace with valid ObjectIds
    location: "456 Art Street, New York, NY, USA",
    category: "art",
    banner:
      "https://img.freepik.com/free-psd/neon-horizontal-banner-template-electronic-music-with-female-dj_23-2148979684.jpg?t=st=1746213045~exp=1746216645~hmac=643d6ab7ff0eadae44ff0a70758d21b057c5a605057347ed134d673c72c3a996&w=1380",
    status: "upcoming",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
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
          <span className="font-medium">{event.date.toLocaleDateString()}</span>
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
