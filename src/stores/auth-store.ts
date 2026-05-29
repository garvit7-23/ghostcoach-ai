import { create } from "zustand";

import { AuthUser } from "@/types/auth";

type AuthStore = {
  user: AuthUser | null;

  isAuthenticated: boolean;

  setUser: (user: AuthUser) => void;

  logout: () => void;
};

export const useAuthStore =
  create<AuthStore>((set) => ({
    user: null,

    isAuthenticated: false,

    setUser: (user) =>
      set({
        user,
        isAuthenticated: true,
      }),

    logout: () =>
      set({
        user: null,
        isAuthenticated: false,
      }),
  }));