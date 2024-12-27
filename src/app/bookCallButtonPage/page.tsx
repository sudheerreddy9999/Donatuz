import React from "react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

const BookCallButtonPages = () => {
  return (
    <>
      <Sidebar />
      <div className="sm:w-full sm:h-full md:w-[1250px] md:h-[610px] md:absolute top-24 lg:left-[270px] text-white">
        <Link href="/bookingCall">
          <button className="w-[300px] h-[60px] bg-[#504DFB] rounded-xl">
            Book a Call
          </button>
        </Link>
      </div>
    </>
  );
};

export default BookCallButtonPages;
