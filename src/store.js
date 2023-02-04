import { create } from "zustand";

const useStore = create((set) => ({
  theme: "",
  setTheme: (theme) => set({ theme }),

  contactRef: {},
  setContactRef: (contactRef) => set({ contactRef }),
}));

export default useStore;
