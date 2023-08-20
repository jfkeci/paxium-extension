import { create } from 'zustand';

export const checkInStore = create((set) => ({
  currentNote: null,
  setCurrentNote: (note) => set({ currentNote: note }),
}));
