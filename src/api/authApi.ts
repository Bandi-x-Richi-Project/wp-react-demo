// src/api/authApi.ts
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { JwtResponse } from "../lib/types";

// Define types for login credentials and API response
interface LoginCredentials {
  username: string;
  password: string;
}

// Create an Axios instance
const api = axios.create({
  baseURL: "https://13.61.27.234.nip.io/wp-json", // Replace with your API base URL
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

// Validate token function
export const validateToken = async (): Promise<boolean> => {
  try {
    const response = await api.post("/jwt-auth/v1/token/validate");
    return response.status === 200; // Token is valid if status is 200
  } catch (error) {
    console.error("Token validation failed", error);
    return false; // Token is invalid
  }
};

export default api;
