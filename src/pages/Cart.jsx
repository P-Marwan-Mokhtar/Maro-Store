import React, { useState } from "react";
import { useCartContext } from "../components/context/CartItems";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    setToggleSideCart,
  } = useCartContext();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [shipping, setShipping] = useState(50);
  return (
    <PageTransition>
      <div className="container pb-[100px] lg:pb-10 pt-[250px] md:pt-[180px] min-h-[100vh] ">
        <div className=" flex  flex-col-reverse lg:flex-row justify-between gap-10   ">
          <div className=" rounded-2xl py-3 px-5 w-full  shadow-[0px_0px_15px_1px_#acb3c0] ">
            <h1 className="text-[30px] font-semibold border-b-2 pb-5 border-gray-300 text-gray-900">
              Order Summary
            </h1>

            <div className="h-[430px] overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className=" py-[30px] text-xl">
                  No Products Added To Cart Yet.
                </p>
              ) : (
                cartItems.map((item) => (
                  <div className="flex  items-center justify-between pr-5 border-b border-gray-300 py-4 last:border-none">
                    <div className="flex  items-center">
                      <img
                        src={item.images[0]}
                        className="w-[100px] mr-3"
                        alt={item.name}
                      />

                      <div className="flex flex-col gap-0.5">
                        <p className=" text-sm md:text-[18px] font-semibold">
                          {item.title}
                        </p>
                        <span className="">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>

                        <div className="flex gap-2 mt-2">
                          <span
                            onClick={() =>
                              item.quantity > 1 ? decreaseQuantity(item.id) : ""
                            }
                            className="bg-gray-300 cursor-pointer  w-[20px] rounded-xs h-[20px] flex items-center justify-center "
                          >
                            -
                          </span>
                          <span className=" w-[20px] rounded-xs font-semibold h-[20px] flex items-center justify-center ">
                            {item.quantity}
                          </span>
                          <span
                            onClick={() => increaseQuantity(item.id)}
                            className="cursor-pointer bg-gray-300 w-[20px] rounded-xs h-[20px] flex items-center justify-center "
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-xl md:text-[25px] "
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div>
              <div className="border-t border-gray-300 py-3">
                <span className="flex items-center text-[20px]  w-full justify-between mb-4">
                  Shipping : <span>${shipping}</span>
                </span>
                <span className="flex items-center  w-full justify-between text-[20px] mb-7  ">
                  Cart Subtotal : <span>${(total * shipping).toFixed(2)}</span>
                </span>

                <div className="flex flex-col gap-2">
                  <Link
                    to="/cart"
                    onClick={() => setToggleSideCart(false)}
                    className="bg-gray-900 text-center text-[20px] text-white py-[10px] rounded-[5px]"
                  >
                    Place Order
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="flex rounded-2xl py-3 pb-7 px-5 flex-col gap-3 shadow-[0px_0px_15px_1px_#acb3c0]">
              {" "}
              <h1 className="text-[30px] font-semibold border-b-2 pb-5 border-gray-300 text-gray-900">
                Delivery Address
              </h1>
              <label htmlFor="" className="label">
                Your Email
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="inputCart"
                />
              </label>
              <label htmlFor="" className="label">
                Your Name
                <input
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  className="inputCart"
                />
              </label>
              <label htmlFor="" className="label">
                Your Address
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  required
                  className="inputCart"
                />
              </label>
              <label htmlFor="" className="label">
                Your Number
                <input
                  type="number"
                  required
                  placeholder="Enter Your Number"
                  className="inputCart"
                />
              </label>
            </div>
            <div className=" rounded-2xl  shadow-[0px_0px_15px_1px_#acb3c0]">
              <h1 className="text-[30px] rounded-tl-2xl rounded-tr-2xl  py-3 px-5 font-semibold bg-gray-900 text-white">
                Coupon Code
              </h1>
              <div className="p-5 flex gap-4 flex-col">
                <input
                  type="text"
                  className="inputCart"
                  placeholder="Enter Your Coupon Code"
                />
                <button className="w-full bg-gray-900 p-3 text-[20px] text-white rounded-[5px]">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Cart;
