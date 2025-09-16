import { useState } from "react";
import Input from "./CustomInput";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/api";
import { useAuth } from "../context/AuthContext";

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
      return toast.error("All fields are required.");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    setSubmitting(true);

    try {
      const res = await loginUser({ email, password });
      const token = res.data.tokens?.idToken;

      if (!token) throw new Error("No token returned from backend");

      localStorage.setItem("token", token);
      login(res.data.user, token);

      toast.success("Successfully logged in!");
      navigate("/portal");
    } catch (error) {
      console.error("Login error:", error);
      const msg =
        error.response?.data?.detail ||
        error.response?.data?.error ||
        error.message;
      toast.error(msg || "Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    toast.info("Google login coming soon 🚀");
    // Later, integrate real Google OAuth here
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
      <div className="w-full max-w-lg px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome Back</h2>
        <p className="text-sm text-gray-600 mb-6">Login to your account</p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mb-2"
            required
          />

          {/* Password */}
          <div className="relative mb-2">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-4">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
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
          <Link to="/signup" className="text-blue-700 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginRightSection;

// import { useState } from "react";
// import Input from "./CustomInput";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { loginUser } from "../services/api";
// import { useAuth } from "../context/AuthContext";

// const LoginRightSection = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = formData;

//     if (!email || !password) {
//       return toast.error("Email and password are required.");
//     }

//     setSubmitting(true);

//     try {
//       const res = await loginUser({ email, password });
//       const token = res.data.tokens?.idToken;

//       if (!token) throw new Error("No token returned from backend");

//       localStorage.setItem("token", token); // Store token
//       login(res.data.user, token); // Optional: store in context

//       toast.success("Successfully logged in!");
//       navigate("/portal");
//     } catch (error) {
//       console.error("Login error:", error);
//       const msg =
//         error.response?.data?.detail ||
//         error.response?.data?.error ||
//         error.message;
//       toast.error(msg || "Login failed. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
//       <div className="w-full max-w-lg px-6 py-4">
//         <h2 className="text-2xl font-semibold text-gray-900">Welcome Back</h2>
//         <p className="text-sm text-gray-600 mb-6">Login to your account</p>

//         <form onSubmit={handleSubmit}>
//           <Input
//             type="email"
//             placeholder="Email Address"
//             name="email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             className="mb-2"
//             required
//           />

//           <div className="relative mb-4">
//             <Input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               name="password"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//               required
//             />
//             <div
//               className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
//               onClick={() => setShowPassword((prev) => !prev)}
//             >
//               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#000F84] text-white py-2 rounded-md font-medium hover:bg-blue-900 transition cursor-pointer disabled:opacity-60"
//             disabled={submitting}
//           >
//             {submitting ? "Logging in..." : "Log In"}
//           </button>

//           <p className="text-sm text-center mt-4">
//             Don't have an account?{" "}
//             <Link to="/sign-up" className="text-blue-700 font-medium">
//               Sign Up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginRightSection;
