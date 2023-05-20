import { create } from "zustand";

import { createJSONStorage, devtools, persist } from "zustand/middleware";
interface IFiilter {
  Fiilter: {};
  setFiliters: any;
  filterProducts: {};
}
export const FilitersStore = (set: any) => ({
  filterProducts: {},
  setFiliters: (filters: any) =>
    set(() => ({
      filterProducts: filters,
    })),
});

const useFilitersStore = create(
  devtools(
    persist(FilitersStore, {
      name: "filiters",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);

export default useFilitersStore;
