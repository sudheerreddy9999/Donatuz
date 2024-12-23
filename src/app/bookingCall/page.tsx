"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import BookCallComp1 from "../components/BookCall/BookCallCompo";
import Data from "../Jsons/jsonData";
import "../../app/globals.css";
interface TimeSlot {
  slot: string;
  isBooked: boolean;
}

interface UserSlotsData {
  date: string;
  pricePerDuration: string[];
  timeslots: {
    morning: TimeSlot[];
    afternoon: TimeSlot[];
    evening: TimeSlot[];
  };
}

interface BookCallProps {
  closeBookCall: () => void;
}

interface ApiResponse {
  user: {
    name: string;
    username: string;
    rating: number;
    profileImage: string;
  };
  userSlotsData: UserSlotsData[];
}
const BookCall: React.FC<BookCallProps> = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(Data.bookCall as ApiResponse);
    }, 2000);
  }, []);

  //bg-[#ffffff1a] backdrop-blur-[11.6px]  btn : bg-[#504DFB]
  return (
    <>
      <Sidebar />
      <div className="absolute w-full md:w-[82%] md:h-[86.2%] md:top-24 md:left-[250px] text-white">
        <div>
          <BookCallComp1 callInfo={data} />
        </div>
      </div>
    </>
  );
};

export default BookCall;
