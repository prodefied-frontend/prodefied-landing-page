// src/components/SignupRightSection.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // optional if already imported in main.jsx
import Input from "./CustomInput"; // updated to forwardRef
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { signupUser, googleAuth } from "../services/api";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

/**
 * SignupRightSection:
 * - Uses react-phone-number-input to provide a full country code list + formatting
 * - Uses your CustomInput component so the visual style remains identical
 * - Guards signup: redirects to /registration if no applicant token/id
 */
const SignupRightSection = () => {
  const [phoneValue, setPhoneValue] = useState(""); // E.164 formatted string or empty
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  useEffect(() => {
    // Guard: require signup token / applicant id in query or in localStorage
    const search = new URLSearchParams(location.search);
    const signupToken = search.get("token");
    const applicantFromQuery = search.get("applicant_id");
    const storedApplicant = localStorage.getItem("applicantId");
    const canSignUp = Boolean(signupToken || applicantFromQuery || storedApplicant);

    if (!canSignUp) {
      // Redirect immediately to registration (client-side guard)
      navigate("/registration", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (field, val) => {
    setFormData((p) => ({ ...p, [field]: val }));
  };

  const validatePhone = (val) => {
    // react-phone-number-input returns undefined for invalid or empty, or a string for valid E.164
    // We want the backend to receive E.164 (e.g. +2348012345678)
    return !!val;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !phoneValue || !email || !password || !confirmPassword) {
      return toast.error("All fields are required.");
    }

    if (!validatePhone(phoneValue)) {
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
      const search = new URLSearchParams(location.search);
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
        phone_number: phoneValue, // E.164 formatted
        ...(signupToken ? { signup_token: signupToken } : {}),
        ...(applicantId && !signupToken ? { applicant_id: Number(applicantId) } : {}),
      };

      const res = await signupUser(payload);

      // success
      toast.success("Account created successfully!");
      const data = res?.data || {};
      const userFromBackend = data.user || data;
      const backendToken =
        data.tokens?.access ||
        data.tokens?.idToken ||
        data.token ||
        data.access ||
        data.idToken ||
        null;

      if (backendToken) {
        localStorage.setItem("token", backendToken);
      }
      if (userFromBackend) {
        localStorage.setItem("user", JSON.stringify(userFromBackend));
        login(userFromBackend, backendToken || localStorage.getItem("token"));
      }

      if (backendToken) navigate("/portal");
      else navigate("/login");
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

  // Google signup
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
        last_name: firebaseUser.displayName ? firebaseUser.displayName.split(" ").slice(1).join(" ") : "",
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
      const status = err?.response?.status;
      const msg = err?.response?.data?.detail || err?.response?.data?.error || err?.message;
      if (status === 403 && typeof msg === "string" && msg.toLowerCase().includes("payment")) {
        toast.error("Google signup blocked: payment required. Redirecting to registration...");
        setTimeout(() => navigate("/registration"), 1200);
        setSubmitting(false);
        return;
      }
      toast.error(msg || "Google signup failed.");
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
              onChange={(e) => handleChange("firstName", e.target ? e.target.value : e)}
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target ? e.target.value : e)}
              required
            />
          </div>

          <div className="flex items-center gap-2 relative mb-2">
            {/* Phone input: uses your CustomInput as the inputComponent so UI matches */}
            <div className="w-full">
              <PhoneInput
                international
                defaultCountry="NG"
                value={phoneValue}
                onChange={setPhoneValue}
                country="NG"
                // use your Input component for the text input so styling matches
                inputComponent={Input}
                // keep the dropdown small (you can style via CSS)
                className="w-full"
                placeholder="Phone number (e.g. +2348012345678)"
              />
            </div>
          </div>

          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target ? e.target.value : e)}
            className="mb-2"
            required
          />

          <div className="relative mb-2">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target ? e.target.value : e)}
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((p) => !p)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          <div className="relative mb-4">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target ? e.target.value : e)}
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword((p) => !p)}
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



// ============================================================================================
// ============================================================================================

// import React, { useEffect, useState, useRef } from "react";
// import { countryCodes } from "../constant/countryCodes";
// import Input from "./CustomInput";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import { signupUser, googleAuth } from "../services/api";
// import { FcGoogle } from "react-icons/fc";

// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase";
// import { useAuth } from "../context/AuthContext";

// /**
//  * SignupRightSection
//  * - Searchable country dropdown
//  * - Guard: redirect to /registration if no signup_token/applicant_id
//  * - Keeps original validation + backend payload behavior
//  */
// const SignupRightSection = () => {
//   const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredCountries, setFilteredCountries] = useState(countryCodes);
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
//   const location = useLocation();
//   const { login } = useAuth();
//   const dropdownRef = useRef(null);

//   // Guard on mount — ensure user came from registration/payment
//   useEffect(() => {
//     const search = new URLSearchParams(location.search);
//     const signupToken = search.get("token");
//     const applicantFromQuery = search.get("applicant_id");
//     const storedApplicant = localStorage.getItem("applicantId");
//     const canSignUp = Boolean(signupToken || applicantFromQuery || storedApplicant);
//     if (!canSignUp) {
//       // immediate redirect — prevents users from using the form directly
//       navigate("/registration", { replace: true });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // filter countries when user types in search
//   useEffect(() => {
//     const q = (searchQuery || "").trim().toLowerCase();
//     if (!q) {
//       setFilteredCountries(countryCodes);
//       return;
//     }
//     setFilteredCountries(
//       countryCodes.filter(
//         (c) =>
//           c.name.toLowerCase().includes(q) ||
//           c.dial_code.toLowerCase().includes(q) ||
//           c.code.toLowerCase().includes(q)
//       )
//     );
//   }, [searchQuery]);

//   // close dropdown on outside click / Escape
//   useEffect(() => {
//     function onDocClick(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setShowDropdown(false);
//       }
//     }
//     function onKey(e) {
//       if (e.key === "Escape") setShowDropdown(false);
//     }
//     window.addEventListener("mousedown", onDocClick);
//     window.addEventListener("keydown", onKey);
//     return () => {
//       window.removeEventListener("mousedown", onDocClick);
//       window.removeEventListener("keydown", onKey);
//     };
//   }, []);

//   const handleSelect = (country) => {
//     setSelectedCountry(country);
//     setShowDropdown(false);
//     setSearchQuery("");
//   };

//   const handleChange = (patch) => {
//     setFormData((prev) => ({ ...prev, ...patch }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { firstName, lastName, phone, email, password, confirmPassword } = formData;
//     const fullPhoneNumber = `${selectedCountry.dial_code}${phone}`.replace(/\s+/g, "");

//     if (!firstName || !lastName || !phone || !email || !password || !confirmPassword) {
//       return toast.error("All fields are required.");
//     }
//     if (!/^\+\d{6,15}$/.test(fullPhoneNumber)) {
//       return toast.error("Invalid phone number format. Include country code.");
//     }
//     if (password.length < 8) {
//       return toast.error("Password must be at least 8 characters.");
//     }
//     if (password !== confirmPassword) {
//       return toast.error("Passwords do not match.");
//     }

//     setSubmitting(true);

//     try {
//       const search = new URLSearchParams(location.search);
//       const signupToken = search.get("token");
//       const applicantFromQuery = search.get("applicant_id");
//       const applicantId = applicantFromQuery || localStorage.getItem("applicantId");

//       if (!signupToken && !applicantId) {
//         toast.error("You must complete payment before creating an account. Redirecting...");
//         setTimeout(() => navigate("/registration"), 800);
//         setSubmitting(false);
//         return;
//       }

//       // build backend payload (matches your backend docs)
//       const payload = {
//         email,
//         password,
//         first_name: firstName,
//         last_name: lastName,
//         phone_number: fullPhoneNumber,
//         ...(signupToken ? { signup_token: signupToken } : {}),
//         ...(applicantId && !signupToken ? { applicant_id: Number(applicantId) } : {}),
//       };

//       const res = await signupUser(payload);

//       toast.success("Account created successfully!");

//       const data = res?.data || {};
//       const userFromBackend = data.user || data;
//       const backendToken =
//         data.tokens?.access || data.tokens?.idToken || data.token || data.access || data.idToken || null;

