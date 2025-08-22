// src/components/MakePaymentPopUp.jsx
import { useState } from "react";
import { createPaystackTransaction, createBankTransfer, openPaystackInline, verifyPaystackTransaction } from "../../services/payments";
import { toast } from "react-toastify";


export default function MakePaymentPopUp({ close, proceed, formData }) {
  const { firstName, lastName, email, phone, amount } = formData || {};
  const [selectedMethod, setSelectedMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const amountKobo = amount * 100; // convert to kobo for Paystack

  async function handlePaystackFlow() {
    if (!email) return toast.error("Email is required for card payments");
    setLoading(true);

    try {
      // 1) Create transaction record on backend (recommended). Backend returns reference.
      const res = await createPaystackTransaction({
        amount,
        email,
        metadata: { firstName, lastName, phone },
      });
      if (!res || !res.data) throw new Error("Failed to create transaction");

      const { reference } = res.data;

      // 2) Open Paystack inline popup. onSuccess callback returns a reference.
      openPaystackInline({
        // amount in kobo
        amountKobo,
        email,
        reference,
        metadata: { firstName, lastName, phone },
        onSuccess: async (paystackResponse) => {
          // 3) Verify transaction with backend
          try {
            const verifyRes = await verifyPaystackTransaction(paystackResponse.reference);
            if (verifyRes && verifyRes.data && (verifyRes.data.status === "success" || verifyRes.data.status === "verified" || verifyRes.data.status === "successful")) {
              toast.success("Payment successful");
              // proceed — parent can handle redirect to portal
              proceed("paystack", paystackResponse.reference);
              // Optionally you may navigate directly here if you have access to navigate()
            } else {
              toast.error("Payment verification failed. Contact support.");
            }
          } catch (err) {
            console.error(err);
            toast.error("Verification error");
          }
        },
        onClose: () => {
          toast.info("Payment closed");
        },
      });
    } catch (err) {
      console.error(err);
      toast.error("Could not start Paystack checkout");
    } finally {
      setLoading(false);
    }
  }

  async function handleBankFlow() {
    setLoading(true);
    try {
      // Request bank account details from backend
      const res = await createBankTransfer({
        amount,
        email,
        metadata: { firstName, lastName, phone },
      });
      if (!res || !res.data) throw new Error("Failed to get bank details");

      // res.data should contain reference and bank account fields
      proceed("bank", res.data.reference);
      // parent will open PaymentConfirmation modal using the reference
    } catch (err) {
      console.error(err);
      toast.error("Failed to get bank transfer details");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-md">
        <button className="absolute top-3 right-3 text-gray-500 text-xl" onClick={close}>✕</button>
        <h1 className="text-lg font-semibold mb-4">Select Payment Method</h1>

        <span className="inline-block bg-[#E5E8FF] text-[#4D4D4D] p-2 rounded text-xs">Amount to be paid</span>
        <span className="block text-lg md:text-2xl font-bold mt-2 mb-4">N {amount?.toLocaleString()}</span>

        <div className="mb-3">
          <label className="text-sm font-medium mb-1 block">Pay securely with your virtual card</label>
          <div onClick={() => setSelectedMethod("paystack")} className={`flex items-center justify-between gap-3 p-3 border rounded-md cursor-pointer transition-all ${selectedMethod === "paystack" ? "border-[#000F84] ring-1 ring-[#000F84]" : "border-[#CBCBCB]"}`}>
            <input type="radio" name="payment-method" checked={selectedMethod === "paystack"} onChange={() => setSelectedMethod("paystack")} className="accent-[#000F84]" />
            <img src="/paystack.svg" alt="Paystack Icon" className="h-6" />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium mb-1 block">Direct transfer to local bank</label>
          <div onClick={() => setSelectedMethod("bank")} className={`flex items-center justify-between gap-3 p-3 border rounded-md cursor-pointer transition-all ${selectedMethod === "bank" ? "border-[#000F84] ring-1 ring-[#000F84]" : "border-[#CBCBCB]"}`}>
            <input type="radio" name="payment-method" checked={selectedMethod === "bank"} onChange={() => setSelectedMethod("bank")} className="accent-[#000F84]" />
            <img src="/firstbank.svg" alt="Firstbank Icon" className="h-6" />
          </div>
        </div>

        <button className="w-full bg-[#000F84] text-white py-2 rounded hover:bg-[#0018cc] transition cursor-pointer" onClick={() => {
          if (!selectedMethod) return;
          if (selectedMethod === "paystack") handlePaystackFlow();
          else if (selectedMethod === "bank") handleBankFlow();
        }} disabled={loading || !selectedMethod}>
          {loading ? "Processing..." : "Proceed"}
        </button>
      </div>
    </div>
  );
}










// import { useState } from "react";

// export default function MakePaymentPopUp({ close, proceed }) {
//   const [selectedMethod, setSelectedMethod] = useState("");

//   const handleSelect = (method) => {
//     setSelectedMethod(method);
//   };

//   const isSelected = (method) => selectedMethod === method;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
//       <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-md">
//         <button
//           className="absolute top-3 right-3 text-gray-500 text-xl"
//           onClick={close}
//         >
//           ✕
//         </button>

//         <h1 className="text-lg font-semibold mb-4">Select Payment Method</h1>

//         <span className="inline-blockblock bg-[#E5E8FF] text-[#4D4D4D] p-2 rounded text-xs">
//           Amount to be paid
//         </span>

//         <span className="block text-lg md:text-2xl font-bold mt-2 mb-4">N 150,000</span>

//         {/* === Virtual Card Option === */}
//         <div className="mb-3">
//           <label
//             htmlFor="virtual-card"
//             className="text-sm font-medium mb-1 block"
//           >
//             Pay securely with your virtual card
//           </label>
//           <div
//             onClick={() => handleSelect("virtual-card")}
//             className={`flex items-center justify-between gap-3 p-3 border rounded-md cursor-pointer transition-all ${
//               isSelected("virtual-card")
//                 ? "border-[#000F84] ring-1 ring-[#000F84]"
//                 : "border-[#CBCBCB]"
//             }`}
//           >
//             <input
//               type="radio"
//               name="payment-method"
//               id="virtual-card"
//               checked={isSelected("virtual-card")}
//               onChange={() => handleSelect("virtual-card")}
//               className="accent-[#000F84]"
//             />
//             <img src="/paystack.svg" alt="Paystack Icon" className="h-6" />
//           </div>
//         </div>

//         {/* === Bank Transfer Option === */}
//         <div className="mb-6">
//           <label
//             htmlFor="bank-transfer"
//             className="text-sm font-medium mb-1 block"
//           >
//             Direct transfer to local bank
//           </label>
//           <div
//             onClick={() => handleSelect("bank-transfer")}
//             className={`flex items-center justify-between gap-3 p-3 border rounded-md cursor-pointer transition-all ${
//               isSelected("bank-transfer")
//                 ? "border-[#000F84] ring-1 ring-[#000F84]"
//                 : "border-[#CBCBCB]"
//             }`}
//           >
//             <input
//               type="radio"
//               name="payment-method"
//               id="bank-transfer"
//               checked={isSelected("bank-transfer")}
//               onChange={() => handleSelect("bank-transfer")}
//               className="accent-[#000F84]"
//             />
//             <img src="/firstbank.svg" alt="Firstbank Icon" className="h-6" />
//           </div>
//         </div>

//         <button
//           className="w-full bg-[#000F84] text-white py-2 rounded hover:bg-[#0018cc] transition cursor-pointer"
//           onClick={proceed}
//           disabled={!selectedMethod}
//         >
//           Proceed
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function MakePaymentPopUp({ close, proceed }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
//       <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-md">
//         <button
//           className="absolute top-3 right-3 text-gray-500 text-xl"
//           onClick={close}
//         >
//           ✕
//         </button>

//         <h1 className="text-lg font-semibold mb-4">Select Payment Method</h1>

//         <span className="block bg-[#E5E8FF] text-[#4D4D4D] p-2 rounded text-sm">
//           Amount to be paid
//         </span>

//         <span className="block text-lg font-bold mt-1 mb-4">N 150,000</span>

//         <div className="mb-3">
//           <label
//             htmlFor="virtual-card"
//             className="text-sm font-medium mb-1 block"
//           >
//             Pay securely with your virtual card
//           </label>
//           <div className="flex items-center justify-between gap-3 p-3 border rounded-md">
//             <input type="radio" name="payment-method" id="virtual-card" />
//             <img src="/paystack.svg" alt="Paystack Icon" className="h-6" />
//           </div>
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="bank-transfer"
//             className="text-sm font-medium mb-1 block"
//           >
//             Direct transfer to local bank
//           </label>
//           <div className="flex items-center justify-between gap-3 p-3 border rounded-md border-[#CBCBCB]">
//             <input type="radio" name="payment-method" id="bank-transfer" />
//             <img src="/firstbank.svg" alt="Firstbank Icon" className="h-6" />
//           </div>
//         </div>

//         <button
//           className="w-full bg-[#000F84] text-white py-2 rounded hover:bg-[#0018cc] transition"
//           onClick={proceed}
//         >
//           Proceed
//         </button>
//       </div>
//     </div>
//   );
// }
