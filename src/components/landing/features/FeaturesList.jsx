import React from "react";
import FeaturesCard from "./FeaturesCard";

import Feature1 from "../../../assets/vector/feature1.svg";
import Feature2 from "../../../assets/vector/feature2.svg";
import Feature3 from "../../../assets/vector/feature3.svg";
import Feature4 from "../../../assets/vector/feature4.svg";
import Feature5 from "../../../assets/vector/feature5.svg";
import Feature6 from "../../../assets/vector/feature6.svg";

const FeaturesList = () => {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      <FeaturesCard icon={Feature1} title={"Topic by Request"} desc={"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."} />
      <FeaturesCard icon={Feature2} title={"Exclusive Content"} desc={"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."} />
      <FeaturesCard icon={Feature3} title={"Join the Community"} desc={"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."} />
      <FeaturesCard icon={Feature4} title={"Livestreaming Access"} desc={"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."} />
      <FeaturesCard icon={Feature5} title={"Exclusive Episodes & Merch"} desc={"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."} />
      <FeaturesCard icon={Feature6} title={"And much more!"} desc={"Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."} />
    </div>
  );
};

export default FeaturesList;
