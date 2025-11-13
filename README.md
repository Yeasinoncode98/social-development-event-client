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
social-development-website/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable React components
│ │ ├── pages/ # Page components (Home, JoinedEvents, etc.)
│ │ ├── services/ # API service functions
│ │ └── App.js
│ └── package.json
│
├── server/ # Express backend
│ ├── routes/ # API routes
│ ├── controllers/ # Route controllers / business logic
│ ├── models/ # MongoDB schemas
│ └── index.js # Entry point for server
│
├── .gitignore
└── README.md



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
