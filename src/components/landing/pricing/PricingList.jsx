import React from "react";
import PricingCard from "./PricingCard";
import Star4 from "../../../assets/vector/Star4.svg";
import Spiral from "../../../assets/vector/Spiral.svg";

const list1 = ["Exclusive Content", "5% Discount on Merch", "Join the Community", "Livestreaming Access"];
const list2 = ["Everything in Tier 1", "Free tickets to Events", "Free tickets to Events", "Limited Edition Merch", "Promote your Product", "Request Topic"];
const list3 = ["Everything in Tier 2", "Exclusive Badge on Livestreaming", "Become an Official Sponsor", "Early Access to All Episodes", "Free Stikers and Merch"];
const PricingList = () => {
  return (
    <div className="relative px-2 z-[5] flex flex-col gap-5 items-start justify-center md:flex-row lg:gap-5">
      <img src={Star4} alt="illustration" className="absolute hidden md:block lg:z-[-1] lg:w-[100px] lg:right-[0px] lg:top-[-50px]" />
      <img src={Spiral} alt="spirall" className="absolute hidden md:block lg:z-[-1] lg:w-[150px] lg:left-[-20px] lg:bottom-[-50px]" />
      <PricingCard list={list1} name={"Member"} price={"9.99"} />
      <PricingCard list={list2} name={"Family"} price={"14.99"} />
      <PricingCard list={list3} name={"Official"} price={"29.99"} />
    </div>
  );
};

export default PricingList;
