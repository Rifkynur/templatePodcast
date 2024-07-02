import React from "react";
import HeaderContent from "../util/HeaderContent";

const CtaHeader = () => {
  return (
    <div className="max-w-[200px] text-center mx-auto relative md:max-w-[300px] lg:max-w-[500px]">
      <span className="text-xs p-1 border border-accentRed text-accentRed font-bold rounded-md inline-block mb-3">BETA</span>
      <HeaderContent title={"Available now Pod of Cast App"} desc={"We just launched our podcast app!"} />
    </div>
  );
};

export default CtaHeader;
