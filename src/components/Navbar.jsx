// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion } from "framer-motion";
// import ThemeToggle from "./ThemeToggle";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const navLinks = (
//     <>
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `px-3 py-2 rounded-md text-sm font-medium ${
//             isActive ? "text-blue-600" : "hover:text-blue-500"
//           }`
//         }
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/upcoming-events"
//         className={({ isActive }) =>
//           `px-3 py-2 rounded-md text-sm font-medium ${
//             isActive ? "text-blue-600" : "hover:text-blue-500"
//           }`
//         }
//       >
//         Upcoming Events
//       </NavLink>
//     </>
//   );

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Left section: logo/name */}
//           <div className="flex items-center space-x-3">
//             <Link to="/" className="flex items-center">
//               <img src="/logo.png" alt="Logo" className="h-8 w-8" />
//               <span className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-100">
//                 Social Events
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-4">
//             {navLinks}
//             <ThemeToggle />

//             {!user ? (
//               <Link
//                 to="/login"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
//               >
//                 Login
//               </Link>
//             ) : (
//               <div className="relative group">
//                 <motion.img
//                   src={user.photoURL || "/default-avatar.png"}
//                   alt="User"
//                   className="w-10 h-10 rounded-full border-2 border-blue-600 cursor-pointer"
//                   whileHover={{ scale: 1.05 }}
//                 />
//                 {/* Hover display name */}
//                 <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
//                   {user.displayName}
//                 </span>

//                 {/* Dropdown Menu */}
//                 <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
//                   <NavLink
//                     to="/create-event"
//                     className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
//                   >
//                     Create Event
//                   </NavLink>
//                   <NavLink
//                     to="/manage-events"
//                     className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
//                   >
//                     Manage Events
//                   </NavLink>
//                   <NavLink
//                     to="/joined-events"
//                     className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
//                   >
//                     Joined Events
//                   </NavLink>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-gray-700 dark:text-gray-200"
//             >
//               {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navLinks}
//             <ThemeToggle />
//             {!user ? (
//               <Link
//                 to="/login"
//                 className="block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
//               >
//                 Login
//               </Link>
//             ) : (
//               <div className="space-y-2">
//                 <NavLink
//                   to="/create-event"
//                   className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
//                 >
//                   Create Event
//                 </NavLink>
//                 <NavLink
//                   to="/manage-events"
//                   className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
//                 >
//                   Manage Events
//                 </NavLink>
//                 <NavLink
//                   to="/joined-events"
//                   className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
//                 >
//                   Joined Events
//                 </NavLink>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

///............................

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium text-white ${
            isActive ? "underline underline-offset-4" : "hover:text-blue-300"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/upcoming-events"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium text-white ${
            isActive ? "underline underline-offset-4" : "hover:text-blue-300"
          }`
        }
      >
        Upcoming Events
      </NavLink>
    </>
  );

  return (
    <nav className="bg-gray-900 shadow sticky top-0 z-50 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left section: logo/name */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-white">
                Event_Sphere
              </span>
            </Link>
          </div>

          {/* Center Nav Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-4">
            {navLinks}
          </div>

          {/* Right section: Theme + User */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {!user ? (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
              >
                Login
              </Link>
            ) : (
              <div className="relative group">
                <motion.img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-blue-600 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                />
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {user.displayName}
                </span>

                <div className="absolute right-0 mt-2 w-44 bg-gray-800 rounded-lg shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                  <NavLink
                    to="/create-event"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-t-lg"
                  >
                    Create Event
                  </NavLink>
                  <NavLink
                    to="/manage-events"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Manage Events
                  </NavLink>
                  <NavLink
                    to="/joined-events"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Joined Events
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-700 rounded-b-lg"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            {navLinks}
            <ThemeToggle />
            {!user ? (
              <Link
                to="/login"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
              >
                Login
              </Link>
            ) : (
              <div className="space-y-2">
                <NavLink
                  to="/create-event"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-md"
                >
                  Create Event
                </NavLink>
                <NavLink
                  to="/manage-events"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-md"
                >
                  Manage Events
                </NavLink>
                <NavLink
                  to="/joined-events"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-md"
                >
                  Joined Events
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-700 rounded-md"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
