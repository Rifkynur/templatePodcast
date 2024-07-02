import React from "react";
import SwirlVector from "../../../assets/vector/Swirl.svg";
import StarVector from "../../../assets/vector/star.png";

const FeatureHeader = () => {
  return (
    <>
      <img src={SwirlVector} alt="swirl vector" className="hidden md:block md:absolute top-[-50px] left-0 md:w-[25%] lg:w-[20%] lg:top-[-60px] z-[-1]" />
      <img src={StarVector} alt="star vector" className="hidden md:block md:absolute top-16 right-[-50px] md:w-[10%] lg:right-12 z-[-1]" />
    </>
  );
};

export default FeatureHeader;
