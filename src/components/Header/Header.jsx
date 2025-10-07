import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import BottomHeader from "./BottomHeader";
import SideCart from "../SideCart";
import { useCartContext } from "../context/CartItems";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const { cartItems, favoriteItems, setToggleSideCart } = useCartContext();
  const [navBar, setNavBar] = useState(false);
  return (
    <header className="bg-gradient-to-r w-full z-30 bg-white fixed">
      <div className="container ">
        <div className="flex items-center justify-between flex-wrap  py-3 ">
          <Link to={"/"} className="flex flex-col  cursor-pointer">
            <h1 className="font-black text-[40px] mb-[-15px] text-black">
              Maro
            </h1>
            <span className="text-gray-900 font-bold">
              Online<span className="text-gray-500"> Store</span>
            </span>
          </Link>

          <div className="flex order-3 md:order-none w-full mt-3 md:mt-0 items-center border-2 md:w-[450px] max-w-full border-gray-900 rounded-full ">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 border-none outline-none h-full w-full "
            />
            <button className="p-[10px] text-white bg-gray-900 rounded-r-full px-4 border-l-2">
              <FaSearch />
            </button>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => {
                setToggleSideCart(true);
                setNavBar(false);
              }}
              className="text-[20px] relative  flex"
            >
              <FaCartShopping />{" "}
              <span className="absolute w-3.5 h-3.5 flex items-center justify-center text-[10px] top-[-5px] right-[-7px] bg-gray-900 text-white rounded-full">
                {cartItems.length}
              </span>
            </button>
            <Link to={"/favoriteItems"}>
              <button className="text-[20px] relative flex ">
                <FaRegHeart />
                <span className="absolute w-3.5 h-3.5  flex items-center justify-center text-[10px] top-[-5px] right-[-7px] bg-gray-900 text-white rounded-full">
                  {favoriteItems.length}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <BottomHeader navBar={navBar} setNavBar={setNavBar} />
      <SideCart />
    </header>
  );
};

export default Header;
