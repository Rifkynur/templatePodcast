import React from "react";
import HeaderContent from "../../util/HeaderContent";
import Crown from "../../../assets/vector/Crown.svg";

const FeaturesHeader = () => {
  return (
    <div className="relative max-w-[250px] mx-auto md:max-w-[400px] lg:max-w-[700px]">
      <img src={Crown} alt="illustration" className="w-[50px] absolute top-[-20px] right-[-20px] md:w-[70px] md:right-0 md:top-[-30px] lg:w-[194.37px] lg:top-[-80px] lg:right-[-60px]" />
      <HeaderContent title={"Membership benefits"} desc={"Become our sponsor and get all benefits"} />
    </div>
  );
};

export default FeaturesHeader;
