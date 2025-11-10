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

// .......2.......

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3000/api", // all endpoints start with /api
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default api;

// 3..................

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3000/api",
// });

// export default api;

// axios

// import axios from "axios";
// import { getAuth } from "firebase/auth";

// const api = axios.create({
//   baseURL: "http://localhost:3000/api",
// });

// // 🔑 Attach Firebase token automatically to every request
// api.interceptors.request.use(async (config) => {
//   try {
//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (user) {
//       const token = await user.getIdToken();
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   } catch (err) {
//     console.error("Failed to attach Firebase token:", err);
//   }

//   return config;
// });

// export default api;

