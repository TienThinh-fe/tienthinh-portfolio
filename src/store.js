import { create } from "zustand";

const useStore = create((set) => ({
  theme: "",
  setTheme: (theme) => set({ theme }),

  contactRef: {},
  setContactRef: (contactRef) => set({ contactRef }),

  workRef: {},
  setWorkRef: (workRef) => set({ workRef }),
}));

export default useStore;
