import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface Photo {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  original_filename: string;
  path: string;
  thumbnail_url: string;
}

interface PhotoStore {
  photos: Photo[];
  setPhotos: (newPhotos: Photo[]) => void;
  addPhoto: (photo: Photo) => void;
  removePhoto: (assetId: string) => void;
  clearPhotos: () => void;
}

export const usePhotoStore = create<PhotoStore>()(
  devtools(
    persist(
      (set) => {
        const initialPhotosArray: Photo[] = [];
        return {
          photos: initialPhotosArray,
          setPhotos: (newPhotos) => {
            set({ photos: newPhotos });
          },
          addPhoto: (photos: any) => {
            set((state) => ({ photos: [...state.photos, photos] }));
          },
          // addImage: (image) =>
          // set((state) => ({ imageData: [...state.imageData, image] })),
          removePhoto: (assetId) => {
            set((state) => ({
              photos: state.photos.filter(
                (photo) => photo.asset_id !== assetId
              ),
            }));
          },
          clearPhotos: () => {
            set({ photos: [] });
          },
        };
      },
      {
        name: "PhotoStore-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

// export const usePhotoStore = create<PhotoStore>()(
//     devtools(
//       persist(
//         (set) => {
//           // Initialize the photos array from session storage or set it to an empty array
//           // const initialPhotos = sessionStorage.getItem("photos");
//           // const initialPhotosArray: Photo[] = initialPhotos
//           //   ? JSON.parse(initialPhotos)
//           //   : [];
//           const initialPhotosArray: Photo[] = [];

//           return {
//             photos: initialPhotosArray,

//             setPhotos: (newPhotos) => {
//               set({ photos: newPhotos });
//               // Update session storage whenever photos are set
//               // sessionStorage.setItem("photos", JSON.stringify(newPhotos));
//             },

//             addPhoto: (photos: any) => {
//               set((state) => ({ photos: [...state.photos, ...photos] }));
//               // Update session storage whenever photos are added
//               // sessionStorage.setItem(
//               //   "photos",
//               //   JSON.stringify([...initialPhotosArray, ...photos])
//               // );
//             },

//             removePhoto: (assetId) => {
//               set((state) => ({
//                 photos: state.photos.filter(
//                   (photo) => photo.asset_id !== assetId
//                 ),
//               }));
//               // // Update session storage whenever a photo is removed
//               // sessionStorage.setItem(
//               //   "photos",
//               //   JSON.stringify(
//               //     initialPhotosArray.filter((photo) => photo.asset_id !== assetId)
//               //   )
//               // );
//             },

//             clearPhotos: () => {
//               set({ photos: [] });
//               sessionStorage.removeItem("photos");
//             },
//           };
//         },
//         {
//           name: "PhotoStore-storage",
//           // Use session storage as the storage medium
//           storage: createJSONStorage(() => sessionStorage),
//         }
//       )
//     )
//   );
