// api.js
import axios from "axios";

// Register a new user
export const registerUser = async (data) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/register",
    data
  );
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/login",
    data
  );
  return response.data;
};
