// src/components/SignupRightSection.jsx
import React, { useEffect } from "react";
import { useState } from "react";
import { countryCodes } from "../constant/data";
import Input from "./CustomInput";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signupUser, googleAuth } from "../services/api";
import { FcGoogle } from "react-icons/fc";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

const SignupRightSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    // If user manually visits /sign-up without going through payment, redirect them to registration
    const search = new URLSearchParams(window.location.search);
    const signupToken = search.get("token");
    const applicantFromQuery = search.get("applicant_id");
    const storedApplicant = localStorage.getItem("applicantId");

    if (!signupToken && !applicantFromQuery && !storedApplicant) {
      toast.info("You need to register and pay before creating an account. Redirecting...");
      setTimeout(() => navigate("/registration"), 1100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, email, password, confirmPassword } =
      formData;
    const fullPhoneNumber = `${selectedCountry.dial_code}${phone}`.replace(
      /\s+/g,
      ""
    );

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return toast.error("All fields are required.");
    }
    if (!/^\+\d{10,15}$/.test(fullPhoneNumber)) {
      return toast.error("Invalid phone number format.");
    }
    if (password.length < 8) {
      return toast.error("Password must be at least 8 characters.");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    setSubmitting(true);

    try {
      // check for signup token or applicant id
      const search = new URLSearchParams(window.location.search);
      const signupToken = search.get("token");
      const applicantFromQuery = search.get("applicant_id");
      const applicantId = applicantFromQuery || localStorage.getItem("applicantId");

      if (!signupToken && !applicantId) {
        toast.error("You must complete payment before creating an account. Redirecting...");
        setTimeout(() => navigate("/registration"), 1200);
        setSubmitting(false);
        return;
      }

      // Build payload expected by backend
      const payload = {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        phone_number: fullPhoneNumber,
        ...(signupToken ? { signup_token: signupToken } : {}),
        ...(applicantId && !signupToken ? { applicant_id: Number(applicantId) } : {}),
      };

      const res = await signupUser(payload);

      // success
      toast.success("Account created successfully!");
      // optional: if backend returns user + token, login automatically
      const data = res?.data || {};
      const userFromBackend = data.user || data;
      // attempt to use tokens if returned
      const backendToken =
        data.tokens?.access ||
        data.tokens?.idToken ||
        data.token ||
        data.access ||
        data.idToken ||
        null;

      if (backendToken) {
        localStorage.setItem("token", backendToken);
        if (userFromBackend) localStorage.setItem("user", JSON.stringify(userFromBackend));
        login(userFromBackend, backendToken);
        navigate("/portal");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup error:", error);
      const status = error?.response?.status;
      const msg = error?.response?.data?.detail || error?.response?.data?.message || error.message;

      if (status === 403 && typeof msg === "string" && msg.toLowerCase().includes("payment")) {
        toast.error("Signup blocked: payment required. Redirecting to registration...");
        setTimeout(() => navigate("/registration"), 1200);
        setSubmitting(false);
        return;
      }

      toast.error(msg || "Signup failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Google signup (unchanged)
  const handleGoogleSignup = async () => {
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
        if (userFromBackend) localStorage.setItem("user", JSON.stringify(userFromBackend));
        login(userFromBackend, backendToken);
      } else {
        login(userFromBackend, localStorage.getItem("token") || null);
      }

      toast.success("Signed up with Google successfully!");
      navigate("/portal");
    } catch (err) {
      console.error("Google signup error:", err);
      const msg =
        err.response?.data?.detail ||
        err.response?.data?.error ||
        err.message ||
        "Google signup failed.";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
      <div className="w-full max-w-lg px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-900">Sign Up</h2>
        <p className="text-sm text-gray-600 mb-6">Let's set up your account</p>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 mb-2">
            <Input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>

          <div className="flex items-center gap-2 relative mb-2">
            <div
              tabIndex={0}
              className="flex items-center border rounded-md px-3 py-2 text-sm cursor-pointer bg-white z-10"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <span>{selectedCountry.flag}</span>&nbsp;
              <span>{selectedCountry.dial_code}</span>
            </div>

            {showDropdown && (
              <div className="absolute top-[110%] left-0 z-20 w-25 max-h-40 overflow-y-auto border bg-white rounded shadow-md">
                {countryCodes.map((country) => (
                  <div
                    key={country.code}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 text-sm"
                    onClick={() => handleSelect(country)}
                  >
                    <span>{country.flag}</span>
                    <span>{country.dial_code}</span>
                  </div>
                ))}
              </div>
            )}

            <Input
              type="tel"
              placeholder="9067121412"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>

          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mb-2"
            required
          />

          <div className="relative mb-2">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          <div className="relative mb-4">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#000F84] text-white py-2 rounded-md font-medium hover:bg-blue-900 transition cursor-pointer disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? "Creating account..." : "Get Started"}
          </button>

          <p className="text-sm text-center mt-4">
            Already a member?{" "}
            <Link to="/login" className="text-blue-700 font-medium">
              Login
            </Link>
          </p>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition"
            disabled={submitting}
          >
            <FcGoogle size={20} />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupRightSection;


// =============================================================================================


// // src/components/SignupRightSection.jsx
// import { useState } from "react";
// import { countryCodes } from "../constant/data";
// import Input from "./CustomInput";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { signupUser, googleAuth } from "../services/api";
// import { FcGoogle } from "react-icons/fc";

// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase";
// import { useAuth } from "../context/AuthContext";

// const SignupRightSection = () => {
//   const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleSelect = (country) => {
//     setSelectedCountry(country);
//     setShowDropdown(false);
//   };

//   // Optional: clear any previous token if you want
//   // localStorage.removeItem("token");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { firstName, lastName, phone, email, password, confirmPassword } =
//       formData;
//     const fullPhoneNumber = `${selectedCountry.dial_code}${phone}`.replace(
//       /\s+/g,
//       ""
//     );

//     // Basic validation
//     if (
//       !firstName ||
//       !lastName ||
//       !phone ||
//       !email ||
//       !password ||
//       !confirmPassword
//     ) {
//       return toast.error("All fields are required.");
//     }
//     if (!/^\+\d{10,15}$/.test(fullPhoneNumber)) {
//       return toast.error("Invalid phone number format.");
//     }
//     if (password.length < 8) {
//       return toast.error("Password must be at least 8 characters.");
//     }
//     if (password !== confirmPassword) {
//       return toast.error("Passwords do not match.");
//     }

//     setSubmitting(true);

//     try {
//       const payload = {
//         first_name: firstName,
//         last_name: lastName,
//         phone_number: fullPhoneNumber,
//         email,
//         password,
//       };

//       await signupUser(payload);

//       toast.success("Account created successfully!");
//       navigate("/login");
//     } catch (error) {
//       console.error("Signup error:", error);
//       const msg =
//         error.response?.data?.detail ||
//         error.response?.data?.error ||
//         error.message;
//       toast.error(msg || "Signup failed. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // ---------- Google Signup (full flow) ----------
//   const handleGoogleSignup = async () => {
//     setSubmitting(true);
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const firebaseUser = result.user;

//       // Get Firebase ID token
//       const idToken = await firebaseUser.getIdToken();

//       // Prepare payload for backend (follow backend doc)
//       const payload = {
//         token: idToken, // backend expects `token`
//         first_name: firebaseUser.displayName?.split(" ")[0] || "",
//         last_name: firebaseUser.displayName
//           ? firebaseUser.displayName.split(" ").slice(1).join(" ")
//           : "",
//         photo_url: firebaseUser.photoURL || "",
//       };

//       const res = await googleAuth(payload);

//       // Backend response shape may vary; extract user + token defensively
//       const data = res.data || {};
//       const userFromBackend = data.user || data;
//       // Try multiple token shapes
//       let backendToken =
//         data.tokens?.access ||
//         data.tokens?.idToken ||
//         data.token ||
//         data.access ||
//         data.idToken ||
//         null;

//       // If backend did not return a token but returned user, we still login locally using existing token if present.
//       if (!backendToken && data.tokens && typeof data.tokens === "string") {
//         backendToken = data.tokens;
//       }

//       // If no token returned, we still set user (some backends rely on cookies)
//       if (backendToken) {
//         login(userFromBackend, backendToken);
//         localStorage.setItem("token", backendToken);
//       } else {
//         // fallback: save user, keep whatever token already exists
//         login(userFromBackend, localStorage.getItem("token") || null);
//       }

//       toast.success("Signed up with Google successfully!");
//       navigate("/portal");
//     } catch (err) {
//       console.error("Google signup error:", err);
//       const msg =
//         err.response?.data?.detail ||
//         err.response?.data?.error ||
//         err.message ||
//         "Google signup failed.";
//       toast.error(msg);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
//       <div className="w-full max-w-lg px-6 py-4">
//         <h2 className="text-2xl font-semibold text-gray-900">Sign Up</h2>
//         <p className="text-sm text-gray-600 mb-6">Let's set up your account</p>

//         <form onSubmit={handleSubmit}>
//           {/* First + Last Name */}
//           <div className="flex gap-2 mb-2">
//             <Input
//               type="text"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={(e) =>
//                 setFormData({ ...formData, firstName: e.target.value })
//               }
//               required
//             />
//             <Input
//               type="text"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={(e) =>
//                 setFormData({ ...formData, lastName: e.target.value })
//               }
//               required
//             />
//           </div>

//           {/* Phone Number with country code */}
//           <div className="flex items-center gap-2 relative mb-2">
//             <div
//               tabIndex={0}
//               className="flex items-center border rounded-md px-3 py-2 text-sm cursor-pointer bg-white z-10"
//               onClick={() => setShowDropdown((prev) => !prev)}
//             >
//               <span>{selectedCountry.flag}</span>&nbsp;
//               <span>{selectedCountry.dial_code}</span>
//             </div>

//             {showDropdown && (
//               <div className="absolute top-[110%] left-0 z-20 w-25 max-h-40 overflow-y-auto border bg-white rounded shadow-md">
//                 {countryCodes.map((country) => (
//                   <div
//                     key={country.code}
//                     className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 text-sm"
//                     onClick={() => handleSelect(country)}
//                   >
//                     <span>{country.flag}</span>
//                     <span>{country.dial_code}</span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <Input
//               type="tel"
//               placeholder="9067121412"
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//               required
//             />
//           </div>

//           {/* Email */}
//           <Input
//             type="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             className="mb-2"
//             required
//           />

//           {/* Password */}
//           <div className="relative mb-2">
//             <Input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//               required
//             />
//             <div
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
//               onClick={() => setShowPassword((prev) => !prev)}
//             >
//               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div className="relative mb-4">
//             <Input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={(e) =>
//                 setFormData({ ...formData, confirmPassword: e.target.value })
//               }
//               required
//             />
//             <div
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
//               onClick={() => setShowConfirmPassword((prev) => !prev)}
//             >
//               {showConfirmPassword ? (
//                 <AiOutlineEyeInvisible />
//               ) : (
//                 <AiOutlineEye />
//               )}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#000F84] text-white py-2 rounded-md font-medium hover:bg-blue-900 transition cursor-pointer disabled:opacity-60"
//             disabled={submitting}
//           >
//             {submitting ? "Creating account..." : "Get Started"}
//           </button>

//           <p className="text-sm text-center mt-4">
//             Already a member?{" "}
//             <Link to="/login" className="text-blue-700 font-medium">
//               Login
//             </Link>
//           </p>

//           {/* Divider */}
//           <div className="flex items-center my-4">
//             <div className="flex-grow h-px bg-gray-300"></div>
//             <span className="px-2 text-sm text-gray-500">or</span>
//             <div className="flex-grow h-px bg-gray-300"></div>
//           </div>

//           {/* Google Signup */}
//           <button
//             type="button"
//             onClick={handleGoogleSignup}
//             className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition"
//             disabled={submitting}
//           >
//             <FcGoogle size={20} />
//             Sign up with Google
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupRightSection;