import React from "react";
import { currentYear } from "../../utils/getFullYear";

const Footer = () => {
  return (
    <div className="sticky bottom-0 left-0 right-0 flex justify-center p-5 text-center bg-white">
      <div className="cursor-pointer hover:text-primary w-fit ">
        Copyright {currentYear()} &copy;{" "}
        <span className="uppercase ">Hekto</span>
      </div>
    </div>
  );
};

export default Footer;
{
  /* <div className="sticky top-0 bottom-0 left-0 right-0 z-[9999999999999999] py-5 bg-white shadow-sm">
<div className="w-[95%]  m-auto"> Header</div>
</div> */
}
