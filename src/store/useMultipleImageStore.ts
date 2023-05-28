import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface Image {
  asset_id: any;
  secure_url: any;
  thumbnail_url: any;
  public_id: any;
}

type ImageDataState = {
  imageData: Image[];
  addImage: (image: any) => void;
  removeImage: (image: Image) => void;
  clearStore: () => void;
};

export const useMultiImageStore = create<ImageDataState>()(
  devtools(
    persist(
      (set) => ({
        imageData: [],
        addImage: (image) =>
          set((state) => ({ imageData: [...state.imageData, image] })),
        removeImage: (image) =>
          set((state) => ({
            imageData: state.imageData.filter(
              (img) => img.asset_id !== image.asset_id
            ),
          })),
        clearStore: () => set({ imageData: [] }),
      }),
      {
        name: "multiImageStore-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
