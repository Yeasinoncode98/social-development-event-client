import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // NEW: dropdown state + close timeout ref
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  // Open immediately, clear any pending close timer
  const openDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  // Close after a short delay (prevents flicker when moving cursor)
  const closeDropdown = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
      closeTimeoutRef.current = null;
    }, 150); // 150ms delay - tweakable
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, []);

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
                Event_<span className="text-primary">Sphere</span>
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
              // REPLACED: use mouse/focus handlers instead of CSS group hover
              <div
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                onFocus={openDropdown} // keyboard focus opens
                onBlur={closeDropdown} // keyboard blur closes (keeps small delay)
                tabIndex={0} // allow focus
                aria-expanded={dropdownOpen}
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  {user.photoURL && !imageError ? (
                    <motion.img
                      src={user.photoURL}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                      whileHover={{ scale: 1.05 }}
                      onError={() => setImageError(true)}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center">
                      <FaUser className="text-white text-lg" />
                    </div>
                  )}
                  <span className="text-sm text-white font-medium">
                    {user.displayName || "User"}
                  </span>
                </div>

                {/* Dropdown: visibility controlled by dropdownOpen state */}
                <div
                  className={`absolute right-0 mt-2 w-44 bg-gray-800 rounded-lg shadow-md transform origin-top-right transition-all duration-150 ${
                    dropdownOpen
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none -translate-y-1"
                  }`}
                >
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
              aria-label="Toggle menu"
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
