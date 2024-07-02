import React from "react";
import Avatar from "../../../assets/img/podcastDetails/avatar.png";
import FeatureDetailsButton from "./FeatureDetailsButton";

const FeatureDetailsDetails = () => {
  return (
    <div className="w-[80%] mx-auto lg:w-[570px] ">
      <div className="text-accentRed flex justify-between items-center font-bold">
        <p className="text-[10px] md:text-sm lg:text-base">Episode 1</p>
        <span className="text-[10px] bg-primary p-1 border-accentRed border rounded-md md:text-sm lg:text-base">FEATURED EPISODE</span>
      </div>
      <h2 className="font-bold py-4 border-b border-black md:text-2xl lg:text-4xl">Are you a Perplexed Mind Person?</h2>
      <p className="py-4 text-[10px] md:text-sm lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      <div className="font-medium flex items-center justify-between lg:pe-2">
        <div className="flex items-center gap-2 lg:gap-3">
          <img src={Avatar} alt="host" className="w-[30px] md:w-[40px] lg:w-[36px]" />
          <p className="text-[10px] md:text-sm">
            Hosted by: <span className="text-accentRed">jane Doe</span>
          </p>
        </div>
        <p className="text-[10px] md:text-sm">Sep 22, 2021</p>
      </div>
      <FeatureDetailsButton />
    </div>
  );
};

export default FeatureDetailsDetails;
