import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ redirectTo = "/login" }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // Not logged in → send to login
  if (!user) return <Navigate to={redirectTo} replace />;

  // If user exists, check is_active if backend uses it
  if (user && user.is_active === false) {
    // option: send to a contact-support or inactive page; default to login
    return <Navigate to={redirectTo} replace />;
  }

  // Authenticated → allow access
  return <Outlet />;
}