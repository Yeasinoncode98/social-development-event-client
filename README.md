# 🌟 Social Development Platform

A modern, full-stack **Social Development Platform** designed to connect users with social development events. This Single Page Application (SPA) is built on the MERN stack principle, augmented with Firebase for robust authentication, and styled for a clean, professional user experience.

## 🔗 Project & Author Information

| Resource | Link |
| :--- | :--- |
| **Live Demo (Netlify)** | 👉 **[https://social-development-event-website.netlify.app/](https://social-development-event-website.netlify.app/)** |
| **Frontend Repository** | 💻 **[https://github.com/Yeasinoncode98/social-development-event-client](https://github.com/Yeasinoncode98/social-development-event-client)** |
| **Backend Repository** | 💻 **[https://github.com/Yeasinoncode98/social-development-server](https://github.com/Yeasinoncode98/social-development-server)** |
| **Author** | Yeasinoncode98 (Yeasin Arafat) |
| **License** | **MIT Licensed** |

---

## 💡 Key Features

The platform provides a seamless full-stack experience for managing and participating in social development events:

* **Secure Authentication:** Full **Firebase Authentication** (Sign Up, Log In, Google Sign-In) for secure user sessions.
* **Protected Routes:** Authorization ensures only logged-in users can access sensitive routes like `EventDetails` and `JoinedEvents`.
* **Event Exploration:** Users can browse upcoming events, with options to **sort by date** and **filter by category**.
* **Event Management:** Authenticated users can create, manage, and delete their own posted events.
* **Registration Tracking:** Users can view and manage the list of events they have joined.
* **Modern UI/UX:** Fully **responsive design** using **Tailwind CSS** and **DaisyUI**, featuring dark/light **theme toggling**.
* **Real-time Feedback:** Uses **React Hot Toast** for success, error, and loading notifications.

---

## 🛠️ Full-Stack Technologies

This project utilizes a powerful and versatile technology stack:

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | **React** | Building the modular user interface and SPA functionality. |
| **Routing** | **React Router DOM** | Handling client-side navigation and protected routes. |
| **Styling** | **Tailwind CSS & DaisyUI** | Utility-first styling and pre-built, customizable UI components. |
| **Authentication** | **Firebase** | Providing secure, scalable user authentication and authorization. |
| **Backend API** | **Node.js / Express.js** | Building the robust RESTful API to handle business logic. |
| **Database** | **MongoDB Atlas** | Cloud-hosted NoSQL database for flexible data storage. |
| **Server Communication** | **Axios / Fetch API** | Managing HTTP requests between the client and server. |
| **Deployment** | **Vercel** | Hosting and deployment for both the frontend and backend. |

---

## 📂 Project Structure

The project is split into two primary repositories: the **client** (React frontend) and the **server** (Node/Express backend).

### Client (React Frontend) Structure
## Project Structure
completed accorcing to folder structure client/
```
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

```

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


## ⬇️ Getting Started: Local Setup Guide

You must set up both the **Backend Server** and the **Frontend Client** to run this application locally.

### 1. Backend Server Setup

Refer to the dedicated server repository for full instructions:
👉 **[https://github.com/Yeasinoncode98/social-development-server](https://github.com/Yeasinoncode98/social-development-server)**

**Key steps for the backend:**

1.  Clone the server repo: `git clone https://github.com/Yeasinoncode98/social-development-server.git`
2.  Install dependencies: `npm install`
3.  Create a **`.env`** file for **MongoDB Atlas URI** and **Firebase Admin SDK** credentials.
4.  Run the server: `npm start` (or `npm run dev` if using `nodemon`).

### 2. Frontend Client Setup

1.  **Clone the Client Repository**

    ```bash
    git clone [https://github.com/Yeasinoncode98/social-development-event-client.git](https://github.com/Yeasinoncode98/social-development-event-client.git)
    cd social-development-event-client
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**

    Create a file named **`.env.local`** in the root directory (`client/`) to store your configuration details. This is crucial for connecting to Firebase and your backend server:

    ```
    # --- Backend API URL ---
    VITE_API_URL=http://localhost:5000/api 
    # Use the live backend URL here if the server is deployed

    # --- Firebase Client Configuration (from your Firebase Project) ---
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    # ... include other Firebase keys here
    ```

4.  **Run the Client**

    Start the React development server:

    ```bash
    npm run dev
    # or npm start
    ```

5.  **Access the Application**

    Open your web browser and navigate to the local address provided (e.g., `http://localhost:5173/`).

---

## License

This project is released under the **MIT License**.


---

✨ Built with ❤️ using React, Node.js, Express, MongoDB, Firebase, Tailwind CSS, and DaisyUI

---
