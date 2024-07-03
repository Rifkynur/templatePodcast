import React from "react";
import Cover from "../../../assets/img/cover1.webp";

const FeatureDetailsImg = () => {
  return (
    <div className="w-[80%] mx-auto lg:w-[473px]">
      <img src={Cover} alt="cover" className="w-full rounded-xl shadow-coverShadowmSmall lg:shadow-coverShadowBig" />
      <div className="flex gap-2 mt-4 text-[8px] justify-between items-center md:mt-10 md:text-[10px] lg:text-sm lg:mt-20 lg:justify-start lg:gap-20">
        <p className="font-bold">Tags : </p>
        <div className="flex gap-3">
          <span className="p-1 border border-black rounded-md">mind-behavior</span>
          <span className="p-1 border border-black rounded-md">health</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetailsImg;
