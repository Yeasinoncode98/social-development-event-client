import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen text-center px-4 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Oops! Page Not Found</h2>
      <p className="mb-6 text-gray-500 dark:text-gray-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
