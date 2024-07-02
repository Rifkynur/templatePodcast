import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import Tiktok from "../../../assets/img/tiktok.png";
import Twitter from "../../../assets/img/twitter.png";
import Instagram from "../../../assets/img/instagram.png";

const HeaderTitle = () => {
  return (
    <div className="px-5 lg:px-28">
      <div className="flex justify-between">
        <Link to={"/blog"} className="flex items-center gap-3 text-[8px] md:text-[12px] lg:textsm">
          <FaChevronLeft />
          <span>Back to article</span>
        </Link>
        <p className="text-[8px] md:text-[12px] lg:textsm">Sep 12, 2021</p>
      </div>
      <div className="text-center mt-5 lg:mt-[47px]">
        <p className="text-accentRed font-bold text-[8px] md:text-[12px] lg:textsm">TIPS & TRICKS</p>
        <h2 className="font-bold text-xl md:text-4xl lg:text-[59px] lg:mt-[16px]">Doodle Artwork 101</h2>
        <div className="text-[8px] flex gap-2 justify-center mt-3 md:text-[12px] lg:textsm lg:mt-[42px]">
          <span className="border-[.5px] border-black py-[1px] px-[3px] rounded-sm">art</span>
          <span className="border-[.5px] border-black py-[1px] px-[3px] rounded-sm">tips and trick</span>
          <span className="border-[.5px] border-black py-[1px] px-[3px] rounded-sm">creative</span>
        </div>
        <div className="flex justify-center items-center mt-3 gap-3 lg:mt-[47px]">
          <img src={Twitter} alt="twitter" className="w-[12px] md:w-[14px] lg:w-[18px]" />
          <img src={Instagram} alt="instagram" className="w-[12px] md:w-[14px] lg:w-[18px]" />
          <img src={Tiktok} alt="tiktok" className="w-[12px] md:w-[14px] lg:w-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
