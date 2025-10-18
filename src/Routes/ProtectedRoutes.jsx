import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { user, hasPaid, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // ❌ Not logged in → send to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 💳 Logged in but unpaid → send to payment page
  if (!hasPaid) {
    return <Navigate to="/payment-required" replace />;
  }

  // ✅ Logged in and paid → allow access
  return <Outlet />;
}
