import { Card } from "@tremor/react";
import CardHeader from "./CardHeader";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { useEffect, useRef } from "react";
import useSingleImage from "../../Hooks/useSingleImage";
import useMultipleImage from "../../Hooks/useMultipleImage";

import { useFormContext } from "react-hook-form";
import { BsUpload } from "react-icons/bs";
import { TiCamera } from "react-icons/ti";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMultiImageStore } from "../../store/useMultipleImageStore";

const style = {
  btn: `bg-white p-3 rounded-md flex items-center justify-between capitalize absolute m-3`,
};
const ProductImages = ({ coverPhotos, productPhotos }: any) => {
  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const productName = watch("name");
  const { newImageData, setNewImageData } = useSingleImageStore();
  const { imageData, addImage } = useMultiImageStore();
  const foldername = `cover-productImages-${productName}-${Date.now()}`;
  const foldername2 = `photos-productImages-${productName}-${Date.now()}`;
  const widgetRef = useRef();
  const widgetRef2 = useRef();

  const s = useSingleImage(widgetRef, foldername);
  const p = useMultipleImage(widgetRef2, foldername2);

  const openWidget = () => {
    //@ts-ignore
    widgetRef.current.open();
  };
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
    if (imageData[0]) {
      setValue("photos", imageData);
    }
  }, [imageData, addImage, setValue]);
  const displayDefaultProductPhotos = productPhotos.map(
    (productPhoto: any, index: number) => {
      console.log(productPhoto);
      if (productPhoto.secure_url) {
        return (
          <LazyLoadImage
            className="object-cover w-[150px] h-[150px] rounded-md"
            src={productPhoto.secure_url}
            alt={productPhoto.public_id}
            key={index}
          />
        );
      }
    }
  );

  return (
    <Card>
      <CardHeader title="product images" />
      <div className="flex flex-col justify-between ">
        <h1 className="my-2 capitalize "> cover image* </h1>
        {!newImageData ? (
          <div className="relative w-full h-56 mb-3 rounded-md bg-fuchsia-500">
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
          </div>
        ) : (
          <div className="relative w-full h-56 mb-3 rounded-md bg-fuchsia-500">
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
              src={newImageData.secure_url}
              alt={newImageData.public_id}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between ">
        <h1 className="my-2 capitalize"> images* </h1>
        {!imageData[0] ? (
          <div className="grid flex-wrap grid-cols-3 gap-3 lg:flex ">
            {displayDefaultProductPhotos}
          </div>
        ) : (
          <div className="relative w-full h-56 mb-3 rounded-md bg-fuchsia-500">
            <button type="button" className={style.btn} onClick={openWidgetTwo}>
              <TiCamera
                color=" #3b5998"
                size={25}
                style={{ marginRight: "11px" }}
              />
              change photo
            </button>
            {/* <LazyLoadImage
              className="object-cover w-full h-full rounded-md"
              src={newImageData.secure_url}
              alt={newImageData.public_id}
            /> */}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductImages;
{
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
}
