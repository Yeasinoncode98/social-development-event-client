import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Removed: import ToastConfig from "../components/ToastConfig";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* 🛑 Toast Notifications: REMOVED. Toasters must now be added inside individual page components. */}
    </div>
  );
};

export default MainLayout;

// ..........................................
// import React, { useContext } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { ThemeContext } from "../context/ThemeContext";

// const MainLayout = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div
//       className={`flex flex-col min-h-screen transition-colors duration-500 ${
//         theme === "dark"
//           ? "bg-gray-900 text-gray-100"
//           : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       <Navbar />
//       <main className="flex-grow">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;
