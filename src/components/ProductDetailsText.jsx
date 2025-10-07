import React from "react";
import { FaStar } from "react-icons/fa";
import { useCartContext } from "./context/CartItems";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

import Products from "./Products/Products";
const ProductDetailsText = ({ data }) => {
  const {
    cartItems,
    addToCart,
    addToFavorite,
    removeFromFavorite,
    favoriteItems,
  } = useCartContext();
  const isInCart = cartItems.some((item) => item.id == data.id);
  const isInFavorite = favoriteItems.some((item) => item.id === data.id);

  const handleAddToCart = (product) => {
    if (!isInCart && cartItems) {
      addToCart(product);
    }
  };
  const handleAddToFavorite = (item) => {
    if (!isInFavorite) {
      addToFavorite(item);
    } else {
      removeFromFavorite(item.id);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-5 pt-[50px]">
        <h1 className="text-2xl tracking-wider md:text-[40px]">{data.title}</h1>
        <span className="text-xl font-bold">${data.price}</span>
        <ul className="text-yellow-400 flex gap-2 ">
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
        </ul>
        <span className="  font-semibold">
          Availability: 
           <span className=" text-gray-700"> {data.availabilityStatus}</span>
        </span>
        <span className="font-semibold">
          Brand:{" "}
          <span className=" text-gray-700">
            {data.brand ? data.brand : "Unknown"}
          </span>
        </span>
        <p className="text-sm font-semibold text-gray-500 max-w-[650px]">
          {data.description}
        </p>
        <p className=" md:text-[20px] font-semibold ">
          Hurry Up! Only {data.stock} Products Left In Stock.
        </p>
        <div className=" flex gap-6 items-center">
          <button
            onClick={() => handleAddToCart(data)}
            className={`w-[160px] hover:scale-105 transition-all duration-200 flex items-center gap-2 justify-center  py-1.5 font-semibold text-xl border-2 border-gray-900 bg-gray-900 text-white rounded-[5px] ${
              isInCart ? "!bg-white !text-gray-900 pointer-events-none" : ""
            }`}
          >
            {isInCart ? ` Item In Cart` : "Add To Cart"}
            {isInCart ? <IoCheckmarkCircleSharp /> : ""}
          </button>
          <button
            onClick={() => handleAddToFavorite(data)}
            className={`w-9 h-9 rounded-full hover:scale-110   transition-all duration-100 border text-white bg-gray-900 flex items-center justify-center ${
              isInFavorite ? " !bg-white !text-gray-900" : ""
            }`}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsText;
