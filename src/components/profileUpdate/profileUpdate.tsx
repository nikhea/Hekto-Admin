import React from "react";
import BannerImage from "./components/BannerImage";
import UpdateForm from "./components/Form/UpdateForm";
import HeaderNavigation from "./components/HeaderNavigation";
import { useUser } from "../../auth/auth";

const style = {
  container: `w-full lg:w-[90%] m-auto my-[2rem] overflow-hidden text-[#11142D]`,
  profileInfo: `bg-white shadow-m  rounded-md  my-10`,
  ImgContainer: `rounded-md h-[400px] lg:h-[500px]  mb-20`,
  padding: `p`,
  header: `flex justify-between items-center`,
  h1: ` font-[500] text-[2rem] capitalize`,
  subContainer: ``,
};
const ProfileUpdate = () => {
  const user = useUser();

  return (
    <div className={style.container}>
      <HeaderNavigation />
      <div className={style.profileInfo}>
        <div className={style.ImgContainer}>
          <BannerImage user={user} />
        </div>

        <div className={style.padding}>
          <h1 className="container mb-5 text-2xl uppercase">my details</h1>
          <UpdateForm user={user} />
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
