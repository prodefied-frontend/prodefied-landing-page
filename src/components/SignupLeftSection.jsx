import { Link, useLocation } from "react-router-dom";
import signuplogo from "../assets/images/signuplogo.png";

/**
 * SignupLeftSection
 * - Shows helper text that reflects whether the current user/session can actually sign up.
 * - Checks for signup_token OR applicant_id in URL OR applicantId in localStorage.
 */
const SignupLeftSection = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/sign-up";

  const search = new URLSearchParams(location.search);
  const signupToken = search.get("token");
  const applicantFromQuery = search.get("applicant_id");
  const storedApplicant =
    typeof window !== "undefined" ? localStorage.getItem("applicantId") : null;

  // if any of these exist, user *can* reach sign-up (frontend-side)
  const canSignUp = Boolean(
    signupToken || applicantFromQuery || storedApplicant
  );

  return (
    <div className="relative w-1/2 bg-[#000F84] hidden lg:flex items-center justify-center overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-[-30px] right-[-30px] w-[100px] h-[100px] bg-[#FF9D00] rounded-full z-0"></div>
      <div className="absolute bottom-[-30px] left-[-30px] w-[100px] h-[100px] bg-[#FF9D00] rounded-full z-0"></div>

      {/* Blurred Background Image */}
      <img
        src={signuplogo}
        alt="Background model"
        className="absolute w-[300px] bottom-[-228px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover object-center opacity-80 z-0"
      />

      {/* Glassmorphism Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-xl p-10 max-w-[420px] text-white">
        <h2 className="text-sm mb-2">
          Welcome to{" "}
          <span className="text-[#FF9D00] text-lg font-bold">
            <Link to="/">Prodefied</Link>
          </span>
        </h2>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Ready to launch your career in Product Management?
        </h1>
        <p className="text-xs mb-6">
          Learn. Build. Ship. With real teams. Real products. Real impact.
        </p>

        {/* Helper text: dynamic based on whether sign-up is allowed by client-side signal */}
        <p className="text-sm mt-[200px]">
          {canSignUp ? (
            isSignUpPage ? (
              <>
                Already have an account?{" "}
                <Link to="/login">
                  <span className="underline cursor-pointer">Sign in</span>
                </Link>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <Link to="/sign-up">
                  <span className="underline cursor-pointer">Sign Up</span>
                </Link>
              </>
            )
          ) : (
            // user can't sign up yet (no applicant / token) — point them to registration
            <>
              To create an account, first complete{" "}
              <Link to="/registration" className="underline cursor-pointer">
                Registration & Payment
              </Link>
              . You will be redirected to sign up after payment.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default SignupLeftSection;

// ==========================================================================================

// import { Link, useLocation } from "react-router-dom";
// import signuplogo from "../assets/images/signuplogo.png";

// const SignupLeftSection = () => {
//   const location = useLocation();
//   const isSignUpPage = location.pathname === "/sign-up";

//   return (
//     <div className="relative w-1/2 bg-[#000F84] hidden lg:flex items-center justify-center overflow-hidden">
//       {/* Top-right circle */}
//       <div className="absolute top-[-30px] right-[-30px] w-[100px] h-[100px] bg-[#FF9D00] rounded-full z-0"></div>
//       {/* Bottom-left circle */}
//       <div className="absolute bottom-[-30px] left-[-30px] w-[100px] h-[100px] bg-[#FF9D00] rounded-full z-0"></div>

//       {/* Blurred Background Image */}
//       <img
//         src={signuplogo}
//         alt="Background model"
//         className="absolute w-[300px] bottom-[-228px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover object-center opacity-80 z-0"
//       />

//       {/* Glassmorphism Card */}
//       <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-xl p-10 max-w-[420px] text-white">
//         <h2 className="text-sm mb-2">
//           Welcome to{" "}
//           <span className="text-[#FF9D00] text-lg font-bold">
//             <Link to="/">Prodefied</Link>
//           </span>
//         </h2>
//         <h1 className="text-3xl font-bold mb-4 leading-tight">
//           Ready to launch your career in Product Management?
//         </h1>
//         <p className="text-xs mb-6">
//           Learn. Build. Ship. With real teams. Real products. Real impact.
//         </p>

//         {/* Toggle Helper Text */}
//         <p className="text-sm mt-[200px]">
//           {isSignUpPage ? (
//             <>
//               Already have an account?{" "}
//               <Link to="/login">
//                 <span className="underline cursor-pointer">Sign in</span>
//               </Link>
//             </>
//           ) : (
//             <>
//               Don't have an account?{" "}
//               <Link to="/sign-up">
//                 <span className="underline cursor-pointer">Sign Up</span>
//               </Link>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupLeftSection;
