// "use client";a
import { FC } from "react";
import ReactStars from "react-rating-stars-component";

export type IRatingStar = {
  value: number;
  size: number;
  edit: boolean;
};
const RatingStar: FC<IRatingStar> = ({ value, size, edit }) => {
  return (
    <ReactStars value={value} size={size} activeColor="#ffd700" edit={edit} />
  );
};

export default RatingStar;
