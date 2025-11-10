import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Wait for reload to complete before setting user
        await currentUser.reload();
        const authUser = auth.currentUser; // Get the refreshed user

        setUser({
          uid: authUser.uid,
          email: authUser.email,
          displayName: authUser.displayName,
          photoURL: authUser.photoURL,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Email/password register
  const register = async (email, password, { displayName, photoURL }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;

      await updateProfile(newUser, {
        displayName: displayName || "Anonymous",
        photoURL: photoURL || "",
      });

      // Reload and get fresh user data
      await newUser.reload();
      const refreshedUser = auth.currentUser;

      setUser({
        uid: refreshedUser.uid,
        email: refreshedUser.email,
        displayName: refreshedUser.displayName,
        photoURL: refreshedUser.photoURL,
      });

      toast.success("Registered successfully!", {
        position: "top-center",
        style: { marginTop: "30px", textAlign: "center" },
      });
      return refreshedUser;
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Registration failed!", {
        position: "top-center",
        style: { marginTop: "30px", textAlign: "center" },
      });
      throw error;
    }
  };

  // Email/password login
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const loggedUser = userCredential.user;

      // Reload to ensure fresh data
      await loggedUser.reload();
      const refreshedUser = auth.currentUser;

      setUser({
        uid: refreshedUser.uid,
        email: refreshedUser.email,
        displayName: refreshedUser.displayName,
        photoURL: refreshedUser.photoURL,
      });

      toast.success("Logged in successfully!", {
        position: "top-center",
        style: { marginTop: "30px", textAlign: "center" },
      });
      return refreshedUser;
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Login failed!", {
        position: "top-center",
        style: { marginTop: "30px", textAlign: "center" },
      });
      throw error;
    }
  };

  // Google login
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Wait a moment for Firebase to fully initialize the user
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Get the current user from auth (most up-to-date)
      const googleUser = auth.currentUser;

      if (googleUser) {
        await googleUser.reload();

        setUser({
          uid: googleUser.uid,
          email: googleUser.email,
          displayName: googleUser.displayName,
          photoURL: googleUser.photoURL,
        });

        console.log("Google user photo URL:", googleUser.photoURL); // Debug log
      }

      toast.success("Logged in with Google!", {
        position: "top-center",
        style: { marginTop: "30px", textAlign: "center" },
      });
      return googleUser;
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Google login failed!", {
        position: "top-center",
        style: { marginTop: "30px", textAlign: "center" },
      });
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Logged out successfully!", {
        position: "top-center",
        style: { marginTop: "30px", textAlign: "center" },
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Logout failed!", {
        position: "top-center",
        style: { marginTop: "30px", textAlign: "center" },
      });
      throw error;
    }
  };

  const value = { user, register, login, loginWithGoogle, logout, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
