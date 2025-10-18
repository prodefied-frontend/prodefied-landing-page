// src/services/api.js
import axios from "axios";

const API_BASE = "https://prodefied-backend.onrender.com/api";

// Helper to get token from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };
};

/* AUTH / USER */
export const signupUser = (data, config) => {
  return axios.post(`${API_BASE}/signup/`, data, config);
};

export const loginUser = (payload) => {
  return axios.post(`${API_BASE}/login/`, payload);
};

export const googleAuth = (payload) => {
  return axios.post(`${API_BASE}/authenticate/`, payload);
};

export const getUserProfile = () => {
  return axios.get(`${API_BASE}/profile/`, getAuthHeader());
};

export const updateUserProfile = (payload) => {
  return axios.put(`${API_BASE}/profile/update/`, payload, getAuthHeader());
};

export const logoutUser = () => {
  return axios.get(`${API_BASE}/logout/`, getAuthHeader());
};

export const requestPasswordReset = (email) => {
  return axios.post(`${API_BASE}/reset-password/`, { email });
};

/* PAYMENTS  */
const PAY_BASE = `${API_BASE}/payments`;

// 1) Register applicant
export const registerApplicant = (payload) => {
  // payload: { first_name, email }
  return axios.post(`${PAY_BASE}/register/`, payload);
};

// 2) Update applicant
export const updateApplicant = (applicantId, payload) => {
  return axios.patch(`${PAY_BASE}/applicant/${applicantId}/update/`, payload);
};

// 3) Initialize payment
export const initializePayment = (payload) => {
  // payload: { applicant_id, payment_type }
  return axios.post(`${PAY_BASE}/initialize/`, payload);
};

// 4) Verify payment
export const verifyPayment = (reference) => {
  return axios.get(`${PAY_BASE}/verify/?reference=${encodeURIComponent(reference)}`);
};
