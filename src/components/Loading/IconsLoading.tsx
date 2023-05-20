import React from "react";
import RequestLoading from "./RequestLoading";

const IconsLoading = () => {
  return (
    <span className="bg-[#EEEFFB] rounded-full h-[30px]  w-[30px] text-center shadow-2xl shadow-pink-900 mr-[5px]">
      <RequestLoading width={23} height={23} />
    </span>
  );
};

export default IconsLoading;
