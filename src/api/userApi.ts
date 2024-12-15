import axios from "axios";
import { useAuthStore } from "../store/authStore";

const userApi = axios.create({
  baseURL: "http://13.61.27.234/wp-json/wp/v2",
});

userApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getUserData = async () => {
  const response = await userApi.get("/users/me");
  return response.data;
};
