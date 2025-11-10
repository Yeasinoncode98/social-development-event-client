import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import Spinner from "../components/Spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); 
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
