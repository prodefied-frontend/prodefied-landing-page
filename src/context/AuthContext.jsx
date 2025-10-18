// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { logoutUser, getUserProfile } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // applicantId is used for payment-then-signup flow
  const [applicantId, setApplicantId] = useState(() => {
    try {
      return localStorage.getItem("applicantId") || null;
    } catch {
      return null;
    }
  });

  // normalize paid flag from backend shapes; default false
  const hasPaid = !!(user?.hasPaid || user?.isPaid || user?.has_paid || false);

  useEffect(() => {
    async function init() {
      try {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");
        const savedImage = localStorage.getItem("profileImage");

        if (token && storedUser) {
          // try to fetch a fresh profile (best-effort)
          try {
            const res = await getUserProfile();
            const fetchedUser = res.data?.user || JSON.parse(storedUser);
            setUser(fetchedUser);
            localStorage.setItem("user", JSON.stringify(fetchedUser));
          } catch (err) {
            // fallback to stored user if profile fetch fails
            setUser(JSON.parse(storedUser));
          }
        } else if (storedUser) {
          setUser(JSON.parse(storedUser));
        }

        if (savedImage) setProfileImage(savedImage);

        // applicantId already initialized from localStorage above
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
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) setProfileImage(savedImage);
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
      setProfileImage(null);
      setApplicantId(null);
    }
  };

  const setApplicant = (id) => {
    if (!id && id !== 0) return;
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
        hasPaid,
        profileImage,
        setProfileImage,
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

// =================================================================================================

// import React, { createContext, useContext, useEffect, useState } from "react";
// import { logoutUser } from "../services/api";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // console.log(user);

//   // derived state → hasPaid is always based on user
//   const hasPaid = user?.hasPaid || true;

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const storedUser = localStorage.getItem("user");
//     const savedImage = localStorage.getItem("profileImage");

//     if (token && storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     if (savedImage) {
//       setProfileImage(savedImage);
//     }

//     setLoading(false);
//   }, []);

//   const login = (userData, token) => {
//     // const updatedUser = { ...userData, hasPaid: true }; // toggle between true/false to test

//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(userData));

//     const savedImage = localStorage.getItem("profileImage");
//     if (savedImage) {
//       setProfileImage(savedImage);
//     }
//     setUser(userData);
//   };

//   const logout = async () => {
//     try {
//       await logoutUser();
//     } catch (error) {
//       console.error("Logout API error:", error);
//     } finally {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       setUser(null);
//       setProfileImage(null);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         hasPaid, // 🚀 now globally available
//         profileImage,
//         setProfileImage,
//         loading,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
