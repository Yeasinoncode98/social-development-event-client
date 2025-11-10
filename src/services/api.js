import axios from "axios";
import { getAuth } from "firebase/auth";

// Base URL from environment variable
const api = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: Attach Firebase ID token if available
api.interceptors.request.use(
  async (config) => {
    try {
      const user = getAuth().currentUser;
      if (user) {
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.error("Error getting Firebase token:", err);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: Global error logging
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
