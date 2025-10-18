// src/components/payment-registration/PaymentSuccessPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * PaymentSuccessPage
 *
 * Expects Paystack (or your payment provider) to redirect to:
 *   /payment-success?reference=REF123
 *
 * What it does:
 * - reads `reference` from URL or localStorage
 * - polls GET /api/payments/verify/?reference=REF until verified (or max tries)
 * - on success: stores applicantId & reference in localStorage and navigates to /sign-up?applicant_id=ID
 * - on failure after polling: shows friendly message and navigates to /payment-required
 *
 * Note: This calls the payments verify endpoint WITHOUT auth headers because the payment API docs show an open verify endpoint.
 * If your backend requires auth for verify, swap the axios request to use your services/api helper.
 */

export default function PaymentSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); // "verifying" | "success" | "failed"

  useEffect(() => {
    let isMounted = true;
    const params = new URLSearchParams(location.search);
    const refFromQuery = params.get("reference");
    const storedRef = localStorage.getItem("paymentReference");
    const reference = refFromQuery || storedRef;

    const MAX_TRIES = 6; // 6 tries
    const INTERVAL_MS = 5000; // 5 seconds
    let tries = 0;

    if (!reference) {
      toast.error("Missing payment reference. Redirecting to registration...");
      setTimeout(() => navigate("/registration"), 1200);
      return;
    }

    const verifyUrl = `https://prodefied-backend.onrender.com/api/payments/verify/?reference=${encodeURIComponent(
      reference
    )}`;

    async function attemptVerify() {
      try {
        const res = await axios.get(verifyUrl);
        // Expected shape (per docs):
        // { success: true, payment: { verified: true, applicant: <id>, reference: "ABC", ... } }
        const success = res?.data?.success;
        const payment = res?.data?.payment;

        if (success && payment && payment.verified) {
          const applicantId =
            payment.applicant || localStorage.getItem("applicantId");
          // store for later steps
          if (applicantId) {
            localStorage.setItem("applicantId", String(applicantId));
          }
          localStorage.setItem("paymentReference", String(reference));
          setStatus("success");
          toast.success("Payment verified. Redirecting to signup...");
          // Prefer a signup token if backend provides it: res.data.signup_token
          const signupToken = res?.data?.signup_token;
          if (signupToken) {
            navigate(`/sign-up?token=${encodeURIComponent(signupToken)}`);
          } else if (applicantId) {
            navigate(
              `/sign-up?applicant_id=${encodeURIComponent(applicantId)}`
            );
          } else {
            // fallback: go to sign-up anyway — backend must handle verification
            navigate(`/sign-up`);
          }
          return true;
        }

        return false;
      } catch (err) {
        // network or 4xx/5xx — treat as not-yet-verified and retry unless obvious failure
        console.error(
          "verify payment error:",
          err?.response || err?.message || err
        );
        // If server explicitly says verification failed, break early
        const serverMsg = err?.response?.data;
        if (
          serverMsg &&
          serverMsg?.success === false &&
          serverMsg?.message?.toLowerCase?.().includes("failed")
        ) {
          // treat as final failure
          return "final-fail";
        }
        return false;
      }
    }

    async function run() {
      let ok = false;
      // immediate first attempt
      ok = await attemptVerify();
      while (!ok && tries < MAX_TRIES) {
        tries += 1;
        await new Promise((r) => setTimeout(r, INTERVAL_MS));
        // avoid running attempts after component unmounted
        if (!isMounted) return;
        ok = await attemptVerify();
        if (ok === "final-fail") {
          break;
        }
      }

      if (!isMounted) return;

      if (!ok || ok === "final-fail") {
        setStatus("failed");
        toast.info(
          "Payment verification pending. We'll email you when it's complete."
        );
        // Friendly fallback: send to a page explaining verification pending
        setTimeout(() => navigate("/payment-required"), 1200);
      }
    }

    run();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, navigate]);

  if (status === "verifying") {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-3">Verifying payment...</h2>
          <p className="text-sm text-gray-600">
            We are checking your payment with our payments provider. This can
            take a few seconds — please don’t close this window.
          </p>
        </div>
      </main>
    );
  }

  if (status === "success") {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-3">Payment verified</h2>
          <p className="text-sm text-gray-600">
            Redirecting you to create your account…
          </p>
        </div>
      </main>
    );
  }

  // failed
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow text-center">
        <h2 className="text-xl font-semibold mb-3">Verification pending</h2>
        <p className="text-sm text-gray-600">
          We couldn't confirm your payment right now. We'll email you when
          verification completes. If you already paid, please contact support.
        </p>
        <div className="mt-4">
          <button
            onClick={() => window.location.assign("/registration")}
            className="px-4 py-2 bg-[#000F84] text-white rounded-md"
          >
            Back to registration
          </button>
        </div>
      </div>
    </main>
  );
}

// =============================================================================================

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { verifyUserPayment } from "../../services/api";
// import { useAuth } from "../../context/AuthContext";
// import { toast } from "react-toastify";

// export default function PaymentSuccess() {
//   const navigate = useNavigate();
//   const { login, user } = useAuth();

//   useEffect(() => {
//     const reference = new URLSearchParams(window.location.search).get("reference");

//     if (!reference) {
//       toast.error("Missing payment reference.");
//       navigate("/payment-registration");
//       return;
//     }

//     verifyUserPayment(reference)
//       .then(() => {
//         const updatedUser = { ...user, hasPaid: true };
//         login(updatedUser, localStorage.getItem("token"));
//         toast.success("✅ Payment verified successfully!");
//         navigate("/portal");
//       })
//       .catch(() => {
//         toast.error("❌ Payment verification failed.");
//         navigate("/payment-registration");
//       });
//   }, [navigate, login, user]);

//   return (
//     <div className="p-8 text-center">
//       <h1 className="text-2xl font-bold mb-4">Verifying Payment...</h1>
//       <p>Please wait while we confirm your transaction.</p>
//     </div>
//   );
// }
