import { useEffect, useRef, useState, FC } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMultiImageStore } from "../store/useMultipleImageStore";
import { usePhotoStore } from "../store/usePhotosStore";
export type ISingleImage = {
  widgetRef: any;
  foldername: string;
};
const useMultipleImage = (
  widgetRef: any,
  foldername: any,
  mutationFunction?: any
) => {
  const cloudinaryRef = useRef();
  const { photos, addPhoto } = usePhotoStore();

  // const { imageData, addImage } = useMultiImageStore();

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(mutationFunction, {
    onMutate: () => {},
    onSettled: () => {
      queryClient.invalidateQueries([""]);
    },
  });
  useEffect(() => {
    //@ts-ignore
    cloudinaryRef.current = window?.cloudinary; //@ts-ignore
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        folder: foldername,
        // clientAllowedFormats: ["webp", "png", "jpeg"],
        showPoweredBy: false,
        maxFileSize: 1500000,
        // multiple: fals,
        maxImageFileSize: 1500000,
        maxFiles: 5,
        max_files: 5,
      },
      function (error: any, result: any) {
        if (!error && result && result.event === "success") {
          return "please add an image";
        } else {
          if (
            result?.data?.info?.files[0]?.uploadInfo !== null ||
            result?.data?.info?.files[0]?.uploadInfo !== undefined
          ) {
            let images = result?.data?.info?.files;
            if (images !== undefined || images.length >= 0 || images !== null) {
              const uploadInfoArray = [];
              for (let i = 0; i < images.length; i++) {
                const uploadInfo = images[i].uploadInfo;
                // uploadInfoArray.push();
                // addImage(uploadInfo);
                console.log(uploadInfo);
                addPhoto(uploadInfo);
              }
            }
          }
        }
      }
    );
  }, [widgetRef, photos, addPhoto]);
};

// [widgetRef, imageData, addImage]);
export default useMultipleImage;
// const { url, asset_id, secure_url, thumbnail_url, public_id } =
// result?.data?.info?.files[0]?.uploadInfo;
// const data = {
// url,
// asset_id,
// secure_url,
// thumbnail_url,
// public_id,
// };
// if (data) {
// addImage(data);
// const submitImage = async () => {
//   // await mutateAsync(data);
// };
// submitImage();
// }
