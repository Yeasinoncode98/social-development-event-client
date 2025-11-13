import React, { useEffect, useState } from "react";
import { getUpcomingEvents } from "../services/eventService";
import EventCard from "../components/EventCard";
import { useAuth } from "../context/AuthContext";

const UpcomingEvents = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filterType, setFilterType] = useState("");

  const fetchEvents = async (searchQuery = "", type = "") => {
    setLoading(true);

    try {
      const data = await getUpcomingEvents(searchQuery, type);
      setEvents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // --- Debouncing Logic ---
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  // --- Data Fetching Logic ---
  useEffect(() => {
    fetchEvents(debouncedSearch, filterType);
  }, [debouncedSearch, filterType]);
  // -------------------------

  const handleJoinSuccess = () => console.log("Joined event!");

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-white dark:bg-gray-900">
      <h1 className=" text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100 text-center">
        Upcoming Events ({events.length})
      </h1>

      {/* MODIFIED FLEX CONTAINER AND WIDTHS */}
      <div className=" flex flex-col md:flex-row md:justify-center md:items-center gap-4 mb-15">
        {/* Search Input - Small on md+, full width on mobile. Max width set to control size. */}
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-red-500 dark:border-red-400 p-2 rounded w-full md:w-auto md:max-w-xs text-gray-900 dark:text-gray-100 dark:bg-gray-700
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                     dark:focus:ring-red-400 dark:focus:border-red-400 dark:focus:bg-gray-700"
        />

        {/* Type Filter - Small on md+, full width on mobile. Max width set to control size. */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-red-500 dark:border-red-400 p-2 rounded w-full md:w-auto md:max-w-[150px] text-gray-900 dark:text-gray-100 dark:bg-gray-700
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                     dark:focus:ring-red-400 dark:focus:border-red-400 dark:focus:bg-gray-700"
        >
          <option value="" className="dark:bg-gray-800 dark:text-gray-100">
            All Types
          </option>
          <option
            value="Plantation"
            className="dark:bg-gray-800 dark:text-gray-100"
          >
            Plantation
          </option>
          <option
            value="Cleanup"
            className="dark:bg-gray-800 dark:text-gray-100"
          >
            Cleanup
          </option>
          <option
            value="Donation"
            className="dark:bg-gray-800 dark:text-gray-100"
          >
            Donation
          </option>
          <option
            value="Awareness"
            className="dark:bg-gray-800 dark:text-gray-100"
          >
            Awareness
          </option>
        </select>
      </div>

      {/* Results Area */}
      <div className="min-h-48">
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                showJoin={true}
                currentUser={user}
                onJoin={handleJoinSuccess}
              />
            ))}
          </div>
        ) : (
          !loading && (
            <p className=" text-7xl text-center text-gray-600 dark:text-gray-400">
              No events found !!... :(
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
