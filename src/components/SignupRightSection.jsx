/* eslint-disable no-unused-vars */
import { useState } from "react";
import { countryCodes } from "../constant/data";
import Input from "./CustomInput";
import { Facebook, google } from "../assets/icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // adjust path as needed
import axios from "axios";
import { Link } from "react-router-dom";

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

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullPhoneNumber = `${selectedCountry.dial_code}${formData.phone}`;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const idToken = await userCredential.user.getIdToken();

      const response = await axios.post(
        "https://your-backend-domain.com/api/auth/authenticate/",
        { token: idToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log("User created and stored:", response.data.user);

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Signup error", error.response?.data || error.message);
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
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          <div className="flex items-center gap-2 relative mb-2">
            <div
              tabIndex={0}
              className="flex items-center border rounded-md px-3 py-2 text-sm cursor-pointer bg-white z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

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

          <div className="relative mb-2">
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

          <div className="relative mb-2">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#000F84] text-white py-2 rounded-md font-medium hover:bg-blue-900 transition"
          >
            Get Started
          </button>

          <p className="text-sm text-center mt-4">
            Already a member?{" "}
            <span className="text-blue-700 cursor-pointer font-medium">
              <Link to="/login">Login</Link>
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
              Sign up with Google
            </button>

            <button className="w-full border rounded-md py-2 flex items-center justify-center gap-2 text-sm hover:bg-gray-50">
              <img src={Facebook} alt="Facebook" className="w-4 h-4" />
              Sign up with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupRightSection;
