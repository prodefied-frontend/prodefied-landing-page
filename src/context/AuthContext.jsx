import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    uid: "12345",
    displayName: "Test User",
    email: "testuser@example.com",
    photoURL: "",
  });

  const loading = false;

  const login = () =>
    setUser({
      uid: "12345",
      displayName: "Test User",
      email: "testuser@example.com",
      photoURL: "",
    });

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user: false, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
