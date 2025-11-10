// Delete confirmation
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getUserEvents,
  updateEvent,
  deleteEvent,
} from "../services/eventService";
import { toast } from "react-hot-toast";
import Spinner from "../components/Spinner";

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

  // Fetch user events
  useEffect(() => {
    if (!user) return;

    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getUserEvents(user.email);
        setEvents(data);
      } catch (error) {
        toast.error("Failed to fetch your events.", {
          position: "top-center",
          style: { marginTop: "30px" },
        });
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

      toast.success("Event updated successfully!", {
        position: "top-center",
        style: { marginTop: "30px" },
      });
      setEditingEvent(null);
    } catch (error) {
      toast.error("Failed to update event.", {
        position: "top-center",
        style: { marginTop: "30px" },
      });
      console.error(error);
    }
  };

  const handleDelete = async (eventId) => {
    //  Use toast.promise to ask for confirmation
    const confirmDelete = await new Promise((resolve) => {
      toast(
        (t) => (
          <div className="flex flex-col gap-2">
            <p>Are you sure you want to delete this event?</p>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                onClick={() => {
                  resolve(true);
                  toast.dismiss(t.id);
                }}
              >
                Yes
              </button>
              <button
                className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                onClick={() => {
                  resolve(false);
                  toast.dismiss(t.id);
                }}
              >
                No
              </button>
            </div>
          </div>
        ),
        {
          duration: Infinity, 
          position: "top-center",
          style: { marginTop: "30px" },
        }
      );
    });

    if (!confirmDelete) return;

    try {
      await deleteEvent(eventId);
      setEvents((prev) => prev.filter((ev) => ev._id !== eventId));
      toast.success("Event deleted successfully!", {
        position: "top-center",
        style: { marginTop: "30px" },
      });
    } catch (error) {
      toast.error("Failed to delete event.", {
        position: "top-center",
        style: { marginTop: "30px" },
      });
      console.error(error);
    }
  };

  if (loading) return <Spinner />;

  if (!user) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">
          Please log in to manage your events.
        </h2>
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="text-center mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          No Events Created
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-6">
          You haven't created any events yet. Start by creating your first
          event!
        </p>
        <a
          href="/create-event"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Create Event
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={event.thumbnail || "/default-event.jpg"}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-grow">
              {editingEvent === event._id ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="Type"
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="border p-2 rounded"
                  />
                  <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    placeholder="Thumbnail URL"
                    className="border p-2 rounded"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingEvent(null)}
                      className="flex-1 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <span className="font-medium">Type:</span>{" "}
                    {event.type || "N/A"}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <span className="font-medium">Location:</span>{" "}
                    {event.location || "N/A"}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <span className="font-medium">Date:</span>{" "}
                    {event.date ? new Date(event.date).toLocaleString() : "N/A"}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Participants:</span>{" "}
                    {event.joinedUsers?.length || 0}
                  </p>
                </>
              )}
            </div>
            <div className="flex gap-2 p-4 border-t dark:border-gray-700">
              {editingEvent !== event._id && (
                <>
                  <button
                    onClick={() => startEditing(event)}
                    className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
