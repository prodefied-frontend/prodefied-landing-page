import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import FullIcon from "../assets/icons/registration/full-icon.svg";
import TwoPartIcon from "../assets/icons/registration/half-pay-icon.svg";

const paymentPlanData = [
  {
    id: 1,
    backgroundColor: "#026D15",
    type: "Full Payment",
    icon: FullIcon,
    details:
      "Pay the full program fee of N200,000 upfront and focus fully on your learning",
  },
  {
    id: 2,
    backgroundColor: "#64026D",
    type: "Two-Part Installment",
    icon: TwoPartIcon,
    details:
      "Secure your spot with a N100,000 deposit and pay the balance within 8 weeks (with weekly reminders from our team)",
  },
];

export default function PaymentRegistrationPage() {
  // ✅ Track if the user agreed to terms
  const [agreed, setAgreed] = useState(false);

  // ✅ This will be called when user clicks Proceed
  const handleProceed = (plan) => {
    if (!agreed) {
      toast.error("Click the checkbox first before proceeding");
      return;
    }

    // 🔒 For now, backend API isn’t ready
    // Later: call your payment initialization logic here
    toast.success(`Proceeding with ${plan.type} plan...`);
  };

  return (
    <main className="pt-[100px] px-6 md:px-16 pb-20 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Choose a payment plan
      </h1>

      <p className="py-6 text-sm md:text-base text-gray-600 leading-relaxed">
        At Prodefied, we believe nothing should stop you from starting your
        career in product management — not even payment. That's why we offer
        flexible options designed to fit your budget and timeline.
      </p>

      {/* Terms agreement */}
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

      {/* Fee */}
      <div className="flex justify-between py-4 border-b border-gray-200 text-gray-800 font-medium">
        <span>Registration fee:</span>
        <span className="text-lg md:text-xl font-semibold">N200,000</span>
      </div>

      {/* Payment Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {paymentPlanData.map((c) => (
          <div
            key={c.id}
            className="flex flex-col justify-between text-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            style={{ backgroundColor: c.backgroundColor }}
          >
            {/* Title */}
            <p className="text-lg font-semibold mb-4">{c.type}</p>

            {/* Details */}
            <div className="flex md:items-start gap-4 mb-6">
              <p className="text-sm md:text-base text-white leading-relaxed">
                {c.details}
              </p>
              <img
                src={c.icon}
                alt={c.type}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleProceed(c)}
              disabled={!agreed} // ✅ disabled until checkbox is ticked
              className={`py-3 rounded-md font-medium transition
                ${
                  agreed
                    ? "cursor-pointer text-black bg-white hover:bg-[#e7e7e7]"
                    : "cursor-not-allowed bg-gray-300 text-gray-500"
                }`}
            >
              Proceed
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

// import { Link } from "react-router-dom";
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
//   return (
//     <main className="pt-[100px] px-6 md:px-16 pb-20 max-w-6xl mx-auto">
//       {/* Header */}
//       <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
//         Choose a payment plan
//       </h1>

//       <p className="py-6 text-sm md:text-base text-gray-600 leading-relaxed">
//         At Prodefied, we believe nothing should stop you from starting your
//         career in product management — not even payment. That’s why we offer
//         flexible options designed to fit your budget and timeline.
//       </p>

//       {/* Terms agreement */}
//       <div className="flex items-start gap-2 py-4">
//         <input
//           type="checkbox"
//           id="agree"
//           className="mt-1 h-4 w-4 rounded border-gray-300 focus:ring-[#000F84]"
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

//             {/* CTA */}
//             <button className="cursor-pointer text-black bg-white py-3 rounded-md font-medium hover:bg-[#e7e7e7] transition">
//               Proceed
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// import { useLocation, Link } from "react-router-dom";
// import FullIcon from "../assets/icons/registration/full-icon.svg";
// import TwoPartIcon from "../assets/icons/registration/half-pay-icon.svg";
// // import BiWeeklyIcon from "../assets/icons/registration/bi-weekly.svg";

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
//   return (
//     <main className="pt-[120px] px-8 md:px-12 pb-20">
//       <h1 className="text-2xl md:text-3xl">Choose a payment plan</h1>

//       <p className="py-6">
//         At Prodefied, we believe nothing should stop you from starting your
//         career in product management not even payment. That's why we offer
//         flexible options designed to fit your budget and timeline
//       </p>

//       <div className="flex items-start gap-2 py-4">
//         <input type="checkbox" id="agree" className="mt-0.5" />
//         <label htmlFor="agree" className="text-sm">
//           By clicking the checkbox, you have read and agree to our <Link to='/terms-conditions' className="text-[#0929FF]">terms and
//           conditions</Link> and payment policy
//         </label>
//       </div>

//       <div className="flex justify-between py-4">
//         <span>Registration fee:</span>

//         <span>N200,000</span>
//       </div>

//       <div className="flex flex-col md:flex-row items-center gap-4">
//         {paymentPlanData.map((c) => (
//           <div key={c.id}>
//             <p>{c.type}</p>

//             <div className="flex gap-4">
//               <p>{c.details}</p>

//               <img src={c.icon} alt={c.type} />
//             </div>

//             <button className="bg-[#000F84] text-white w-full">Proceed</button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// const paymentPlanData = [
//   {
//     type: "Full Payment",
//     icon: FullIcon,
//     details:
//       "Pay the full program fee upfront and focus fully on your learning",
//   },
//   {
//     type: "2-Part Installment",
//     icon: TwoPartIcon,
//     details:
//       "Secure your spot with a N100,000 deposit and pay the balance within 8 weeks (with weekly reminders from our team)",
//   },
//   {
//     type: "Bi-Weekly Plan",
//     icon: BiWeeklyIcon,
//     details:
//       "Spread your payments over 8 weeks, paying every 2 weeks (available on request)",
//   },
// ];

// const listItems = [
//   { id: 1, text: "Payment Completion: All fees must be fully paid..." },
//   { id: 2, text: "Seat Reservation: An initial deposit of N100,000..." },
//   { id: 3, text: "Refunds and Deferrals: All payments are non-refundable..." },
//   { id: 4, text: "Late Payments: Payments made more than 7 days after..." },
//   {
//     id: 5,
//     text: "Currency: All fees are in Naira and include program materials...",
//   },
// ];

// export default function PaymentRegistrationPage() {
//   const location = useLocation();
//   const userInfo = location.state; // 👈 comes from UserInfoPage

//   return (
//     <main className="text-[#000000] pt-[80px] md:pt-[120px] px-8 pb-8 md:px-22">
//       <h1 className="text-2xl text-[#1A1A1A] text-center font-medium mb-6 md:hidden">
//         Payment Registration
//       </h1>

//       {userInfo && (
//         <div className="bg-gray-100 p-4 rounded-md mb-6">
//           <p className="text-sm">Proceeding as:</p>
//           <p className="font-medium">
//             {userInfo.firstName} {userInfo.lastName}
//           </p>
//           <p className="text-sm text-gray-600">
//             {userInfo.email} · {userInfo.phone}
//           </p>
//           {userInfo.referral && (
//             <p className="text-xs text-gray-500">
//               Referral: {userInfo.referral}
//             </p>
//           )}
//         </div>
//       )}

//       {/* Your existing PaymentPlan section */}
//       <section className="pb-4 space-y-2">
//         <div className="flex items-center justify-between text-[#333333] text-lg md:text-3xl">
//           <span className="">Registration Fee:</span>
//           <span className="font-bold lg:text-4xl">N 200,000</span>
//         </div>
//         <p className="text-[#4D4D4D] text-xs md:text-base">
//           At Prodefied, we believe nothing should stop you from starting your
//           career...
//         </p>
//       </section>

//       <section className="py-4">
//         <h2 className="text-lg text-[#001299] font-medium pb-4 md:text-3xl">
//           Payment Plan
//         </h2>

//         <div className="flex flex-col items-center gap-12 lg:flex-row">
//           {paymentPlanData.map((detail, index) => (
//             <div key={index} className="flex flex-col items-start md:w-md">
//               <span className="text-base mb-2 md:text-xl">{detail.type}</span>
//               <div className="flex items-center gap-2">
//                 <img src={detail.icon} alt={detail.type} />
//                 <div>
//                   <span className="text-base md:text-lg">{detail.details}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <p className="py-8 md:text-center">
//           We accept bank transfers, debit/credit cards, and Paypal
//         </p>

//         <div className="flex flex-col items-center justify-center gap-4 md:gap-14 md:flex-row">
//           <Link
//             to="/program-details"
//             className="bg-[#000F84] text-white text-center py-3 px-8 rounded-md w-full"
//           >
//             Proceed
//           </Link>
//           <Link
//             to="/program-details"
//             className="bg-[#E4E4E4] text-[#1A1A1A] text-center py-3 px-8 rounded-md w-full"
//           >
//             View Program Details
//           </Link>
//         </div>
//       </section>

//       <section className="py-4">
//         <h3 className="text-[#001299] text-base py-4 md:text-2xl">
//           Payment Policy
//         </h3>
//         <p className="text-[#4D4D4D] text-sm md:text-lg pb-2">
//           If you register for Prodefied, you agree to the following:
//         </p>
//         <ol>
//           {listItems.map((li) => (
//             <li key={li.id} className="mb-2 md:mb-4">
//               <span>{li.id}. </span>
//               <span>{li.text}</span>
//             </li>
//           ))}
//         </ol>
//       </section>
//     </main>
//   );
// }

// // import PaymentRegistration from "../components/payment-registration/PaymentRegistration";

// // export default function PaymentRegistrationPage() {
// //   return (
// //     <>
// //     <PaymentRegistration />
// //     </>
// //   )
// // }
