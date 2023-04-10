import React from "react";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat custom-bg max-w-screen-2xl mx-auto">
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 text-2xl">Welcome! to CodesWear</h1>
              <span className="text-gray-300">SignUp Here</span>
            </div>
            <form action="#">
              <div className="mb-2 text-lg flex lg:flex-row flex-col justify-center">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-2 lg:px-11 py-2 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="name"
                  placeholder="Please Enter Name"
                  required
                />
              </div>
              <div className="mb-4 text-lg flex justify-center">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 lg:px-24 py-2 m-2 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="name"
                  placeholder="Please Enter Your E-Mail"
                  required
                />
              </div>

              <div className="mb-4 text-lg flex justify-center flex-wrap lg:flex-row">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 m-2 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="name"
                  placeholder="Password"
                  required
                />
                <input
                  className="rounded-3xl border-none m-2 bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="name"
                  placeholder="Enter Password Again"
                  required
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  SignUp
                </button>
              </div>
              <div className=" my-4">
                <p className="text-center">
                  Registered User{" "}
                  <Link
                    href="/Login"
                    className="text-white hover:text-blue-600 font-medium inline-flex space-x-1 items-center"
                  >
                    <span>Login Here </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
