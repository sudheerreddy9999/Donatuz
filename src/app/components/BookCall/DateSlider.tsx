import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DateSliderProps {
  data: UserSlotsData[];
  userSelectedDate: string;
  onSelection: (type: string, value: string) => void;
}

type Timeslot = {
  slot: string;
  isBooked: boolean;
};

type UserSlotsData = {
  date: string;
  pricePerDuration: string[];
  timeslots: {
    morning: Timeslot[];
    afternoon: Timeslot[];
    evening: Timeslot[];
  };
};

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  slideCount?: number;
  currentSlide?: number;
}

const PreviousBtn: React.FC<ButtonProps> = ({
  className,
  onClick,
  currentSlide,
}) => (
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
        <MdArrowBackIos
          style={{ marginTop: "15px", marginLeft: "-10px" }}
          className="text-gray-300 text-xl"
        />
      </div>
    )}
  </>
);

const NextBtn: React.FC<ButtonProps> = ({
  className,
  onClick,
  slideCount,
  currentSlide,
}) => (
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

const DateSlider: React.FC<DateSliderProps> = ({
  data,
  userSelectedDate,
  onSelection,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    setSelectedDate(userSelectedDate);
  }, [userSelectedDate, data]);

  const handleSelection = (type: string, value: string) => {
    onSelection(type, value);
  };

  const formatDate = (dateStr: string) => {
    const [dayWithSuffix, month] = dateStr.split(" ");
    const day = parseInt(dayWithSuffix, 10);
    const date = new Date(`${month} ${day}, 2024`);
    const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });

    return (
      <div className="text-center">
        <div className="md:text-base mb-2">
          <p className="font-semibold text-[18px]">{dayWithSuffix}</p>
          <p className="text-xs text-gray-300 md:text-[14px]">{month}</p>
        </div>
        <div className="text-[10px] md:text-xs text-gray-400">{dayOfWeek}</div>
      </div>
    );
  };

  return (
    <div>
      <Slider {...settings} className="custom-carousel">
        {data?.map((slotData, index) => (
          <div key={index} className="md:px-[4px]">
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
                  "md:p-[2px] bg-gray-700  md:rounded-lg md:border-2 border-transparent bg-clip-border"
                }`}
              >
                <button
                  onClick={() => handleSelection("date", slotData.date)}
                  className={`py-[12px] md:w-full md:rounded-lg transition duration-200 ease-in-out transform ${
                    selectedDate === slotData.date
                      ? "bg-[#514DFB] text-white shadow-md"
                      : "bg-[#F1F1F11A]  hover:bg-[#514DFB] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#514DFB]"
                  }`}
                >
                  {formatDate(slotData.date)}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DateSlider;
