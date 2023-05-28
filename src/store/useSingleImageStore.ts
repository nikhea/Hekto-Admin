import { create } from "zustand";

import { createJSONStorage, devtools, persist } from "zustand/middleware";
interface Image {
  asset_id: any;
  secure_url: any;
  thumbnail_url: any;
  public_id: any;
}

type ImageDataState = {
  newImageData: Image | undefined;
  setNewImageData: (data: Image | undefined) => void;
  clearStore: () => void;
};
const ImageDataStore = create<ImageDataState>((set) => ({
  newImageData: undefined,
  setNewImageData: (data) => set({ newImageData: data }),
  clearStore: () => set({ newImageData: undefined }),
}));

export const useSingleImageStore = create<ImageDataState>()(
  devtools(
    persist(
      (set) => ({
        newImageData: undefined,
        setNewImageData: (data) => set({ newImageData: data }),
        clearStore: () => set({ newImageData: undefined }),
      }),
      {
        name: "SingleImageStore-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
