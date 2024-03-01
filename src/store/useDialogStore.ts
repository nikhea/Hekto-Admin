// dialogStore.ts
import { create } from "zustand";

interface DialogState {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const useDialogStore = create<DialogState>((set) => ({
  open: false,
  setOpen: (isOpen) => set({ open: isOpen }),
}));

export default useDialogStore;
