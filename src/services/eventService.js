import axios from "axios";
import { getAuth } from "firebase/auth"; // Firebase auth

const API_URL = "https://social-development-server-3.vercel.app/api/events";

// ✅ Helper: Get Firebase ID token and create Authorization header
const getTokenHeader = async () => {
  try {
    const user = getAuth().currentUser; // Current logged-in user
    if (user) {
      const token = await user.getIdToken(); // Firebase ID token
      return { Authorization: `Bearer ${token}` }; // Return header
    }
    return {}; // If not logged in, return empty header
  } catch (error) {
    console.error("Error getting Firebase token:", error);
    return {};
  }
};

// ------------------------- API FUNCTIONS -------------------------

// Updated: getUpcomingEvents now accepts search and type filters
export const getUpcomingEvents = async (search = "", type = "") => {
  try {
    const headers = await getTokenHeader();
    // Build query parameters
    const params = {};
    if (search) params.search = search;
    if (type) params.type = type;

    const response = await axios.get(`${API_URL}/upcoming`, {
      headers,
      params,
    });
    return response.data;
  } catch (error) {
    console.error("API error (getUpcomingEvents):", error);
    throw error;
  }
};

export const getEventById = async (id) => {
  try {
    const headers = await getTokenHeader();
    const response = await axios.get(`${API_URL}/${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error("API error (getEventById):", error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const headers = await getTokenHeader();
    const response = await axios.post(API_URL, eventData, { headers });
    return response.data;
  } catch (error) {
    console.error("API error (createEvent):", error);
    throw error;
  }
};

export const joinEvent = async (eventId, userData) => {
  try {
    const headers = await getTokenHeader();
    const response = await axios.post(`${API_URL}/${eventId}/join`, userData, {
      headers,
    });
    console.log("✅ Join event response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "❌ Join event error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getJoinedEvents = async (userEmail) => {
  try {
    const headers = await getTokenHeader();
    const response = await axios.get(`${API_URL}/joined/${userEmail}`, {
      headers,
    });
    console.log("✅ Joined events response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Get joined events error:", error);
    throw error;
  }
};

export const getUserEvents = async (userEmail) => {
  try {
    const headers = await getTokenHeader();
    const response = await axios.get(`${API_URL}/user/${userEmail}`, {
      headers,
    });
    console.log("✅ User events response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Get user events error:", error);
    throw error;
  }
};

export const updateEvent = async (eventId, updates) => {
  try {
    const headers = await getTokenHeader();
    const response = await axios.put(`${API_URL}/${eventId}`, updates, {
      headers,
    });
    console.log("✅ Update event response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Update event error:", error);
    throw error;
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const headers = await getTokenHeader();
    const response = await axios.delete(`${API_URL}/${eventId}`, { headers });
    console.log("✅ Delete event response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Delete event error:", error);
    throw error;
  }
};
