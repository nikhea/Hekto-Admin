import React, { FC } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { useNavigate } from "react-router-dom";

export type IHeaderCate = {
  text: string;
  link: string;
  goBack?: () => void;
};
const HeaderCate: FC<IHeaderCate> = ({ text, link }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex items-center justify-between my-3">
      <IoChevronBackOutline
        className="cursor-pointer hover:text-primary"
        size={24}
        onClick={goBack}
      />
      <Link
        to={link}
        className="p-2 capitalize border rounded-md hover:border-primary"
      >
        {text}
      </Link>
    </div>
  );
};

export default HeaderCate;
