// src/components/PaymentConfirmation.jsx
import { useState } from "react";
import { notifyBankPayment } from "../../services/payments";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * Props:
 * - reference (optional) - bank reference returned from createBankTransfer()
 * - payer: { firstName, lastName, phone, email }
 * - close() - close modal
 * - onComplete() - called when backend confirms receipt or we decide to redirect
 */
export default function PaymentConfirmation({ reference, payer = {}, close, onComplete }) {
  const [paymentSent, setPaymentSent] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  // Example bank details — ideally these come from your createBankTransfer response and passed via props or stored in state
  const bankDetails = {
    bankName: "First Bank of Nigeria",
    accountName: "Prodefied",
    accountNumber: "906712151226",
    reference: reference || `LOCAL-${Date.now()}`,
  };

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  async function handleConfirmPayment() {
    setLoading(true);
    try {
      // send notification to backend so team can manually confirm or do auto-verify
      await notifyBankPayment({
        reference: bankDetails.reference,
        payerName: `${payer.firstName || ""} ${payer.lastName || ""}`.trim(),
        payerPhone: (payer.phone && (payer.phone.code ? `${payer.phone.code}${payer.phone.number}` : payer.phone.number)) || "",
        payerEmail: payer.email || "",
      });

      setPaymentSent(true);
      toast.success("Payment notification sent. We will verify and update you.");
      // Wait a short while then redirect to portal or call onComplete
      setTimeout(() => {
        setLoading(false);
        close && close();
        onComplete && onComplete();
      }, 1200);
    } catch (err) {
      console.error(err);
      toast.error("Could not notify payment. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-md overflow-y-auto max-h-[90vh]">
        <button className="absolute top-3 right-3 text-gray-500 text-xl" onClick={close}>✕</button>

        {paymentSent ? (
          <div className="text-center py-10">
            <p className="text-green-600 font-semibold text-lg mb-2">🎉 Payment notification sent!</p>
            <p className="text-sm text-gray-600">We will verify and update shortly.</p>
          </div>
        ) : (
          <>
            <h1 className="text-lg font-semibold mb-2">Bank Transfer</h1>
            <p className="text-sm mb-4">Use the details below to make payment and then click "I've made the payment".</p>

            <div className="bg-[#E5E8FF] p-4 rounded mb-4 text-[#333333] text-sm">
              <div className="flex gap-3 items-start">
                <img src="/notify.svg" alt="Warn Icon" className="w-6 h-6" />
                <div>
                  <h2 className="text-[#0018CC] font-semibold">Payment Instructions</h2>
                  <p>Please ensure you reference the payment reference when transferring. Transactions may take time to reflect.</p>
                </div>
              </div>
            </div>

            <div className="text-center mb-4">
              <div className="inline-block bg-[#FFEBCC] p-2 px-4 text-[#4D4D4D] text-sm rounded">Amount to be paid</div>
              <div className="font-bold text-lg md:text-3xl mt-1 mb-4">N {Number(150000).toLocaleString()}</div>
            </div>

            <div className="space-y-3 mb-4">
              {[
                { label: "Bank Name", value: bankDetails.bankName, field: "bank" },
                { label: "Account Name", value: bankDetails.accountName, field: "account" },
                { label: "Account Number", value: bankDetails.accountNumber, field: "number" },
                { label: "Reference", value: bankDetails.reference, field: "reference" },
              ].map(({ label, value, field }) => (
                <div key={field}>
                  <p className="text-sm font-medium">{label}</p>
                  <div className="flex justify-between items-center border p-2 rounded">
                    <span className="truncate">{value}</span>
                    <div className="flex items-center gap-2">
                      <button className="text-xs px-2 py-1 rounded bg-gray-100" onClick={() => handleCopy(value, field)}>Copy</button>
                      {copiedField === field && <span className="text-xs text-green-600">Copied!</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handleConfirmPayment} className="w-full bg-[#000F84] text-white py-2 rounded hover:bg-[#0018cc] transition cursor-pointer" disabled={loading}>
              {loading ? "Sending..." : "I've made the payment"}
            </button>

            <span className="block text-center text-sm mt-3">
              Having trouble? <a href="/contact-us" className="text-[#0929FF] underline">Contact Us</a>
            </span>
          </>
        )}
      </div>
    </div>
  );
}




// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function PaymentConfirmation({ close }) {
//   const [paymentSent, setPaymentSent] = useState(false);
//   const [copiedField, setCopiedField] = useState(null); // To track copied field
//   const navigate = useNavigate();

//   const handleConfirmPayment = () => {
//     setPaymentSent(true);

//     setTimeout(() => {
//       setPaymentSent(false);
//       close();
//       navigate('/');
//     }, 2000);
//   };

//   const handleCopy = (value, field) => {
//     navigator.clipboard.writeText(value);
//     setCopiedField(field);
//     setTimeout(() => setCopiedField(null), 1500); // Reset after 1.5s
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
//       <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-md overflow-y-auto max-h-[90vh]">
//         <button
//           className="absolute top-3 right-3 text-gray-500 text-xl"
//           onClick={close}
//         >
//           ✕
//         </button>

//         {paymentSent ? (
//           <div className="text-center py-10">
//             <p className="text-green-600 font-semibold text-lg mb-2">
//               🎉 Payment notification sent!
//             </p>
//             <p className="text-sm text-gray-600">
//               We'll verify and update shortly.
//             </p>
//           </div>
//         ) : (
//           <>
//             <h1 className="text-lg font-semibold mb-2">Payment Method</h1>
//             <p className="text-sm mb-4">Bank Transfer</p>

//             <div className="bg-[#E5E8FF] p-4 rounded mb-4 text-[#333333] text-sm">
//               <div className="flex gap-3 items-start">
//                 <img src="/notify.svg" alt="Warn Icon" className="w-6 h-6" />
//                 <div>
//                   <h2 className="text-[#0018CC] font-semibold">
//                     Payment Instructions
//                   </h2>
//                   <p>
//                     Please double check that you're making payment to the
//                     correct account details provided below. Transactions are
//                     non-refundable.{" "}
//                     <span className="text-[#0929FF] underline cursor-pointer">
//                       Read more about our payment policy here
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="text-center">
//               <div className="inline-block bg-[#FFEBCC] p-2 px-4 text-[#4D4D4D] text-sm rounded">
//                 Amount to be paid
//               </div>
//               <div className="font-bold text-lg md:text-3xl mt-1 mb-4">
//                 N 150,000
//               </div>
//             </div>

//             {/* Copyable fields */}
//             <div className="space-y-3 mb-4">
//               {[
//                 {
//                   label: "Bank Name",
//                   value: "First Bank of Nigeria",
//                   field: "bank",
//                 },
//                 {
//                   label: "Account Name",
//                   value: "Prodefied",
//                   field: "account",
//                 },
//                 {
//                   label: "Account Number",
//                   value: "906712151226",
//                   field: "number",
//                 },
//               ].map(({ label, value, field }) => (
//                 <div key={field}>
//                   <p className="text-sm font-medium">{label}</p>
//                   <div className="flex justify-between items-center border p-2 rounded">
//                     <span>{value}</span>
//                     <div
//                       className="flex items-center gap-1 cursor-pointer"
//                       onClick={() => handleCopy(value, field)}
//                     >
//                       <img
//                         src="/copy-icon.svg"
//                         alt="Copy Icon"
//                         className="w-5"
//                       />
//                       {copiedField === field && (
//                         <span className="text-xs text-green-600">Copied!</span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={handleConfirmPayment}
//               className="w-full bg-[#000F84] text-white py-2 rounded hover:bg-[#0018cc] transition cursor-pointer"
//             >
//               I've made the payment
//             </button>

//             <span className="block text-center text-sm mt-3">
//               Having trouble making payment?{" "}
//               <Link to="/contact-us" className="text-[#0929FF] underline">
//                 Contact Us
//               </Link>
//             </span>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
