import React from "react";

const LoadingProductDetails = () => {
  return (
    <div className="container pt-[150px]">
      <div className="grid lg:grid-cols-2 gap-[10%] items-center ">
        <div className="bg-gray-300 h-[500px] skeleton"></div>
        <div className="flex flex-col gap-6">
          <div className="bg-gray-300 h-[20px] w-full skeleton"></div>
          <div className="bg-gray-300 h-[20px] w-full skeleton"></div>
          <div className="bg-gray-300 h-[20px] w-full skeleton"></div>
          <div className="bg-gray-300 h-[20px] w-full skeleton"></div>
          <div className="bg-gray-300 h-[20px] w-full skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProductDetails;
