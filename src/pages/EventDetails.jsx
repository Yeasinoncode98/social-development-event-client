import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getEventById, joinEvent } from "../services/eventService";
import { toast } from "react-hot-toast";
import Spinner from "../components/Spinner";
import { format } from "date-fns";

const EventDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [joining, setJoining] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const data = await getEventById(id);
        setEvent(data);
      } catch (err) {
        toast.error("Failed to load event details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  const handleJoin = async () => {
    if (!user) {
      toast.error("You must be logged in to join an event.");
      navigate("/login", { state: { from: `/event/${id}` } });
      return;
    }

    const userEmail = user.email;

    console.log("👤 Firebase User:", user);
    console.log("📧 User Email:", userEmail);

    if (!userEmail) {
      toast.error("Unable to get your email address. Please log in again.");
      return;
    }

    try {
      setJoining(true);
      await joinEvent(id, userEmail);
      toast.success("Successfully joined the event!");

      setEvent((prev) => ({
        ...prev,
        joinedUsers: [...(prev.joinedUsers || []), userEmail],
      }));

      setTimeout(() => {
        navigate("/joined-events");
      }, 1000);
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Failed to join the event.";
      toast.error(errorMsg);
      console.error(err);
    } finally {
      setJoining(false);
    }
  };

  if (loading) return <Spinner />;

  if (!event) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">Event not found.</h2>
      </div>
    );
  }

  const formatEventDate = () => {
    try {
      if (!event.date) return "Date not available";

      const dateObj = new Date(event.date);

      if (isNaN(dateObj.getTime())) {
        console.error("Invalid date:", event.date);
        return "Invalid date";
      }

      return format(dateObj, "PPP p");
    } catch (error) {
      console.error("Date formatting error:", error);
      return "Date unavailable";
    }
  };

  const hasJoined = event.joinedUsers?.includes(user?.email);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-8">
      <img
        src={event.thumbnail || "/default-event.jpg"}
        alt={event.title || "Event"}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-3 text-gray-800 dark:text-gray-100">
        {event.title || "Untitled Event"}
      </h1>
      <p className="text-gray-500 dark:text-gray-300 mb-4">
        {event.description || "No description available"}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-700 dark:text-gray-200">
        <p>
          <span className="font-semibold">Type:</span> {event.type || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Location:</span>{" "}
          {event.location || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Date:</span> {formatEventDate()}
        </p>
        <p>
          <span className="font-semibold">Created By:</span>{" "}
          {event.createdBy || event.creatorEmail || "N/A"}
        </p>
      </div>

      <div className="flex gap-3">
        {user && (
          <button
            onClick={handleJoin}
            disabled={joining || hasJoined}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {joining
              ? "Joining..."
              : hasJoined
              ? "Already Joined"
              : "Join Event"}
          </button>
        )}

        {user && hasJoined && (
          <button
            onClick={() => navigate("/joined-events")}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            View My Joined Events
          </button>
        )}
      </div>

      {!user && (
        <p className="text-red-500 mt-4">
          You must be logged in to join this event.
        </p>
      )}
    </div>
  );
};

export default EventDetails;
