import { useEffect, useRef, useState, FC } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProfileImage } from "../services/shared/profile";
import { useUser } from "../auth/auth";

interface Image {
  asset_id: any;
  secure_url: any;
  thumbnail_url: any;
  public_id: any;
}
const useSingleImage = (widgetRef: any) => {
  const user = useUser();
  const cloudinaryRef = useRef();
  const [newImageData, setNewImageData] = useState<Image>();
  const queryClient = useQueryClient();
  const {
    mutateAsync,
    status,
    data: UserData,
  } = useMutation(addProfileImage, {
    onMutate: () => {},
    onSettled: () => {
      queryClient.invalidateQueries(["authenticated-user"]);
    },
  });
  useEffect(() => {
    //@ts-ignore
    cloudinaryRef.current = window?.cloudinary; //@ts-ignore
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        folder: `user/profile/${user?.data?.firstname} ${
          user?.data?.lastname
        }-${Date.now()}`,
        // clientAllowedFormats: ["webp", "png", "jpeg"],
        showPoweredBy: false,
        maxFileSize: 1500000,
        multiple: false,
        maxImageFileSize: 1500000,
      },
      function (error: any, result: any) {
        if (!error && result && result.event === "success") {
          return "please add an image";
        } else {
          if (
            result?.data?.info?.files[0]?.uploadInfo !== null ||
            result?.data?.info?.files[0]?.uploadInfo !== undefined
          ) {
            const { url, asset_id, secure_url, thumbnail_url, public_id } =
              result?.data?.info?.files[0]?.uploadInfo;
            const data = {
              url,
              asset_id,
              secure_url,
              thumbnail_url,
              public_id,
            };
            if (data) {
              setNewImageData(data);
              const submitImage = async () => {
                await mutateAsync(data);
              };
              submitImage();
            }
          }
        }
      }
    );
  }, [widgetRef, newImageData, setNewImageData]);
};

export default useSingleImage;
