import { create } from "zustand";

type CartDrawerState = {
  CartDrawer: boolean;
  setCartDrawer: (CartDrawer: boolean) => void;
};

export const useCartDrawerState = create<CartDrawerState>((set) => ({
  CartDrawer: false,
  setCartDrawer: (CartDrawer) => set({ CartDrawer }),
}));
