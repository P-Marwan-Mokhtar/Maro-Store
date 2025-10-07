import React from "react";

const LoadingProducts = () => {
  return (
    <div className="flex flex-col  gap-2 container">
      <div className="w-[100px] md:w-[200px] bg-gray-300 h-[20px] skeleton"></div>
      <div className="w-[350px]  md:w-[550px] bg-gray-300 h-[20px] skeleton"></div>
      <div className="w-full bg-gray-300 h-[2px] mb-3 skeleton"></div>
      <div className=" flex justify-between  overflow-x-hidden gap-3">
        <div className="border border-gray-300 w-fit flex gap-3 p-5 flex-col justify-between   ">
          <div className="w-[300px] md:w-[250px] h-[250px] bg-gray-300 justify-between animate-shine skeleton "></div>
          <div className="h-4 w-[250px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[200px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[230px] bg-gray-300 skeleton"></div>
        </div>{" "}
        <div className="border border-gray-300 w-fit flex gap-3 p-5 flex-col">
          <div className="w-[300px] md:w-[250px] h-[250px]  bg-gray-300 skeleton "></div>
          <div className="h-4 w-[250px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[200px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[230px] bg-gray-300 skeleton"></div>
        </div>{" "}
        <div className="border border-gray-300 w-fit flex gap-3 p-5 flex-col ">
          <div className="w-[300px] md:w-[250px] h-[250px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[250px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[200px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[230px] bg-gray-300 skeleton"></div>
        </div>{" "}
        <div className="border border-gray-300 w-fit flex gap-3 p-5 flex-col">
          <div className="w-[300px] md:w-[250px] h-[250px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[250px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[200px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[230px] bg-gray-300 skeleton"></div>
        </div>{" "}
        <div className="border border-gray-300 w-fit flex gap-3 p-5 flex-col">
          <div className="w-[300px] md:w-[250px] h-[250px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[250px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[200px] bg-gray-300 skeleton"></div>
          <div className="h-4 w-[230px] bg-gray-300 skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProducts;
