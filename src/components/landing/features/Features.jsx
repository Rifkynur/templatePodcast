import React from "react";
import FeaturesHeader from "./FeaturesHeader";
import FeaturesList from "./FeaturesList";
import Button from "../../util/Button";
import { StichingBlack } from "../../util/Stiching";

const Features = () => {
  return (
    <div className="py-20 md:py-28 lg:py-36 relative">
      <FeaturesHeader />
      <FeaturesList />
      <Button name={"see pricing"} />
      <StichingBlack />
    </div>
  );
};

export default Features;
