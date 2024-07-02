import React from "react";
import PricingHeader from "./PricingHeader";
import PricingList from "./PricingList";
import { StichingBlack } from "../../util/Stiching";

const Pricing = () => {
  return (
    <div className="sectionContent ">
      <PricingHeader />
      <PricingList />
      <StichingBlack />
    </div>
  );
};

export default Pricing;
