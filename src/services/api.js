import axios from "axios";

// Base URL from environment variable
const api = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // assuming you store JWT or token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Add response interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;

