import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    // Navigate to payment-registration and pass data
    navigate("/payment-registration", { state: formData });
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4 pt-[120px] pb-24">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Registration</h1>

        <p>
          Please enter your personal information to proceed<span className="text-red-500">*</span>
        </p>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84]"
          />
        </div>

        {/* First + Last Name side by side */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84]"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84]"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84]"
          />
        </div>

        {/* Referral Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Referral Code (optional)
          </label>
          <input
            type="text"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#000F84]"
          />
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full bg-[#000F84] text-white py-3 rounded-md hover:bg-[#000d6b] transition-colors cursor-pointer"
        >
          Continue
        </button>
      </form>
    </main>
  );
}





// import { Link } from "react-router-dom";
// import FullIcon from "../assets/icons/registration/full-icon.svg";
// import TwoPartIcon from "../assets/icons/registration/two-part.svg";
// import BiWeeklyIcon from "../assets/icons/registration/bi-weekly.svg";

// const paymentPlanData = [
//   {
//     type: "Full Payment",
//     icon: FullIcon,
//     details:
//       "Pay the full program fee upfront and focus fully on your learning",
//   },
//   {
//     type: "2-Part Installment ",
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
//   {
//     id: 1,
//     text: "Payment Completion: All fees must be fully paid before th program starts, unless you're on an approved payment plan",
//   },
//   {
//     id: 2,
//     text: "Seat Reservation: An initial deposit of N100,000 is required to secure your spot",
//   },
//   {
//     id: 3,
//     text: "Refunds and Deferrals: All payments are non-refundable. Deferrals are allowed only within the first week if the program and require team approval",
//   },
//   {
//     id: 4,
//     text: "Late Payments: Payments made more than 7 days after the due date may result in suspension until settled",
//   },
//   {
//     id: 5,
//     text: "Currency: All fees are in Naira and include program materials unless otherwise stated. For international participants, payments can be made in USD, GBP, or EUR. Exchanges rates will be based on the prevailing market rate at the time of payment",
//   },
// ];

// export default function RegistrationPage() {
//   return (
//     <main className="text-[#000000] pt-[80px] md:pt-[120px] px-8 pb-8 md:px-22">
//       <h1 className="text-2xl text-[#1A1A1A] text-center font-medium mb-6 md:hidden">
//         Registration
//       </h1>

//       <section className="pb-4 space-y-2">
//         <div className="flex items-center justify-between text-[#333333] text-lg md:text-3xl">
//           <span className="">Registration Fee:</span>
//           <span className="font-bold lg:text-4xl">N 200,000</span>
//         </div>

//         <p className="text-[#4D4D4D] text-xs md:text-base">
//           At Prodefied, we believe nothing should stop you from starting your
//           career in product management not even payment. That's why we offer
//           flexible options designed to fit your budget and timeline
//         </p>
//       </section>

//       <section className="py-4">
//         <h2 className="text-lg text-[#001299] font-medium pb-4 md:text-3xl">
//           Payment Plan
//         </h2>

//         <div className="flex flex-col items-center gap-12 lg:flex-row">
//           {paymentPlanData.map((detail, index) => (
//             <div key={index + 1} className="flex flex-col items-start md:w-md">
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
//           <Link to="/payment-registration" className="bg-[#000F84] text-white text-center py-3 px-8 rounded-md w-full">Proceed</Link>
//           <Link to="/program-details" className="bg-[#E4E4E4] text-[#1A1A1A] text-center py-3 px-8 rounded-md w-full">View Program Details</Link>
//         </div>
//       </section>

//       <section className="py-4">
//         <h3 className="text-[#001299] text-base py-4 md:text-2xl">Payment Policy</h3>

//         <p className="text-[#4D4D4D] text-sm md:text-lg pb-2">If you register for Prodefied, you agree to the following:</p>
//         <ol>
//           {listItems.map((li) => (
//               <li key={li.id} className="mb-2 md:mb-4">
//                 <span>{li.id}. </span>
//                 <span>{li.text}</span>
//               </li>
//           ))}
//         </ol>
//       </section>
//     </main>
//   );
// }
