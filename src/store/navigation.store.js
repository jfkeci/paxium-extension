import { create } from "zustand";

export const navigationStore = create((set) => ({
  currentView: "Dashboard",
  setView: (view) => set({ currentView: view }),
}));
