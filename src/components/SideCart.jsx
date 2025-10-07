import React, { useEffect } from "react";
import { useCartContext } from "./context/CartItems";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
const SideCart = () => {
  const { pathname } = useLocation();
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    toggleSideCart,
    setToggleSideCart,
  } = useCartContext();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  useEffect(() => {
    setToggleSideCart(false);
  }, [pathname]);
  return (
    <div
      className={`w-[450px]  max-w-full md:w-[400px] z-20 transition-all 
        duration-200 invisible opacity-0 right-[-20px] fixed  top-0 h-full
          flex  flex-col   bg-white border-l border-gray-300 p-4 ${
            toggleSideCart ? " !visible !opacity-[1] !right-0 " : ""
          }`}
    >
      {" "}
      <div className="flex justify-between items-center mb-5 border-b border-gray-300 py-5 ">
        <h3 className="text-xl font-semibold">
          Items In Cart : {cartItems.length}
        </h3>
        <button onClick={() => setToggleSideCart(false)} className="text-2xl ">
          <RiCloseLargeLine />
        </button>
      </div>
      <div className="overflow-y-auto h-full pb-3">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b  py-3 last:border-none border-gray-300 "
          >
            <img src={item.images[0]} className="w-[80px]" alt={item.name} />
            <div className="flex justify-between items-center w-full pr-4">
              <div className="flex flex-col gap-0.5">
                <p>{item.title}</p>
                <span className="mb-1">${item.price * item.quantity}</span>
                <div className="flex gap-2">
                  <span
                    onClick={() =>
                      item.quantity > 1 ? decreaseQuantity(item.id) : ""
                    }
                    className="bg-gray-300 cursor-pointer w-[20px] rounded-xs h-[20px] flex items-center justify-center "
                  >
                    -
                  </span>
                  <span className=" w-[20px] rounded-xs h-[20px] flex items-center justify-center ">
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

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 "
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-300 pt-5 ">
        <div className="mb-5 flex justify-between">
          <span>Cart Subtotal :</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex flex-col gap-2 ">
          <Link
            to="/cart"
            className="bg-gray-900 text-center text-white py-[10px] rounded-[5px]"
          >
            Proceed To Checkout
          </Link>
          <Link
            onClick={() => setToggleSideCart(false)}
            to={"/"}
            className="border-2 text-center border-gray-900 py-[8px] rounded-[5px]"
          >
            Shop More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
