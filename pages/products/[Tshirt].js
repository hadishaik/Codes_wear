import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRef } from "react";
import Link from "next/link";

const Post = ({ addToCart }) => {
  const ref = useRef();
  const router = useRouter();
  const { slug } = router.query;
  const imgs = [
    { id: 0, value: "/11.png" },
    { id: 1, value: "/22.png" },
    { id: 2, value: "/33.png" },
    { id: 3, value: "/44.png" },
    { id: 4, value: "/55.png" },
  ];
  const [sliderImage, setSliderImage] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index, "#######");
    const slider = imgs[index];
    setSliderImage(slider);
  };
  const handleOnClick = () => {
    if (ref.current.classList.contains("currentColor")) {
      ref.current.classList.remove("currentColor");
      ref.current.classList.add("text-pink-400");
    } else if (!ref.current.classList.remove("currentColor")) {
      ref.current.classList.remove("text-pink-400");
      ref.current.classList.add("currentColor");
    }
  };
  const [pin, setPin] = useState();
  const [service, setService] = useState();

  const serviceCheck = async () => {
    let pins = await fetch("http://localhost:3000/api/Pincode");
    let pinjson = await pins.json();
    if (pinjson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };

  const onChange = (e) => {
    setPin(e.target.value);
  };

  return (
    <>
      <div className="md:flex max-w-screen-2xl mx-auto w-full">
        <div className="lg:h-[600px] h-[400px] lg:w-[45%]  w-screen flex my-6">
          <div className="flex-col w-[20%] h-full">
            <div
              id="slider"
              className={`w-full h-[100%] cursor-pointer 
                `}
            >
              {imgs.map((data, i) => (
                <img
                  onClick={() => handleClick(i)}
                  key={data.id}
                  src={data.value}
                  className={`h-[15%] block w-full rounded-[3%] ${
                    sliderImage.id == i
                      ? "md:border-[3px] lg:border-[4px] xl:border-[5px] object-center mb-1"
                      : ""
                  } `}
                />
              ))}
            </div>
          </div>

          <div
            className="w-full  
            h-full"
          >
            <img
              src={sliderImage.value}
              className="p-1 rounded-lg w-full h-full object-center "
            />
          </div>
        </div>
        {/* Product Discription */}
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 mx-4 sm:mx-2">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            RareRabbit
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            Rounded Neck White T-Shirt
          </h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                StrokeLinecap="round"
                StrokeLinejoin="round"
                StrokeWidth="2"
                className="w-4 h-4 text-pink-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                StrokeLinecap="round"
                StrokeLinejoin="round"
                StrokeWidth="2"
                className="w-4 h-4 text-pink-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                StrokeLinecap="round"
                StrokeLinejoin="round"
                StrokeWidth="2"
                className="w-4 h-4 text-pink-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                StrokeLinecap="round"
                StrokeLinejoin="round"
                StrokeWidth="2"
                className="w-4 h-4 text-pink-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                StrokeLinecap="round"
                StrokeLinejoin="round"
                StrokeWidth="2"
                className="w-4 h-4 text-pink-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 ml-3">40+ Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  StrokeLinecap="round"
                  StrokeLinejoin="round"
                  StrokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  StrokeLinecap="round"
                  StrokeLinejoin="round"
                  StrokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  StrokeLinecap="round"
                  StrokeLinejoin="round"
                  StrokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
          <p className="leading-relaxed custom-font">
            DESCRIPTION <br /> - A half sleeve crew neck graphic print t-shirt.
            -
            <br />
            Cotton Fabric. - Slim Fit. SIZE -The model
            <br />
            (Chest-39,Waist-32,Hips-38, Height-188 cms) is wearing a size M
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-pink-400 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    StrokeLinecap="round"
                    StrokeLinejoin="round"
                    StrokeWidth="2"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-center">
            <span className="title-font font-medium text-2xl text-red-500 line-through flex items-center">
              Rs.699.00/-
            </span>
            <span className=" md:ml-2 text-2xl flex items-center md:text-3xl">
              Rs.499.00/-
            </span>
            <button
              onClick={() => {
                console.log(addToCart);
                console.log(serviceCheck);
                addToCart(slug, 1, 499, "Wear the Code", "sm", "Black");
              }}
              className="flex ml-2 text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none items-center hover:bg-pink-500 rounded"
            >
              <AiOutlineShoppingCart className="mr-2 mt-[5px]" />
              Add to Cart
            </button>
            <button
              className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
              onClick={handleOnClick}
            >
              <svg
                ref={ref}
                fill="currentColor"
                StrokeLinecap="round"
                StrokeLinejoin="round"
                StrokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <Link href={"/Checkout"}>
              <button
                onClick={() => {
                  console.log(addToCart);
                  console.log(serviceCheck);
                  addToCart(slug, 1, 499, "Wear the Code", "sm", "Black");
                }}
                className="flex ml-2 text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none items-center hover:bg-pink-500 rounded"
              >
                Buy Now
              </button>
            </Link>
          </div>
          {/* pincode Section */}
          <div className="flex my-5 justify-center mx-4">
            <input
              onClick={onChange}
              className="w-1/3 border-zinc-500 border-2 rounded-lg px-2"
            />
            <button
              onClick={serviceCheck}
              className="flex ml-2 text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none items-center hover:bg-pink-500 rounded text-xs lg:text-base"
            >
              Check Availability
            </button>
          </div>
          {!service && service != null && (
            <div className="text-red-400 text-xl text-center">
              {" "}
              Sorry! Your Pincode is Not Serviceable
            </div>
          )}
          {service && service != null && (
            <div className="text-green-300 text-xl text-center">
              Hurray! Your Pincode is Serviceable
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
