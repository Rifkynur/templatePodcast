import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchButton = () => {
  return (
    <div className="absolute border border-black rounded-lg shadow-coverShadowmSmall bg-white left-1/2 translate-x-[-50%] bottom-[-15px] z-[1] flex items-center gap-2 p-2 text-[10px] md:text-base md:w-[270px] md:p-3 md:bottom-[-25px] lg:shadow-coverShadowBig lg:w-[570px] lg:p-6 lg:text-base lg:bottom-[-30px]">
      <CiSearch className=" text-black" />
      <input type="text" placeholder="Search..." className="bg-transparent w-[175px] focus:outline-none" />
    </div>
  );
};

export default SearchButton;
