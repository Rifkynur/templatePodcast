import React from "react";
import CrownBlue from "../../../assets/vector/CrownBlue.svg";

const FounderHeader = () => {
  return (
    <div className="mt-2 md:mt-5 lg:mt-10">
      <div className="max-w-[270px] mx-auto relative md:max-w-[400px] lg:max-w-[500px]">
        <h3 className="font-bold text-lg text-center md:text-2xl lg:text-4xl">Founder and Main Host </h3>
        <img src={CrownBlue} alt="illustration" className="w-[25px] absolute top-[-5px] right-[-10px] md:w-[50px] md:top-[-10px] md:right-[-10px] lg:w-[80px] lg:top-[-25px] lg:right-[-20px]" />
      </div>
    </div>
  );
};

export default FounderHeader;
