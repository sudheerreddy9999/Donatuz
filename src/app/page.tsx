"use client";

import Image from "next/image";
import img from "../../public/logo.png";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Home() {
  const [openModel, setOpenModel] = useState<boolean>(false);

  const toggleModel = () => {
    setOpenModel(!openModel);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const Model = () => {
    return (
      <div className="modelBackground  ">
        <div className="model ">
          <div className="flex justify-between p-9">
            <h2 className="bg-[rgb(238, 238, 240)] font-bold text-[20px]">
              Sign In
            </h2>
            <IoClose
              color="rgb(124, 122, 133)"
              size={24}
              className=" cursor-pointer"
              onClick={toggleModel}
            />
          </div>
          <div className=" w-[80%] h-[60%] flex flex-col  items-center mx-auto ">
            <div className=" w-full h-[90%] flex flex-col items-center align-middle gap-11 my-auto">
              <input
                type="text"
                className="w-[50%]  h-12 p-3 rounded-lg border-[#43576c]  border-[1px]  outline-none bg-transparent  mx-auto flex"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-[50%] h-12 p-3 rounded-lg border-[#43576c]  border-[1px]  outline-none bg-transparent  mx-auto flex"
                placeholder="password"
              />
              <button
                onClick={toggleModel}
                className="bg-[#504DFB] md:min-w-[165px] w-[50%] h-[50px] text-[16px] rounded-lg"
              >
                Sign In
              </button>
            </div>
            <Link href="/auth/register">
              <h3 className=" underline text-[#504DFB]">Register Here</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-[url('../../public/bgonboarding.png')]   relative flex bg-onbaording-bg bg-no-repeat bg-cover min-h-[100vh]">
        <div className="absolute top-10 left-5 hidden md:block">
          <Image src={img} alt="...logo" height={50} width={160} />
        </div>
        <div className="flex items-center justify-center w-full text-white align-middle my-auto  ">
          <div className="flex items-center justify-center flex-col md:min-w-[546px] p-6 md:bg-[#FFFFFF26] rounded-xl ">
            <Image src={img} alt="...logo" height={50} width={160} />
            <p className="text-5 break-all my-6 text-center">
              Your community awaits. Join Donatuz
              <br />
              and connect with your tribe.
            </p>

            {openModel ? <Model /> : null}

            <div className="w-full items-center flex justify-center">
              <button
                onClick={toggleModel}
                className="bg-[#504DFB] md:min-w-[165px] w-[75%] h-[50px] text-[16px] rounded-lg"
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
