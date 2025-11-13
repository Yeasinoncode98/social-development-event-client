import React from "react";
import { Toaster } from "react-hot-toast";

const ToastConfig = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        // Default options for all toasts
        duration: 4000,
        style: {
          padding: "12px 16px",
          borderRadius: "8px",
          fontWeight: 500,
          fontSize: "14px",
        },
        success: {
          style: {
            background: "#22c55e", 
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#ef4444", 
            color: "#fff",
          },
        },
        loading: {
          style: {
            background: "#3b82f6", 
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default ToastConfig;
