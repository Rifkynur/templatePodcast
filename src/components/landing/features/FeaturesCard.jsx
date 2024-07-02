import React from "react";
import Feature1 from "../../../assets/vector/feature1.svg";

const FeaturesCard = ({ icon, title, desc }) => {
  return (
    <div>
      <div className="text-center max-w-[350px] mx-auto">
        <img src={icon} alt="img" className="mx-auto" />
        <h3 className="font-bold py-2 md:text-lg lg:text-[22px]">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
