import { create } from "zustand";

export const viewStore = create((set) => ({
  currentView: "CheckIn",
  setView: (view) => set({ currentView: view }),
}));
