import React from "react";
import FeatureHeader from "./FeatureHeader";
import FeatureDetailsContainer from "./FeatureDetailsContainer";
import Spring from "../../../assets/vector/Spring.svg";
const FeatureDetails = () => {
  return (
    <div className="py-10 md:py-14 lg:py-16 relative bg-primary z-[0] ">
      <FeatureHeader />
      <FeatureDetailsContainer />
      <img src={Spring} alt="illustration" className="hidden absolute md:block md:w-[80px] md:bottom-[-20px] md:right-[0px] lg:bottom-[-20px] " />
    </div>
  );
};

export default FeatureDetails;
