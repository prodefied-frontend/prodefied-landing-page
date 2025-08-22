// src/components/PaymentRegistration.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MakePaymentPopUp from "../components/payment-registration/MakePaymentPopUp";
import PaymentConfirmation from "../components/payment-registration/PaymentConfirmation";
import PhoneNumberField from "../components/PhoneInputBlock";
import { toast } from "react-toastify";

export default function PaymentRegistration() {
  const navigate = useNavigate();

  // form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState({
    country: "NG",
    code: "+234",
    number: "",
  }); // adapt to your PhoneNumberField API
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");

  // UI state
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null); // "paystack" | "bank"
  const [processing, setProcessing] = useState(false);
  const [paymentRefForConfirmation, setPaymentRefForConfirmation] =
    useState(null);

  const amount = 150000; // Naira amount (integer)

  function validateForm() {
    if (!firstName.trim() || !lastName.trim()) {
      toast.error("Please enter your full name");
      return false;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please provide a valid email address");
      return false;
    }

    const cleanedNumber = phone.number.replace(/\D/g, "");
    const fullNumber = `${phone.code}${cleanedNumber}`;

    // Accepts either +234XXXXXXXXXX or local variations
    const phoneRegex = /^\+?\d{10,15}$/;

    if (!cleanedNumber || !phoneRegex.test(fullNumber)) {
      toast.error("Please provide a valid phone number");
      return false;
    }

    return true;
  }

  const handleOpenPayment = () => {
    if (!validateForm()) return;
    setShowPaymentPopup(true);
  };

  // proceed from popup: receive selectedMethod and maybe a created reference
  async function handleProceed(method, createdReference = null) {
    setShowPaymentPopup(false);
    setSelectedMethod(method);

    // If bank transfer we will open confirmation modal so user sees account details
    if (method === "bank") {
      setPaymentRefForConfirmation(createdReference);
      setTimeout(() => setShowPaymentPopup(false), 0);
      // Open confirmation modal:
      setTimeout(() => setShowPaymentPopup(false), 0);
      // We use separate state to open confirmation
      // showConfirmationPopup will be controlled below
      setShowConfirmationPopup(true);
    } else if (method === "paystack") {
      // Paystack flow: MakePaymentPopUp will handle inline checkout and upon success we can navigate
    }
  }

  // Two separate confirmation modal visibility states
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  // This callback runs when PaymentConfirmation completes (i.e. backend accepted the notification or paystack success verified)
  function onPaymentComplete() {
    toast.success("Payment successful — redirecting you to Portal");
    navigate("/portal");
  }

  return (
    <main className="relative px-4 py-8 max-w-4xl mx-auto text-[#1A1A1A]">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-[#4D4D4D]">
        Registration
      </h1>

      <div className="p-4 pb-8 rounded-md space-y-2 mb-6 text-sm md:text-base border-b-[1px] border-[#B3B3B3]">
        <div className="flex flex-col">
          <span className="font-medium text-xs text-[#666666]">Reg fee:</span>
          <span className="text-[#4D4D4D] font-semibold text-base md:text-lg">
            N 150,000
          </span>
        </div>
        <div className="text-[#0018CC] text-xs">Have a Coupon Code?</div>
      </div>

      <p className="mb-6 text-sm md:text-base text-[#FF3333]">
        Please enter your personal information to proceed
      </p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Name <span className="text-[#B30505]">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <PhoneNumberField value={phone} onChange={setPhone} />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email <span className="text-[#B30505]">*</span>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
            type="text"
            placeholder="(Optional)"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 md:justify-between">
          <button
            type="button"
            className="bg-[#000F84] text-white px-6 py-3 rounded hover:opacity-90 cursor-pointer disabled:opacity-50"
            onClick={handleOpenPayment}
            disabled={processing}
          >
            {processing ? "Processing..." : "Make Payment"}
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/program-details")}
            className="bg-[#E4E4E4] text-[#1A1A1A] px-6 py-3 rounded hover:bg-gray-300 cursor-pointer"
          >
            View Program Details
          </button>
        </div>
      </form>

      {/* POPUPS */}
      {showPaymentPopup && (
        <MakePaymentPopUp
          close={() => setShowPaymentPopup(false)}
          proceed={async (method, createdReference) => {
            // when MakePaymentPopUp calls proceed with method
            if (method === "paystack") {
              // nothing here — the popup handles inline flow and will verify & redirect
              setShowPaymentPopup(false);
            } else if (method === "bank") {
              setShowPaymentPopup(false);
              setPaymentRefForConfirmation(createdReference || null);
              setShowConfirmationPopup(true);
            }
          }}
          formData={{ firstName, lastName, phone, email, referral, amount }}
        />
      )}

      {showConfirmationPopup && (
        <PaymentConfirmation
          close={() => setShowConfirmationPopup(false)}
          reference={paymentRefForConfirmation}
          payer={{ firstName, lastName, phone, email }}
          onComplete={() => {
            setShowConfirmationPopup(false);
            onPaymentComplete();
          }}
        />
      )}
    </main>
  );
}