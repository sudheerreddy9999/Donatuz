import React from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
interface PageNationProps {
  itemsPerPage: number;
  currentPage: number;
  handlePageChange: (newPage: number) => void;
  totalPages: number;
}

const PageNation = ({
  itemsPerPage,
  currentPage,
  handlePageChange,
  totalPages,
}: PageNationProps) => {
  return (
    <div className="flex items-center justify-between w-full ">
      <div className="text-white text-xs">{itemsPerPage} Items</div>
      <div className="flex justify-center items-center space-x-2  ">
        {currentPage !== 1 && (
          <div className="border border-blue-500 p-1.5 rounded">
            <SlArrowLeft
              onClick={() => handlePageChange(currentPage - 1)}
              className={`text-xs font-bold cursor-pointer`}
            />
          </div>
        )}
        <div className="flex space-x-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={`page-${index}`}
              onClick={() => handlePageChange(index + 1)}
              className={`px-2 py-1 mr-2 text-xs font-medium rounded cursor-pointer transition duration-200 ease-in-out ${
                currentPage === index + 1
                  ? " text-white bg-gradient-to-r from-gray-600 pr-3 to-blue-600"
                  : "bg-gray-700 bg-transparent border border-blue-800 hover:bg-gray-600 hover:text-white"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        {currentPage !== totalPages && (
          <div className="border border-blue-500 p-1.5 rounded">
            <SlArrowRight
              onClick={() => handlePageChange(currentPage + 1)}
              className={`text-xs cursor-pointer`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageNation;
