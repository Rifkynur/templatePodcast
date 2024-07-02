import React from "react";
import Avatar from "../../../assets/img/avatar.png";
import Vector from "../../../assets/img/Vector.png";
import Spring from "../../../assets/vector/Spring.svg";
import Star4 from "../../../assets/vector/Star4.svg";

const BlogQuote = () => {
  return (
    <div className="relative bg-primary w-[90%] mx-auto flex flex-col items-center mt-5 py-2 gap-2 shadow-md md:mt-10 md:py-8 lg:py-10 lg:mt-32 lg:gap-10">
      <img src={Spring} alt="vector" className="absolute top-20 w-[80px] left-[-40px] lg:w-[120px] lg:left-[-60px] lg:top-48" />
      <img src={Star4} alt="vector2" className="absolute top-[-10px] w-[30px] right-[-15px] md:w-[50px] md:top-[-20px] lg:w-[140px] lg:top-[-50px] lg:right-[-50px]" />
      <h2 className="text-[#CD4631] text-6xl font-bold lg:text-[95px]">“</h2>
      <p className="text-sm text-center font-bold max-w-[250px] md:text-2xl md:max-w-[450px] lg:text-4xl lg:max-w-[700px]">Quote example goes in here...</p>
      <div className="flex justify-center items-center gap-1">
        <div className="flex items-center gap-1">
          <img src={Avatar} alt="user icon" className="w-[20px] h-[20px] lg:w-[45px] lg:h-[45px]" />
          <h3 className="text-[10px] md:text-[12px] lg:text-[14px]">John Smith,</h3>
        </div>
        <div className="flex items-center gap-1">
          <img src={Vector} alt="vector icon" className="w-[10px] h-[10px] lg:w-[16px] lg:h-[16px]" />
          <p className="text-[10px] font-bold md:text-[12px] lg:text-[14px]">Social Community Manager</p>
        </div>
      </div>
    </div>
  );
};

export default BlogQuote;
