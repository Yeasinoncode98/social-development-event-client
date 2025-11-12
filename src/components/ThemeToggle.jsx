import { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300
        ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700 hover:bg-gray-700 text-yellow-400"
            : "bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-700"
        }`}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={20} strokeWidth={2} />
      ) : (
        <Moon size={20} strokeWidth={2} />
      )}
    </button>
  );
};

export default ThemeToggle;
