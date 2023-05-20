import { create } from "zustand";

type MobileMenuStateState = {
  MobileMenuState: boolean;
  setMobileMenuState: (MobileMenuState: boolean) => void;
};

export const useMobileMenuStateState = create<MobileMenuStateState>((set) => ({
  MobileMenuState: false,
  setMobileMenuState: (MobileMenuState) => set({ MobileMenuState }),
}));
