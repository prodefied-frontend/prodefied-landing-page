// src/pages/PaymentRegistrationPage.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FullIcon from "../assets/icons/registration/full-icon.svg";
import TwoPartIcon from "../assets/icons/registration/half-pay-icon.svg";
import { initializePayment, updateApplicant } from "../services/api";
import { useAuth } from "../context/AuthContext";

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
    type: "PART",
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
    if (!agreed) {
      toast.error("Click the checkbox first before proceeding");
      return;
    }

    if (!applicantIdFromState) {
      toast.error(
        "Missing applicant id. Please complete registration form first."
      );
      setTimeout(() => navigate("/registration"), 1000);
      return;
    }

    setLoadingPlan(plan.id);
    try {
      // Optionally update applicant with phone/referral
      const updatePayload = {};
      if (incoming.phone) updatePayload.phone_number = incoming.phone;
      if (incoming.referral) updatePayload.referral_code = incoming.referral;
      if (Object.keys(updatePayload).length) {
        await updateApplicant(applicantIdFromState, updatePayload);
      }

      // initialize payment
      const initPayload = {
        applicant_id: applicantIdFromState,
        payment_type: plan.type, // "FULL" or "PART"
      };

      const res = await initializePayment(initPayload);
      const paymentUrl = res?.data?.payment_url;
      const reference = res?.data?.reference;

      if (!paymentUrl || !reference) {
        throw new Error("Payment initialization failed");
      }

      // store reference and applicant for later verification
      localStorage.setItem("paymentReference", String(reference));
      localStorage.setItem("applicantId", String(applicantIdFromState));
      setApplicant(applicantIdFromState);

      // redirect to payment provider (Paystack)
      window.location.href = paymentUrl;
    } catch (err) {
      console.error("Payment init error:", err);
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Could not start payment. Try again.";
      toast.error(msg);
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

      <div className="flex items-start gap-2 py-4">
        <input
          type="checkbox"
          id="agree"
          className="mt-1 h-4 w-4 rounded border-gray-300 focus:ring-[#000F84]"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <label htmlFor="agree" className="text-sm md:text-base text-gray-700">
          By clicking the checkbox, you have read and agree to our{" "}
          <Link
            to="/terms-conditions"
            className="text-[#0929FF] hover:underline"
          >
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
        {paymentPlanData.map((c) => (
          <div
            key={c.id}
            className="flex flex-col justify-between text-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            style={{ backgroundColor: c.backgroundColor }}
          >
            <p className="text-lg font-semibold mb-4">{c.title}</p>

            <div className="flex md:items-start gap-4 mb-6">
              <p className="text-sm md:text-base text-white leading-relaxed">
                {c.details}
              </p>
              <img
                src={c.icon}
                alt={c.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            <button
              onClick={() => handleProceed(c)}
              disabled={!agreed || loadingPlan}
              className={`py-3 rounded-md font-medium transition
                ${
                  agreed
                    ? "cursor-pointer text-black bg-white hover:bg-[#e7e7e7]"
                    : "cursor-not-allowed bg-gray-300 text-gray-500"
                }`}
            >
              {loadingPlan === c.id ? "Starting payment..." : "Proceed"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

// ====================================================================================

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import FullIcon from "../assets/icons/registration/full-icon.svg";
// import TwoPartIcon from "../assets/icons/registration/half-pay-icon.svg";

// const paymentPlanData = [
//   {
//     id: 1,
//     backgroundColor: "#026D15",
//     type: "Full Payment",
//     icon: FullIcon,
//     details:
//       "Pay the full program fee of N200,000 upfront and focus fully on your learning",
//   },
//   {
//     id: 2,
//     backgroundColor: "#64026D",
//     type: "Two-Part Installment",
//     icon: TwoPartIcon,
//     details:
//       "Secure your spot with a N100,000 deposit and pay the balance within 8 weeks (with weekly reminders from our team)",
//   },
// ];

// export default function PaymentRegistrationPage() {
//   // ✅ Track if the user agreed to terms
//   const [agreed, setAgreed] = useState(false);

//   // ✅ This will be called when user clicks Proceed
//   const handleProceed = (plan) => {
//     if (!agreed) {
//       toast.error("Click the checkbox first before proceeding");
//       return;
//     }

//     // 🔒 For now, backend API isn’t ready
//     // Later: call your payment initialization logic here
//     toast.success(`Proceeding with ${plan.type} plan...`);
//   };

//   return (
//     <main className="pt-[100px] px-6 md:px-16 pb-20 max-w-6xl mx-auto">
//       {/* Header */}
//       <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
//         Choose a payment plan
//       </h1>

//       <p className="py-6 text-sm md:text-base text-gray-600 leading-relaxed">
//         At Prodefied, we believe nothing should stop you from starting your
//         career in product management — not even payment. That's why we offer
//         flexible options designed to fit your budget and timeline.
//       </p>

//       {/* Terms agreement */}
//       <div className="flex items-start gap-2 py-4">
//         <input
//           type="checkbox"
//           id="agree"
//           className="mt-1 h-4 w-4 rounded border-gray-300 focus:ring-[#000F84]"
//           checked={agreed}
//           onChange={(e) => setAgreed(e.target.checked)}
//         />
//         <label htmlFor="agree" className="text-sm md:text-base text-gray-700">
//           By clicking the checkbox, you have read and agree to our{" "}
//           <Link
//             to="/terms-conditions"
//             className="text-[#0929FF] hover:underline"
//           >
//             terms and conditions
//           </Link>{" "}
//           and payment policy.
//         </label>
//       </div>

//       {/* Fee */}
//       <div className="flex justify-between py-4 border-b border-gray-200 text-gray-800 font-medium">
//         <span>Registration fee:</span>
//         <span className="text-lg md:text-xl font-semibold">N200,000</span>
//       </div>

//       {/* Payment Plans */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//         {paymentPlanData.map((c) => (
//           <div
//             key={c.id}
//             className="flex flex-col justify-between text-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
//             style={{ backgroundColor: c.backgroundColor }}
//           >
//             {/* Title */}
//             <p className="text-lg font-semibold mb-4">{c.type}</p>

//             {/* Details */}
//             <div className="flex md:items-start gap-4 mb-6">
//               <p className="text-sm md:text-base text-white leading-relaxed">
//                 {c.details}
//               </p>
//               <img
//                 src={c.icon}
//                 alt={c.type}
//                 className="w-20 h-20 object-contain"
//               />
//             </div>

//             {/* CTA Button */}
//             <button
//               onClick={() => handleProceed(c)}
//               disabled={!agreed} // ✅ disabled until checkbox is ticked
//               className={`py-3 rounded-md font-medium transition
//                 ${
//                   agreed
//                     ? "cursor-pointer text-black bg-white hover:bg-[#e7e7e7]"
//                     : "cursor-not-allowed bg-gray-300 text-gray-500"
//                 }`}
//             >
//               Proceed
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
