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
import { toast, Toaster } from "react-hot-toast"; // ✅ import Toaster

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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

      setUser({
        ...newUser,
        displayName: displayName || "Anonymous",
        photoURL: photoURL || "",
      });

      toast.success("Registered successfully!", {
        position: "top-center",
        style: { marginTop: "30px", textAlign: "center" },
      });

      return newUser;
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
      setUser(userCredential.user);

      toast.success("Logged in successfully!", {
        position: "top-center",
        style: { marginTop: "30px", textAlign: "center" },
      });

      return userCredential.user;
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
      const googleUser = result.user;
      setUser(googleUser);

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
      {!loading && (
        <>
          {children}
          {/* ✅ Single Toaster instance inside AuthContext */}
          {/* <Toaster
            position="top-center"
            toastOptions={{
              style: { marginTop: "30px", textAlign: "center" },
            }}
          /> */}
        </>
      )}
    </AuthContext.Provider>
  );
};
