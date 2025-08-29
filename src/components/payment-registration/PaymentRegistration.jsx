import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneNumberField from "../PhoneInputBlock";
import { toast } from "react-toastify";
import axios from "axios";

export default function PaymentRegistration() {
  const navigate = useNavigate();

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState({
    country: "NG",
    code: "+234",
    number: "",
  });
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");
  const [processing, setProcessing] = useState(false);

  const amount = 200000; // Naira

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
    const phoneRegex = /^\+?\d{10,15}$/;

    if (!cleanedNumber || !phoneRegex.test(fullNumber)) {
      toast.error("Please provide a valid phone number");
      return false;
    }

    return true;
  }

  async function handleMakePayment() {
    if (!validateForm()) return;
    setProcessing(true);

    try {
      // Step 1: Initialize payment
      const token = localStorage.getItem("token"); // if required
      const initRes = await axios.post(
        "/initialize_user/",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { reference } = initRes.data;
      if (!reference) throw new Error("No reference returned");

      // Step 2: Open Paystack inline
      const handler = window.PaystackPop.setup({
        key: "YOUR_PAYSTACK_PUBLIC_KEY", // Replace with your actual public key
        email,
        amount: amount * 100, // in Kobo
        reference,
        metadata: {
          first_name: firstName,
          last_name: lastName,
          phone: `${phone.code}${phone.number}`,
          referral,
        },
        callback: async function (response) {
          try {
            const verifyRes = await axios.get(
              `/verify_payment/?reference=${response.reference}`
            );
            if (
              verifyRes.data?.status === true &&
              verifyRes.data?.payment?.verified
            ) {
              toast.success("Payment verified successfully");
              navigate("/portal");
            } else {
              toast.error("Verification failed. Please contact support.");
            }
          } catch (err) {
            console.error(err);
            toast.error("Error verifying payment");
          }
        },
        onClose: function () {
          toast.info("Payment popup closed");
        },
      });

      handler.openIframe();
    } catch (err) {
      console.error(err);
      toast.error("Failed to initialize payment");
    } finally {
      setProcessing(false);
    }
  }

  return (
    <main className="relative px-4 py-8 max-w-4xl mx-auto text-[#1A1A1A]">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-[#4D4D4D]">
        Registration
      </h1>

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
        <PhoneNumberField value={phone} onChange={setPhone} />

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
            onClick={handleMakePayment}
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
    </main>
  );
}

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import MakePaymentPopUp from "./MakePaymentPopUp";
// import PaymentConfirmation from "./PaymentConfirmation";
// import PhoneNumberField from "../PhoneInputBlock";

// export default function PaymentRegistration() {
//   const [showPaymentPopup, setShowPaymentPopup] = useState(false);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   return (
//     <main className="relative px-4 py-8 max-w-4xl mx-auto text-[#1A1A1A]">
//       <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-[#4D4D4D]">
//         Registration
//       </h1>

//       <div className="p-4 pb-8 rounded-md space-y-2 mb-6 text-sm md:text-base border-b-[1px] border-[#B3B3B3]">
//         <div className="flex flex-col">
//           <span className="font-medium text-xs text-[#666666]">Reg fee:</span>
//           <span className="text-[#4D4D4D] font-semibold text-base md:text-lg">
//             N 150,000
//           </span>
//         </div>
//         <div className="text-[#0018CC] text-xs">Have a Coupon Code?</div>
//       </div>

//       <p className="mb-6 text-sm md:text-base text-[#FF3333]">
//         Please enter your personal information to proceed
//       </p>

//       <form className="space-y-6">
//         {/* Name */}
//         <div>
//           <label className="block text-sm font-medium mb-2">
//             Name <span className="text-[#B30505]">*</span>
//           </label>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="First Name"
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//           </div>
//         </div>

//         {/* Phone */}
//         <div>
//           <PhoneNumberField />
//           {/* <label className="block text-sm font-medium mb-2">
//             Phone Number <span className="text-[#B30505]">*</span>
//           </label>
//           <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
//             <img
//               src="/nigeria-flag.svg"
//               alt="Nigerian Flag"
//               className="w-6 h-4"
//             />
//             <span className="text-sm text-gray-600">+234</span>
//             <input
//               type="tel"
//               placeholder="906712141226"
//               className="w-full outline-none"
//             />
//           </div> */}
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium mb-2">
//             Email <span className="text-[#B30505]">*</span>
//           </label>
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>

//         {/* Referral Code */}
//         <div>
//           <label className="block text-sm font-medium mb-2">
//             Referral Code
//           </label>
//           <input
//             type="text"
//             placeholder="(Optional)"
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-6 md:justify-between">
//           <button
//             type="button"
//             className="bg-[#000F84] text-white px-6 py-3 rounded hover:opacity-90 cursor-pointer"
//             onClick={() => setShowPaymentPopup(true)}
//           >
//             Make Payment
//           </button>
//           <Link to="/program-details">
//             <button
//               type="button"
//               className="bg-[#E4E4E4] text-[#1A1A1A] px-6 py-3 rounded hover:bg-gray-300 cursor-pointer"
//             >
//               View Program Details
//             </button>
//           </Link>
//         </div>
//       </form>

//       {/* POPUPS */}
//       {showPaymentPopup && (
//         <MakePaymentPopUp
//           close={() => setShowPaymentPopup(false)}
//           proceed={() => {
//             setShowPaymentPopup(false);
//             setShowConfirmationPopup(true);
//           }}
//         />
//       )}

//       {showConfirmationPopup && (
//         <PaymentConfirmation
//           close={() => setShowConfirmationPopup(false)}
//           complete={() => {
//             setShowConfirmationPopup(false);
//           }}
//         />
//       )}
//     </main>
//   );
// }
