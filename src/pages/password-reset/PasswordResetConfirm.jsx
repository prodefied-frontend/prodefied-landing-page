import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, confirmPasswordReset } from "firebase/auth";
import { toast } from "react-toastify";
import Input from "../../components/CustomInput"; // adjust if your Input path is different
import SignupLeftSection from "../../components/SignupLeftSection";

export default function PasswordResetConfirm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oobCode, setOobCode] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Extract oobCode from query params
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("oobCode");

    if (!code) {
      toast.error("Invalid or expired reset link.");
      navigate("/reset-password"); // send user back to request page
    } else {
      setOobCode(code);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const auth = getAuth();
      await confirmPasswordReset(auth, oobCode, newPassword);

      toast.success("Password reset successful. Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Reset failed. The link may have expired.");
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* LEFT SECTION */}
      <SignupLeftSection />

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-lg px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Reset Password
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter and confirm your new password.
          </p>

          <form onSubmit={handleSubmit}>
            <Input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="mb-4"
            />
            <Input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mb-4"
            />

            <button
              type="submit"
              className="w-full bg-[#000F84] text-white py-2 rounded-md font-medium hover:bg-blue-900 transition cursor-pointer"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
