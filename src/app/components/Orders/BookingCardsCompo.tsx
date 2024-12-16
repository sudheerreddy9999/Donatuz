import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import StarRating from "../StarRating";
import { formatDate } from "../../utils/dateTimeUtils";
import { MdDateRange } from "react-icons/md";
import { IoIosAlarm } from "react-icons/io";
import Link from "next/link";
import useIsMdScreen from "../../hooks/useIsMdScreen";
import { MdCallEnd } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import {getTimeLeft} from '../../utils/getTimeLeft'

type BookingData = {
  id: number;
  name: string;
  callType: string;
  timeLeft: string;
  date: string;
  status: string;
  callJoined: boolean;
  categoryType: string;
  occasion: string;
  expectedDate: string;
  timeSlot: string;
};

type Props = {
  currentOrders: BookingData[];
  handleJoinCall: () => void;
  createRoomId:string
};

const BookingCards = ({ currentOrders,handleJoinCall,createRoomId }: Props) => {
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [selectedBooking, setSelectedBooking] = useState<BookingData | null>(
    null
  );

  const isMdScreen: boolean = useIsMdScreen();
  const handleRatingChange = (id: number, newRating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: newRating,
    }));
  };
  const handleJoin = () => {
    handleJoinCall()
  };

  const toggleContent = (id: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setSelectedBooking(null);
  };
  const selectedCall = (call: BookingData) => {
    setSelectedBooking(call);
    setShowOverlay(!showOverlay);
  };

  return (
    <div>
      {currentOrders.map((call) => (
        <div key={`item-${call.id}`} className="rounded-md text-sm m-2">
          <h3 className="text-sm text-white mb-2">{call.callType}</h3>
          {!isMdScreen && call.status == "Active" && (
            <div className="m-3 mx-1  p-3 rounded-lg bg-gray-700">
              <div className="flex justify-between ">
                <div className="flex text-xs md:text-[14px]  space-x-1 md:space-x-3 justify-center items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
                    className="h-16 w-16 rounded-2xl"
                    alt="User"
                  />
                  <div className=" text-gray-300 text-lg p-1 md:p-0">
                    <span className="font-medium  md:text-gray-300">
                      {call.name}
                    </span>
                    <div className="block md:hidden  text-[16px]">
                      <p className="flex justify-start items-center text-[14px] ">
                      {getTimeLeft(call.expectedDate,call.timeSlot)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="p-2 rounded-full  bg-red-600">
                    <MdCallEnd size={25} />
                  </div>
                  <Link href={`/videoCall/${createRoomId}`}>
                    <div className="p-2 rounded-full  bg-blue-600">
                      <LuPhoneCall size={25} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div
            className={`bg-gray-700 m-1  md:m-0 p-2 md:p-3  rounded-md space-y-2 ${
              !isMdScreen && call.status == "Active" && "hidden"
            }`}
            onClick={() => selectedCall(call)}
          >
            <div className="flex md:flex-col justify-start items-start md:justify-between md:items-stretch">
              <div className="flex justify-between">
                <div className="flex text-xs md:text-[14px]  space-x-1 md:space-x-3 justify-center items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
                    className="h-[60px] w-[60px] md:h-10 md:w-10 rounded-md md:rounded-full"
                    alt="User"
                  />
                  <div className="space-y-2 text-gray-300 p-1 md:p-0">
                    <span className="md:font-medium text-[14px] md:text-[16px] md:text-gray-300">
                      {call.name}
                    </span>

                    <div className="block md:hidden space-y-1.5 text-[14px]">
                      <p className="flex justify-start items-center text-[12px] ">
                        <MdDateRange size={20} /> : {call.date}
                      </p>
                      <p className="flex justify-start items-center ">
                        <IoIosAlarm size={20} /> : {getTimeLeft(call.expectedDate,call.timeSlot)}
                      </p>
                    </div>
                  </div>
                </div>
                <p
                  className={`px-3 p-1 h-6  hidden md:block  text-xs rounded-md ${
                    call.status === "Active"
                      ? "bg-green-400"
                      : call.status === "upcomming"
                      ? "bg-yellow-400"
                      : "bg-purple-400"
                  }`}
                >
                  {call.status}
                </p>
              </div>
              <div className="flex justify-between">
                <p
                  className={` text-[15px] md:text-xs ml-8 md:ml-0 ${
                    call.status === "Active"
                      ? "text-green-400"
                      : call.status === "upcomming"
                      ? "text-blue-400"
                      : "text-yellow-400"
                  }`}
                >
                  {call.status === "Active"
                    ? `Starts In: ${getTimeLeft(call.expectedDate,call.timeSlot)}`
                    : `Call starts in: ${getTimeLeft(call.expectedDate,call.timeSlot)}`}
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-between text-[13px]">
                <span className="font-medium">Date</span>
                <p className="text-gray-300">{formatDate(call.date)}</p>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="font-medium">Time Slot</span>
                <p className="text-gray-300">{call.timeSlot}</p>
              </div>
            </div>
            <div className="w-full">
              <div className="hidden md:flex justify-end items-center text-[13px] space-x-2 cursor-pointer hover:text-white">
                <div
                  className="flex justify-end items-center text-[13px] space-x-2 cursor-pointer hover:text-white"
                  onClick={() => toggleContent(call.id)}
                >
                  <p className="text-gray-400 transition-colors duration-200">
                    {expandedItems[call.id] ? "Show Less" : "Show More"}
                  </p>
                  {expandedItems[call.id] ? (
                    <SlArrowUp className="text-gray-300 transition-transform duration-200" />
                  ) : (
                    <SlArrowDown className="text-gray-300 transition-transform duration-200" />
                  )}
                </div>
              </div>

              {expandedItems[call.id] && (
                <div className="space-y-1 hidden md:block">
                  <div className="flex justify-between text-[13px] pt-1">
                    <span className="font-medium">Occasion</span>
                    <p className="text-gray-300">{call.occasion}</p>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="font-medium">Category Type</span>
                    <p className="text-gray-300">{call.categoryType}</p>
                  </div>
                  <div className="flex justify-between text-[13px] bg-blue-600 p-[lrem] px-2 rounded-md">
                    <span className="font-medium">Expected Date</span>
                    <p className="text-gray-300">{call.expectedDate}</p>
                  </div>
                </div>
              )}
              <div className="mt-3 md:mt-0">
                <div className="w-[97%] h-[0.5px] hidden md:block mx-3 my-2 bg-gray-400"></div>
                <div className="flex justify-between mt-2 text-xs">
                  <div>
                    <button
                      className={` border border-white md:border-none ${
                        call.status != "History" &&
                        " md:bg-red-500 px-10 py-2 md:px-6 "
                      } rounded-md`}
                    >
                      {call.status != "History" ? "Cancel" : "Need Help?"}
                    </button>
                  </div>
                  {call.status !== "History" ? (
                    <div className="flex">
                      <button className="py-2  md:block px-6 border-[1px] mr-3 border-gray-400 rounded-md">
                        Re-Schedule
                      </button>
                      <Link href={`/videoCall/${createRoomId}`}>
                        <button
                          className={`px-10 py-2 md:px-6 rounded-md ${
                            call.status === "Active"
                              ? "bg-blue-600"
                              : "opacity-50 cursor-not-allowed bg-gray-600"
                          } ${
                            !(isMdScreen || call.status === "Active")
                              ? "hidden"
                              : ""
                          }`}
                          onClick={
                            call.status === "Active" ? handleJoin : undefined
                          }
                          disabled={call.status !== "Active"}
                        >
                          Join Call
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex space-x-3 justify-center items-center text-sm">
                      <p>Rate User</p>
                      <StarRating
                        rating={ratings[call.id] || 0}
                        onRatingChange={(newRating) =>
                          handleRatingChange(call.id, newRating)
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {!isMdScreen && showOverlay && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center  items-end">
          <div
            className="bg-gray-800 w-full text-white p-6 pb-10 rounded-t-md max-w-lg transform translate-y-0 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
              onClick={closeOverlay}
            >
              <TfiLayoutLineSolid size={50} />
            </div>
            <div className="space-y-2">
              <h3 className="m-4 ml-0"> {selectedBooking.callType} Details</h3>
              <div className="flex space-x-4 text-yellow-400">
                <span className="font-medium">Starts in:</span>
                <span>{getTimeLeft(selectedBooking.expectedDate,selectedBooking.timeSlot)}</span>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
                  className="h-10 w-10 rounded-full"
                  alt={selectedBooking.name}
                />
                <span>{selectedBooking.name}</span>
              </div>
              <div className="bg-gray-700 p-2 space-y-3  rounded-lg">
                <div className="flex justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{selectedBooking.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time Slot:</span>
                  <span>{selectedBooking.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time Left:</span>
                  <span>{selectedBooking.timeLeft}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Paid:</span>
                  <span>20$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCards;
