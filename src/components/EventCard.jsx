///.......3....claude (okay)
// import React from "react";
// import { Link } from "react-router-dom";
// import { format } from "date-fns";

// const EventCard = ({ event, showJoin = false, onJoin }) => {
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
//           {showJoin && (
//             <button
//               onClick={() => onJoin(event)}
//               className="text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded text-sm transition"
//             >
//               Join Event
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// JoinT event (save)
// EventCard.jsx - Direct Join with Firebase User Data

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
//     if (!currentUser) {
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
//               currentUser.displayName || currentUser.email.split("@")[0],
//             userPhone: currentUser.phoneNumber || "",
//             userPhoto: currentUser.photoURL || "",
//             userId: currentUser.uid,
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
//           {/* {showJoin && (
//             <button
//               onClick={handleJoinEvent}
//               disabled={loading}
//               className={`text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded text-sm transition ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? "Joining..." : "Join Event"}
//             </button>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// ..................Sava Data...........
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const EventCard = ({ event, showJoin = false, onJoin, currentUser }) => {
  const [loading, setLoading] = useState(false);

  if (!event) return null;

  const { _id, title, location, type, date, thumbnail } = event;

  // Safe date formatting
  let formattedDate = "Date not available";
  if (date) {
    const dateObj = new Date(date);
    if (!isNaN(dateObj.getTime())) {
      formattedDate = format(dateObj, "PPP p");
    }
  }

  const handleJoinEvent = async () => {
    if (!currentUser || !currentUser.email) {
      alert("Please login to join events");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3000/api/events/${_id}/join`,
        {
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
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Successfully joined the event!");
        if (onJoin) onJoin(event);
      } else {
        alert(`❌ ${data.error || "Failed to join event"}`);
      }
    } catch (error) {
      console.error("Join error:", error);
      alert("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={thumbnail || "/default-event.jpg"}
        alt={title || "Event"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {title || "Untitled Event"}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
          <span className="font-medium">Type:</span> {type || "N/A"}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
          <span className="font-medium">Date:</span> {formattedDate}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">
          <span className="font-medium">Location:</span> {location || "N/A"}
        </p>
        <div className="flex justify-between items-center">
          <Link
            to={`/event/${_id}`}
            className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded text-sm transition"
          >
            View Event
          </Link>
          {/* {showJoin && (
            <button
              onClick={handleJoinEvent}
              disabled={loading}
              className={`text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded text-sm transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Joining..." : "Join Event"}
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
