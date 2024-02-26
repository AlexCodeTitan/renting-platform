import axios from "axios";
import { User, RegisterData } from "./authTypes";

export const API_URL = "";

const register = async (userData: RegisterData): Promise<User> => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data) {
    return response.data;
  } else {
    throw new Error("Failed to login");
  }
};

const authService = {
  register,
  login,
};

export default authService;
