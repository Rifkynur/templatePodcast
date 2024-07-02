import React from "react";
import SwirlVector from "../../assets/vector/Swirl.svg";
import StarVector from "../../assets/vector/star.png";

const HeroHeader = ({ title1, title2, desc }) => {
  return (
    <>
      <img src={SwirlVector} alt="swirl vector" className="hidden md:block md:absolute top-[-50px] left-0 md:w-[25%] lg:w-[20%] lg:top-[-60px]" />
      <img src={StarVector} alt="star vector" className="hidden md:block md:absolute top-16 right-8 md:w-[10%] lg:right-12" />
      <div className="text-center">
        <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl">
          {title1}
          <span className="text-[#CD4631]">
            <br />
            {title2}
          </span>
        </h1>
        <p className="text-sm max-w-[280px] mx-auto pt-5 md:text-base lg:pt-10 lg:max-w-[300px]">{desc}</p>
      </div>
    </>
  );
};

export default HeroHeader;
