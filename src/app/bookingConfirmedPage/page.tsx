import Image from "next/image";
import React from "react";
import img from "../../../public/avatar.png";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { MdCheck } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";

const BookingConfirmedPage = () => {
  return (
    <div className="modelBackground  flex flex-col justify-center items-center">
      <div className="smooth_animation flex justify-end   w-[765px] pr-4  ">
        <Link
          href="/paymentPages"
          className="bg-[#767676] w-8 h-8 rounded-full cursor-pointer flex justify-center items-center mr-48 md:mr-0"
        >
          <IoClose size={25} color="#F1F1F1" />
        </Link>
      </div>
      <div className="smooth_animation w-[400px] h-[407px] md:w-[765px] md:h-[407px]  rounded-lg bg-[#343434] p-6 flex flex-col gap-6 md:gap-0 justify-evenly">
        <div className=" flex justify-center items-center gap-2">
          <div className="bg-[#0BBB29] w-[30px] h-[30px] rounded-full">
            <MdCheck size={30} />
          </div>
          <div>
            <h1 className=" text-lg md:text-2xl leading-4 font-bold text-center text-white">
              Booking Confirmed
            </h1>
          </div>
        </div>
        <div className="text-white font-bold flex gap-4">
          <Image
            src={img}
            alt="...logo"
            height={40}
            width={40}
            className=" rounded-full"
          />
          <h3>Alison K Fenn</h3>
        </div>
        <div className="md:w-[694px] md:h-[136px] w-full h-[136px] flex justify-between bg-gradient-to-b from-[#514DFB] to-[#2E5D95] rounded-[10px]">
          <div className="w-[50%] flex items-center pl-5">
            <p className=" text-lg md:text-[24px] flex flex-col font-normal text-white  ">
              17th,
              <br />
              July 2024
            </p>
          </div>
          <div className=" w-[50%] flex flex-col align-middle justify-center items-center gap-3 ">
            <div className=" w-[70%] gap-3 flex items-center">
              <IoMdAlarm size={25} color="#F1F1F1" />
              <p className=" text-sm md:text-[24px] flex font-normal text-white  ">
                6.00 - 7.00 P.M
              </p>
            </div>
            <div className=" w-[70%] gap-3 flex items-center">
              <GiSandsOfTime size={25} color="#F1F1F1" />
              <p className="text-sm md:text-[24px]  justify-start font-normal text-white  ">
                1 Hour
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-4 justify-end pr-5">
          <button className="bg-transparent text-white border-[#504DFB] border-[1px] md:min-w-[165px] w-[223px] h-[56px] text-[16px] rounded-lg">
            Add to Calendar
          </button>
          <Link href="/orders">
            <button className="bg-[#504DFB] text-white md:min-w-[165px] w-[247px] h-[56px] text-[16px] rounded-lg">
              View My Bookings
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmedPage;
