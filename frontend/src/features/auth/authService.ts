import axios from "axios";
import { User, RegisterData } from "./types";

const API_URL = "";

const register = async (userData: RegisterData): Promise<User> => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
