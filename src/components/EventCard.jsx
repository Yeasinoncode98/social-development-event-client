// Update version 2
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { format } from "date-fns";
// import { MapPin, Calendar, Users, ArrowRight, Loader2 } from "lucide-react"; // Using lucide-react for icons

// // NOTE: alert() calls have been replaced with console.error/console.log
// // as native browser alerts are not supported in this environment.

// // --- Helper Components for Aesthetics ---

// const Tag = ({ children, colorClass }) => (
//   <span
//     className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${colorClass}`}
//   >
//     {children}
//   </span>
// );

// const EventCard = ({ event, showJoin = false, onJoin, currentUser }) => {
//   const [loading, setLoading] = useState(false);
//   const [isJoined, setIsJoined] = useState(false); // New state to manage local join status

//   if (!event) return null;

//   const { _id, title, location, type, date, thumbnail } = event;

//   // Safe date formatting
//   let formattedDate = "Date not available";
//   if (date) {
//     const dateObj = new Date(date);
//     if (!isNaN(dateObj.getTime())) {
//       formattedDate = format(dateObj, "MMM d, yyyy 'at' p");
//     }
//   }

//   const handleJoinEvent = async () => {
//     if (!currentUser || !currentUser.email) {
//       console.error("❌ Join Failed: Please login to join events.");
//       // In a real app, use a Toast: toast.error("Please log in to join events.");
//       return;
//     }

//     if (isJoined) {
//       console.log("Already joined.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // NOTE: The endpoint is currently localhost, which may fail in a hosted environment.
//       const response = await fetch(
//         `http://localhost:3000/api/events/${_id}/join`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             userEmail: currentUser.email,
//             userName:
//               currentUser.displayName?.trim() ||
//               currentUser.email.split("@")[0] ||
//               "Anonymous",
//             userPhone: currentUser.phoneNumber || "N/A",
//             userPhoto: currentUser.photoURL || "/default-avatar.png",
//             userId: currentUser.uid || "",
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("✅ Successfully joined the event!");
//         setIsJoined(true); // Update local state
//         if (onJoin) onJoin(event);
//       } else {
//         console.error(`❌ ${data.error || "Failed to join event"}`);
//       }
//     } catch (error) {
//       console.error("Join error: Network error. Please try again.", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Determine color class for the type tag
//   const typeColor =
//     type === "Online"
//       ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
//       : type === "Community"
//       ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//       : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";

//   const defaultImage =
//     "https://placehold.co/600x400/253E5C/FFFFFF?text=Event+Placeholder";

//   return (
//     <div
//       className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden
//                        hover:shadow-3xl transform hover:scale-[1.01] transition-all duration-500 border border-gray-100 dark:border-gray-700/50"
//     >
//       {/* Image Section */}
//       <div className="relative h-48 w-full overflow-hidden">
//         <img
//           src={thumbnail || defaultImage}
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = defaultImage;
//           }}
//           alt={title || "Event"}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         {/* Type Tag Overlay */}
//         <div className="absolute top-4 left-4">
//           <Tag colorClass={typeColor}>{type || "General"}</Tag>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-6 flex flex-col flex-grow">
//         {/* Title */}
//         <Link to={`/event/${_id}`}>
//           <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
//             {title || "Untitled Event"}
//           </h3>
//         </Link>

//         {/* Details List */}
//         <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
//           <div className="flex items-center">
//             <Calendar className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
//             <span className="font-medium text-gray-800 dark:text-gray-200">
//               {formattedDate}
//             </span>
//           </div>
//           <div className="flex items-center">
//             <MapPin className="w-4 h-4 mr-2 text-red-500 dark:text-red-400" />
//             <span className="truncate">{location || "Not specified"}</span>
//           </div>
//           <div className="flex items-center">
//             <Users className="w-4 h-4 mr-2 text-green-500 dark:text-green-400" />
//             <span>25 Participants (Mock)</span>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
//           <Link
//             to={`/event/${_id}`}
//             className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors text-sm"
//           >
//             Details
//             <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
//           </Link>

//           {showJoin && (
//             <button
//               onClick={handleJoinEvent}
//               disabled={loading || isJoined}
//               className={`flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300
//                                 ${
//                                   isJoined
//                                     ? "bg-green-500 text-white cursor-default"
//                                     : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
//                                 }
//                                 ${
//                                   loading ? "opacity-70 cursor-not-allowed" : ""
//                                 }
//                             `}
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                   Joining...
//                 </>
//               ) : isJoined ? (
//                 "✅ Joined"
//               ) : (
//                 "Join Event"
//               )}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// ....................3................From github .............................
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { format } from "date-fns";

