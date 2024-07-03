import React from "react";
import HeroHeader from "../../util/HeroHeader";
import Button from "../../util/Button";
import { WhiteButton } from "../../util/Button";
import Spring from "../.../../../../assets/vector/Spring.svg";

const Header = () => {
  return (
    <div className="bg-primary relative pb-20 md:pb-28 lg:pb-36">
      <HeroHeader title1={"About"} title2={"Pod of Cast"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis."} />
      <div className="flex justify-center items-center gap-2">
        <WhiteButton name="BECOME SPONSOR" />
        <Button name="subscribe" />
      </div>
      <img src={Spring} alt="illustration" className="hidden absolute md:block md:w-[80px] md:bottom-[-20px] lg:right-[-40px] lg:bottom-[-20px] " />
    </div>
  );
};

export default Header;
