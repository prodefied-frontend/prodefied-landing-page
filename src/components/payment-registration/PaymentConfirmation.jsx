import { useState } from "react";
import { Link } from "react-router-dom";

export default function PaymentConfirmation({ close }) {
  const [paymentSent, setPaymentSent] = useState(false);

  const handleConfirmPayment = () => {
    setPaymentSent(true);

    // Automatically close the modal after 2 seconds
    setTimeout(() => {
      close();
      setPaymentSent(false); // reset state for future reuse
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-md overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-3 text-gray-500 text-xl"
          onClick={close}
        >
          ✕
        </button>

        {/* 👇 Conditional feedback */}
        {paymentSent ? (
          <div className="text-center py-10">
            <p className="text-green-600 font-semibold text-lg mb-2">
              🎉 Payment notification sent!
            </p>
            <p className="text-sm text-gray-600">
              We'll verify and update shortly.
            </p>
          </div>
        ) : (
          <>
            {/* Keep all your existing confirmation UI here */}
            <h1 className="text-lg font-semibold mb-2">Payment Method</h1>
            <p className="text-sm mb-4">Bank Transfer</p>

            <div className="bg-[#E5E8FF] p-4 rounded mb-4 text-[#333333] text-sm">
              <div className="flex gap-3 items-start">
                <img src="/notify.svg" alt="Warn Icon" className="w-6" />
                <div>
                  <h2 className="text-[#0018CC] font-semibold">
                    Payment Instructions
                  </h2>
                  <p>
                    Please double check that you're making payment to the
                    correct account details provided below, kindly note that
                    transactions are non refundable.{" "}
                    <span className="text-[#0929FF] underline cursor-pointer">
                      Read more about our payment policy here
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#FFEBCC] py-2 text-[#4D4D4D] text-sm rounded">
                Amount to be paid
              </div>
              <div className="font-bold text-lg mt-1 mb-4">N 150,000</div>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <p className="text-sm font-medium">Bank Name</p>
                <div className="flex justify-between items-center border p-2 rounded">
                  <span>First Bank of Nigeria</span>
                  <img src="/copy-icon.svg" alt="Copy Icon" className="w-5" />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Account Name</p>
                <div className="flex justify-between items-center border p-2 rounded">
                  <span>Prodefied</span>
                  <img src="/copy-icon.svg" alt="Copy Icon" className="w-5" />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Account Number</p>
                <div className="flex justify-between items-center border p-2 rounded">
                  <span>906712151226</span>
                  <img src="/copy-icon.svg" alt="Copy Icon" className="w-5" />
                </div>
              </div>
            </div>

            <button
              onClick={handleConfirmPayment}
              className="w-full bg-[#000F84] text-white py-2 rounded hover:bg-[#0018cc] transition"
            >
              I've made the payment
            </button>

            <span className="block text-center text-sm mt-3">
              Having trouble making payment?{" "}
              <Link to="/contact-us" className="text-[#0929FF] underline">
                Contact Us
              </Link>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// export default function PaymentConfirmation({ close }) {
//       const [paymentSent, setPaymentSent] = useState(false);

//         const handleConfirmPayment = () => {
//     setPaymentSent(true);

//     // Automatically close the modal after 2 seconds
//     setTimeout(() => {
//       close();
//       setPaymentSent(false); // reset state for future reuse
//     }, 2000);
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

//         <h1 className="text-lg font-semibold mb-2">Payment Method</h1>
//         <p className="text-sm mb-4">Bank Transfer</p>

//         <div className="bg-[#E5E8FF] p-4 rounded mb-4 text-[#333333] text-sm">
//           <div className="flex gap-3 items-start">
//             <img src="/notify.svg" alt="Warn Icon" className="w-6" />
//             <div>
//               <h2 className="text-[#0018CC] font-semibold">
//                 Payment Instructions
//               </h2>
//               <p>
//                 Please double check that you're making payment to the correct
//                 account details provided below, kindly note that transactions
//                 are non refundable.{" "}
//                 <span className="text-[#0929FF] underline cursor-pointer">
//                   Read more about our payment policy here
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="text-center">
//           <div className="bg-[#FFEBCC] py-2 text-[#4D4D4D] text-sm rounded">
//             Amount to be paid
//           </div>
//           <div className="font-bold text-lg mt-1 mb-4">N 150,000</div>
//         </div>

//         <div className="space-y-3 mb-4">
//           <div>
//             <p className="text-sm font-medium">Bank Name</p>
//             <div className="flex justify-between items-center border p-2 rounded">
//               <span>First Bank of Nigeria</span>
//               <img src="/copy-icon.svg" alt="Copy Icon" className="w-5" />
//             </div>
//           </div>

//           <div>
//             <p className="text-sm font-medium">Account Name</p>
//             <div className="flex justify-between items-center border p-2 rounded">
//               <span>Prodefied</span>
//               <img src="/copy-icon.svg" alt="Copy Icon" className="w-5" />
//             </div>
//           </div>

//           <div>
//             <p className="text-sm font-medium">Account Number</p>
//             <div className="flex justify-between items-center border p-2 rounded">
//               <span>906712151226</span>
//               <img src="/copy-icon.svg" alt="Copy Icon" className="w-5" />
//             </div>
//           </div>
//         </div>

//         <button className="w-full bg-[#000F84] text-white py-2 rounded hover:bg-[#0018cc] transition">
//           I've made the payment
//         </button>

//         <span className="block text-center text-sm mt-3">
//           Having trouble making payment?{" "}
//           <Link to="/contact-us" className="text-[#0929FF] underline">
//             Contact Us
//           </Link>
//         </span>
//       </div>
//     </div>
//   );
// }
