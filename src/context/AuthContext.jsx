// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { logoutUser, getUserProfile } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);

  // applicantId is used for payment-then-signup flow
  const [applicantId, setApplicantId] = useState(() => {
    try {
      return localStorage.getItem("applicantId") || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    async function init() {
      try {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
          try {
            const res = await getUserProfile();
            const fetchedUser = res.data?.user || JSON.parse(storedUser);
            setUser(fetchedUser);
            localStorage.setItem("user", JSON.stringify(fetchedUser));
          } catch (err) {
            setUser(JSON.parse(storedUser));
          }
        } else if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error("Auth init error:", err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const login = (userData, token) => {
    if (token) localStorage.setItem("token", token);
    if (userData) localStorage.setItem("user", JSON.stringify(userData));
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
      localStorage.removeItem("applicantId");
      localStorage.removeItem("paymentReference");
      setUser(null);
      setApplicantId(null);
    }
  };

  const setApplicant = (id) => {
    if (id === undefined || id === null) return;
    localStorage.setItem("applicantId", String(id));
    setApplicantId(String(id));
  };

  const clearApplicant = () => {
    localStorage.removeItem("applicantId");
    setApplicantId(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        logout,
        applicantId,
        setApplicant,
        clearApplicant,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
