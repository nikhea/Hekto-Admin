import { create } from "zustand";

import { createJSONStorage, devtools, persist } from "zustand/middleware";
interface Image {
  asset_id: any;
  secure_url: any;
  thumbnail_url: any;
  public_id: any;
}

type ImageDataState = {
  newImageData: Image | undefined | null;
  setNewImageData: (data: Image | undefined | null) => void;
  clearStore: () => void;
};

export const useSingleImageStore = create<ImageDataState>()(
  devtools(
    persist(
      (set) => ({
        newImageData: null,
        setNewImageData: (data) => set({ newImageData: data }),
        clearStore: () => set({ newImageData: null }),
      }),
      {
        name: "SingleImageStore-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
// const ImageDataStore = create<ImageDataState>((set) => ({
//   newImageData: null,
//   setNewImageData: (data) => set({ newImageData: data }),
//   clearStore: () => set({ newImageData: null }),
// }));
