import React from "react";
import HeaderContent from "../../util/HeaderContent";
import Spark from "../../../assets/vector/Sparkle.svg";

const SponsorHeader = () => {
  return (
    <div className="max-w-[200px] mx-auto relative lg:max-w-[500px]">
      <HeaderContent title={"Our Sponsor"} desc={"Our current official sponsor "} />
      <img src={Spark} alt="illustration" className="absolute w-[25px] top-[-10px] left-3 md:w-[50px] md:left-[-40px] md:top-[-25px] lg:w-[75px] lg:left-0" />
    </div>
  );
};

export default SponsorHeader;
