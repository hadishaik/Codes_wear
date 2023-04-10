import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

// import { MdShoppingCartCheckout } from "react-icons/md";
// import { ImBin } from "react-icons/im";

const Navbar = ({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
  sliderImage,
}) => {
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.remove("hidden");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
      ref.current.classList.add("hidden");
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center py-2 sticky top-0 bg-white z-10">
      <Link href={"/"}>
        <Image
          src="/Logo.png"
          height={40}
          width={200}
          className="mx-5"
          alt="Home Image"
        />{" "}
      </Link>
      <div className="nav font-medium mx-5">
        <ul className="flex space-x-3 mb-2 md:mb-0">
          <Link href={"/Tshirts"}>
            <li>T-Shirts</li>
          </Link>
          <Link href={"/Hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/Mugs"}>
            <li>Mugs</li>
          </Link>
          <Link href={"/Stickers"}>
            <li>Stickers</li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <Link href={"/Login"}>
          <BsFillPersonFill className="text-2xl justify-end absolute right-14 top-4 cursor-pointer " />{" "}
        </Link>
      </div>
      <div
        ref={ref}
        onClick={toggleCart}
        className="text-2xl absolute top-4 lg:top-4 right-10 shadow-xl cursor-pointer translate-x-full"
      >
        {" "}
        <AiOutlineShoppingCart />
      </div>
      {/* SideCard */}
      <div
        ref={ref}
        className={`h-[100vh] sideCart absolute top-0 right-0 hidden w-80 transform bg-pink-300 px-2 py-10 transition-transform sm:w-1/3 md:w-[50%] lg:w-[40%] xl:w-1/3 ${
          Object.keys(cart).length === 0 ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-4 cursor-pointer text-xl"
        >
          <AiFillCloseCircle />
        </span>
        <ul>
          {Object.keys(cart).length == 0 && (
            <div className="my-5 text-center">No items in the cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k} className="my-5 rounded bg-white md:p-5 p-0">
                <div className="flex container">
                  <div className="mr-3 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src="/11.png"
                      alt="T-shirt black"
                      className="md:h-full h-[90%] w-full object-contain object-center mt-1 md:mt-0"
                    />
                  </div>
                  <div className="flex w-3/5 items-center font-semibold">
                    {cart[k].name}
                  </div>
                  <div className="flex w-1/5 items-center justify-end text-lg font-semibold">
                    <AiFillMinusCircle
                      onClick={() =>
                        removeFromCart(
                          cart[k].itemCode,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="mr-2 cursor-pointer"
                    />
                    {cart[k].qty}
                    <AiFillPlusCircle
                      onClick={() =>
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="ml-2 cursor-pointer"
                    />
                  </div>
                  <div className="flex w-1/5 items-center justify-end font-semibold mx-2">
                    ₨.
                    {cart[k].qty === "1"
                      ? cart[k].price
                      : cart[k].qty * cart[k].price}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-end space-x-2">
          <button
            className="mt-4 inline-flex cursor-pointer items-center rounded border-0 bg-gradient-to-r from-red-500 to-pink-500 py-1 px-3 text-base text-white shadow-lg shadow-red-600/50 hover:bg-indigo-700 focus:outline-none md:mt-0"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <Link href={"/Checkout"}>
            <button className="mt-4 inline-flex cursor-pointer items-center rounded border-0 bg-gradient-to-r from-indigo-500 to-blue-500 py-1 px-3 text-base text-white shadow-lg shadow-indigo-600/50 hover:bg-indigo-700 focus:outline-none md:mt-0">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
