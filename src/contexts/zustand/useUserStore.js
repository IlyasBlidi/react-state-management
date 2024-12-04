import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  login: () => set({ user: { name: "ilyas", email: "ilyas@gmail.com" } }),
  logout: () => set({ user: null }),
}));
