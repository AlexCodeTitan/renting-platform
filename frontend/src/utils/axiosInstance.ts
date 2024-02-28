import axios from "axios";
import { API_URL } from "../features/auth/authService";

const axiosInstance = axios.create({
  baseURL: `${API_URL}`, // Your API base URL
  // any other default properties
});

export default axiosInstance;

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
