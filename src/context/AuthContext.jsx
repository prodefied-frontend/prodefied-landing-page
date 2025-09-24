import React, { createContext, useContext, useEffect, useState } from "react";
import { logoutUser } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // derived state → hasPaid is always based on user
  const hasPaid = user?.hasPaid || false;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const savedImage = localStorage.getItem("profileImage");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (savedImage) {
      setProfileImage(savedImage);
    }

    setLoading(false);
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
    setUser(userData);
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      setProfileImage(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: true,
        hasPaid, // 🚀 now globally available
        profileImage,
        setProfileImage,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
