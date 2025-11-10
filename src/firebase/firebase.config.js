// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDHXMmen9m8BHXfvnSns0Qtve_8hk9_Gbw",
//   authDomain: "social-development-8f676.firebaseapp.com",
//   projectId: "social-development-8f676",
//   storageBucket: "social-development-8f676.firebasestorage.app",
//   messagingSenderId: "448443558217",
//   appId: "1:448443558217:web:8c096af8809cde8bead298",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;

// Import the functions you need from the Firebase SDKs
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDHXMmen9m8BHXfvnSns0Qtve_8hk9_Gbw",
//   authDomain: "social-development-8f676.firebaseapp.com",
//   projectId: "social-development-8f676",
//   storageBucket: "social-development-8f676.appspot.com", // corrected ".app" -> ".appspot.com"
//   messagingSenderId: "448443558217",
//   appId: "1:448443558217:web:8c096af8809cde8bead298",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Firebase services
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// export default app;

//..........
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHXMmen9m8BHXfvnSns0Qtve_8hk9_Gbw",
  authDomain: "social-development-8f676.firebaseapp.com",
  projectId: "social-development-8f676",
  storageBucket: "social-development-8f676.appspot.com",
  messagingSenderId: "448443558217",
  appId: "1:448443558217:web:8c096af8809cde8bead298",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;
