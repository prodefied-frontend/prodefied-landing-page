export default function MakePaymentPopUp({ close, proceed }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-md">
        <button
          className="absolute top-3 right-3 text-gray-500 text-xl"
          onClick={close}
        >
          ✕
        </button>

        <h1 className="text-lg font-semibold mb-4">Select Payment Method</h1>

        <span className="block bg-[#E5E8FF] text-[#4D4D4D] p-2 rounded text-sm">
          Amount to be paid
        </span>

        <span className="block text-lg font-bold mt-1 mb-4">N 150,000</span>

        <div className="mb-3">
          <label
            htmlFor="virtual-card"
            className="text-sm font-medium mb-1 block"
          >
            Pay securely with your virtual card
          </label>
          <div className="flex items-center justify-between gap-3 p-3 border rounded-md">
            <input type="radio" name="payment-method" id="virtual-card" />
            <img src="/paystack.svg" alt="Paystack Icon" className="h-6" />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="bank-transfer"
            className="text-sm font-medium mb-1 block"
          >
            Direct transfer to local bank
          </label>
          <div className="flex items-center justify-between gap-3 p-3 border rounded-md border-[#CBCBCB]">
            <input type="radio" name="payment-method" id="bank-transfer" />
            <img src="/firstbank.svg" alt="Firstbank Icon" className="h-6" />
          </div>
        </div>

        <button
          className="w-full bg-[#000F84] text-white py-2 rounded hover:bg-[#0018cc] transition"
          onClick={proceed}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
