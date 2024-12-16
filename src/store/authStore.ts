import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../types/type";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  checkAuth: () => void;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      user: null,
      checkAuth: () => {
        // Check for token in localStorage
        const token = localStorage.getItem("token");
        // TODO: add token to sessionStorage or Cookie

        if (token) {
          set({ isAuthenticated: true, token });
        }
      },
      setToken: (token) => {
        set({ token, isAuthenticated: token !== null });
      },
      setUser: (user) => {
        set({ user });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
