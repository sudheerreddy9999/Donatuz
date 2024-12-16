"use client";
import { useState, useEffect, ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import { FaSearch, FaSort, FaCalendarAlt, FaFilter } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Data from "../Jsons/jsonData.js";
import { getTimeCategory } from "../utils/dateTimeUtils";
import OrderInfoBox from "../components/Orders/OrderInfoBox";
import BookingCards from "../components/Orders/BookingCardsCompo";
import PageNation from "../components/Pagenation";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import axios from "axios";
type CallData = {
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

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Calls");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Latest");
  const [timeSlot, setTimeSlot] = useState("all");
  const [selectedTab, setSelectedTab] = useState("Active");
  const [isMdScreen, setIsMdScreen] = useState<boolean>(false);
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [createRoomId, setCreateRoomId] = useState<string>("");
  const [data, setData] = useState<CallData[]>([]);
  const [filteredByStatus, setFilteredByStatus] = useState<CallData[]>([]);
  const [dateRange, setDateRange] = useState({
    start: "2023-09-01",
    end: "2024-12-30",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  useEffect(() => {
    setTimeout(() => {
      const orders = Data.OrdersData;
      setData(orders);
      filterData(orders, selectedTab, timeSlot, dateRange, searchQuery);
    }, 2000);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMdScreen(window.innerWidth >= 768);
      };
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isWithinDateRange = (
    date: string,
    range: { start: string; end: string }
  ) => {
    const callDate = new Date(date).getTime();
    const startDate = new Date(range.start).getTime();
    const endDate = new Date(range.end).getTime();
    return callDate >= startDate && callDate <= endDate;
  };

  const matchesSearchQuery = (call: CallData, query: string) => {
    if (!query) return true;
    return (
      call.name.toLowerCase().includes(query.toLowerCase()) ||
      call.status.toLowerCase().includes(query.toLowerCase()) ||
      call.timeSlot.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filterData = (
    data: CallData[],
    tab: string,
    slot: string,
    range: { start: string; end: string },
    query: string
  ) => {
    let filtered = data.filter((call) =>
      tab === "Active"
        ? call.status === "Active" || call.status === "upcomming"
        : call.status === "History"
    );

    if (slot !== "all") {
      filtered = filtered.filter(
        (order) => getTimeCategory(order.timeSlot) === slot
      );
    }

    filtered = filtered.filter((call) => isWithinDateRange(call.date, range));

    if (query) {
      filtered = filtered.filter((call) => matchesSearchQuery(call, query));
    }

    setFilteredByStatus(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    filterData(data, selectedTab, timeSlot, dateRange, searchQuery);
  }, [selectedTab, timeSlot, dateRange, searchQuery, data]);
  const handleSortBySlot = (value: string) => {
    setTimeSlot(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredByStatus.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredByStatus.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {}, [currentPage, filteredByStatus]);

  const manageSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };
  const handleJoinCall = ()=>{
    handleRoomId();
  }
  const handleRoomId = async () => {
    try {
      const response = await axios.post(
        "https://api.huddle01.com/api/v1/create-room",
        {
          roomLocked: false,
          metadata: {
            title: "donatuz",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "ak_YMJUqWDWp3XJYJWc",
          },
        }
      );
      setCreateRoomId(response.data.data.roomId);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleRoomId();
  }, []);
   const displaySkeleton = (count: number): ReactNode => {
    return (
      <div className=" my-7 p-3 bg-gray-800  rounded-md">
        <div className="h-4  w-32 my-2  animate-pulse transition duration-200 ease-in-out transform   bg-gray-600 mt-3  rounded-md"></div>
        {Array(count)
          .fill(null)
          .map((_, idx) => (
            <div
              key={idx}
              className="text-center  flex justify-between items-center"
            >
              <div className="flex justify-center items-center  my-2">
                <div className="h-10 w-10 rounded-full animate-pulse transition duration-200 ease-in-out transform bg-gray-600 "></div>
                <div>
                  <div className="h-3 mx-4 w-24 my-2 animate-pulse transition duration-200 ease-in-out transform bg-gray-600 rounded-md"></div>
                  <div className="h-3 mx-4 w-16 animate-pulse transition duration-200 ease-in-out transform bg-gray-600 rounded-md"></div>
                </div>
              </div>
              <div className="flex">
                {" "}
                <div className="h-8 w-8 mr-2 rounded-md animate-pulse transition duration-200 ease-in-out transform bg-gray-600"></div>
                <button className="p-2  rounded-full animate-pulse transition duration-200 ease-in-out transform bg-gray-600">
                  <BiDotsVerticalRounded size={20} />
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div>
      <div className="w-full h-screen md:h-screen md:bg-gray-900 rounded-lg bg-opacity-50 shadow-lg backdrop-blur-md 0 flex items-center justify-center">
        <Sidebar />
        <div className="md:w-[1230px] w-full md:h-[610px] absolute top-0 md:top-24 flex left-1 md:left-[240px] md:space-x-3 text-white  rounded-lg overflow-auto">
          <div className="text-white md:p-2  w-full  md:w-9/12">
            <div
              className={`flex md:space-x-8 md:w-8/12 md:p-2 md:px-6 rounded-lg ${
                data.length === 0
                  ? "h-12 animate-pulse transition duration-200 ease-in-out transform bg-gray-600"
                  : "bg-[#ffffff1a] backdrop-blur-[11.6px] rounded-md"
              } md:flex hidden`}
            >
              {data.length !== 0 &&
                ["Calls", "Cameos"].map((tab, index) => (
                  <button
                    key={`tab-${index}`}
                    onClick={() => setActiveTab(tab)}
                    className={`px-28 py-2 rounded-lg text-sm ${
                      activeTab === tab
                        ? "bg-blue-600 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
            </div>

            {activeTab === "Calls" && (
              <div className="md:bg-gradient-to-r from-gray-600 to-transparent  bg-opacity-50 shadow-lg backdrop-blur-[11.6px] md:mt-4 text-white  md:p-3 rounded-t-md">
                <div className="flex-col">
                  <div className="flex justify-between w-full mb-4">
                    <div className=" w-full">
                      <div className="flex mb-4 bg-gray-900 p-6 w-1/2 sm:hidden">
                        <Link
                          href="/"
                          className="flex  text-2xl space-x-4 items-center"
                        >
                          <GoArrowLeft size={30} /> <p>Calls</p>{" "}
                        </Link>
                      </div>
                      <div className="flex md:space-x-6 mx-6  md:mx-0  bg-gray-800 rounded-lg  md:ml-0 px-7 md:px-0 sm:bg-transparent">
                        <button
                          onClick={() => setSelectedTab("Active")}
                          className={`text-sm  px-14  py-2 md:px-0  md:py-0 ${
                            selectedTab === "Active"
                              ? "border-b-2 border-blue-500"
                              : "text-gray-400"
                          } ${
                            selectedTab === "Active" &&
                            !isMdScreen &&
                            data.length !== 0
                              ? "bg-blue-500 rounded-lg  m-2"
                              : ""
                          }`}
                        >
                          Active
                        </button>
                        <button
                          onClick={() => setSelectedTab("History")}
                          className={`text-sm px-14 py-2  md:px-0 md:py-0 ${
                            selectedTab === "History"
                              ? "border-b-2 border-blue-500"
                              : "text-gray-400"
                          } ${
                            selectedTab === "History" && !isMdScreen
                              ? "bg-blue-500 rounded-lg  m-2"
                              : ""
                          }`}
                        >
                          History
                        </button>
                      </div>
                    </div>
                    <div
                      className={`flex items-center justify-end md:flex-row-reverse md:bg-gray-700 h-6 md:h-8 md:mt-0 md:px-3 md:py-2 md:rounded-md  ${
                        !isMdScreen
                          ? " absolute bg-gray-900 w-[61.6%]  ml-[38%]  py-[40px]"
                          : "md:w-1/3"
                      }`}
                    >
                      {(showSearchBox || isMdScreen) && data.length !== 0 && (
                        <input
                          type="text"
                          placeholder={isMdScreen ? "Search" : ""}
                          className="appearance-none bg-gray-700 md:bg-transparent h-9  rounded-md text-sm w-full focus:outline-none mr-2"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      )}
                      {data.length !== 0 && (
                        <FaSearch
                          className={`text-gray-400 text-sm mr-3  cursor-pointer`}
                          size={isMdScreen ? 15 : 30}
                          onClick={manageSearchBox}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end  md:justify-between items-center space-x-2">
                    <div className="hidden md:flex justify-center items-center space-x-3">
                      <p className="text-gray-400 text-sm">Sort By:</p>
                      <div className="flex items-center bg-gray-700 px-3 py-2 rounded-md">
                        <FaSort className="text-gray-400 text-sm mr-2" />
                        <select
                          value={sortOrder}
                          onChange={(e) => setSortOrder(e.target.value)}
                          className="bg-gray-700 text-xs text-white outline-none"
                        >
                          <option value="Latest" className="">
                            Latest
                          </option>
                          <option value="Oldest">Oldest</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700 px-3 py-2 rounded-md">
                        <FaCalendarAlt className="text-gray-400 text-sm mr-2" />
                        <input
                          type="date"
                          className="bg-gray-700 text-xs text-white rounded-md"
                          value={dateRange.start}
                          onChange={(e) =>
                            setDateRange((prev) => ({
                              ...prev,
                              start: e.target.value,
                            }))
                          }
                        />
                        <span className="text-gray-400 text-sm">-</span>
                        <input
                          type="date"
                          className="bg-gray-700 text-xs text-white rounded-md"
                          value={dateRange.end}
                          onChange={(e) =>
                            setDateRange((prev) => ({
                              ...prev,
                              end: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center pr-3 md:pr-0">
                      <FaFilter className="text-gray-400 text-xs mr-1" />
                      <p className="text-sm text-gray-400 pr-2">Filter : </p>
                      <div className="flex items-center bg-gray-700 px-3 py-2 rounded-md">
                        <select
                          value={timeSlot}
                          onChange={(e) => handleSortBySlot(e.target.value)}
                          className="bg-gray-700 text-xs text-white outline-none"
                        >
                          <option value="all">All</option>
                          <option value="Mornings">Mornings</option>
                          <option value="Afternoons">Afternoons</option>
                          <option value="Evenings">Evenings</option>
                          <option value="Nights">Nights</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {!isMdScreen && data.length !== 0 && <OrderInfoBox BookingsInfo={[Data.callsData[0]]} />} */}
                <div
                  className={`flex flex-col space-y-6 mt-3 h-[400px] md:h-[361px] overflow-y-auto no-scrollbar`}
                >
                  {data.length ? (
                    <div>
                      <BookingCards
                        currentOrders={
                          isMdScreen ? currentItems : filteredByStatus
                        }
                        handleJoinCall={handleJoinCall}
                        createRoomId={createRoomId}
                      />
                    </div>
                  ) : (
                    <>
                      <div className="h-4 p-3 w-32 my-2 bg-gray-500 rounded-md"></div>
                      {Array(2)
                        .fill(null)
                        .map((_, idx) => (
                          <div
                            key={`skeleton-${idx}`}
                            className="bg-gray-800 my-2 rounded-md p-3"
                          >
                            <div className="text-center flex justify-between items-center">
                              <div className="flex justify-center items-center my-2">
                                <div className="h-10 w-10 animate-pulse transition duration-200 ease-in-out transform bg-gray-600 rounded-full"></div>
                                <div>
                                  <div className="h-3 mx-1 w-24 my-2 animate-pulse transition duration-200 ease-in-out transform bg-gray-600 rounded-md"></div>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="h-4 w-16 mx-2 animate-pulse transition duration-200 ease-in-out transform bg-gray-600 rounded-md"></div>
                              </div>
                            </div>
                            <div className="text-center flex justify-between items-center">
                              <div className="flex justify-center items-center px-2">
                                <div>
                                  <div className="h-4 mx-1 w-28 my-2 animate-pulse transition duration-200 ease-in-out transform bg-gray-600 rounded-md"></div>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="h-4 w-24 mx-2 bg-gray-500 rounded-md"></div>
                              </div>
                            </div>
                            <div className="text-center flex justify-between items-center">
                              <div className="flex justify-center items-center px-2">
                                <div>
                                  <div className="h-4 mx-1 w-28 my-2 animate-pulse transition duration-200 ease-in-out transform bg-gray-600 rounded-md"></div>
                                </div>
                              </div>
                              <div className="flex">
                                <div className="h-4 w-24 mx-2 animate-pulse transition duration-200 ease-in-out transform bg-gray-600 rounded-md"></div>
                              </div>
                            </div>
                            <div className="text-white animate-pulse transition duration-200 ease-in-out transform bg-gray-600 h-[1px] mt-2 w-full"></div>

                            {/* Action Buttons */}
                            <div className="flex justify-between items-center">
                              <button className="animate-pulse transition duration-200 ease-in-out transform bg-gray-600 w-24 h-8 m-2 text-white text-sm px-4 py-2 rounded"></button>
                              <button className="animate-pulse transition duration-200 ease-in-out transform bg-gray-600 w-24 h-8 m-2 text-white text-sm px-4 py-2 rounded"></button>
                            </div>
                          </div>
                        ))}
                    </>
                  )}
                </div>
              </div>
            )}
            {activeTab == "Calls" && (
              <div className="absolute bottom-0 left-2 right-0 top-[550px] w-[73%] hidden md:flex items-center justify-between bg-gradient-to-r from-gray-700 to-transparent rounded-b-lg bg-opacity-50 shadow-lg backdrop-blur-md p-3">
                <PageNation
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                  totalPages={totalPages}
                />
              </div>
            )}
          </div>
          <div className="hidden md:block w-3/12 space-y-6 h-[601px] overflow-y-auto no-scrollbar">
            <div>
              {data.length !== 0 ? (
                <>
                  <OrderInfoBox BookingsInfo={Data.callsData} createRoomId={createRoomId} />
                </>
              ) : (
                <div className="my-4">
                  {displaySkeleton(1)}
                  {displaySkeleton(2)}
                </div>
              )}
            </div>

            <div
              className={`bg-opacity-50 shadow-lg backdrop-blur-[11.6px]  rounded-md ${
                data.length === 0 ? "bg-gray-700 " : "bg-gray-700 p-2 mr-3 mt-3"
              }`}
            >
              {data.length !== 0 ? (
                <div className="py-2 px-3">
                  <h3 className="font-semibold">Recent Orders</h3>
                  <div>
                    {Array(2)
                      .fill(null)
                      .map((_, index) => (
                        <div key={`order-wrapper-${index}`}>
                          <div className="flex items-center justify-between space-x-3 p-3 rounded-md">
                            <div>
                              <div className="py-2">
                                <p className="text-sm">Order Id: 82728282</p>
                                <p className="text-sm">
                                  Expected Delivery date: Today
                                </p>
                              </div>
                              <div className="flex my-1">
                                <div>
                                  <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                                    alt="avatar"
                                    className="rounded-full w-10 h-10 mr-2"
                                  />
                                </div>
                                <div>
                                  <p className="font-semibold text-xs">Akash</p>
                                  <p className="text-sm text-gray-400">
                                    @akash56
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="p-3 text-white rounded-full transition duration-200 ease-in-out">
                                <BiDotsVerticalRounded size={20} />
                              </button>
                            </div>
                          </div>
                          <div className="w-full h-[1px] bg-gray-500"></div>
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <div>{displaySkeleton(3)}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
