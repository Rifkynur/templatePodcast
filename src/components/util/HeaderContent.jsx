import React from "react";

const HeaderContent = ({ title, desc }) => {
  return (
    <div className="relative text-center mb-5 md:mb-8 lg:mb-[100px]">
      <h2 className="font-bold text-xl md:text-3xl lg:text-[59px] lg:leading-[71px]">{title}</h2>
      <p className="text-[8px] mt-2 md:text-[14px] lg:text-[22.65px]">{desc}</p>
    </div>
  );
};

export default HeaderContent;
