import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getEventById, joinEvent } from "../services/eventService";
import { toast } from "react-hot-toast";
import Spinner from "../components/Spinner";
import { format } from "date-fns";
import {
  Calendar,
  MapPin,
  User,
  Clock,
  Share2,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  Users,
} from "lucide-react";

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

    try {
      setJoining(true);
      await joinEvent(id, {
        email: user.email,
        name: user.displayName || null,
        phone: user.phoneNumber || null,
        photoURL: user.photoURL || null,
        uid: user.uid,
      });

      toast.success("Successfully joined the event!");
      setEvent((prev) => ({
        ...prev,
        joinedUsers: [...(prev.joinedUsers || []), user.email],
      }));

      setTimeout(() => navigate("/joined-events"), 1000);
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to join event");
      console.error(err);
    } finally {
      setJoining(false);
    }
  };

  if (loading) return <Spinner />;

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
        <div className="text-center p-8 backdrop-blur-3xl bg-white/40 dark:bg-slate-900/40 rounded-3xl border-2 border-white/60 dark:border-slate-700/40 shadow-2xl">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            Event not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-xl shadow-lg shadow-cyan-500/30 transition-all hover:scale-105"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const formatEventDate = () => {
    try {
      if (!event.date) return "Date not available";
      const dateObj = new Date(event.date);
      if (isNaN(dateObj.getTime())) return "Invalid date";
      return format(dateObj, "PPP p");
    } catch (error) {
      console.error("Date formatting error:", error);
      return "Date unavailable";
    }
  };

  const hasJoined = event.joinedUsers?.includes(user?.email);

  const InfoCard = ({ icon: Icon, label, value, gradient }) => (
    <div className="group relative">
      <div
        className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-lg transition duration-300 rounded-2xl"
        style={{ background: gradient }}
      ></div>
      <div className="relative flex items-center gap-4 p-4 rounded-2xl backdrop-blur-2xl bg-white/50 dark:bg-slate-800/50 border-2 border-white/60 dark:border-slate-700/40 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
        <div
          className="p-3 rounded-xl bg-gradient-to-br shadow-xl shadow-cyan-500/30"
          style={{ background: gradient }}
        >
          <Icon className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">
            {label}
          </p>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
            {value}
          </p>
        </div>
      </div>
    </div>
  );

  const typeGradient =
    event.type === "Online"
      ? "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
      : event.type === "Community"
      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
      : "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 py-8 px-4">
      {/* Animated background orbs - ICE theme */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-300/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Back Button - ICE style */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-2xl bg-white/40 dark:bg-slate-800/40 border border-white/40 dark:border-slate-600/40 hover:scale-105 transition-all shadow-xl shadow-cyan-500/10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            Back
          </span>
        </button>

        {/* Main Content Card - ULTRA ICE GLASSY */}
        <div className="relative group">
          {/* Frosted glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

          <div className="relative backdrop-blur-3xl bg-white/30 dark:bg-slate-900/30 rounded-3xl border-2 border-white/60 dark:border-slate-700/40 shadow-2xl overflow-hidden">
            {/* Frosted glass texture overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMyIgLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
            {/* Hero Image Section - ICE theme */}
            <div className="relative h-[400px] overflow-hidden">
              {/* Frosted gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-blue-900/30 to-transparent z-10"></div>

              {/* Ice crystal shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>

              <img
                src={
                  event.thumbnail ||
                  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop"
                }
                alt={event.title || "Event"}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Type Badge - ICE frosted */}
              <div className="absolute top-6 left-6 z-30">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-2xl bg-white/30 dark:bg-slate-800/30 border-2 border-white/50 dark:border-slate-600/50 shadow-2xl shadow-cyan-500/20">
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span className="text-white font-bold text-sm drop-shadow-lg">
                    {event.type || "Event"}
                  </span>
                </div>
              </div>

              {/* Share Button - ICE frosted */}
              <button className="absolute top-6 right-6 z-30 p-3 rounded-full backdrop-blur-2xl bg-white/30 dark:bg-slate-800/30 border-2 border-white/50 dark:border-slate-600/50 hover:bg-white/40 transition-all shadow-xl shadow-cyan-500/20">
                <Share2 className="w-5 h-5 text-white drop-shadow-lg" />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-2xl">
                  {event.title || "Untitled Event"}
                </h1>
                <div className="flex items-center gap-2 text-white/90">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">
                    {event.joinedUsers?.length || 0} people joined
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-8">
              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard
                  icon={Calendar}
                  label="Event Date"
                  value={formatEventDate()}
                  gradient="linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
                />
                <InfoCard
                  icon={MapPin}
                  label="Location"
                  value={event.location || "Not specified"}
                  gradient="linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)"
                />
                <InfoCard
                  icon={User}
                  label="Organized By"
                  value={event.createdBy || event.creatorEmail || "N/A"}
                  gradient="linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)"
                />
                <InfoCard
                  icon={Clock}
                  label="Event Type"
                  value={event.type || "General"}
                  gradient={typeGradient}
                />
              </div>

              {/* Description - ULTRA ICE GLASS */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 rounded-2xl blur-xl"></div>
                <div className="relative p-6 rounded-2xl backdrop-blur-3xl bg-white/40 dark:bg-slate-800/40 border-2 border-white/60 dark:border-slate-700/40 shadow-xl shadow-cyan-500/10">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                    About This Event
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {event.description ||
                      "No description available for this event."}
                  </p>
                </div>
              </div>

              {/* Action Buttons - ICE GLASS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {user && (
                  <button
                    onClick={handleJoin}
                    disabled={joining || hasJoined}
                    className="group/btn relative flex-1 overflow-hidden rounded-2xl p-[2px] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-gradient-x"></div>
                    <div className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-slate-900/80 group-hover/btn:bg-transparent transition-all">
                      {hasJoined ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-green-500 group-hover/btn:text-white" />
                          <span className="font-bold text-green-600 group-hover/btn:text-white">
                            Already Joined
                          </span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 text-cyan-600 group-hover/btn:text-white" />
                          <span className="font-bold text-slate-800 dark:text-slate-100 group-hover/btn:text-white">
                            {joining ? "Joining..." : "Join Event"}
                          </span>
                        </>
                      )}
                    </div>
                  </button>
                )}

                {user && hasJoined && (
                  <button
                    onClick={() => navigate("/joined-events")}
                    className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl backdrop-blur-2xl bg-gradient-to-r from-blue-500/70 to-indigo-500/70 hover:from-blue-600/80 hover:to-indigo-600/80 text-white font-bold shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:scale-105 border-2 border-white/30"
                  >
                    <Users className="w-5 h-5" />
                    View My Events
                  </button>
                )}
              </div>

              {!user && (
                <div className="p-6 rounded-2xl backdrop-blur-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-500/30 shadow-lg">
                  <p className="text-red-600 dark:text-red-400 font-semibold text-center">
                    🔒 You must be logged in to join this event
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
