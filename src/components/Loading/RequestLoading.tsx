import { FC } from "react";
import { Oval } from "react-loader-spinner";

export type IRequestLoading = {
  width: number;
  height: number;
};

const RequestLoading: FC<IRequestLoading> = ({ height, width }) => {
  return (
    <Oval
      height={height}
      width={width}
      color="#FB2E86"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#FB2E86"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default RequestLoading;
