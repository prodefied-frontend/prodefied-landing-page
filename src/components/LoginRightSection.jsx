import { useState } from "react";
import Input from "./CustomInput";
import { Facebook, google } from "../assets/icons/index";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // adjust path if needed
import { Link } from "react-router-dom";
import { authenticateWithBackend } from "../constant/util";
import { toast } from "react-toastify";

const LoginRightSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const idToken = await userCredential.user.getIdToken();

      const user = await authenticateWithBackend(idToken);

      localStorage.setItem("user", JSON.stringify(user));
      console.log("Logged in user:", user);

      toast.success("✅ Successfully Logged in!");

      setFormData({ email: "", password: "" });
    } catch (error) {
      const errorCode = error.code;

      if (errorCode === "auth/user-not-found") {
        toast.error("This email is not registered. Please sign up first.");
      } else if (errorCode === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (errorCode === "auth/invalid-email") {
        toast.error("Invalid email format. Please check and try again.");
      } else {
        toast.error("Login failed. Please try again.");
      }

      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
      <div className="w-full max-w-lg px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome Back</h2>
        <p className="text-sm text-gray-600 mb-6">Login to your account</p>

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mb-2"
          />

          <div className="relative mb-4">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#000F84] text-white py-2 rounded-md font-medium hover:bg-blue-900 transition cursor-pointer"
          >
            Log In
          </button>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <span className="text-blue-700 cursor-pointer font-medium">
              <Link to="/sign-up">Sign Up</Link>
            </span>
          </p>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">Or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full border rounded-md py-2 flex items-center justify-center gap-2 text-sm hover:bg-gray-50">
              <img src={google} alt="Google" className="w-4 h-4" />
              Continue with Google
            </button>

            <button className="w-full border rounded-md py-2 flex items-center justify-center gap-2 text-sm hover:bg-gray-50">
              <img src={Facebook} alt="Facebook" className="w-4 h-4" />
              Continue with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRightSection;
