import React from "react";
import FeatureDetailsDetails from "./FeatureDetailsDetails";
import FeatureDetailsImg from "./FeatureDetailsImg";

const FeatureDetailsContainer = () => {
  return (
    <div className="flex flex-col gap-5 realtive md:px-5 md:gap-8 md:flex-row lg:justify-center  ">
      <FeatureDetailsImg />
      <FeatureDetailsDetails />
    </div>
  );
};

export default FeatureDetailsContainer;
