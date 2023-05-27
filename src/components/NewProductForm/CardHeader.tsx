import React, { FC } from "react";

export type ICardHeader = {
  title: string;
};
const CardHeader: FC<ICardHeader> = ({ title }) => {
  return (
    <h1 className="mb-5 text-xl font-medium text-black capitalize">{title}</h1>
  );
};

export default CardHeader;
