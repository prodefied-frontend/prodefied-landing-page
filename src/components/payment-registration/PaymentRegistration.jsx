import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MakePaymentPopUp from "./MakePaymentPopUp";
import PaymentConfirmation from "./PaymentConfirmation";

export default function PaymentRegistration() {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="relative px-4 py-8 max-w-4xl mx-auto text-[#1A1A1A]">
      <h1 className="text-2xl font-semibold mb-6 text-[#000F84]">
        Registration
      </h1>

      <div className="bg-[#F5F5F5] p-4 rounded-md space-y-2 mb-6 text-sm md:text-base">
        <div className="flex justify-between">
          <span className="font-medium">Reg fee:</span>
          <span className="text-[#000F84] font-semibold">N 150,000</span>
        </div>
        <div className="text-right text-[#000F84] text-sm italic">
          Have a Coupon Code?
        </div>
      </div>

      <p className="mb-6 text-sm md:text-base">
        Please enter your personal information to proceed
      </p>

      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Name <span className="text-[#B30505]">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Phone Number <span className="text-[#B30505]">*</span>
          </label>
          <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
            <img
              src="/nigeria-flag.svg"
              alt="Nigerian Flag"
              className="w-6 h-4"
            />
            <span className="text-sm text-gray-600">+234</span>
            <input
              type="tel"
              placeholder="906712141226"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email <span className="text-[#B30505]">*</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Referral Code */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Referral Code
          </label>
          <input
            type="text"
            placeholder="(Optional)"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            type="button"
            className="bg-[#000F84] text-white px-6 py-3 rounded hover:opacity-90"
            onClick={() => setShowPaymentPopup(true)}
          >
            Make Payment
          </button>
          <button
            type="button"
            className="bg-[#E4E4E4] text-[#1A1A1A] px-6 py-3 rounded hover:bg-gray-300"
          >
            View Program Details
          </button>
        </div>
      </form>

      {/* POPUPS */}
      {showPaymentPopup && (
        <MakePaymentPopUp
          close={() => setShowPaymentPopup(false)}
          proceed={() => {
            setShowPaymentPopup(false);
            setShowConfirmationPopup(true);
          }}
        />
      )}

      {showConfirmationPopup && (
        <PaymentConfirmation
          close={() => setShowConfirmationPopup(false)}
          complete={() => {
            setShowConfirmationPopup(false);
            navigate("/"); // Redirect to homepage
          }}
        />
      )}
    </main>
  );
}
