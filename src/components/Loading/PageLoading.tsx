import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const PageLoading = () => {
  return (
    <div className="container grid h-screen place-items-center">
      <InfinitySpin width="200" color="#FB2E86" />
    </div>
  );
};

export default PageLoading;
