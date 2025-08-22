// src/services/payments.js
// Central place for payment-related calls. Toggle mock mode with VITE_MOCK_PAYMENTS=true

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "";
const MOCK = import.meta.env.VITE_MOCK_PAYMENTS === "true";

function timeout(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

/**
 * Create a payment reference on backend for Paystack or return mock reference.
 * Backend should create the Paystack transaction and return {reference, amount, email}
 */
export async function createPaystackTransaction({ amount, email, metadata }) {
  if (MOCK) {
    await timeout(400);
    return {
      success: true,
      data: { reference: `MOCK-PAY-${Date.now()}`, amount, email },
    };
  }

  const res = await fetch(`${API_BASE}/payments/paystack/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, email, metadata }),
  });

  if (!res.ok) throw new Error("Failed to create paystack transaction");
  const json = await res.json();
  return json;
}

/**
 * Verify Paystack transaction by reference via backend
 * Backend should verify with Paystack secret key and return verification status
 */
export async function verifyPaystackTransaction(reference) {
  if (MOCK) {
    await timeout(600);
    return { success: true, data: { reference, status: "success" } };
  }

  const res = await fetch(`${API_BASE}/payments/paystack/verify?reference=${encodeURIComponent(reference)}`);
  if (!res.ok) throw new Error("Failed to verify transaction");
  return res.json();
}

/**
 * Request bank transfer details from backend. Backend may create a payment record and return bank details and a reference.
 */
export async function createBankTransfer({ amount, email, metadata }) {
  if (MOCK) {
    await timeout(400);
    return {
      success: true,
      data: {
        reference: `MOCK-BANK-${Date.now()}`,
        bankName: "First Bank of Nigeria",
        accountName: "Prodefied",
        accountNumber: "906712151226",
        amount,
      },
    };
  }

  const res = await fetch(`${API_BASE}/payments/bank/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, email, metadata }),
  });

  if (!res.ok) throw new Error("Failed to create bank transfer");
  return res.json();
}

/**
 * Notify backend that user says they've paid via bank transfer.
 * Backend will then mark the payment record as 'pending review' and eventually verify.
 */
export async function notifyBankPayment({ reference, payerName, payerPhone, payerEmail }) {
  if (MOCK) {
    await timeout(400);
    return { success: true };
    // You can simulate verification result later by calling verify endpoint
  }

  const res = await fetch(`${API_BASE}/payments/bank/notify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reference, payerName, payerPhone, payerEmail }),
  });

  if (!res.ok) throw new Error("Failed to notify bank payment");
  return res.json();
}

/**
 * Utility to trigger Paystack inline (client-side). We still recommend backend creates / returns reference
 * so we don't expose amount mutation on client. This function returns the reference when the popup completes.
 */
export function openPaystackInline({ key = PAYSTACK_KEY, email, amountKobo, reference, onSuccess, onClose, metadata = {} }) {
  // amountKobo expected in kobo (Naira * 100)
  if (typeof window === "undefined") throw new Error("Window is required for Paystack inline");
  if (!window.PaystackPop) {
    console.warn("Paystack script not loaded. You should include Paystack inline script in index.html");
    onClose && onClose();
    return;
  }

  window.PaystackPop.setup({
    key,
    email,
    amount: amountKobo,
    ref: reference,
    metadata,
    onClose: function () {
      onClose && onClose();
    },
    callback: function (response) {
      // response.reference
      onSuccess && onSuccess(response);
    },
  }).openIframe();
}