//       if (backendToken) {
//         localStorage.setItem("token", backendToken);
//       }
//       if (userFromBackend) {
//         localStorage.setItem("user", JSON.stringify(userFromBackend));
//         login(userFromBackend, backendToken || localStorage.getItem("token"));
//       }

//       if (backendToken) navigate("/portal");
//       else navigate("/login");
//     } catch (error) {
//       console.error("Signup error:", error);
//       const status = error?.response?.status;
//       const msg = error?.response?.data?.detail || error?.response?.data?.message || error.message;

//       if (status === 403 && typeof msg === "string" && msg.toLowerCase().includes("payment")) {
//         toast.error("Signup blocked: payment required. Redirecting to registration...");
//         setTimeout(() => navigate("/registration"), 1000);
//         setSubmitting(false);
//         return;
//       }

//       toast.error(msg || "Signup failed. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Google signup
//   const handleGoogleSignup = async () => {
//     setSubmitting(true);
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const firebaseUser = result.user;
//       const idToken = await firebaseUser.getIdToken();

//       const payload = {
//         token: idToken,
//         first_name: firebaseUser.displayName?.split(" ")[0] || "",
//         last_name: firebaseUser.displayName ? firebaseUser.displayName.split(" ").slice(1).join(" ") : "",
//         photo_url: firebaseUser.photoURL || "",
//       };

//       const res = await googleAuth(payload);
//       const data = res.data || {};
//       const userFromBackend = data.user || data;
//       let backendToken = data.tokens?.access || data.tokens?.idToken || data.token || data.access || data.idToken || null;

//       if (!backendToken && data.tokens && typeof data.tokens === "string") backendToken = data.tokens;

//       if (backendToken) {
//         localStorage.setItem("token", backendToken);
//         if (userFromBackend) localStorage.setItem("user", JSON.stringify(userFromBackend));
//         login(userFromBackend, backendToken);
//       } else {
//         login(userFromBackend, localStorage.getItem("token") || null);
//       }

//       toast.success("Signed up with Google successfully!");
//       navigate("/portal");
//     } catch (err) {
//       console.error("Google signup error:", err);
//       const status = err?.response?.status;
//       const msg = err?.response?.data?.detail || err?.response?.data?.error || err?.message;

//       if (status === 403 && typeof msg === "string" && msg.toLowerCase().includes("payment")) {
//         toast.error("Google signup blocked: payment required. Redirecting to registration...");
//         setTimeout(() => navigate("/registration"), 1000);
//         setSubmitting(false);
//         return;
//       }

//       toast.error(msg || "Google signup failed.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
//       <div className="w-full max-w-lg px-6 py-4">
//         <h2 className="text-2xl font-semibold text-gray-900">Sign Up</h2>
//         <p className="text-sm text-gray-600 mb-6">Let's set up your account</p>

//         <form onSubmit={handleSubmit} autoComplete="on">
//           <div className="flex gap-2 mb-2">
//             <Input
//               type="text"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={(e) => handleChange({ firstName: e.target.value })}
//               required
//             />
//             <Input
//               type="text"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={(e) => handleChange({ lastName: e.target.value })}
//               required
//             />
//           </div>

//           <div className="flex items-center gap-2 relative mb-2" ref={dropdownRef}>
//             {/* Country selector */}
//             <div
//               tabIndex={0}
//               className="flex items-center border rounded-md px-3 py-2 text-sm cursor-pointer bg-white z-10 min-w-[110px]"
//               onClick={() => setShowDropdown((prev) => !prev)}
//               aria-expanded={showDropdown}
//             >
//               <span className="text-lg">{selectedCountry.flag}</span>&nbsp;
//               <span className="mr-2">{selectedCountry.dial_code}</span>
//               <svg
//                 className={`w-4 h-4 ml-auto transform transition-transform ${showDropdown ? "rotate-180" : "rotate-0"}`}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>

