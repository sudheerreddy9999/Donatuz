import Link from "next/link";
import React from "react";
import { FaRegCircle } from "react-icons/fa";

const SavedCardComp = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 overflow-x-auto ">
        <div className="bg-[#3B3B42] w-full h-[70px] hover:bg-[#504DFB] cursor-pointer flex justify-between align-middle items-start p-5">
          <div className="my-auto">
            <p>Indian Overseas Bank</p>
            <p>**********1787</p>
          </div>
          <div className="my-auto">
            <FaRegCircle />
          </div>
        </div>
        <div className="bg-[#3B3B42] w-full h-[70px] hover:bg-[#504DFB] cursor-pointer flex justify-between align-middle items-start p-5">
          <div className="my-auto">
            <p>State Bank of India</p>
            <p>**********0400</p>
          </div>
          <div className="my-auto">
            <FaRegCircle />
          </div>
        </div>
        <div className="bg-[#3B3B42] w-full h-[70px] hover:bg-[#504DFB] cursor-pointer flex justify-between align-middle items-start p-5">
          <div className="my-auto">
            <p>Axis Credit Card</p>
            <p>**** **** 2672</p>
          </div>
          <div className="my-auto">
            <FaRegCircle />
          </div>
        </div>
      </div>
      <div className="flex gap-2 text-sm">
        <input type="checkbox" />
        <p>
          Accept Our Terms & Conditions{" "}
          <span>
            <Link href="" className=" underline font-medium">
              Read
            </Link>
          </span>
        </p>
      </div>
      <div className="flex justify-end  mt-10 w-full h-[60px]">
        <button className="w-[300px] h-[60px] bg-[#504DFB] rounded-xl">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default SavedCardComp;
