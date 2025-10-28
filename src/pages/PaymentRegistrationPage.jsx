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
 * UX:
 * - Short consent sentence (no checkbox).
 * - Buttons are clickable immediately. While a plan is being started:
 *   - the initiating card shows "Starting payment..." on its button and has aria-busy.
 *   - all other cards are visually faded and pointer-events disabled.
 * - Preserves backend update/init/redirect flow with clear logs & user-facing toasts.
 */

const paymentPlanData = [
  {
    id: 1,
    backgroundColor: "#026D15",
    type: "FULL",
    title: "Full Payment",
    icon: FullIcon,
    details:
      "Pay the full program fee of N200,000 upfront and focus fully on your learning",
  },
  {
    id: 2,
    backgroundColor: "#64026D",
    type: "INSTALLMENTS",
    title: "Two-Part Installment",
    icon: TwoPartIcon,
    details:
      "Secure your spot with a N100,000 deposit and pay the balance within 8 weeks (with weekly reminders from our team)",
  },
];

export default function PaymentRegistrationPage() {
  const [loadingPlan, setLoadingPlan] = useState(null); // id of plan being started (or null)
  const location = useLocation();
  const navigate = useNavigate();
  const { setApplicant } = useAuth();

  // incoming state from RegistrationPage (may contain applicant_id / phone / referral)
  const incoming = location.state || {};
  const applicantIdFromState =
    incoming.applicant_id || localStorage.getItem("applicantId");

  const handleProceed = async (plan) => {
    // Prevent duplicate starts
    if (loadingPlan) return;

    if (!applicantIdFromState) {
      toast.error("Missing applicant id. Please complete the registration form first.");
      setTimeout(() => navigate("/registration"), 1000);
      return;
    }

    setLoadingPlan(plan.id);
    const applicantIdNum = Number(applicantIdFromState);

    try {
      // Optionally update applicant with phone/referral (if provided via incoming state)
      const updatePayload = {};
      if (incoming.phone) updatePayload.phone_number = incoming.phone;
      if (incoming.referral) updatePayload.referral_code = incoming.referral;
      if (Object.keys(updatePayload).length) {
        // backend expects PATCH
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
      // brief delay to allow user to see "Starting payment..." before UI resets if an error occurred
      setTimeout(() => setLoadingPlan(null), 300);
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

      {/* Consent paragraph (no checkbox) */}
      <div className="py-4">
        <p className="text-sm md:text-lg text-gray-700">
          By selecting a payment plan, you hereby accept to have read and agreed to our{" "}
          <Link to="/terms-conditions" className="text-[#0929FF] hover:underline">
            terms and conditions and payment policy.
          </Link>
        </p>
      </div>

      <div className="flex justify-between py-4 border-b border-gray-200 text-gray-800 font-medium">
        <span>Registration fee:</span>
        <span className="text-lg md:text-2xl font-bold">N200,000</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {paymentPlanData.map((c) => {
          const isBusy = loadingPlan !== null;
          const isThisBusy = loadingPlan === c.id;
          // Fade and disable other cards while a plan is starting
          const cardDisabled = isBusy && !isThisBusy;

          return (
            <div
              key={c.id}
              className={`flex flex-col justify-between text-white shadow-md rounded-lg p-6 hover:shadow-lg transition
                ${cardDisabled ? "opacity-60 pointer-events-none" : ""}`}
              style={{ backgroundColor: c.backgroundColor }}
            >
              <p className="text-lg font-semibold mb-4">{c.title}</p>

              <div className="flex md:items-start gap-4 mb-6">
                <p className="text-sm md:text-base text-white leading-relaxed">{c.details}</p>
                <img src={c.icon} alt={c.title} className="w-20 h-20 object-contain" />
              </div>

              <button
                onClick={() => handleProceed(c)}
                aria-disabled={cardDisabled}
                aria-busy={isThisBusy}
                className={`py-3 rounded-md font-medium transition
                  ${isThisBusy
                    ? "cursor-wait bg-white text-black"
                    : "cursor-pointer text-black bg-white hover:bg-[#e7e7e7]"}
                `}
              >
                {isThisBusy ? "Starting payment..." : "Proceed"}
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
