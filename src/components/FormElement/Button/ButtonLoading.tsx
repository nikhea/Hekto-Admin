import React, { FC } from "react";
import { ThreeDots } from "react-loader-spinner";

const ButtonLoading: FC<{
  text: string;
  isLoading: any;
  type?: "button" | "submit" | "reset" | undefined;
}> = ({ text, isLoading, type }) => {
  //   console.log(isLoading);

  return (
    <button
      type={type}
      className="px-4 py-1 text-white capitalize rounded-md h-fit w-fit bg-primary"
    >
      {isLoading ? (
        <ThreeDots
          height="10"
          width="30"
          radius="9"
          color="#FFF "
          wrapperClass="flex text-center cursor-not-allowed py-2"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      ) : (
        text
      )}
    </button>
  );
};

export default ButtonLoading;
