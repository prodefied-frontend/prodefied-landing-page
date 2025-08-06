import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PaymentConfirmation({ close }) {
  const [paymentSent, setPaymentSent] = useState(false);
  const [copiedField, setCopiedField] = useState(null); // To track copied field
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    setPaymentSent(true);

    setTimeout(() => {
      setPaymentSent(false);
      close();
      navigate('/');
    }, 2000);
  };

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500); // Reset after 1.5s
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
            <h1 className="text-lg font-semibold mb-2">Payment Method</h1>
            <p className="text-sm mb-4">Bank Transfer</p>

            <div className="bg-[#E5E8FF] p-4 rounded mb-4 text-[#333333] text-sm">
              <div className="flex gap-3 items-start">
                <img src="/notify.svg" alt="Warn Icon" className="w-6 h-6" />
                <div>
                  <h2 className="text-[#0018CC] font-semibold">
                    Payment Instructions
                  </h2>
                  <p>
                    Please double check that you're making payment to the
                    correct account details provided below. Transactions are
                    non-refundable.{" "}
                    <span className="text-[#0929FF] underline cursor-pointer">
                      Read more about our payment policy here
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block bg-[#FFEBCC] p-2 px-4 text-[#4D4D4D] text-sm rounded">
                Amount to be paid
              </div>
              <div className="font-bold text-lg md:text-3xl mt-1 mb-4">
                N 150,000
              </div>
            </div>

            {/* Copyable fields */}
            <div className="space-y-3 mb-4">
              {[
                {
                  label: "Bank Name",
                  value: "First Bank of Nigeria",
                  field: "bank",
                },
                {
                  label: "Account Name",
                  value: "Prodefied",
                  field: "account",
                },
                {
                  label: "Account Number",
                  value: "906712151226",
                  field: "number",
                },
              ].map(({ label, value, field }) => (
                <div key={field}>
                  <p className="text-sm font-medium">{label}</p>
                  <div className="flex justify-between items-center border p-2 rounded">
                    <span>{value}</span>
                    <div
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={() => handleCopy(value, field)}
                    >
                      <img
                        src="/copy-icon.svg"
                        alt="Copy Icon"
                        className="w-5"
                      />
                      {copiedField === field && (
                        <span className="text-xs text-green-600">Copied!</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleConfirmPayment}
              className="w-full bg-[#000F84] text-white py-2 rounded hover:bg-[#0018cc] transition cursor-pointer"
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
