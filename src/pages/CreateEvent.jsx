import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { createEvent } from "../services/eventService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const eventTypes = [
  { name: "Cleanup", icon: "🧹", color: "from-green-400 to-emerald-600" },
  { name: "Plantation", icon: "🌱", color: "from-emerald-400 to-teal-600" },
  { name: "Donation", icon: "💝", color: "from-pink-400 to-rose-600" },
  { name: "Awareness", icon: "📢", color: "from-blue-400 to-indigo-600" },
  { name: "Help", icon: "🤝", color: "from-purple-400 to-violet-600" },
  { name: "Other", icon: "✨", color: "from-orange-400 to-amber-600" },
];

const CreateEvent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate each field individually
    if (!title) {
      toast.error("Please enter an event title.");
      return;
    }

    if (!description) {
      toast.error("Please enter an event description.");
      return;
    }

    if (!eventType) {
      toast.error("Please select an event type.");
      return;
    }

    if (!location) {
      toast.error("Please enter an event location.");
      return;
    }

    if (!eventDate) {
      toast.error("Please select an event date and time.");
      return;
    }

    // Validate that event date is in the future
    const now = new Date();
    if (new Date(eventDate) <= now) {
      toast.error("Event date must be in the future.");
      return;
    }

    const newEvent = {
      title,
      description,
      type: eventType,
      thumbnail,
      location,
      date: eventDate.toISOString(),
      createdBy: user?.email,
      creatorEmail: user?.email,
    };

    try {
      setLoading(true);
      await createEvent(newEvent);
      toast.success("Event created successfully!");
      navigate("/manage-events");
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error("Failed to create event.");
    } finally {
      setLoading(false);
    }
  };

  const selectedType = eventTypes.find((t) => t.name === eventType) || {
    name: "Select Type",
    icon: "✨",
    color: "from-gray-400 to-gray-600",
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4 text-6xl animate-bounce">
            {selectedType.icon}
          </div>
          <h2 className="text-5xl font-black mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Create Amazing Event
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Fill in the details below to create your next awesome event! 🎉
          </p>
        </div>

        {/* Main Form Card */}
        <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-500">
          {/* Gradient Top Border */}
          <div className={`h-2 bg-gradient-to-r ${selectedType.color}`}></div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Title Input */}
            <div className="group">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                <span className="text-xl">📝</span>
                Event Title
              </label>
              <input
                type="text"
                placeholder="Enter an exciting title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-purple-300 focus:border-purple-500 dark:focus:ring-purple-600 transition-all duration-300 hover:border-purple-400"
                required
              />
            </div>

            {/* Description Textarea */}
            <div className="group">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                <span className="text-xl">📄</span>
                Event Description
              </label>
              <textarea
                placeholder="Describe your event in detail..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-purple-300 focus:border-purple-500 dark:focus:ring-purple-600 transition-all duration-300 hover:border-purple-400 resize-none"
                required
              />
            </div>

            {/* Event Type - Visual Cards */}
            <div className="group">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-2">
                <span className="text-xl">🏷️</span>
                Event Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {eventTypes.map((type) => (
                  <button
                    key={type.name}
                    type="button"
                    onClick={() => setEventType(type.name)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      eventType === type.name
                        ? `bg-gradient-to-br ${type.color} text-white border-transparent shadow-lg scale-105`
                        : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-purple-400"
                    }`}
                  >
                    <div className="text-3xl mb-2">{type.icon}</div>
                    <div
                      className={`font-semibold text-sm ${
                        eventType === type.name
                          ? "text-white"
                          : "text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      {type.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Location Input */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                  <span className="text-xl">📍</span>
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Event location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-purple-300 focus:border-purple-500 dark:focus:ring-purple-600 transition-all duration-300 hover:border-purple-400"
                  required
                />
              </div>

              {/* Date Picker */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                  <span className="text-xl">📅</span>
                  Date & Time
                </label>
                <DatePicker
                  selected={eventDate}
                  onChange={(date) => setEventDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  minDate={new Date()}
                  placeholderText="Select date and time"
                  className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all duration-300 hover:border-purple-400"
                  required
                />
              </div>
            </div>

            {/* Thumbnail Input */}
            <div className="group">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                <span className="text-xl">🖼️</span>
                Thumbnail URL{" "}
                <span className="text-xs text-gray-500 font-normal">
                  (Required)
                </span>
              </label>
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-purple-300 focus:border-purple-500 dark:focus:ring-purple-600 transition-all duration-300 hover:border-purple-400"
              />
              {thumbnail && (
                <div className="mt-3 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                  <img
                    src={thumbnail}
                    alt="Preview"
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r ${
                selectedType.color
              } text-white py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl disabled:opacity-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Creating Event...</span>
                </>
              ) : (
                <>
                  <span className="text-2xl">{selectedType.icon}</span>
                  <span>Create Event</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Bottom Info Card */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            💡 <span className="font-semibold">Pro Tip:</span> Add a catchy
            title and clear description to attract more participants!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
