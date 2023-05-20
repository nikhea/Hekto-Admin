import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

type viewState = {
  gridStyle: boolean;
  setGridStyle: (gridStyle: boolean) => void;
};

// export const useViewState = create<viewState>((set) => ({
//   gridStyle: true,
//   setGridStyle: (gridStyle) => set({ gridStyle }),
// }));
export const useViewState = create<viewState>()(
  devtools(
    persist(
      (set) => ({
        gridStyle: true,
        setGridStyle: (gridStyle) => set({ gridStyle }),
      }),
      {
        name: "viewState-storage", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);
