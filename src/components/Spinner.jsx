import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Spinner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-center items-center h-[70vh] ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`w-12 h-12 border-4 border-t-transparent rounded-full animate-spin ${
          theme === "dark"
            ? "border-gray-400 border-t-primary"
            : "border-gray-300 border-t-primary"
        }`}
      ></div>
    </div>
  );
};

export default Spinner;
