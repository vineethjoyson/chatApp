import { create } from "zustand";

export const useModalStore = create((set) => ({
  showLogin: false,
  openLogin: () => set({ showLogin: true }),
  closeLogin: () => set({ showLogin: false }),
  profileData: null,
  profileDataLoading: false,
  setProfileDataLoading: () =>
    set((state) => ({ profileDataLoading: !state.profileDataLoading })),
  setProfileData: (data) => set({ profileData: data }),
}));
