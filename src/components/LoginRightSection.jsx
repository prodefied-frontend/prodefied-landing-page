// src/components/LoginRightSection.jsx
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser, googleAuth } from "../services/api";
import { useAuth } from "../context/AuthContext";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const LoginRightSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      return toast.error("Email, password and confirm password are required.");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    setSubmitting(true);

    try {
      const res = await loginUser({ email, password });
      // Backend previously returned token at res.data.tokens?.idToken
      const token =
        res.data?.tokens?.idToken ||
        res.data?.tokens?.access ||
        res.data?.token ||
        res.data?.access ||
        res.data?.idToken ||
        null;

      if (!token) throw new Error("No token returned from backend");

      localStorage.setItem("token", token);
      login(res.data.user, token);

      toast.success("Successfully logged in!");
      navigate("/portal");
    } catch (error) {
      console.error("Login error:", error);
      const msg =
        error?.response?.data?.detail ||
        error?.response?.data?.error ||
        error?.message;
      toast.error(msg || "Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setSubmitting(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      const idToken = await firebaseUser.getIdToken();

      const payload = {
        token: idToken,
        first_name: firebaseUser.displayName?.split(" ")[0] || "",
        last_name: firebaseUser.displayName
          ? firebaseUser.displayName.split(" ").slice(1).join(" ")
          : "",
        photo_url: firebaseUser.photoURL || "",
      };

      const res = await googleAuth(payload);
      const data = res.data || {};
      const userFromBackend = data.user || data;

      let backendToken =
        data.tokens?.access ||
        data.tokens?.idToken ||
        data.token ||
        data.access ||
        data.idToken ||
        null;

      if (!backendToken && data.tokens && typeof data.tokens === "string") {
        backendToken = data.tokens;
      }

      if (backendToken) {
        localStorage.setItem("token", backendToken);
        login(userFromBackend, backendToken);
      } else {
        login(userFromBackend, localStorage.getItem("token") || null);
      }

      toast.success("Logged in with Google 🚀");
      navigate("/portal");
    } catch (error) {
      console.error("Google login error:", error);
      const msg =
        error?.response?.data?.detail ||
        error?.response?.data?.error ||
        error?.message ||
        "Google login failed.";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
      <div className="w-full max-w-lg px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome Back</h2>
        <p className="text-sm text-gray-600 mb-6">Login to your account</p>

        <form onSubmit={handleSubmit}>
          {/* Email (native input to avoid CustomInput forwarding issues) */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData((f) => ({ ...f, email: e.target.value }))
            }
            className="mb-2 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#000F84]"
            required
            autoComplete="email"
          />

          {/* Password */}
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData((f) => ({ ...f, password: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#000F84]"
              required
              autoComplete="current-password"
            />
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              role="button"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData((f) => ({ ...f, confirmPassword: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#000F84]"
              required
              autoComplete="new-password"
            />
            {/* reuse the same toggle to affect both fields */}
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              role="button"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#000F84] text-white py-2 rounded-md font-medium hover:bg-blue-900 transition cursor-pointer disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Google login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          disabled={submitting}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700">Log in with Google</span>
        </button>

        {/* Forgot password */}
        <p className="text-sm text-center mt-4">
          <Link to="/reset-password" className="text-blue-700 font-medium">
            Forgot your password? Reset
          </Link>
        </p>

        {/* Signup link */}
        <p className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <Link to="/registration" className="text-blue-700 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginRightSection;