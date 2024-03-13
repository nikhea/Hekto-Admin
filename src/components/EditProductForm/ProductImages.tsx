import { Card } from "@tremor/react";
import CardHeader from "./CardHeader";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { useEffect, useRef, useState } from "react";
import useSingleImage from "../../Hooks/useSingleImage";
import useMultipleImage from "../../Hooks/useMultipleImage";
import { useFormContext } from "react-hook-form";
import { BsUpload } from "react-icons/bs";
import { TiCamera } from "react-icons/ti";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMultiImageStore } from "../../store/useMultipleImageStore";
import { AiFillCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import DraggableDialog from "../FormElement/dialog/dialog";
import useDialogStore from "../../store/useDialogStore";
import useRemoveSingleProductImage from "../../Hooks/useProducts/useRemoveProductImage";
import ButtonLoading from "../FormElement/Button/ButtonLoading";
import { usePhotoStore } from "../../store/usePhotosStore";

const style = {
  btn: `bg-white p-3 rounded-md flex items-center justify-between capitalize absolute m-3`,
  close: `absolute right-1 top-1 `,
};
const ProductImages = ({ coverPhotos, productPhotos, productId }: any) => {
  const [assetId, setAssetId] = useState<string | any>();
  const { setValue, watch } = useFormContext();
  const { open, setOpen } = useDialogStore();
  const { newImageData, setNewImageData } = useSingleImageStore();
  // const { imageData, addImage } = useMultiImageStore();
  const { photos, addPhoto, removePhoto } = usePhotoStore();

  const { removeSingleProductImage, removeSingleProductImageisLoading } =
    useRemoveSingleProductImage();

  const productName = watch("name");
  const foldername = `cover-productImages-${productName}-${Date.now()}`;
  const foldername2 = `photos-productImages-${productName}-${Date.now()}`;
  const widgetRef = useRef();
  const widgetRef2 = useRef();

  // const s = useSingleImage(widgetRef, foldername);
  // const p = useMultipleImage(widgetRef2, foldername2);

  useSingleImage(widgetRef, foldername);
  useMultipleImage(widgetRef2, foldername2);

  const openWidget = () => {
    //@ts-ignore
    widgetRef.current.open();
  };
  const filteredPhotos = productPhotos.filter((photo: any) => photo !== null);

  const openWidgetTwo = () => {
    //@ts-ignore
    widgetRef2.current.open();
  };
  useEffect(() => {
    if (newImageData?.secure_url) {
      setValue("coverPhoto", newImageData);
    }
  }, [newImageData, setNewImageData, setValue]);

  useEffect(() => {
    if (photos[0]) {
      setValue("photos", photos);
    }
  }, [photos, addPhoto, setValue]);
  const removeImage = (assetId: string) => {
    setAssetId(assetId);
    setOpen(true);
  };
  const handleButtonRemove = async () => {
    removePhoto(assetId);
    // await removeSingleProductImage(productId, assetId);
    setOpen(false);
  };
  const pl = `https://res.cloudinary.com/djkqaqoj3/image/upload/v1686020679/photos-productImages-undefined-1686020113705/g2jy441kxfvhh2rmzvn9.jpg`;
  const displayDefaultProductPhotos = filteredPhotos.map(
    (productPhoto: any, index: number) => {
      if (productPhoto.secure_url) {
        return (
          <div
            key={productPhoto.public_id}
            className="relative w-full h-[200px] group flex justify-center  items-center    rounded-md  border-gray-300  text-gray-300"
          >
            <LazyLoadImage
              className="object-cover w-full h-full rounded-md"
              src={productPhoto.secure_url}
              alt={productPhoto.public_id}
              key={index}
            />
            <button type="button" className={style.close}>
              <AiFillCloseCircle
                className="hidden cursor-pointer group-hover:flex text-primary"
                size={25}
                onClick={() => removeImage(productPhoto.asset_id)}
              />
            </button>
          </div>
        );
      }
    }
  );
  return (
    <Card>
      <CardHeader title="product images" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col justify-between">
          <h1 className="my-2 capitalize "> cover image* </h1>
          <div className="relative w-full h-[600px] mb-3  rounded-md ">
            {newImageData ? (
              <>
                <button
                  type="button"
                  className={style.btn}
                  onClick={openWidget}
                >
                  <TiCamera
                    color=" #3b5998"
                    size={25}
                    style={{ marginRight: "11px" }}
                  />
                  change photo
                </button>
                <LazyLoadImage
                  className="object-cover w-full h-full rounded-md"
                  src={newImageData?.secure_url}
                  alt={newImageData?.public_id}
                />
              </>
            ) : (
              <>
                <button
                  type="button"
                  className={style.btn}
                  onClick={openWidget}
                >
                  <TiCamera
                    color=" #3b5998"
                    size={25}
                    style={{ marginRight: "11px" }}
                  />
                  change photo
                </button>
                <LazyLoadImage
                  className="object-cover w-full h-full rounded-md"
                  src={coverPhotos}
                  alt={coverPhotos?.public_id}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <h1 className="my-2 capitalize"> images* </h1>
          <div className="flex flex-col justify-between h-full">
            {photos && (
              <div className="grid w-full gap-3 h-fit md:grid-cols-2 lg:grid-cols-3">
                <div className=" w-full h-[200px] group flex justify-center flex-col text-center hover:border-primary items-center mb-3  border-dotted  rounded-md border-4 border-gray-300  text-gray-300">
                  <AiOutlinePlusCircle
                    onClick={openWidgetTwo}
                    className="cursor-pointer group-hover:text-primary"
                    size={50}
                  />
                  <p className="w-[70%] group-hover:text-primary">
                    Maximum images to upload at once is 5
                  </p>
                </div>
                {displayDefaultProductPhotos}
              </div>
            )}
            {/* <div className="self-end ">
              <ButtonLoading
                type="button"
                text="save images"
                isLoading={false}
              />
            </div> */}
          </div>
          <DraggableDialog
            open={open}
            handleRemove={handleButtonRemove}
            title="product image"
            isLoading={removeSingleProductImageisLoading}
            handleClose={() => setOpen(false)}
          />
        </div>
      </div>
    </Card>
  );
};

export default ProductImages;
// ) : (
//   <div className="relative w-full h-56 rounded-md bg-fuchsia-500">
//     <button
//       type="button"
//       className={style.btn}
//       onClick={openWidgetTwo}
//     >
//       <TiCamera
//         color=" #3b5998"
//         size={25}
//         style={{ marginRight: "11px" }}
//       />
//       change photo
//     </button>
//   </div>
// {
/* <div className="relative w-full h-56 mb-3 rounded-md bg-fuchsia-500">
<button type="button" className={style.btn} onClick={openWidget}>
  <TiCamera
    color=" #3b5998"
    size={25}
    style={{ marginRight: "11px" }}
  />
  change photo
</button>
<LazyLoadImage
  className="object-cover w-full h-full rounded-md"
  src={coverPhotos}
  alt={coverPhotos?.public_id}
/>
</div> */
// }
// {!newImageData ? (
//   <div className="relative w-full h-[600px] mb-3  rounded-md ">
//     <button type="button" className={style.btn} onClick={openWidget}>
//       <TiCamera
//         color=" #3b5998"
//         size={25}
//         style={{ marginRight: "11px" }}
//       />
//       change photo
//     </button>
//     <LazyLoadImage
//       className="object-cover w-full h-full rounded-md"
//       src={coverPhotos}
//       alt={coverPhotos?.public_id}
//     />
//   </div>
// ) : (
//   <div className="relative w-full h-[600px] rounded-md bg-fuchsia-500">
//     <button type="button" className={style.btn} onClick={openWidget}>
//       <TiCamera
//         color=" #3b5998"
//         size={25}
//         style={{ marginRight: "11px" }}
//       />
//       change photo
//     </button>
//     <LazyLoadImage
//       className="object-cover w-full h-full rounded-md"
//       src={newImageData.secure_url}
//       alt={newImageData.public_id}
//     />
//   </div>
// )}
