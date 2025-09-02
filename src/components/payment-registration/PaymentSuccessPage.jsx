import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUserPayment } from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const { login, user } = useAuth();

  useEffect(() => {
    const reference = new URLSearchParams(window.location.search).get("reference");

    if (!reference) {
      toast.error("Missing payment reference.");
      navigate("/payment-registration");
      return;
    }

    verifyUserPayment(reference)
      .then(() => {
        const updatedUser = { ...user, hasPaid: true };
        login(updatedUser, localStorage.getItem("token"));
        toast.success("✅ Payment verified successfully!");
        navigate("/portal");
      })
      .catch(() => {
        toast.error("❌ Payment verification failed.");
        navigate("/payment-registration");
      });
  }, [navigate, login, user]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Verifying Payment...</h1>
      <p>Please wait while we confirm your transaction.</p>
    </div>
  );
}
