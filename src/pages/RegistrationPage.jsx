// src/pages/RegistrationPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerApplicant } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const { setApplicant } = useAuth();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      // backend expects { first_name, email } per docs
      const payload = {
        first_name: formData.firstName,
        email: formData.email,
      };

      const res = await registerApplicant(payload);
      const applicant_id = res?.data?.applicant_id || res?.data?.id || res?.data?.applicantId;

      if (!applicant_id) {
        throw new Error("No applicant_id returned from backend");
      }

      // persist in context/localStorage
      setApplicant(applicant_id);

      // pass applicant data to payment-registration (so it can update phone/referral)
      navigate("/payment-registration", { state: { ...formData, applicant_id } });
    } catch (err) {
      console.error("Register applicant error:", err);
      const msg = err?.response?.data?.message || err?.response?.data?.detail || err.message;
      toast.error(msg || "Could not register applicant. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4 pt-[120px] pb-24">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Registration</h1>

        <p>
          Please enter your personal information to proceed<span className="text-red-500">*</span>
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84]"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84]"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Referral Code (optional)
          </label>
          <input
            type="text"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#000F84] text-white py-3 rounded-md hover:bg-[#000d6b] transition-colors cursor-pointer disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Processing..." : "Continue"}
        </button>
      </form>
    </main>
  );
}