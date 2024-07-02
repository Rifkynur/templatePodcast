import React from "react";

const TestimonialCard = ({ name, avatar, platform }) => {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col gap-2 w-[90%] mx-auto md:w-full lg:w-[570px] lg:p-[40px]">
      <h3 className="text-[#CD4631] text-6xl font-bold lg:text-[95px]">“</h3>
      <p className="text-sm font-medium lg:text-[22.65px] leading-[36.24px]">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. </p>
      <div className="flex items-center gap-2">
        <img src={avatar} alt="avatar" className="w-[20px] md:w-[30px] lg:w-[48px]" />
        <h4 className="text-xs font-medium lg:text-sm">{name}</h4>
        <img src={platform} alt="spotify" className="w-[50px] object-contain md:w-[100px]" />
      </div>
    </div>
  );
};

export default TestimonialCard;
