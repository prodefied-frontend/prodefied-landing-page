import { useState } from "react";
import { Link } from "react-router-dom";
import SignupLeftSection from "../components/SignupLeftSection";
import Input from "../components/CustomInput"; // same custom input used in signup/login

export default function PasswordResetPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Hook this up with backend reset password API later
    console.log("Reset password request for:", email);
  };

  return (
    <div className="w-full h-screen flex">
      {/* LEFT SECTION */}
      <SignupLeftSection />

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-lg px-6 py-4">
          <div className="text-[#FF9D00] text-4xl font-bold mb-6 lg:hidden">
            <Link to="/">Prodefied</Link>
          </div>
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-900">Verification</h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your email to receive a verification link
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-4"
            />

            <button
              type="submit"
              className="w-full bg-[#000F84] text-white py-2 rounded-md font-medium hover:bg-blue-900 transition cursor-pointer"
            >
              Continue
            </button>
          </form>

          {/* Back to login */}
          <p className="text-sm text-center mt-4">
            Remember your password?{" "}
            <Link to="/login" className="text-blue-700 font-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import SignupLeftSection from "../components/SignupLeftSection";

// export default function PasswordResetPage() {
//   const [email, setEmail] = useState("");

//   return (
//     <div className="w-full h-screen flex">
//       {/* LEFT SECTION */}
//       <SignupLeftSection />

//       {/* RIGHT SECTION */}
//       <main className="flex-1 flex flex-col justify-center items-center px-6 md:px-12">
//         <div className="w-full max-w-md">
//           {/* Brand */}
//           <div className="text-[#FF9D00] text-4xl font-bold mb-6 lg:hidden">
//             <Link to="/">Prodefied</Link>
//           </div>

//           {/* Title */}
//           <h1 className="text-[#332F2F] text-3xl md:text-4xl font-semibold">
//             Verification
//           </h1>

//           {/* Subtitle */}
//           <p className="text-[#4D4D4D] text-lg md:text-2xl py-6">
//             Enter your email here to receive a verification link
//           </p>

//           {/* Form */}
//           <form className="flex flex-col gap-6">
//             <div className="flex flex-col">
//               <label htmlFor="email" className="text-[#4D4D4D] mb-1">
//                 Email<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border border-[#999999] rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#000F84]"
//               />
//             </div>

//             <button
//               type="submit"
//               className="cursor-pointer w-full bg-[#000F84] text-white rounded-md py-3 font-medium hover:bg-[#000c67] transition-colors"
//             >
//               Continue
//             </button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }

// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import SignupLeftSection from "../components/SignupLeftSection";

// // export default function PasswordResetPage() {
// //   const [email, setEmail] = useState("");

// //   return (
// //     <>
// //       <div className="w-full h-screen  flex">
// //         <SignupLeftSection />

// //         {/* RESET PASSWORD PAGE */}
// //         <main className="p-8 py-16">
// //           <div className="text-[#FF9D00] text-4xl font-bold mb-6">
// //             <Link to="/">Prodefied</Link>
// //           </div>

// //           <h1 className="text-[#332F2F] text-3xl md:text-4xl">Verification</h1>

// //           <p className=" text-[#4D4D4D] text-lg md:text-2xl py-6">
// //             Enter your email here to receive a verification link
// //           </p>

// //           <form>
// //             <div className="w-full flex flex-col gap-4">
// //               <div className="flex flex-col">
// //                 <label htmlFor="email" className="text-[#4D4D4D]">
// //                   Email<span className="text-red-500">*</span>
// //                 </label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   name="email"
// //                   placeholder="Enter your email address"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   className="border-[1px] border-[#999999] rounded-md py-2 px-4"
// //                 />
// //               </div>

// //               <button className="bg-[#000F84] text-white rounded-md py-2 cursor-pointer hover:bg-[#000c67]">
// //                 Continue
// //               </button>
// //             </div>
// //           </form>
// //         </main>
// //       </div>
// //     </>
// //   );
// // }
