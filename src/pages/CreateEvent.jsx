import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { createEvent } from "../services/eventService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const eventTypes = ["Cleanup", "Plantation", "Donation", "Awareness", "Other"];

const CreateEvent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [thumbnail, setThumbnail] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !location || !eventDate) {
      toast.error("Please fill in all required fields.");
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

  return (
    <div className="relative max-w-3xl mx-auto p-6 mt-10 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
        Create Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          required
        />
        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          required
        />
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
        >
          {eventTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Thumbnail URL (optional)"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <input
          type="text"
          placeholder="Event Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          required
        />
        <DatePicker
          selected={eventDate}
          onChange={(date) => setEventDate(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Select event date"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition"
        >
          {loading ? "Creating..." : "Create Event"}
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;

// .........................................

