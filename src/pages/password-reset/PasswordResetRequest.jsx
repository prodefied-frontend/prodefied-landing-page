import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SignupLeftSection from "../../components/SignupLeftSection";
// removed CustomInput import
import { requestPasswordReset } from "../../services/api";

export default function PasswordResetPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      setLoading(true);
      const res = await requestPasswordReset(email);

      if (res.data?.ok || res.status === 200) {
        toast.success("Reset link sent! Check your email.");
        setEmail("");
      } else {
        toast.error(res.data?.error || "Failed to send reset link.");
      }
    } catch (err) {
      console.error("Reset error:", err);
      const msg = err?.response?.data?.message || err?.message;
      toast.error(msg || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* LEFT SECTION */}
      <SignupLeftSection />

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-lg px-6 py-4">
          <div className="text-[#FF9D00] text-4xl font-bold mb-6 lg:hidden">
            <Link to="/">Prodefied</Link>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-900">Verification</h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your email to receive a verification link
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-4 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#000F84]"
              autoComplete="email"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#000F84] text-white py-2 rounded-md font-medium hover:bg-blue-900 transition cursor-pointer disabled:opacity-50"
            >
              {loading ? "Sending..." : "Continue"}
            </button>
          </form>

          {/* Back to login */}
          <p className="text-sm text-center mt-4">
            Remember your password?{" "}
            <Link to="/login" className="text-blue-700 font-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
