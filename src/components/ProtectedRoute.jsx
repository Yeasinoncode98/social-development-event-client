// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import Spinner from "./Spinner";

// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();

//   // Show loader while checking auth state
//   if (loading) {
//     return <Spinner />;
//   }

//   // Redirect unauthenticated users to login page
//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // Allow access if logged in
//   return children;
// };

// export default ProtectedRoute;

//............

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ use hook
import Spinner from "../components/Spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); // ✅ use hook
  const location = useLocation();

  // Show loader while checking auth state
  if (loading) {
    return <Spinner />;
  }

  // Redirect unauthenticated users to login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Allow access if logged in
  return children;
};

export default ProtectedRoute;