//             {/* Dropdown */}
//             {showDropdown && (
//               <div className="absolute top-[110%] left-0 z-20 w-72 max-h-56 overflow-hidden border bg-white rounded-lg shadow-lg">
//                 <div className="px-2 py-2">
//                   <input
//                     aria-label="Search country"
//                     placeholder="Search country or code..."
//                     className="w-full px-3 py-2 border rounded text-sm outline-none"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     autoFocus
//                   />
//                 </div>
//                 <div className="max-h-44 overflow-y-auto">
//                   {filteredCountries.map((country) => (
//                     <div
//                       key={country.code}
//                       className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3 text-sm"
//                       onClick={() => handleSelect(country)}
//                     >
//                       <span className="text-lg">{country.flag}</span>
//                       <span className="flex-1">{country.name}</span>
//                       <span className="text-gray-500">{country.dial_code}</span>
//                     </div>
//                   ))}
//                   {filteredCountries.length === 0 && (
//                     <div className="px-3 py-2 text-sm text-gray-500">No matches</div>
//                   )}
//                 </div>
//               </div>
//             )}

//             {/* Phone input */}
//             <Input
//               type="tel"
//               placeholder="9067121412"
//               value={formData.phone}
//               onChange={(e) => handleChange({ phone: e.target.value })}
//               required
//             />
//           </div>

//           <Input
//             type="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={(e) => handleChange({ email: e.target.value })}
//             className="mb-2"
//             required
//           />

//           <div className="relative mb-2">
//             <Input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e) => handleChange({ password: e.target.value })}
//               required
//             />
//             <div
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
//               onClick={() => setShowPassword((prev) => !prev)}
//             >
//               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//             </div>
//           </div>

//           <div className="relative mb-4">
//             <Input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={(e) => handleChange({ confirmPassword: e.target.value })}
//               required
//             />
//             <div
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
//               onClick={() => setShowConfirmPassword((prev) => !prev)}
//             >
//               {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//             </div>
//           </div>

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

//           <div className="flex items-center my-4">
//             <div className="flex-grow h-px bg-gray-300"></div>
//             <span className="px-2 text-sm text-gray-500">or</span>
//             <div className="flex-grow h-px bg-gray-300"></div>
//           </div>

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


// =================================================================================================
// =================================================================================================

// import React, { useEffect, useState } from "react";
// import { countryCodes } from "../constant/data";
// import Input from "./CustomInput";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import { signupUser, googleAuth } from "../services/api";
// import { FcGoogle } from "react-icons/fc";

// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase";
// import { useAuth } from "../context/AuthContext";

// /**
//  * SignupRightSection
//  * - Guard: immediately redirect to /registration if no signup_token, applicant_id query, or applicantId in localStorage.
//  * - Submits signup payload to backend including either signup_token OR applicant_id (if available).
//  * - Handles backend 403/payment-block by redirecting to /registration (backend is authoritative).
//  */
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
//   const location = useLocation();
//   const { login } = useAuth();

//   // Guard on mount — immediate redirect if sign-up is not allowed client-side.
//   useEffect(() => {
//     const search = new URLSearchParams(location.search);
//     const signupToken = search.get("token");
//     const applicantFromQuery = search.get("applicant_id");
//     const storedApplicant = localStorage.getItem("applicantId");

//     const canSignUp = Boolean(
//       signupToken || applicantFromQuery || storedApplicant
//     );

//     if (!canSignUp) {
//       // hard redirect (no toast) — user must go through registration/payment first
//       navigate("/registration", { replace: true });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleSelect = (country) => {
//     setSelectedCountry(country);
//     setShowDropdown(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { firstName, lastName, phone, email, password, confirmPassword } =
//       formData;
//     const fullPhoneNumber = `${selectedCountry.dial_code}${phone}`.replace(
//       /\s+/g,
//       ""
//     );

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
//       // check for signup token or applicant id
//       const search = new URLSearchParams(location.search);
//       const signupToken = search.get("token");
//       const applicantFromQuery = search.get("applicant_id");
//       const applicantId =
//         applicantFromQuery || localStorage.getItem("applicantId");

//       if (!signupToken && !applicantId) {
//         // defensive: if guard somehow missed, redirect user to registration
//         toast.error(
//           "You must complete payment before creating an account. Redirecting..."
//         );
//         setTimeout(() => navigate("/registration"), 800);
//         setSubmitting(false);
//         return;
//       }

