import React from "react";
import { FaPhone } from "react-icons/fa6";
import img1 from "/src/assets/payment-1.png";
import img2 from "/src/assets/payment-2.png";
import img3 from "/src/assets/payment-3.png";
import img4 from "/src/assets/payment-4.png";
const Footer = () => {
  const imgs = [img1, img2, img3, img4];
  const links = [
    "F.A.Q.’s",
    "Ordering Tracking",
    "Contacts Events",
    "Events",
    "Help Center",
    "Delivery Information",
    "Discount",
    "Payment & Shipping",
    "Estimated Delivery",
    "Shipping Guide",
    "Popular",
    "Our Services",
    "Your Account",
    "Privacy Policy",
    "Terms & Condition",
  ];
  return (
    <footer className="bg-gray-900  text-white ">
      <div className="container py-5">
        <div className="grid  md:grid-cols-[60%_38%] gap-5 lg:grid-cols-[40%_20%_20%_18%] xl:grid-cols-[35%_20%_20%_20%] lg:gap-2 items-center">
          <div className="flex flex-col  mb-[30px] md:mb-0 ">
            <div to={"/"} className="flex flex-col  mb-[10px] ">
              <h1 className="font-black text-[40px]  mb-[-15px] text-white">
                Maro
              </h1>
              <span className="text-white font-bold">
                Online<span className="text-gray-500"> Store</span>
              </span>
            </div>
            <p className="mb-3 max-w-[400px]">
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div className="flex items-center gap-2">
              <span className="flex w-[40px] h-[40px] rounded-full rounded-br-none items-center justify-center bg-white text-black">
                <FaPhone />
              </span>
              <div>
                <span className="font-semibold">Contact Us</span>
                <p className="text-gray-400">+01246857132</p>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <h1 className="font-semibold text-[18px] mb-2">FAQs & Help</h1>
              {links.slice(0, 5).map((link) => (
                <li
                  key={link}
                  className="cursor-pointer w-fit text-gray-400 relative left-0 hover:text-white  hover:left-[10px] transition-all duration-200"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="">
              <h1 className="font-semibold text-[18px] mb-2">
                Shipping & Delivery
              </h1>
              {links.slice(5, 10).map((link) => (
                <li
                  key={link}
                  className="cursor-pointer w-fit text-gray-400 relative left-0 hover:text-white  hover:left-[10px] transition-all duration-200"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <h1 className="font-semibold text-[18px] mb-2">Information</h1>
              {links.slice(10, 15).map((link) => (
                <li
                  key={link}
                  className="cursor-pointer w-fit text-gray-400 relative left-0 hover:text-white  hover:left-[10px] transition-all duration-200"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>{" "}
      <div className="bg-gray-800 py-4">
        <div className="container">
          <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
            <p>
              Copyright © <span className="text-gray-400">Maro</span>. all
              rights reserved
            </p>
            <div className="flex gap-3">
              {imgs.map((img, i) => (
                <img
                  key={i}
                  className="filter grayscale hover:grayscale-0 w-[50px] md:w-auto cursor-pointer transition-all duration-200"
                  src={img}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
