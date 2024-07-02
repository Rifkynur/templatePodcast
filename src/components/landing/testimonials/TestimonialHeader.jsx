import React from "react";
import Sprakle from "../../../assets/vector/Sparkle.svg";
import HeaderContent from "../../util/HeaderContent";

const TestimonialHeader = () => {
  return (
    <div className="max-w-[300px] mx-auto relative text-center mb-5 md:max-w-[400px] md:mb-8 lg:mb-[100px] lg:max-w-[780px]">
      <img src={Sprakle} alt="illustration" className="absolute top-[-40px] left-[-10px] w-[50px] md:w-[70px] md:left-[-30px] md:top-[-50px] lg:w-[105px] lg:left-[-50px] lg:top-[-80px] " />
      <HeaderContent title={"What our listeners say"} desc={"Their experience throughout every platform"} />
    </div>
  );
};

export default TestimonialHeader;
