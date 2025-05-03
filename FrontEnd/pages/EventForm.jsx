import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import NavDash from "../components/NavDash";

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    organizerId: "",
    location: "",
    category: "",
    banner: "",
    status: "upcoming",
  });

  const [attendees, setAttendees] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:9000/api/events",
        { ...formData, attendees },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Event created successfully!");
      setFormData({
        title: "",
        description: "",
        date: "",
        organizerId: "",
        location: "",
        category: "",
        banner: "",
        status: "upcoming",
      });
      setAttendees([]);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create event");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavDash />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10">
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          Create a New Event
        </motion.h2>

        {error && (
          <p className="text-red-600 text-center font-medium mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            {
              label: "Title",
              name: "title",
              type: "text",
              placeholder: "Enter event title",
            },
            {
              label: "Description",
              name: "description",
              type: "textarea",
              placeholder: "Enter event description",
            },
            { label: "Date", name: "date", type: "date" },
            {
              label: "Location",
              name: "location",
              type: "text",
              placeholder: "Enter event location",
            },
            {
              label: "Banner URL",
              name: "banner",
              type: "text",
              placeholder: "Enter banner URL",
            },
          ].map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
              className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              )}
            </motion.div>
          ))}

          {/* Category Select */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
              <option value="">Select a category</option>
              {[
                "sports",
                "music",
                "art",
                "technology",
                "food",
                "education",
                "health",
                "business",
                "travel",
                "other",
              ].map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isLoading}
            className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition-all duration-300 ease-in-out ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {isLoading ? "Creating Event..." : "Create Event"}
          </motion.button>
        </form>
      </motion.div>
    </>
  );
};

export default EventForm;
