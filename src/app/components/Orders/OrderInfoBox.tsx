import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";
import { MdCallEnd } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import Link from "next/link";

type Booking = {
  img: string;
  userName: string;
  email: string;
};

type BookingInfo = {
  heading: string;
  data: Booking[];
};

type OrderInfoBoxProps = {
  BookingsInfo: BookingInfo[];
  createRoomId: string;
};

const OrderInfoBox = ({ BookingsInfo, createRoomId }: OrderInfoBoxProps) => {
  return (
    <div>
      {BookingsInfo.map((info, index) => (
        <div
          className="backdrop-blur-[11.6px] p-4 ml-3 md:ml-0 mr-3 mt-3 rounded-md"
          key={index}
        >
          <h3 className="font-semibold mb-2">{info.heading}</h3>
          <div>
            {info.data.map((booking: Booking, idx: number) => (
              <div
                key={`upcoming-${idx}`}
                className="flex justify-between items-center rounded-md mb-2 p-2 shadow-sm"
              >
                <div className="flex items-center">
                  <img
                    src={booking.img}
                    alt="avatar"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium">{booking.userName}</p>
                    <p className="text-xs text-gray-400">{booking.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className={`p-2 text-white rounded-full ${
                      info.heading === "Upcoming Calls"
                        ? "bg-gradient-to-r from-blue-100 to-gray-700 hover:from-blue-500 hover:to-white transition duration-200 ease-in-out"
                        : "bg-red-500"
                    }`}
                  >
                    {info.heading === "Upcoming Calls" ? (
                      <TbMessageDots size={20} />
                    ) : (
                      <MdCallEnd size={20} />
                    )}
                  </button>
                  <button
                    className={`p-2 rounded-full ${
                      info.heading === "Active Calls" && "bg-blue-700 hover:p-3"
                    }`}
                  >
                    {info.heading === "Upcoming Calls" ? (
                      <BiDotsVerticalRounded size={20} />
                    ) : (
                      <Link href={`/videoCall/${createRoomId}`}>
                        <LuPhoneCall size={20} />
                      </Link>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default OrderInfoBox;
