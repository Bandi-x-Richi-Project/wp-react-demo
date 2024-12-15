// src/api/authApi.ts
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { JwtResponse } from "../types/type";

// Define types for login credentials and API response
interface LoginCredentials {
  username: string;
  password: string;
}

// Create an Axios instance
const api = axios.create({
  baseURL: "http://13.61.27.234/wp-json", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Login function
export const login = async (
  credentials: LoginCredentials
): Promise<JwtResponse> => {
  try {
    const response = await api.post("/jwt-auth/v1/token", credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

// TODO: Login validation

export default api;
