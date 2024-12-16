import { useEffect, useState } from "react";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import StarRating from "./StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { calculateMinutes } from "../utils/dateTimeUtils";
import useIsMdScreen from "../hooks/useIsMdScreen";

type Timeslot = {
  slot: string;
  isBooked: boolean;
};
interface ButtonProps {
  className?: string;
  onClick?: () => void;
  slideCount?: number;
  currentSlide?: number;
}

type UserSlotsData = {
  date: string;
  pricePerDuration: string[];
  timeslots: {
    morning: Timeslot[];
    afternoon: Timeslot[];
    evening: Timeslot[];
  };
};

type CallInfo = {
  user: {
    name: string;
    username: string;
    rating: number;
    profileImage: string;
  };
  userSlotsData: UserSlotsData[];
};
type BookCallComp1Props = {
  callInfo: CallInfo | null;
};
const PreviousBtn: React.FC<ButtonProps> = ({
  className,
  onClick,
  currentSlide,
}) => {
  return (
    <>
      {currentSlide !== 0 && (
        <div
          className={className}
          onClick={onClick}
          style={{
            position: "absolute",
            top: "42px",
            left: "6px",
            zIndex: "999",
            height: "44px",
          }}
        >
          <div
            className="
      absolute top-0 left-0 right-0 bottom-0 
      h-[108px] w-[30px]  
      bg-gray-800 
      opacity-80  
      blur-md
      -z-10
    "
            style={{ marginTop: "-28px", marginLeft: "-20px" }}
          ></div>

          {/* Icon without blur */}
          <MdArrowBackIos
            style={{ marginTop: "15px", marginLeft: "-10px" }}
            className="text-gray-300 text-xl"
          />
        </div>
      )}
    </>
  );
};
const NextBtn: React.FC<ButtonProps> = ({
  className,
  onClick,
  slideCount,
  currentSlide,
}) => {
  return (
    <>
      {currentSlide !== (slideCount ?? 0) - 8.5 && (
        <div className={className} onClick={onClick}>
          <div
            className="
            absolute top-0 left-0 right-0 bottom-0 
            h-[100px] w-[25px] 
            bg-gray-800
            opacity-80 
            blur-sm
            rounded-md 
            -z-10
          "
            style={{ marginTop: "-42px", marginLeft: "-20px" }}
          ></div>
          <MdArrowForwardIos
            style={{ marginTop: "-5px", marginLeft: "-15px" }}
            className="text-gray-300 text-xl"
          />
        </div>
      )}
    </>
  );
};
const settings = {
  arrows: true,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8.5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const BookCallComp1: React.FC<BookCallComp1Props> = ({ callInfo }) => {
  const [data, setData] = useState<CallInfo | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [liked, setLiked] = useState<boolean>(false);
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [enableErrorMessage, setEnableErrorMessage] = useState<boolean>(false);
  const [selectedPeriod, setSelectedPeriod] = useState<
    "morning" | "afternoon" | "evening"
  >("morning");

  const router = useRouter();
  const isMdScreen: any = useIsMdScreen();

  const handlePeriodClick = (period: "morning" | "afternoon" | "evening") => {
    setSelectedPeriod(period);
  };
  useEffect(() => {
    if (callInfo && Object.keys(callInfo).length > 0) {
      setData(callInfo);
      setSelectedDate(callInfo?.userSlotsData[0]?.date);
    }
  }, [callInfo]);
  const isButtonEnabled = selectedDate && selectedDuration && selectedTimeSlot;
  const handleSelection = (type: string, value: string) => {
    switch (type) {
      case "date":
        setSelectedDate(value);
        setSelectedDuration("");
        setSelectedTimeSlot("");
        const selectedSlotData = data?.userSlotsData?.find(
          (slotData) => slotData.date === value
        );
        if (!selectedSlotData) {
          return;
        }
        break;

      case "duration":
        setEnableErrorMessage(false);
        setSelectedTimeSlot("");
        setSelectedDuration(value);
        break;

      case "timeSlot":
        if (!selectedDuration) {
          setEnableErrorMessage(true);
          setSelectedTimeSlot("");
          return;
        }
        setSelectedTimeSlot(value);
        break;

      default:
        console.warn("Invalid selection type:", type);
    }
  };

  const handleContinue = () => {
    console.log("Selected Date:", selectedDate);
    console.log("Selected Duration:", selectedDuration);
    console.log("Selected Time Slot:", selectedTimeSlot);
    router.push("/paymentPages");
  };

  const toggleHeart = () => {
    setLiked((prev) => !prev);
  };
  const formatDate = (dateStr: string) => {
    const [dayWithSuffix, month] = dateStr.split(" ");
    const day = parseInt(dayWithSuffix, 10);
    const date = new Date(`${month} ${day}, 2024`);
    const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });

    return (
      <div className="text-center">
        <div className="font-semibold text-sm md:text-base">
          {dayWithSuffix}
        </div>
        <div className="text-xs md:text-sm">{month}</div>
        <div className="text-[10px] md:text-xs">{dayOfWeek}</div>
      </div>
    );
  };
  const renderButtons = () =>
    data?.userSlotsData.map((slotData, index) => (
      <div key={index} className="md:px-1">
        <div
          className={`${
            selectedDate === slotData.date
              ? "md:p-[1px] md:bg-gradient-to-r from-gray-300 to-blue-500 md:rounded-lg"
              : ""
          }`}
        >
          <div
            className={`${
              selectedDate === slotData.date &&
              "md:p-[2px] bg-gray-700 md:rounded-lg md:border-2 border-transparent bg-clip-border"
            }`}
          >
            <button
              onClick={() => handleSelection("date", slotData.date)}
              className={`py-3 md:py-3 px-6 md:px-0 md:w-full md:rounded-lg transition duration-200 ease-in-out transform ${
                selectedDate === slotData.date
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-700 text-gray-400 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              }`}
            >
              {formatDate(slotData.date)}
            </button>
          </div>
        </div>
      </div>
    ));
  const filterSlotsByDuration = (slots: any, selectedDuration: any) => {
    return slots.filter((slot: any) => {
      if (!selectedDuration) return true;

      const durationInMinutes = calculateMinutes(selectedDuration);

      const [startHour, startMinutes] = slot.slot
        .split("-")[0]
        .split(":")
        .map(Number);
      const [endHour, endMinutes] = slot.slot
        .split("-")[1]
        .split(":")
        .map(Number);

      const slotDuration =
        endHour * 60 + endMinutes - (startHour * 60 + startMinutes);
      return slotDuration >= durationInMinutes;
    });
  };
  return (
    <div>
      <div className="flex items-center mb-4 mt-2 mx-5">
        <Link
          href="/"
          className="flex gap-3 my-auto items-center align-middle justify-center"
        >
          <FaArrowLeftLong size={isMdScreen ? 20 : 25} />
          <span className="my-auto text-sm md:text-base">
            {isMdScreen ? "Back to Profile" : "Book Call"}
          </span>
        </Link>
      </div>
      <div className=" text-white md:mx-3 h-[530px]  md:pl-4 md:pr-8 md:h-[540px] md:bg-gray-800 rounded-lg bg-opacity-50 shadow-lg backdrop-blur-md overflow-auto no-scrollbar ">
        <div>
          <div className="items-center hidden md:flex">
            <h1 className="text-[16px] ml-4 py-3 ">Book Call</h1>
          </div>
          <div className="w-full">
            <div className="w-full flex">
              <div className="hidden sm:block md:rounded-lg px-2 w-4/12">
                <div
                  className={`relative w-full h-[275px] rounded-lg mb-2 bg-gray-600 ${
                    !data?.user?.profileImage &&
                    "animate-pulse transition duration-200 ease-in-out transform"
                  }`}
                >
                  {data?.user?.profileImage ? (
                    <img
                      src={data.user.profileImage}
                      alt="Profile"
                      className="w-full h-full rounded-md mb-2 object-cover"
                    />
                  ) : null}
                  <div
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={toggleHeart}
                  >
                    {liked ? (
                      <FaHeart size={25} className="text-red-500" />
                    ) : (
                      <FaRegHeart size={25} className="text-white" />
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="h-12 rounded w-7/12">
                    <h3
                      className={`h-6 w-48 rounded-lg ${
                        !data?.user?.name &&
                        "animate-pulse transition mb-2 duration-200 ease-in-out transform bg-gray-600"
                      } `}
                    >
                      {data?.user?.name}
                    </h3>
                    <h3
                      className={`text-xs font-semibold h-4 w-40 rounded-lg text-gray-300 mb-2 ${
                        !data?.user?.username &&
                        "animate-pulse transition duration-200 ease-in-out transform  bg-gray-600"
                      } `}
                    >
                      {data?.user?.username}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center">
                    <StarRating rating={data?.user?.rating || 0} />
                    <span className="ml-2 text-sm">
                      {data?.user?.rating?.toFixed(2) || "0.00"}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-full bg-gray-600 h-[1px] mx-0 ${
                    !data?.user?.username && "mt-4"
                  }`}
                ></div>
                {data?.user.name ? (
                  <div className="h-32 mt-2">
                    <p className="text-left text-[13px]">
                      What is this call about? (Optional)
                    </p>
                    <textarea
                      className="w-full mt-2 text-sm p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Write Here..."
                      rows={5}
                    ></textarea>
                  </div>
                ) : (
                  <div className="h-32 md:rounded-lg bg-gray-600   my-4 animate-pulse transition duration-200 ease-in-out transform"></div>
                )}
              </div>
              {data ? (
                <div className="w-full pt-0  md:rounded-lg md:w-8/12 md:pl-6  col-span-2 ">
                  <div>
                    <h3 className="mb-2  text-[13.5px] font-semibold hidden md:flex">
                      Select Date
                    </h3>
                    {isMdScreen ? (
                      <Slider {...settings} className="custom-carousel">
                        {renderButtons()}
                      </Slider>
                    ) : (
                      <div className="flex overflow-auto md:overflow-hidden no-scrollbar">
                        {renderButtons()}
                      </div>
                    )}
                  </div>

                  <div className="m-2 0my-6 p-2 rounded-lg bg-slate-800 border border-transparent md:m-0 md:p-0 md:bg-transparent">
                    <h3 className={` py-1 text-[13.5px] font-medium`}>
                      Select Duration
                    </h3>
                    <div
                      className={`grid grid-cols-3 gap-2 md:flex md:gap-2 ${
                        enableErrorMessage
                          ? "border border-red-900 rounded-md p-2"
                          : ""
                      }`}
                    >
                      {data?.userSlotsData
                        .find((slotData) => slotData.date === selectedDate)
                        ?.pricePerDuration.map((duration, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSelection("duration", duration)
                            }
                            className={`text-xs p-[0.3rem] m-1 md:px-6 md:py-[10px] md:text-sm rounded transition duration-200 ease-in-out transform ${
                              selectedDuration === duration
                                ? "bg-blue-600 text-white border-2 md:py-[8px] border-white shadow-md"
                                : "bg-gray-700 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            } ${index === 3 ? "col-span-1" : ""} ${
                              index === 4 ? "col-span-2" : ""
                            }`}
                          >
                            {duration}
                          </button>
                        ))}
                    </div>
                    {enableErrorMessage && (
                      <div className="relative mt-3">
                        <div className="absolute -top-2 left-4 w-3  h-3 bg-red-900 rotate-45"></div>
                        <div className="p-2 rounded bg-red-900 text-gray-300 text-xs md:text-sm shadow-md">
                          <p>
                            Please select a duration first to enable time slot
                            selection.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="m-2 md:m-1">
                    <h3 className="mb-2 text-gray-400 md:text-white md:text-sm  font-semibold">
                      Select Time slot
                    </h3>
                    <div>
                      {!isMdScreen ? (
                        <div>
                          <div className="flex justify-between my-1 md:my-6 bg-gray-800  rounded-lg">
                            {["morning", "afternoon", "evening"].map(
                              (period: any) => (
                                <button
                                  key={period}
                                  onClick={() => handlePeriodClick(period)}
                                  className={`text-xs  text-gray-600 py-3 px-4 ${
                                    selectedPeriod === period
                                      ? "text-white my-1"
                                      : ""
                                  }`}
                                >
                                  {period.charAt(0).toUpperCase() +
                                    period.slice(1)}
                                </button>
                              )
                            )}
                          </div>
                          <div className="flex flex-col my-2 bg-gray-900 p-4 pt-2 rounded-lg space-y-4">
                            <div className="space-y-1">
                              <h3 className="text-white text-xs">
                                {selectedPeriod.charAt(0).toUpperCase() +
                                  selectedPeriod.slice(1)}
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                {data?.userSlotsData.find(
                                  (slotData) => slotData.date === selectedDate
                                )?.timeslots[selectedPeriod] &&
                                  filterSlotsByDuration(
                                    data.userSlotsData.find(
                                      (slotData) =>
                                        slotData.date === selectedDate
                                    )?.timeslots[selectedPeriod],
                                    selectedDuration
                                  ).map((slot: any, index: number) => (
                                    <button
                                      key={index}
                                      onClick={() =>
                                        handleSelection("timeSlot", slot.slot)
                                      }
                                      className={`py-[8px] text-xs rounded transition duration-200 ease-in-out transform ${
                                        selectedTimeSlot === slot.slot
                                          ? "bg-blue-600 py-[10px] text-gray-300 border-2 border-white shadow-md"
                                          : "bg-gray-700 text-sm hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      }`}
                                    >
                                      {slot.slot}
                                    </button>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {(["morning", "afternoon", "evening"] as const).map(
                            (period) => {
                              const slotsForPeriod = data?.userSlotsData.find(
                                (slotData) => slotData.date === selectedDate
                              )?.timeslots[period];

                              const filteredSlots = filterSlotsByDuration(
                                slotsForPeriod || [],
                                selectedDuration
                              );

                              return (
                                <div key={period}>
                                  <p className="text-white text-sm p-1">
                                    {period.charAt(0).toUpperCase() +
                                      period.slice(1)}
                                  </p>
                                  <div className="grid grid-cols-5 gap-2 mt-1">
                                    {filteredSlots.map(
                                      (slot: any, index: any) => (
                                        <button
                                          key={index}
                                          onClick={() =>
                                            handleSelection(
                                              "timeSlot",
                                              slot.slot
                                            )
                                          }
                                          className={`py-[10px] text-sm rounded transition duration-200 ease-in-out transform ${
                                            selectedTimeSlot === slot.slot &&
                                            selectedDuration
                                              ? "bg-blue-600 py-[8px] text-white border-2 border-white shadow-md"
                                              : "bg-gray-700 text-sm hover:bg-blue-500 hover:text-white"
                                          }`}
                                        >
                                          {slot.slot}
                                        </button>
                                      )
                                    )}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  {isMdScreen || (selectedDuration && selectedTimeSlot) ? (
                    <div className=" flex justify-end mt-2">
                      <button
                        onClick={handleContinue}
                        className="px-16 py-2  bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!isButtonEnabled}
                      >
                        Continue
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <div className="p-4 pt-0 rounded-lg col-span-2">
                  <h3 className="text-sm font-semibold h-8 bg-gray-600 rounded-lg mb-4 w-2/12 animate-pulse transition duration-200 ease-in-out transform"></h3>
                  <div className="flex">
                    {[...Array(7)].map((_, index) => (
                      <div key={index} className="px-1 flex custom-carousel">
                        <button
                          className={`px-1 py-4 w-24  bg-gray-500 animate-pulse text-sm rounded-lg transition duration-200 ease-in-out transform`}
                        >
                          <div className="text-center space-y-2 w-14 flex flex-col justify-center items-center">
                            <div className="font-bold h-3 bg-gray-300"></div>
                            <div className="text-sm h-3 bg-gray-300"></div>
                            <div className="text-xs h-3 bg-gray-300"></div>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                  {[...Array(3)].map((_, index) => (
                    <div className="mt-6" key={index}>
                      <h3 className="text-sm font-semibold h-8 bg-gray-600 rounded-lg mb-4 w-2/12 animate-pulse transition duration-200 ease-in-out transform"></h3>
                      <div className="flex gap-2 overflow-x-auto">
                        {[...Array(5)].map((_, index) => (
                          <button
                            key={index}
                            className={`px-8 h-8 w-36 bg-gray-500 animate-pulse text-sm rounded-lg transition duration-200 ease-in-out transform`}
                          ></button>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="mt-8 flex justify-end">
                    <h3 className="text-sm font-semibold h-8 bg-gray-600 rounded-lg mb-4 w-2/12 animate-pulse transition duration-200 ease-in-out transform"></h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCallComp1;
