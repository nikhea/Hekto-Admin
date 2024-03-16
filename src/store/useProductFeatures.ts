// @ts-nocheck

import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface IFeatures {
  features: string[];
}

interface IFeaturesStore {
  features: IFeatures[];
  setFeatures: (newFeatures: IFeatures[]) => void;
  addFeatures: (features: IFeatures) => void;
  removeFeatures: (index: number) => void;
  clearFeatures: () => void;
}

export const useFeaturesStore = create<IFeaturesStore>()(
  devtools(
    persist(
      (set) => {
        const initialFeaturesStore: IFeaturesStore[] = [];
        return {
          features: initialFeaturesStore,
          setFeatures: (newFeatures: IFeatures[]) => {
            set({ features: newFeatures });
          },
          addFeatures: (features: IFeatures) => {
            set((state) => ({ features: [...state.features, features] }));
          },
          removeFeatures: (index: number) => {
            set((state) => ({
              features: state.features.filter((_, i) => i !== index),
            }));
          },
          clearFeatures: () => {
            set({ features: [] });
          },
        };
      },
      {
        name: "Features-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
