# Social Development Website

A modern full-stack **Social Development Platform** built using **React**, **Node.js**, **Express**, **MongoDB Atlas**, **Firebase**, **Tailwind CSS**, and **DaisyUI**. The platform allows users to explore, join, and manage social events seamlessly.

---

## Features

- **User Authentication & Authorization** using **Firebase**
- View and join social development events
- Manage your joined events and track registrations
- Responsive design with **Tailwind CSS** and **DaisyUI**
- Real-time notifications using **React Hot Toast**
- Data storage and retrieval via **MongoDB Atlas**
- RESTful API communication through **Express**
- Full-stack deployment with **Vercel**
- Sorting events by date and category
- Error handling and loading states with **Spinner components**

---

## Technologies Used

**Frontend:**

- React
- React Router
- Tailwind CSS
- DaisyUI
- React Hot Toast
- Firebase Authentication

**Backend:**

- Node.js
- Express.js
- MongoDB Atlas
- CORS
- Nodemon (for development)
- Environment variables with `.env`

**Other Libraries/Tools:**

- Axios / Fetch API for server communication
- Firebase Admin SDK
- Various npm packages for utilities, routing, and forms

---

## Functionality Overview

1. **Authentication & Users:**
   - Users can sign up or log in using Firebase Authentication.
   - Protected routes ensure only logged-in users can join events.

2. **Events Management:**
   - Users can browse upcoming events.
   - Joining an event updates the MongoDB database.
   - Backend manages registrations and linked collections.

3. **UI & UX:**
   - Responsive UI compatible with mobile and desktop.
   - Interactive components built with Tailwind and DaisyUI.
   - Notification system using React Hot Toast for success/error feedback.

4. **Backend API:**
   - Built with Express.js.
   - Handles CRUD operations for events and registrations.
   - Uses MongoDB Atlas for cloud database storage.
   - CORS enabled for secure cross-origin requests.

5. **Deployment:**
   - Frontend and backend deployed on **Vercel**.
   - Backend server communicates with MongoDB Atlas.
   - Frontend consumes API endpoints to fetch or post data dynamically.

---

## Project Structure
completed accorcing to folder structure client/
│
├── public/
│   ├── favicon.ico
│   └── logo.png
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── banner/
│   │       └── gallery/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Spinner.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── EventCard.jsx
│   │   └── ToastConfig.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx       // Firebase Auth + user state
│   │   └── ThemeContext.jsx      // Dark/light theme toggle
│   │
│   ├── firebase/
│   │   └── firebase.config.js    // Firebase setup
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx        // Navbar + Outlet + Footer
│   │
│   ├── pages/
│   │   ├── Home.jsx              // Banner, features, gallery, newsletter
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── UpcomingEvents.jsx    // Fetch events from backend
│   │   ├── EventDetails.jsx      // Fetch single event by ID + join API call
│   │   ├── CreateEvent.jsx       // POST event to backend
│   │   ├── ManageEvents.jsx      // GET/PUT/DELETE own events
│   │   ├── JoinedEvents.jsx      // GET joined events (logged-in user)
│   │   └── ErrorPage.jsx
│   │
│   ├── routes/
│   │   └── router.jsx            // All app routes
│   │
│   ├── services/
│   │   ├── api.js                // axios baseURL setup (connects backend)
│   │   └── eventService.js       // all event-related API calls
│   │
│   ├── utils/
│   │   └── validate.js           // form validations
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                 // Tailwind/global styles
│
├── .env.local                    // REACT_APP_API_URL, FIREBASE_CONFIG
├── .gitignore
├── vite.config.js
└── package.json  



---

## Key Highlights

- **Firebase Integration:** Handles secure authentication and user management.
- **MongoDB Atlas:** Cloud-hosted database for storing events, users, and registrations.
- **Tailwind + DaisyUI:** Provides modern, responsive, and customizable UI components.
- **React Router:** Enables smooth navigation between pages.
- **React Hot Toast:** Displays real-time notifications for success or error events.
- **Vercel Deployment:** Both frontend and backend are deployed for global access.
- **Error Handling:** Backend APIs and frontend handle errors gracefully.
- **Sorting & Filtering:** Events are sorted by date, and can be filtered for better user experience.

---

## License

This project is **MIT Licensed** – free to use, modify, and distribute with proper attribution.

---

✨ Built with ❤️ using React, Node.js, Express, MongoDB, Firebase, Tailwind CSS, and DaisyUI
