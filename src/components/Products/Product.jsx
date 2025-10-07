import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Products from "./Products";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { useCartContext } from "../context/CartItems";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
const Product = ({ data }) => {
  const {
    addToCart,
    cartItems,
    addToFavorite,
    favoriteItems,
    removeFromFavorite,
  } = useCartContext();
  const isInCart = cartItems.some((item) => item.id === data.id);
  const isInFavorite = favoriteItems.some((item) => item.id === data.id);
  const stars = [
    <FaStar />,
    <FaStar />,
    <FaStar />,
    <FaStar />,
    <FaStarHalf />,
  ];

  const handleAddToCart = (item) => {
    if (cartItems) {
      addToCart(item);
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
    <div className=" overflow-hidden relative  h-[380px] flex flex-col justify-between rounded-[5px] group p-3 border-2 border-gray-300 hover:border-gray-900transition-all duration-200 cursor-pointer">
      <div
        className={`w-full flex justify-center top-[-50px]  transition-all duration-200  absolute ${
          isInCart ? "!top-3 " : ""
        }`}
      >
        <span
          className={`flex text-sm md:text-lg bg-gray-300 items-center py-0.5 md:py-1 px-2.5 rounded-2xl gap-1   
         
          `}
        >
          Item In Cart <FaCheck />
        </span>
      </div>
      <Link to={`/products/${data.id}`}>
        {" "}
        <div className="w-full flex  h-[250px] items-center justify-center">
          <img src={data.images[0]} className=" w-[200px]" alt={data.name} />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">{data.title}</h1>
          <ul className="flex gap-1.5">
            {stars.map((star, i) => (
              <li key={i} className="text-amber-400">
                {star}
              </li>
            ))}
          </ul>
          <span className="flex gap-3 text-[18px] font-semibold">
            ${data.price}
            <span className="line-through text-sm">
              ${data.discountPercentage}
            </span>
          </span>
        </div>
      </Link>
      <div className="flex flex-col top-3 right-[-25%] transition-all duration-200 gap-3 group-hover:right-3 absolute">
        <button
          onClick={() => handleAddToCart(data)}
          className={`w-9 h-9 rounded-full  transition-all duration-100 hover:border text-gray-900 bg-gray-200 flex items-center justify-center ${
            isInCart ? "pointer-events-none !bg-gray-900 !text-white" : ""
          }`}
        >
          <IoCart />
        </button>
        <button
          onClick={() => handleAddToFavorite(data)}
          className={`w-9 h-9 rounded-full  transition-all duration-100 hover:border text-gray-900 bg-gray-200 flex items-center justify-center ${
            isInFavorite ? " !bg-gray-900 !text-white" : ""
          }`}
        >
          <FaHeart />
        </button>
        <button className="w-9 h-9 rounded-full  transition-all duration-100 hover:border text-gray-900 bg-gray-200 flex items-center justify-center ">
          <FaShare />
        </button>
      </div>
    </div>
  );
};

export default Product;
