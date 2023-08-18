import { create } from 'zustand';

export const sidebarStore = create((set) => ({
  isDefaultSidebarShown: false,
  setIsDefaultSidebarShown: (isShown) =>
    set({ isDefaultSidebarShown: isShown }),
}));
