import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { RiCloseLargeLine } from "react-icons/ri";
import { LuSquareMenu } from "react-icons/lu";
import { useCartContext } from "../context/CartItems";
const BottomHeader = ({ navBar, setNavBar }) => {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();
  const { setToggleSideCart } = useCartContext();
  const [pages, setPages] = useState([
    { page: "Home", link: "/" },
    { page: "Mens-Products", link: "/mensProducts" },
    { page: "Womens-Products", link: "/womensProducts" },
    { page: "Contact Us", link: "/contactUs" },
  ]);
  const categories = [
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "sunglasses",
    "home-decoration",
    "fragrances",
    "beauty",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
    "tops",
  ];

  return (
    <div className="bg-gray-900 ">
      <div className="container">
        <div className="flex  items-center justify-between">
          <div className="flex items-center md:gap-[50px] ">
            {" "}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setNavBar(true);
                  setToggleSideCart(false);
                }}
                className="text-white text-[25px] lg:hidden"
              >
                <LuSquareMenu />
              </button>{" "}
              <div className="flex relative h-full py-3">
                <div
                  onMouseEnter={() => setIsActive(true)}
                  onMouseLeave={() => setIsActive(false)}
                  className="flex text-white    cursor-pointer items-center w-[180px] justify-between"
                >
                  <p className="font-semibold">All Categories</p>{" "}
                  <button className="text-[18px]">
                    <IoIosArrowDown />
                  </button>
                </div>
                <ul
                  onMouseEnter={() => setIsActive(true)}
                  onMouseLeave={() => setIsActive(false)}
                  className={`flex w-full  top-full border-[0px_1px_1px_1px] h-0 z-10 bg-white transition-all duration-200 border-gray-300 flex-col absolute  overflow-y-auto ${
                    isActive ? "!h-[325px]" : ""
                  }`}
                >
                  {categories.map((category) => (
                    <Link
                      to={`/category/${category}`}
                      key={category}
                      className="border-b border-gray-300 py-1.5 px-2 hover:bg-gray-300  transition-all duration-200"
                    >
                      {category}
                    </Link>
                  ))}{" "}
                </ul>
              </div>
            </div>
            <div>
              <ul
                className={`lg:text-white max-w-full fixed pt-[150px] lg:pt-0 px-[20px] lg:visible lg:opacity-[1] invisible flex flex-col w-[400px] transition-all duration-200 opacity-0 h-full top-0 left-[-20px] lg:bg-transparent  lg:w-auto z-40 bg-gray-900 text-white lg:flex-row gap-8 lg:relative ${
                  navBar ? "!opacity-[1] !visible !left-0 " : ""
                }`}
              >
                <button
                  onClick={() => setNavBar(false)}
                  className="absolute top-8 right-8 text-[30px] lg:hidden "
                >
                  <RiCloseLargeLine />
                </button>
                <Link
                  to={"/"}
                  className="flex flex-col   items-center lg:hidden"
                >
                  <div>
                    <h1 className="font-black text-[40px] mb-[-15px] text-white">
                      Maro
                    </h1>
                    <span className="text-white font-bold">
                      Online<span className="text-gray-500"> Store</span>
                    </span>
                  </div>
                </Link>

                {pages.map((page) => (
                  <Link
                    to={`${page.link}`}
                    key={page.link}
                    onClick={() => setNavBar(false)}
                    className={`cursor-pointer w-fit   font-semibold lg:font-normal text-xl  lg:text-[16px] relative after:content-[] py-3 after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-200 after:absolute after:h-[2px] after:bg-white ${
                      page.link === pathname ? " after:!w-full " : ""
                    }`}
                  >
                    {page.page}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-5 items-center  text-white">
            <Link to={"/login"} className="text-xl">
              <FiLogIn />
            </Link>
            <Link to={"/signUp"} className="text-xl">
              <IoPersonAddSharp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
