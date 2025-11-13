import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getUserEvents,
  updateEvent,
  deleteEvent,
} from "../services/eventService";
import { toast } from "react-hot-toast";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

const ManageEvents = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    location: "",
    date: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (!user) return;

    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getUserEvents(user.email);
        setEvents(data);
      } catch (error) {
        toast.error("Failed to fetch your events.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [user]);

  const startEditing = (event) => {
    setEditingEvent(event._id);
    setFormData({
      title: event.title || "",
      type: event.type || "",
      location: event.location || "",
      date: event.date ? new Date(event.date).toISOString().slice(0, 16) : "",
      thumbnail: event.thumbnail || "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editingEvent) return;

    try {
      await updateEvent(editingEvent, formData);

      setEvents((prev) =>
        prev.map((ev) =>
          ev._id === editingEvent ? { ...ev, ...formData } : ev
        )
      );

      toast.success("Event updated successfully!");
      setEditingEvent(null);
    } catch (error) {
      toast.error("Failed to update event.");
      console.error(error);
    }
  };

  const executeDelete = async (eventId) => {
    const deletionPromise = deleteEvent(eventId);

    toast
      .promise(deletionPromise, {
        loading: "Deleting event...",
        success: "Event deleted successfully!",
        error: "Failed to delete event.",
      })
      .then(() => {
        setEvents((prev) => prev.filter((ev) => ev._id !== eventId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (eventId) => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <span role="img" aria-label="alert" className="text-xl">
                  ⚠️
                </span>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Confirm Deletion
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                  Are you sure you want to permanently delete this event?
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200 dark:border-gray-600">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                executeDelete(eventId);
              }}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  if (loading) return <Spinner />;

  if (!user) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Please log in to manage your events.
        </h2>
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="text-center mt-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20 rounded-2xl shadow-xl p-12 max-w-2xl mx-auto border border-purple-200 dark:border-purple-800">
        <div className="mb-4 text-6xl">🎉</div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
          No Events Created
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          You haven't created any events yet. Start by creating your first
          event!
        </p>
        <Link
          to="/create-event"
          className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-semibold text-lg"
        >
          ✨ Create Your First Event
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => {
          const gradients = [
            "from-violet-500 via-purple-500 to-fuchsia-500",
            "from-cyan-500 via-blue-500 to-indigo-500",
            "from-pink-500 via-rose-500 to-red-500",
            "from-emerald-500 via-teal-500 to-cyan-500",
            "from-amber-500 via-orange-500 to-red-500",
            "from-blue-500 via-purple-500 to-pink-500",
          ];
          const gradient = gradients[index % gradients.length];

          return (
            <div
              key={event._id}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-purple-400 dark:hover:border-purple-600 hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
              ></div>

              {/* Image Container with Dynamic Gradient Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.thumbnail || "/default-event.jpg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-40 group-hover:opacity-60 transition-all duration-500`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

                {/* Animated Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                ></div>

                {/* Participant Badge with Gradient */}
                <div
                  className={`absolute top-4 right-4 bg-gradient-to-r ${gradient} backdrop-blur-md px-4 py-2 rounded-full shadow-2xl transform transition-all duration-500 group-hover:scale-110`}
                >
                  <span className="text-sm font-bold text-white flex items-center gap-1">
                    <span className="text-lg">👥</span>
                    {event.joinedUsers?.length || 0}
                  </span>
                </div>

                {/* Floating Event Title on Hover */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-lg drop-shadow-lg line-clamp-2">
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Content Container with Glass Effect */}
              <div className="p-6 backdrop-blur-sm">
                {editingEvent === event._id ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Title"
                      className="border-2 border-purple-300 dark:border-purple-600 p-3 rounded-xl dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                      required
                    />
                    <input
                      type="text"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      placeholder="Type"
                      className="border-2 border-purple-300 dark:border-purple-600 p-3 rounded-xl dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                    />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Location"
                      className="border-2 border-purple-300 dark:border-purple-600 p-3 rounded-xl dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                    />
                    <input
                      type="datetime-local"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="border-2 border-purple-300 dark:border-purple-600 p-3 rounded-xl dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                    />
                    <input
                      type="text"
                      name="thumbnail"
                      value={formData.thumbnail}
                      onChange={handleChange}
                      placeholder="Thumbnail URL"
                      className="border-2 border-purple-300 dark:border-purple-600 p-3 rounded-xl dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                    />
                    <div className="flex gap-3 mt-2">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-2xl font-bold transform hover:scale-105"
                      >
                        ✓ Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingEvent(null)}
                        className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-3 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl font-bold transform hover:scale-105"
                      >
                        ✕ Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white line-clamp-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {event.title}
                    </h3>

                    <div className="space-y-3 mb-5">
                      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-3 rounded-xl transform transition-all duration-300 hover:scale-105">
                        <span className="mr-3 text-xl">🏷️</span>
                        <span className="font-semibold mr-2">Type:</span>
                        <span
                          className={`bg-gradient-to-r ${gradient} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md`}
                        >
                          {event.type || "N/A"}
                        </span>
                      </div>

                      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-3 rounded-xl transform transition-all duration-300 hover:scale-105">
                        <span className="mr-3 text-xl">📍</span>
                        <span className="font-semibold mr-2">Location:</span>
                        <span className="truncate font-medium">
                          {event.location || "N/A"}
                        </span>
                      </div>

                      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3 rounded-xl transform transition-all duration-300 hover:scale-105">
                        <span className="mr-3 text-xl">📅</span>
                        <span className="font-semibold mr-2">Date:</span>
                        <span className="truncate font-medium">
                          {event.date
                            ? new Date(event.date).toLocaleString()
                            : "N/A"}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Action Buttons with Cool Gradients */}
              {editingEvent !== event._id && (
                <div className="flex gap-3 p-6 pt-0">
                  <button
                    onClick={() => startEditing(event)}
                    className="flex-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-white px-5 py-3.5 rounded-xl hover:from-amber-500 hover:via-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl font-bold flex items-center justify-center gap-2 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <span className="text-lg">✏️</span>
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="flex-1 bg-gradient-to-r from-red-500 via-rose-600 to-pink-600 text-white px-5 py-3.5 rounded-xl hover:from-red-600 hover:via-rose-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-2xl font-bold flex items-center justify-center gap-2 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <span className="text-lg">🗑️</span>
                    <span>Delete</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageEvents;
