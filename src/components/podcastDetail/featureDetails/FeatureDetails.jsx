import React from "react";
import FeatureHeader from "./FeatureHeader";
import FeatureDetailsContainer from "./FeatureDetailsContainer";

const FeatureDetails = () => {
  return (
    <div className="sectionContent bg-primary z-[0] ">
      <FeatureHeader />
      <FeatureDetailsContainer />
    </div>
  );
};

export default FeatureDetails;
