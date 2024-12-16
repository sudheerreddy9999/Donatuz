"use client";

import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { FaArrowLeftLong } from "react-icons/fa6";
import SavedCardComp from "../components/SavedCardComp";
import {  useState } from "react";
import AddCardComp from "../components/AddCardComp";
import BanksComp from "../components/BanksComp";
import PayPalComp from "../components/PayPalComp";

const PaymentPages = () => {
  const [activeComponent, setActiveComponent] = useState<string>("one");

  const renderComponent = () => {
    switch (activeComponent) {
      case "one":
        return <SavedCardComp />;
      case "two":
        return <AddCardComp />;
      case "three":
        return <BanksComp />;
      case "four":
        return <PayPalComp />;
      default:
        return null;
    }
  };

  const data = {
    id: 1,
    Date: "October 30, 2024",
    Duration: "1 hour",
    TimeSlot: "3:00 PM - 4:30 PM",
    BasePrice: "$120",
    PlatformCharges: "$12",
    SalesTax: "$12",
    Total: "$200",
  };

  return (
    <>
      <Sidebar />
      <div className=" w-full h-full md:w-[1250px] md:h-[610px] md:absolute md:top-24 md:left-[270px] text-white">
        <div className="  w-full h-[10%]">
          <div className="flex w-48 h-16 align-middle gap-3 my-auto ">
            <Link
              href="/bookingCall"
              className="flex gap-3 my-auto items-center align-middle justify-center"
            >
              <FaArrowLeftLong size={20} />
              <span className="my-auto">Back to Booking</span>
            </Link>
          </div>
        </div>
        <div className=" w-full h-[90%] flex flex-col-reverse overflow-hidden  md:w-full md:h-[90%] md:flex md:flex-row md:gap-6   ">
          <div className="  w-full h-full  md:w-[60%] md:h-full bg-[#ffffff1a] backdrop-blur-[11.6px] rounded-md md:flex md:flex-col gap-7 md:p-5 ">
            <div>
              <h1 className="text-sm md:text-2xl">Payment Methods</h1>
            </div>
            <div className=" w-full flex  md:flex gap-6">
              <div className="">
                <button
                  onClick={() => setActiveComponent("one")}
                  className={
                    activeComponent === "one"
                      ? "w-[70px] h-[30px] md:w-[90px] md:h-[44px] bg-[#504DFB] rounded-xl"
                      : "w-[70px] h-[30px] md:w-[90px] md:h-[44px] bg-gradient-to-r from-[#505066] to-[#333161] rounded-xl"
                  }
                >
                  Saved
                </button>
              </div>
              <div>
                <button
                  onClick={() => setActiveComponent("two")}
                  className={
                    activeComponent === "two"
                      ? "w-[70px] h-[30px] md:w-[90px] md:h-[44px] bg-[#504DFB] rounded-xl"
                      : "w-[70px] h-[30px] md:w-[90px] md:h-[44px] bg-gradient-to-r from-[#505066] to-[#333161] rounded-xl"
                  }
                >
                  Cards
                </button>
              </div>
              <div>
                <button
                  onClick={() => setActiveComponent("three")}
                  className={
                    activeComponent === "three"
                      ? "w-[70px] h-[30px] md:w-[90px] md:h-[44px] bg-[#504DFB] rounded-xl"
                      : "w-[70px] h-[30px] md:w-[90px] md:h-[44px] bg-gradient-to-r from-[#505066] to-[#333161] rounded-xl"
                  }
                >
                  Banks
                </button>
              </div>
              <div>
                <button
                  onClick={() => setActiveComponent("four")}
                  className={
                    activeComponent === "four"
                      ? "w-[70px] h-[30px] md:w-[90px] md:h-[44px] bg-[#504DFB] rounded-xl"
                      : "w-[70px] h-[30px] md:w-[90px] md:h-[44px] bg-gradient-to-r from-[#505066] to-[#333161] rounded-xl"
                  }
                >
                  PayPal
                </button>
              </div>
            </div>
            <div className="w-full h-fit md:w-full md:h-[60%]  ">
              {renderComponent()}
            </div>
          </div>
          <div className=" w-full h-96 md:w-[40%] md:h-[75%] bg-[#ffffff1a] backdrop-blur-[11.6px] rounded-md flex flex-col gap-7 p-5 ">
            <div>
              <h1 className="text-2xl">Billing Details</h1>
            </div>
            <div className="">
              <div className=" flex flex-col gap-2">
                <div className="flex justify-between">
                  <p>Date</p>
                  <p>{data.Date}</p>
                </div>
                <div className="flex justify-between">
                  <p>Duration</p>
                  <p>{data.Duration}</p>
                </div>
                <div className="flex justify-between">
                  <p>Time Slot</p>
                  <p>{data.TimeSlot}</p>
                </div>
              </div>
              <br />
              <hr className="h-px  border-0 bg-[#ffffff1a] " />
              <br />
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p>Base Price</p>
                  <p>{data.BasePrice}</p>
                </div>
                <div className="flex justify-between">
                  <p>Platform Charges</p>
                  <p>{data.PlatformCharges} </p>
                </div>
                <div className="flex justify-between">
                  <p>Sales Tax</p>
                  <p>{data.SalesTax}</p>
                </div>
              </div>
              <br />
              <hr className="h-px  border-0 bg-[#ffffff1a] " />
              <br />
              <div>
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>{data.Total} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPages;
