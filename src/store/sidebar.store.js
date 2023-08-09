import { create } from "zustand";

export const sidebarStore = create((set) => ({
  isSidebarShown: false,
  setIsSidebarShown: (isShown) => set({ isSidebarShown: isShown }),
}));
