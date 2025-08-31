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

// GET User Profile
export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  return axios.get(`${API_BASE}/profile/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


// Update User Profile
export const updateUserProfile = async (payload) => {
  const token = localStorage.getItem("token");
  return axios.put(`${API_BASE}/profile/update/`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// LOGOUT
export const logoutUser = () => {
  return axios.get(`${API_BASE}/logout/`, getAuthHeader());
};

// PAYMENT
export const initializeUserPayment = (amount, redirect_url) => {
  return axios.post(
    `${API_BASE}/initialize_user/`,
    { amount, redirect_url },
    getAuthHeader()
  );
};

export const verifyUserPayment = (reference) => {
  return axios.get(`${API_BASE}/verify_payment/?reference=${reference}`, getAuthHeader());
};

