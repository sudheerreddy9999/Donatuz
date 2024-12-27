"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="modelBackground  ">
      <div className="model ">
        <div className="flex justify-between p-9">
          <h2 className="bg-[rgb(238, 238, 240)] font-bold text-[20px]">
            Sign Up
          </h2>
          <Link href="/">
            <IoClose
              color="rgb(124, 122, 133)"
              size={24}
              className=" cursor-pointer"
            />
          </Link>
        </div>
        <div className=" w-[80%] h-[60%] flex flex-col  items-center mx-auto ">
          <div className=" w-full h-full flex flex-col items-center align-middle gap-11 my-auto">
            <input
              type="text"
              className="w-[50%]  h-12 p-3 rounded-lg border-[#43576c]  border-[1px]  outline-none bg-transparent  mx-auto flex"
              placeholder="User Name"
            />
            <input
              type="email"
              className="w-[50%]  h-12 p-3 rounded-lg border-[#43576c]  border-[1px]  outline-none bg-transparent  mx-auto flex"
              placeholder="Email"
            />
            <input
              type="password"
              className="w-[50%] h-12 p-3 rounded-lg border-[#43576c]  border-[1px]  outline-none bg-transparent  mx-auto flex"
              placeholder="password"
            />
            <button className="bg-[#504DFB] md:min-w-[165px] w-[50%] h-[50px] text-[16px] rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
