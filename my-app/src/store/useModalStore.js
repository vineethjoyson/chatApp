import { create } from "zustand";

export const useModalStore = create((set) => ({
  showLogin: false,
  openLogin: () => set({ showLogin: true }),
  closeLogin: () => set({ showLogin: false }),
}));
