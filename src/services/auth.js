import axios from "axios";

const API_URL = "http://localhost:8000/api/users";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const Login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData, config);
  console.log(response.data);

  return response.data;
};

export const authService = {
  Login,
};
