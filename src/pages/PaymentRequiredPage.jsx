import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

export default function PaymentRequiredPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
      <FaLock className="text-red-500 text-5xl mb-4" />
      <h1 className="text-2xl font-semibold mb-2">Access Restricted</h1>
      <p className="text-gray-600 mb-6 max-w-sm">
        This page is only available to users with an active subscription or payment.  
        Please complete your payment to continue.
      </p>
      <button
        onClick={() => navigate("/registration")}
        className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition cursor-pointer"
      >
        Go to Payment Page
      </button>
    </div>
  );
}