// const EventCard = ({ event, showJoin = false, onJoin, currentUser }) => {
//   const [loading, setLoading] = useState(false);

//   if (!event) return null;

//   const { _id, title, location, type, date, thumbnail } = event;

//   // Safe date formatting
//   let formattedDate = "Date not available";
//   if (date) {
//     const dateObj = new Date(date);
//     if (!isNaN(dateObj.getTime())) {
//       formattedDate = format(dateObj, "PPP p");
//     }
//   }

//   const handleJoinEvent = async () => {
//     if (!currentUser || !currentUser.email) {
//       alert("Please login to join events");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/events/${_id}/join`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             userEmail: currentUser.email,
//             userName:
//               currentUser.displayName?.trim() ||
//               currentUser.email.split("@")[0] ||
//               "Anonymous",
//             userPhone: currentUser.phoneNumber || "N/A",
//             userPhoto: currentUser.photoURL || "/default-avatar.png",
//             userId: currentUser.uid || "",
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         alert("✅ Successfully joined the event!");
//         if (onJoin) onJoin(event);
//       } else {
//         alert(`❌ ${data.error || "Failed to join event"}`);
//       }
//     } catch (error) {
//       console.error("Join error:", error);
//       alert("❌ Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
//       <img
//         src={thumbnail || "/default-event.jpg"}
//         alt={title || "Event"}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
//           {title || "Untitled Event"}
//         </h3>
//         <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
//           <span className="font-medium">Type:</span> {type || "N/A"}
//         </p>
//         <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
//           <span className="font-medium">Date:</span> {formattedDate}
//         </p>
//         <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">
//           <span className="font-medium">Location:</span> {location || "N/A"}
//         </p>
//         <div className="flex justify-between items-center">
//           <Link
//             to={`/event/${_id}`}
//             className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded text-sm transition"
//           >
//             View Event
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// ................3....................Copilot----------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { format } from "date-fns";

// const EventCard = ({ event, showJoin = false, onJoin, currentUser }) => {
//   const [loading, setLoading] = useState(false);

//   if (!event) return null;

//   const { _id, title, location, type, date, thumbnail } = event;

//   let formattedDate = "Date not available";
//   if (date) {
//     const dateObj = new Date(date);
//     if (!isNaN(dateObj.getTime())) {
//       formattedDate = format(dateObj, "PPP p");
//     }
//   }

//   const handleJoinEvent = async () => {
//     if (!currentUser || !currentUser.email) {
//       alert("Please login to join events");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/events/${_id}/join`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             userEmail: currentUser.email,
//             userName:
//               currentUser.displayName?.trim() ||
//               currentUser.email.split("@")[0] ||
//               "Anonymous",
//             userPhone: currentUser.phoneNumber || "N/A",
//             userPhoto: currentUser.photoURL || "/default-avatar.png",
//             userId: currentUser.uid || "",
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         alert("✅ Successfully joined the event!");
//         if (onJoin) onJoin(event);
//       } else {
//         alert(`❌ ${data.error || "Failed to join event"}`);
//       }
//     } catch (error) {
//       console.error("Join error:", error);
//       alert("❌ Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col">
//       <div className="relative">
//         <img
//           src={thumbnail || "/default-event.jpg"}
//           alt={title || "Event"}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">
//           {type || "Event"}
//         </div>
//       </div>

//       {/* Flex container to lock button alignment */}
//       <div className="flex flex-col justify-between p-5 space-y-2 flex-grow min-h-[220px]">
//         <div>
//           <h3 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-2">
//             {title || "Untitled Event"}
//           </h3>
//           <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
//             📍 <span className="font-medium">Location:</span>{" "}
//             {location || "N/A"}
//           </p>
//           <p className="text-sm text-gray-600 dark:text-gray-300">
//             📅 <span className="font-medium">Date:</span> {formattedDate}
//           </p>
//         </div>

//         <div className="flex justify-between items-center pt-3">
//           <Link
//             to={`/event/${_id}`}
//             className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-indigo-700 transition"
//           >
//             View Event
//           </Link>

