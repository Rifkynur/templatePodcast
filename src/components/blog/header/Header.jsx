import React from "react";
import SwirlVector from "../../../assets/vector/Swirl.svg";
import StarVector from "../../../assets/vector/star.png";
import SearchButton from "./SearchButton";
const Header = () => {
  return (
    <div className="bg-primary relative pb-10 md:pb-20 lg:pb-28">
      <img src={SwirlVector} alt="swirl vector" className="hidden md:block md:absolute top-[-50px] left-0 md:w-[25%] lg:w-[20%] lg:top-8 z-[2]" />
      <img src={StarVector} alt="star vector" className="hidden md:block md:absolute top-16 right-8 md:w-[10%] lg:right-12" />
      <div className="text-center">
        <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl">
          Article
          <span className="text-[#CD4631]">
            <br />
            <span className="text-black">and</span> News
          </span>
        </h1>
        <p className="text-[8px] max-w-[280px] mx-auto pt-5 md:text-base md:max-w-[500px] lg:pt-10 lg:max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
        </p>
      </div>
      <SearchButton />
    </div>
  );
};

export default Header;
