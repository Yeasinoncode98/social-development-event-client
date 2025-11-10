import { StrictMode, useContext, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

// Contexts
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

// 🔹 ThemeWrapper: Automatically add 'dark' class to <html> or <body>
const ThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const root = window.document.documentElement; // <html>
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return children;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeWrapper>
        <AuthProvider>
          <App />
          {/* ✅ UNCOMMENT AND CONFIGURE THIS - ONLY ONE TOASTER FOR ENTIRE APP */}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                textAlign: "center",
                borderRadius: "8px",
                padding: "12px 20px",
                fontSize: "15px",
                marginTop: "30px",
              },
              success: {
                style: { background: "#4CAF50", color: "white" },
                iconTheme: { primary: "white", secondary: "#4CAF50" },
              },
              error: {
                style: { background: "#F44336", color: "white" },
                iconTheme: { primary: "white", secondary: "#F44336" },
              },
            }}
          />
        </AuthProvider>
      </ThemeWrapper>
    </ThemeProvider>
  </StrictMode>
);