//           {/* {showJoin && (
//             <button
//               onClick={handleJoinEvent}
//               disabled={loading}
//               className={`px-4 py-2 text-sm font-medium rounded-full transition ${
//                 loading
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-green-500 hover:bg-green-600 text-white"
//               }`}
//             >
//               {loading ? "Joining..." : "Join"}
//             </button>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// Gemini 4 updated
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { format } from "date-fns";
// import { MapPin, Calendar, ArrowRight, Loader2 } from "lucide-react";

// const Tag = ({ children, colorClass }) => (
//   <span
//     className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${colorClass}`}
//   >
//     {children}
//   </span>
// );

// const EventCard = ({ event, showJoin = false, onJoin, currentUser }) => {
//   const [loading, setLoading] = useState(false);
//   const [isJoined, setIsJoined] = useState(false);

//   if (!event) return null;

//   const { _id, title, location, type, date, thumbnail } = event;

//   let formattedDate = "Date not available";
//   if (date) {
//     const dateObj = new Date(date);
//     if (!isNaN(dateObj.getTime())) {
//       formattedDate = format(dateObj, "MMM d, yyyy 'at' p");
//     }
//   }

//   const handleJoinEvent = async () => {
//     if (!currentUser || !currentUser.email) {
//       console.error("❌ Join Failed: Please login to join events.");
//       return;
//     }

//     if (isJoined) {
//       console.log("Already joined.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const API_BASE_URL =
//         import.meta.env.VITE_REACT_APP_API_URL ||
//         "https://social-development-server-3.vercel.app/api";

//       const response = await fetch(`${API_BASE_URL}/events/${_id}/join`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           userEmail: currentUser.email,
//           userName:
//             currentUser.displayName?.trim() ||
//             currentUser.email.split("@")[0] ||
//             "Anonymous",
//           userPhone: currentUser.phoneNumber || "N/A",
//           userPhoto: currentUser.photoURL || "/default-avatar.png",
//           userId: currentUser.uid || "",
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("✅ Successfully joined the event!");
//         setIsJoined(true);
//         if (onJoin) onJoin(event);
//       } else {
//         console.error(`❌ ${data.error || "Failed to join event"}`);
//       }
//     } catch (error) {
//       console.error("Join error: Network error. Please try again.", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const typeColor =
//     type === "Online"
//       ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
//       : type === "Community"
//       ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//       : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";

//   const defaultImage =
//     "https://placehold.co/600x400/253E5C/FFFFFF?text=Event+Placeholder";

//   return (
//     <div
//       className="group flex flex-col rounded-2xl overflow-hidden
//                        shadow-2xl dark:shadow-indigo-900/50 shadow-blue-500/50
//                        transform hover:scale-[1.01] transition-all duration-500
//                        bg-gradient-to-br from-white/80 dark:from-gray-900/80 to-indigo-100/80 dark:to-gray-800/80
//                        border border-white/20 dark:border-gray-700/30"
//     >
//       <div className="relative h-48 w-full overflow-hidden">
//         <img
//           src={thumbnail || defaultImage}
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = defaultImage;
//           }}
//           alt={title || "Event"}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute top-4 left-4">
//           <Tag colorClass={typeColor}>{type || "General"}</Tag>
//         </div>
//       </div>

//       <div className="p-6 flex flex-col flex-grow bg-white/60 dark:bg-gray-900/60">
//         <Link to={`/event/${_id}`}>
//           <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
//             {title || "Untitled Event"}
//           </h3>
//         </Link>

//         <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
//           <div className="flex items-center">
//             <Calendar className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
//             <span className="font-medium text-gray-900 dark:text-gray-200">
//               {formattedDate}
//             </span>
//           </div>
//           <div className="flex items-center">
//             <MapPin className="w-4 h-4 mr-2 text-red-600 dark:text-red-400" />
//             <span className="truncate">{location || "Not specified"}</span>
//           </div>
//         </div>

//         <div className="mt-auto flex justify-center items-center pt-4 border-t border-gray-300/50 dark:border-gray-700/50">
//           <div className="flex space-x-3">
//             <Link
//               to={`/event/${_id}`}
//               className="flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300
//                                        bg-white/40 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100
//                                        shadow-sm hover:shadow-md hover:bg-white/60 dark:hover:bg-gray-700/70"
//             >
//               Details
//               <ArrowRight className="w-4 h-4 ml-2" />
//             </Link>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// ............Claude

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
