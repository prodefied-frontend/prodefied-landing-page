// services/api.js
import axios from "axios";

const API_BASE = "https://prodefied-backend.onrender.com/api";

// Helper to get token from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// SIGN UP
export const signupUser = (data, config) => {
  return axios.post(`${API_BASE}/signup/`, data, config);
};

// LOGIN
export const loginUser = (payload) => {
  return axios.post(`${API_BASE}/login/`, payload);
};

// LOGOUT
export const logoutUser = () => {
  return axios.get(`${API_BASE}/logout/`);
};

// PAYMENT
export const initializeUserPayment = (amount) => {
  const token = localStorage.getItem("token");
  return axios.post(
    `${API_BASE}/initialize_user/`,
    { amount },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const verifyUserPayment = (reference) => {
  return axios.get(`${API_BASE}/verify_payment/?reference=${reference}`, getAuthHeader());
};
