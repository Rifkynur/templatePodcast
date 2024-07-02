import React from "react";

import Instagram from "../../../assets/img/about/instagramIcon.png";
import Twitter from "../../../assets/img/about/twitterIcon.png";
import Tiktok from "../../../assets/img/about/tiktokIcon.png";
0;
const FounderCard = ({ icon, host, name, img }) => {
  return (
    <div className="border-2 border-black p-2 relative flex items-end gap-2 rounded-md shadow-blogShadowSmall lg:p-4 lg:shadow-blogShadowBig lg:gap-5">
      <img src={icon} alt="about face" className="absolute w-[80px] top-[0px] right-[0px] lg:w-[94px] lg:top-5 lg:right-5" />
      <img src={img} alt="avatar" className="w-[40%]" />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 border-b border-black pb-2 ">
          <span className="text-xs font-medium lg:text-sm">{host}</span>
          <h4 className="font-bold max-w-[120px]  text-xl lg:max-w-[200px] lg:text-4xl">{name}</h4>
          <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</p>
        </div>
        <div className="flex justify-end items-center gap-3 px-2 lg:gap-[20px]">
          <p className="text-[10px] font-bold lg:text-[12px] ">follow me:</p>
          <div className="flex lg:gap-3">
            <img src={Tiktok} alt="tiktok" />
            <img src={Twitter} alt="twitter" />
            <img src={Instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
