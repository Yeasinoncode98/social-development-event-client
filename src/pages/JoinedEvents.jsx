import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getJoinedEvents } from "../services/eventService"; // deleteEvent removed
import EventCard from "../components/EventCard";
import Spinner from "../components/Spinner";
import { toast } from "react-hot-toast";

const JoinedEvents = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoinedEvents = async () => {
      if (!user?.email) {
        setLoading(false);
        return;
      }

      try {
        const data = await getJoinedEvents(user.email);
        setEvents(data);
      } catch (error) {
        toast.error("Failed to load joined events");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoinedEvents();
  }, [user]);

  if (loading) return <Spinner />;

  if (!user) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Please log in to view your joined events.
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        My Joined Events ({events.length})
      </h1>

      {events.length === 0 ? (
        <div className="text-center mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-md p-12">
          <svg
            className="mx-auto h-24 w-24 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            No Events Yet
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mb-6">
            You haven't joined any events yet. Start exploring events to join!
          </p>
          <a
            href="/upcoming-events"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Browse Events
          </a>
        </div>
      ) : (
        <>
          {/* <p className="text-gray-600 dark:text-gray-300 mb-6">
            You have joined {events.length}{" "}
            {events.length === 1 ? "event" : "events"}
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default JoinedEvents; 
