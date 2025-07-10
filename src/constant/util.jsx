import axios from "axios";

export const authenticateWithBackend = async (idToken) => {
  try {
    const response = await axios.post(
      "https://prodefied-backend.onrender.com/api/auth/authenticate/",
      {
        token: idToken,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data.user;
  } catch (error) {
    console.error(
      "Authentication error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
