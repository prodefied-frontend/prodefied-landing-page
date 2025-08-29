import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { initializeUserPayment } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { countryCodes } from "../constant/data";
import Input from "../components/CustomInput";

export default function PaymentRegistration() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    referral: "",
  });

  const [processing, setProcessing] = useState(false);
  const amount = 200000;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && !loading) {
      toast.error("You must be logged in to access this page.");
      navigate("/login");
    }
  }, [loading, navigate]);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, phone, email } = formData;
    const fullPhone = `${selectedCountry.dial_code}${phone}`.replace(/\s+/g, "");

    if (!firstName || !lastName || !phone || !email) {
      toast.error("Please fill in all required fields.");
      return false;
    }

    if (!/^\+\d{10,15}$/.test(fullPhone)) {
      toast.error("Invalid phone number format.");
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email address.");
      return false;
    }

    return true;
  };

  const handleMakePayment = async () => {
    if (!validateForm()) return;
    setProcessing(true);

    try {
      const res = await initializeUserPayment(amount);
      const { paystack_url } = res.data;

      if (!paystack_url) throw new Error("No Paystack URL returned");

      window.location.href = paystack_url;
    } catch (err) {
      console.error("Payment init error:", err);
      const msg = err.response?.data?.error || err.message;
      toast.error(msg || "Failed to initialize payment");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <main className="relative px-4 py-8 max-w-4xl mx-auto text-[#1A1A1A]">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-[#4D4D4D]">Registration</h1>

      <div className="p-4 pb-8 rounded-md space-y-2 mb-6 text-sm md:text-base border-b border-[#B3B3B3]">
        <div className="flex flex-col">
          <span className="font-medium text-xs text-[#666666]">Reg fee:</span>
          <span className="text-[#4D4D4D] font-semibold text-base md:text-lg">
            N {amount.toLocaleString()}
          </span>
        </div>
        <div className="text-[#0018CC] text-xs">Have a Coupon Code?</div>
      </div>

      <p className="mb-6 text-sm md:text-base text-[#FF3333]">
        Please enter your personal information to proceed
      </p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Name */}
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-2 relative">
          <div
            tabIndex={0}
            className="flex items-center border rounded-md px-3 py-2 text-sm cursor-pointer bg-white z-10"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <span>{selectedCountry.flag}</span>&nbsp;
            <span>{selectedCountry.dial_code}</span>
          </div>

          {showDropdown && (
            <div className="absolute top-[110%] left-0 z-20 w-32 max-h-40 overflow-y-auto border bg-white rounded shadow-md">
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
            onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, ""))}
            required
          />
        </div>

        {/* Email */}
        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
        />

        {/* Referral Code */}
        <Input
          type="text"
          placeholder="Referral Code (optional)"
          value={formData.referral}
          onChange={(e) => handleChange("referral", e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 md:justify-between">
          <button
            type="button"
            className="bg-[#000F84] text-white px-6 py-3 rounded hover:opacity-90 cursor-pointer disabled:opacity-50"
            onClick={handleMakePayment}
            disabled={processing}
          >
            {processing ? "Processing..." : "Make Payment"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/program-details")}
            className="bg-[#E4E4E4] text-[#1A1A1A] px-6 py-3 rounded hover:bg-gray-300 cursor-pointer"
          >
            View Program Details
          </button>
        </div>
      </form>
    </main>
  );
}
