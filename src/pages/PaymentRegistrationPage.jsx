// src/pages/PaymentRegistrationPage.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FullIcon from "../assets/icons/registration/full-icon.svg";
import TwoPartIcon from "../assets/icons/registration/half-pay-icon.svg";
import { initializePayment, updateApplicant } from "../services/api";
import { useAuth } from "../context/AuthContext";

/**
 * PaymentRegistrationPage
 *
 * UX: Both payment options are visible. Buttons look disabled until user checks the
 * consent checkbox. Clicking a disabled-looking button will show a toast instructing
 * the user to check the checkbox — per your request.
 *
 * Note: we guard against duplicate starts via loadingPlan state.
 */

const paymentPlanData = [
  {
    id: 1,
    backgroundColor: "#026D15",
    type: "FULL", // backend canonical
    title: "Full Payment",
    icon: FullIcon,
    details:
      "Pay the full program fee of N200,000 upfront and focus fully on your learning",
  },
  {
    id: 2,
    backgroundColor: "#64026D",
    type: "INSTALLMENTS", // backend canonical
    title: "Two-Part Installment",
    icon: TwoPartIcon,
    details:
      "Secure your spot with a N100,000 deposit and pay the balance within 8 weeks (with weekly reminders from our team)",
  },
];

export default function PaymentRegistrationPage() {
  const [agreed, setAgreed] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { setApplicant } = useAuth();

  // incoming state from RegistrationPage (may contain applicant_id)
  const incoming = location.state || {};
  const applicantIdFromState =
    incoming.applicant_id || localStorage.getItem("applicantId");

  const handleProceed = async (plan) => {
    // prevent double clicks while starting
    if (loadingPlan) return;

    // if user hasn't agreed, show toast instructing them to tick the checkbox
    if (!agreed) {
      toast.info("Please confirm that you agree to the terms by checking the box above before proceeding.");
      return;
    }

    if (!applicantIdFromState) {
      toast.error("Missing applicant id. Please complete the registration form first.");
      setTimeout(() => navigate("/registration"), 1000);
      return;
    }

    setLoadingPlan(plan.id);
    const applicantIdNum = Number(applicantIdFromState);

    try {
      // optionally update applicant with phone/referral (if provided via incoming state)
      const updatePayload = {};
      if (incoming.phone) updatePayload.phone_number = incoming.phone;
      if (incoming.referral) updatePayload.referral_code = incoming.referral;
      if (Object.keys(updatePayload).length) {
        // fire and wait — backend expects PATCH
        await updateApplicant(applicantIdNum, updatePayload);
      }

      // initialize payment with canonical type (backend confirmed FULL / INSTALLMENTS)
      const initPayload = {
        applicant_id: applicantIdNum,
        payment_type: plan.type,
      };

      console.info("Initializing payment with payload:", initPayload);
      const res = await initializePayment(initPayload);

      const paymentUrl = res?.data?.payment_url;
      const reference = res?.data?.reference;

      if (!paymentUrl || !reference) {
        throw new Error("Payment initialization returned unexpected response (missing payment_url/reference).");
      }

      // persist for later verification
      localStorage.setItem("paymentReference", String(reference));
      localStorage.setItem("applicantId", String(applicantIdNum));
      setApplicant(applicantIdNum);

      // redirect to payment provider (full-page redirect)
      window.location.href = paymentUrl;
    } catch (err) {
      console.error("Payment init error:", err);

      // try to surface server message
      const serverData = err?.response?.data || null;
      if (serverData) {
        const userMsg =
          serverData?.message ||
          serverData?.detail ||
          (typeof serverData === "string" ? serverData : "Payment initialization failed. See console for details.");
        toast.error(userMsg);
      } else {
        toast.error(err.message || "Could not start payment. Try again.");
      }
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <main className="pt-[100px] px-6 md:px-16 pb-20 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Choose a payment plan
      </h1>

      <p className="py-6 text-sm md:text-base text-gray-600 leading-relaxed">
        At Prodefied, we believe nothing should stop you from starting your
        career in product management — not even payment. That's why we offer
        flexible options designed to fit your budget and timeline.
      </p>

      {/* Consent checkbox */}
      <div className="flex items-start gap-2 py-4">
        <input
          id="agree"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-gray-300 focus:ring-[#000F84]"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          aria-describedby="agree-desc"
        />
        <label htmlFor="agree" className="text-sm md:text-base text-gray-700" id="agree-desc">
          By clicking the checkbox, you have read and agree to our{" "}
          <Link to="/terms-conditions" className="text-[#0929FF] hover:underline">
            terms and conditions
          </Link>{" "}
          and payment policy.
        </label>
      </div>

      <div className="flex justify-between py-4 border-b border-gray-200 text-gray-800 font-medium">
        <span>Registration fee:</span>
        <span className="text-lg md:text-xl font-semibold">N200,000</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {paymentPlanData.map((c) => {
          const isBusy = loadingPlan !== null;
          const looksDisabled = !agreed || isBusy; // visual disabled state
          return (
            <div
              key={c.id}
              className="flex flex-col justify-between text-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
              style={{ backgroundColor: c.backgroundColor }}
            >
              <p className="text-lg font-semibold mb-4">{c.title}</p>

              <div className="flex md:items-start gap-4 mb-6">
                <p className="text-sm md:text-base text-white leading-relaxed">{c.details}</p>
                <img src={c.icon} alt={c.title} className="w-20 h-20 object-contain" />
              </div>

              {/* NOTE: we intentionally DO NOT set native `disabled` so clicks still fire and show toast
                  when checkbox is unchecked. We guard inside handleProceed to avoid network calls. */}
              <button
                onClick={() => handleProceed(c)}
                aria-disabled={looksDisabled}
                aria-describedby={!agreed ? "agree-desc" : undefined}
                className={`py-3 rounded-md font-medium transition
                  ${looksDisabled
                    ? "cursor-not-allowed bg-gray-300 text-gray-500 opacity-80"
                    : "cursor-pointer text-black bg-white hover:bg-[#e7e7e7]"}
                `}
              >
                {loadingPlan === c.id ? "Starting payment..." : "Proceed"}
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
