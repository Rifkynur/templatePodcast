import React from "react";
import SwirlVector from "../../../assets/vector/Swirl.svg";
import StarVector from "../../../assets/vector/star.png";

const HeaderImg = () => {
  return (
    <>
      <img src={SwirlVector} alt="swirl vector" className="hidden md:block md:absolute top-[-50px] left-0 md:w-[25%] lg:w-[20%] lg:top-[-20px] z-[0]" />
      <img src={StarVector} alt="star vector" className="hidden md:block md:absolute top-16 right-8 md:w-[10%] md:right-[-20px] lg:right-[-20px]" />
    </>
  );
};

export default HeaderImg;