//       // Build payload expected by backend
//       const payload = {
//         email,
//         password,
//         first_name: firstName,
//         last_name: lastName,
//         phone_number: fullPhoneNumber,
//         ...(signupToken ? { signup_token: signupToken } : {}),
//         ...(applicantId && !signupToken
//           ? { applicant_id: Number(applicantId) }
//           : {}),
//       };

//       const res = await signupUser(payload);

//       // success
//       toast.success("Account created successfully!");

//       // canonicalize the backend response
//       const data = res?.data || {};
//       const userFromBackend = data.user || data;
//       const backendToken =
//         data.tokens?.access ||
//         data.tokens?.idToken ||
//         data.token ||
//         data.access ||
//         data.idToken ||
//         null;

//       if (backendToken) {
//         localStorage.setItem("token", backendToken);
//       }
//       if (userFromBackend) {
//         localStorage.setItem("user", JSON.stringify(userFromBackend));
//         login(userFromBackend, backendToken || localStorage.getItem("token"));
//       }

//       // safe redirect to portal if logged in, otherwise send to login
//       if (backendToken) navigate("/portal");
//       else navigate("/login");
//     } catch (error) {
//       console.error("Signup error:", error);
//       const status = error?.response?.status;
//       const msg =
//         error?.response?.data?.detail ||
//         error?.response?.data?.message ||
//         error.message;

//       // if backend blocks signup because payment isn't present/verified, redirect them to registration
//       if (
//         status === 403 &&
//         typeof msg === "string" &&
//         msg.toLowerCase().includes("payment")
//       ) {
//         toast.error(
//           "Signup blocked: payment required. Redirecting to registration..."
//         );
//         setTimeout(() => navigate("/registration"), 1000);
//         setSubmitting(false);
//         return;
//       }

//       toast.error(msg || "Signup failed. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Google signup — still allowed, BUT backend must accept it; guard still applies
//   const handleGoogleSignup = async () => {
//     setSubmitting(true);
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const firebaseUser = result.user;
//       const idToken = await firebaseUser.getIdToken();

//       const payload = {
//         token: idToken,
//         first_name: firebaseUser.displayName?.split(" ")[0] || "",
//         last_name: firebaseUser.displayName
//           ? firebaseUser.displayName.split(" ").slice(1).join(" ")
//           : "",
//         photo_url: firebaseUser.photoURL || "",
//       };

//       const res = await googleAuth(payload);
//       const data = res.data || {};
//       const userFromBackend = data.user || data;

//       let backendToken =
//         data.tokens?.access ||
//         data.tokens?.idToken ||
//         data.token ||
//         data.access ||
//         data.idToken ||
//         null;

//       if (!backendToken && data.tokens && typeof data.tokens === "string") {
//         backendToken = data.tokens;
//       }

//       if (backendToken) {
//         localStorage.setItem("token", backendToken);
//         if (userFromBackend)
//           localStorage.setItem("user", JSON.stringify(userFromBackend));
//         login(userFromBackend, backendToken);
//       } else {
//         login(userFromBackend, localStorage.getItem("token") || null);
//       }

//       toast.success("Signed up with Google successfully!");
//       navigate("/portal");
//     } catch (err) {
//       console.error("Google signup error:", err);
//       // If backend forbids google signup because of missing applicant/payment, redirect
//       const status = err?.response?.status;
//       const msg =
//         err?.response?.data?.detail ||
//         err?.response?.data?.error ||
//         err?.message;
//       if (
//         status === 403 &&
//         typeof msg === "string" &&
//         msg.toLowerCase().includes("payment")
//       ) {
//         toast.error(
//           "Google signup blocked: payment required. Redirecting to registration..."
//         );
//         setTimeout(() => navigate("/registration"), 1000);
//         setSubmitting(false);
//         return;
//       }

//       toast.error(msg || "Google signup failed.");
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

//           <div className="flex items-center my-4">
//             <div className="flex-grow h-px bg-gray-300"></div>
//             <span className="px-2 text-sm text-gray-500">or</span>
//             <div className="flex-grow h-px bg-gray-300"></div>
//           </div>

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
