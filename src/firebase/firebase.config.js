// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDHXMmen9m8BHXfvnSns0Qtve_8hk9_Gbw",
//   authDomain: "social-development-8f676.firebaseapp.com",
//   projectId: "social-development-8f676",
//   storageBucket: "social-development-8f676.appspot.com",
//   messagingSenderId: "448443558217",
//   appId: "1:448443558217:web:8c096af8809cde8bead298",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// export const auth = getAuth(firebaseApp);
// export default firebaseApp;

// New on with safegaurd

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Use environment variables from .env.local
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase Auth instance
export const auth = getAuth(firebaseApp);
export default firebaseApp;
