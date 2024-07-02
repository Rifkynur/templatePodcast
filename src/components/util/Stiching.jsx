import React from "react";
import StitchingRed from "../../assets/vector/StitchingRed.svg";
import StitchingBlack from "../../assets/vector/StitchingBlack.svg";

export const StichingRed = () => {
  return (
    <>
      <img src={StitchingRed} alt="illustration" className="absolute z-[1] left-[50%] w-[20px] bottom-[-35px] md:w-[30px] md:bottom-[-50px] lg:w-[40px] lg:bottom-[-70px]" />
    </>
  );
};

export const StichingBlack = () => {
  return (
    <>
      <img src={StitchingBlack} alt="illustration" className="absolute z-[1] left-[50%] w-[20px] bottom-[-35px] md:w-[30px] md:bottom-[-50px] lg:w-[40px] lg:bottom-[-70px]" />
    </>
  );
};
