import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-100 text-gray-700"
      } py-10 mt-10 border-t ${
        theme === "dark" ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <Link to="/" className="text-2xl font-bold text-primary">
            EventSphere
          </Link>
          <p className="mt-3 text-sm">
            Discover and manage amazing events effortlessly. Create, join, and
            share your experiences with the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming-events"
                className="hover:text-primary transition"
              >
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link
                to="/create-event"
                className="hover:text-primary transition"
              >
                Create Event
              </Link>
            </li>
            <li>
              <Link
                to="/manage-events"
                className="hover:text-primary transition"
              >
                Manage Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for the latest event updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className={`w-full px-3 py-2 rounded-l-lg text-sm outline-none ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200 placeholder-gray-400"
                  : "bg-white text-gray-700 placeholder-gray-500 border border-gray-300"
              }`}
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className={`text-center mt-8 text-sm ${
          theme === "dark" ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <p>© {new Date().getFullYear()} EventSphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
