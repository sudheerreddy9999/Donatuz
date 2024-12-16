import React from "react";

const BanksComp = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-full bg-[#ffffff1a]">
        <div className="relative w-full h-full flex flex-col  justify-evenly space-y-3 overflow-hidden rounded-md bg-neutral-800 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
          <div className="h-8 w-full rounded-lg bg-neutral-600"></div>
          <div className="h-7 w-full rounded-lg bg-neutral-600"></div>
          <div className="h-7 w-full rounded-lg bg-neutral-600"></div>
          <div className="flex justify-end">
            <div className="w-[300px] h-[60px] bg-neutral-600 rounded-lg "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanksComp;
