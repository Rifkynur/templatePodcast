import React from "react";
import HeaderContent from "../../util/HeaderContent";
import SmallCrown from "../../../assets/vector/SmallSpark.svg";

const PricingHeader = () => {
  return (
    <div className="relative mx-auto max-w-[250px] md:max-w-[350px] lg:max-w-[700px]">
      <HeaderContent title={"Become our sponsor"} desc={"Get exclusive episodes, merch and more"} />
      <img src={SmallCrown} alt="illustration" className="absolute w-[25px] top-[-10px] left-0 md:w-[40px] md:left-[-10px] md:top-[-20px] lg:w-[62.57px] lg:top-[-30px]" />
    </div>
  );
};

export default PricingHeader;
