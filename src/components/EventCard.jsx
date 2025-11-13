import React, { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { MapPin, Calendar, ArrowRight, Loader2, Sparkles } from "lucide-react";

const Tag = ({ children, colorClass }) => (
  <span
    className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full backdrop-blur-md ${colorClass} shadow-lg`}
  >
    {children}
  </span>
);

const EventCard = ({ event, showJoin = false, onJoin, currentUser }) => {
  const [loading, setLoading] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  if (!event) return null;

  const { _id, title, location, type, date, thumbnail } = event;

  let formattedDate = "Date not available";
  if (date) {
    const dateObj = new Date(date);
    if (!isNaN(dateObj.getTime())) {
      formattedDate = format(dateObj, "MMM d, yyyy 'at' p");
    }
  }

  const handleJoinEvent = async () => {
    if (!currentUser || !currentUser.email) {
      console.error("❌ Join Failed: Please login to join events.");
      return;
    }

    if (isJoined) {
      console.log("Already joined.");
      return;
    }

    setLoading(true);

    try {
      const API_BASE_URL =
        import.meta.env.VITE_REACT_APP_API_URL ||
        "https://social-development-server-3.vercel.app/api";

      const response = await fetch(`${API_BASE_URL}/events/${_id}/join`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: currentUser.email,
          userName:
            currentUser.displayName?.trim() ||
            currentUser.email.split("@")[0] ||
            "Anonymous",
          userPhone: currentUser.phoneNumber || "N/A",
          userPhoto: currentUser.photoURL || "/default-avatar.png",
          userId: currentUser.uid || "",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Successfully joined the event!");
        setIsJoined(true);
        if (onJoin) onJoin(event);
      } else {
        console.error(`❌ ${data.error || "Failed to join event"}`);
      }
    } catch (error) {
      console.error("Join error: Network error. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  const typeColor =
    type === "Online"
      ? "bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white border border-indigo-300/50"
      : type === "Community"
      ? "bg-gradient-to-r from-emerald-500/80 to-teal-500/80 text-white border border-emerald-300/50"
      : "bg-gradient-to-r from-amber-500/80 to-orange-500/80 text-white border border-amber-300/50";

  const defaultImage =
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop";

  return (
    <div className="group relative h-full">
      {/* Animated gradient background glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition duration-500 animate-pulse"></div>

      {/* Main card */}
      <div
        className="relative h-full flex flex-col rounded-3xl overflow-hidden
                   backdrop-blur-xl bg-white/10 dark:bg-gray-900/10
                   border border-white/20 dark:border-gray-700/20
                   shadow-2xl shadow-purple-500/20 dark:shadow-indigo-500/30
                   transform hover:scale-[1.02] transition-all duration-500 ease-out
                   hover:shadow-3xl hover:shadow-purple-500/40"
      >
        {/* Gradient overlay on card */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5 pointer-events-none"></div>

        {/* Image Section with enhanced overlay */}
        <div className="relative h-52 w-full overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <img
            src={thumbnail || defaultImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
            alt={title || "Event"}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />

          {/* Dark gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Type Tag with enhanced styling */}
          <div className="absolute top-4 left-4 z-10">
            <Tag colorClass={typeColor}>
              <Sparkles className="w-3 h-3 mr-1" />
              {type || "General"}
            </Tag>
          </div>
        </div>

        {/* Content Section with glassmorphism */}
        <div className="relative p-6 flex flex-col flex-grow backdrop-blur-md bg-gradient-to-br from-white/70 via-white/50 to-white/30 dark:from-gray-900/70 dark:via-gray-900/50 dark:to-gray-900/30">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>

          {/* Title */}
          <Link to={`/event/${_id}`} className="relative z-10">
            <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-4 group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-2">
              {title || "Untitled Event"}
            </h3>
          </Link>

          {/* Details with enhanced icons */}
          <div className="relative z-10 space-y-3 text-sm mb-6">
            <div className="flex items-center group/item">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mr-3 group-hover/item:scale-110 transition-transform">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {formattedDate}
              </span>
            </div>
            <div className="flex items-center group/item">
              <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/20 to-pink-500/20 mr-3 group-hover/item:scale-110 transition-transform">
                <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 truncate">
                {location || "Not specified"}
              </span>
            </div>
          </div>

          {/* Action Button with gradient */}
          <div className="relative z-10 mt-auto pt-4 border-t border-white/20 dark:border-gray-700/20">
            <Link
              to={`/event/${_id}`}
              className="group/btn flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-bold
                         bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600
                         hover:from-purple-700 hover:via-pink-700 hover:to-purple-700
                         text-white shadow-lg shadow-purple-500/50
                         hover:shadow-xl hover:shadow-pink-500/50
                         transform hover:-translate-y-0.5
                         transition-all duration-300 ease-out
                         border border-white/20"
            >
              <span className="mr-2">View Event Details</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
