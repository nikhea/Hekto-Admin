import { useEffect, useRef, useState, FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { TiCamera } from "react-icons/ti";

import useSingleImage from "../../../Hooks/useSingleImage";
import { useProfileImageStore } from "../../../store/useProfileImageStore";
import useProfileImage from "../../../Hooks/useProfileImage";
interface Image {
  asset_id: any;
  secure_url: any;
  thumbnail_url: any;
  public_id: any;
}
const style = {
  imgContainer: `h-full  rounded-tl-md rounded-tr-md relative`,
  thumbnailImg: ``,
  profileImg: `shadow-xl  h-[100px] w-[100px] bg-red-500 rounded-full absolute -bottom-[50px] left-10   border-4 border-white object-cover`,
  thumbnailImage: `h-full w-full bg-red-500 rounded-full object-cover `,
  btnContainer: `absolute left-3 top-[20px] `,
  btn: `bg-white p-3 rounded-md flex items-center justify-between capitalize`,
};
const addProfileImages = {};
const BannerImage = ({ user }: any) => {
  const { profileImageData, setProfileImageData } = useProfileImageStore();

  const foldername = `user/profile/${user?.data?.firstname} ${
    user?.data?.lastname
  }-${Date.now()}`;
  const widgetRef = useRef();
  const s = useProfileImage(widgetRef, foldername, addProfileImages);
  let urlImg = user?.data?.profile?.profileImage?.secure_url;
  let thumbnail = user?.data?.profile?.profileImage?.thumbnail_url;
  const openWidget = () => {
    //@ts-ignore
    widgetRef.current.open();
  };

  return (
    <>
      <div
        className={style.imgContainer}
        style={{
          backgroundImage: `url(${urlImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={style.profileImg}>
          <LazyLoadImage className={style.thumbnailImage} src={thumbnail} />
        </div>
        <div className={style.btnContainer}>
          {user ? (
            <button className={style.btn} onClick={openWidget}>
              <TiCamera
                color=" #3b5998"
                size={25}
                style={{ marginRight: "11px" }}
              />
              change photo
            </button>
          ) : (
            <button className={style.btn} onClick={openWidget}>
              <TiCamera
                color=" #3b5998"
                size={25}
                style={{ marginRight: "11px" }}
              />
              add photo
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BannerImage;
