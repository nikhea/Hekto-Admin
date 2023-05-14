import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-white p-5  text-center sticky bottom-0 left-0 right-0 flex justify-center">
      <div className="hover:text-primary  w-fit cursor-pointer ">
        Copyright {currentYear} &copy; <span className=" uppercase">Hekto</span>
      </div>
    </div>
  );
};

export default Footer;
