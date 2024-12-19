import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../types/type";
import Cookies from "js-cookie";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null; // Access token
  user: User | null;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  checkAuth: () => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      user: null,

      // Check authentication
      checkAuth: () => {
        // Check for token in sessionStorage (access token)
        const token = sessionStorage.getItem("accessToken");
        if (token) {
          set({ isAuthenticated: true, token });
        } else {
          const refreshToken = Cookies.get("refreshToken");
          if (refreshToken) {
            console.warn(
              "Refresh token exists; consider refreshing access token."
            );
          }
        }
      },

      // Set access token
      setToken: (token) => {
        if (token) {
          sessionStorage.setItem("accessToken", token); // Store access token securely
          set({ token, isAuthenticated: true });
        } else {
          sessionStorage.removeItem("accessToken"); // Clear access token
          set({ token: null, isAuthenticated: false });
        }
      },

      // Set user information
      setUser: (user) => {
        set({ user });
      },

      // Logout function
      logOut: () => {
        sessionStorage.removeItem("accessToken");
        Cookies.remove("refreshToken"); // Optional: Remove refresh token
        localStorage.removeItem("auth-storage");
        set({ token: null, isAuthenticated: false, user: null });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }), // Persist only non-sensitive data
    }
  )
);
