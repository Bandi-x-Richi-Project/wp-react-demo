import axios from "axios";
import { useAuthStore } from "../store/authStore";

const userApi = axios.create({
  baseURL: "https://admin.buddypest.hu/wp-json/wp/v2",
});

userApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getUserData = async () => {
  const response = await userApi.get("/users/me?context=edit");
  return response.data;
};
