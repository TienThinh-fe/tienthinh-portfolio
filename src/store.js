import { create } from "zustand";

const useStore = create((set) => ({
  theme: "",
  setTheme: (theme) => set({ theme }),
}));

export default useStore;
