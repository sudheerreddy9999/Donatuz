"use client";

import React from "react";
import img from "../../../public/logo.png";
import avatar from "../../../public/avatar.png";
import Image from "next/image";
import Link from "next/link";
import {
  MdArticle,
  MdContactMail,
  MdGrading,
  MdHome,
  MdMessage,
} from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import {
  IoIosChatboxes,
  IoMdAnalytics,
  IoMdContact,
  IoMdLogOut,
  IoMdNotifications,
  IoMdSettings,
} from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHeadset, FaHome, FaPlus, FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Sidebar = () => {
  return (
    <>
      <div className=" hidden  md:flex fixed w-full min-h-[100vh] text-white ">
        <div className="flex flex-col w-[273px] min-h-[100vh] bg-gradient-to-b from-[#2A296E] to-[#272738] backdrop-blur-lg ">
          <div className="flex justify-start   w-full p-4 ">
            <Image src={img} alt="...logo" height={40} width={155} />
          </div>
          <div className=" h-[490px] mt-1 flex flex-col justify-between align-middle items-center">
            <Link href="/">
              <div
                className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
              >
                <MdHome size={20} className="" />

                <ul className="">Home</ul>
              </div>
            </Link>
            <div
              className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
            >
              <MdDashboard size={20} className="" />

              <Link href="">
                <ul className="">Dashboard</ul>
              </Link>
            </div>
            <Link href="/orders">
              <div
                className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
              >
                <MdGrading size={20} className="" />

                <ul className="">Orders</ul>
              </div>
            </Link>

            <div
              className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
            >
              <MdArticle size={20} className="" />

              <Link href="">
                <ul className="">Bookings</ul>
              </Link>
            </div>
            <div
              className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
            >
              <MdMessage size={20} className="" />
              <Link href="">
                <ul className="">Messages</ul>
              </Link>
            </div>
            <div
              className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
            >
              <IoMdNotifications size={20} className="" />
              <Link href="">
                <ul className="">Notifications</ul>
              </Link>
            </div>
            <div
              className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
            >
              <MdContactMail size={20} className="" />
              <Link href="">
                <ul className="">My Content</ul>
              </Link>
            </div>
            <div
              className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
            >
              <IoMdAnalytics size={20} className="" />
              <Link href="">
                <ul className="">Analytics</ul>
              </Link>
            </div>
            <div
              className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
            >
              <AiFillDollarCircle size={20} className="" />
              <Link href="">
                <ul className="">Monetization</ul>
              </Link>
            </div>
            <div
              className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
            >
              <IoMdSettings size={20} className="" />

              <Link href="">
                <ul className="">Settings</ul>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col align-middle justify-evenly items-center h-[100px] mt-10  ">
            <div
              className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
            >
              <FaHeadset size={20} className="" />

              <Link href="">
                <ul className="">Support</ul>
              </Link>
            </div>
            <div
              className="flex gap-3 justify-start items-center p-[13px] cursor-pointer rounded-xl w-56 last:mb-0 hover:bg-gradient-to-r from-[#FFFFFF33] to-[#514DFB33] rounded-3 mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[11px]
  4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]"
            >
              <IoMdLogOut size={20} className="" />

              <Link href="">
                <ul className="">Log Out</ul>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full h-[93px] bg-transparent border-b-[0.5px] border-[#ffffff1a]">
          <div className="w-[50%] my-auto mx-auto ">
            <div className="w-[80%]">
              <form className="max-w-md mx-auto my-auto ">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <CiSearch />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full h-[48px] p-4 ps-10 text-sm text-white border-none bg-[#272738]  outline-none rounded  "
                    placeholder="Search "
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="w-[50%]  flex justify-end">
            <div className="flex  my-auto justify-end gap-10 w-[70%]  pr-6">
              <div>
                <Link href="/">
                  <button className="w-[162px] h-[52px] bg-[#514DFB] rounded-xl">
                    Create Post
                  </button>
                </Link>
              </div>
              <div className="flex  h-fit my-auto">
                <Image
                  src={avatar}
                  alt="avatar"
                  width={40}
                  height={40}
                  className=" rounded-full"
                />
                <div className="ml-[20px] align-middle">
                  <Link href="/">
                    <p className="text-white text-sm">Riya</p>
                    <p className="text-white text-sm">0 Followers</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="smallNavabar w-full h-20 z-[999] md:hidden bg-black flex items-center justify-evenly absolute top-[90%] ">
        <div className=" cursor-pointer">
          <Link href="/">
            <FaHome size={30} color="#F1F1F1" />
          </Link>
        </div>
        <div className=" cursor-pointer">
          <Link href="/">
            <IoIosChatboxes size={30} color="#F1F1F1" />
          </Link>
        </div>
        <div className="w-14 h-14 bg-[#504DFB] rounded-md flex justify-center items-center ">
          <Link href="/">
            <FaPlus size={30} color="#F1F1F1" />
          </Link>
        </div>
        <div className=" cursor-pointer">
          <Link href="/">
            <FaRegBell size={30} color="#F1F1F1" />
          </Link>
        </div>
        <div className=" cursor-pointer">
          <Link href="/">
            <IoMdContact size={30} color="#F1F1F1" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
