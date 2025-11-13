import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpcomingEvents from "../pages/UpcomingEvents";
import EventDetails from "../pages/EventDetails";
import CreateEvent from "../pages/CreateEvent";
import ManageEvents from "../pages/ManageEvents";
import JoinedEvents from "../pages/JoinedEvents";
import ErrorPage from "../pages/ErrorPage";
import VisitUs from "../pages/VisitUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // Upcoming Events
      { path: "upcoming-events", element: <UpcomingEvents /> },
      { path: "events", element: <Navigate to="/upcoming-events" replace /> },

      // Visit Us (Normal Route)
      { path: "visit_us", element: <VisitUs /> },

      // Event Details
      { path: "event/:id", element: <EventDetails /> },

      // Private Routes
      {
        path: "create-event",
        element: (
          <ProtectedRoute>
            <CreateEvent />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-events",
        element: (
          <ProtectedRoute>
            <ManageEvents />
          </ProtectedRoute>
        ),
      },
      {
        path: "joined-events",
        element: (
          <ProtectedRoute>
            <JoinedEvents />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
