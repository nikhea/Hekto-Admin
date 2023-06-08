import { create } from "zustand";

import { createJSONStorage, devtools, persist } from "zustand/middleware";
interface Image {
  asset_id: any;
  secure_url: any;
  thumbnail_url: any;
  public_id: any;
}

type profileImageDataState = {
  profileImageData: Image | undefined;
  setProfileImageData: (data: Image | undefined) => void;
  clearStore: () => void;
};
// const ImageDataStore = create<profileImageDataState>((set) => ({
//   profileImageData: undefined,
//   setProfileImageData: (data) => set({ profileImageData: data }),
//   clearStore: () => set({ profileImageData: undefined }),
// }));

export const useProfileImageStore = create<profileImageDataState>()(
  devtools(
    // persist(
    (set) => ({
      profileImageData: undefined,
      setProfileImageData: (data) => set({ profileImageData: data }),
      clearStore: () => set({ profileImageData: undefined }),
    })
    //   {
    //     name: "SingleImageStore-storage",
    //     storage: createJSONStorage(() => sessionStorage),
    //   }
    // )
  )
);
