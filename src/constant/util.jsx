import axios from "axios";

export const authenticateWithBackend = async (idToken) => {
  const response = await axios.post(
    "https://prodefied-backend.onrender.com/api/auth/authenticate/",
    { token: idToken },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data.user;
};
