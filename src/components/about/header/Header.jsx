import React from "react";
import HeroHeader from "../../util/HeroHeader";
import Button from "../../util/Button";
import { WhiteButton } from "../../util/Button";

const Header = () => {
  return (
    <div className="bg-primary relative pb-20 md:pb-28 lg:pb-36">
      <HeroHeader title1={"About"} title2={"Pod of Cast"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis."} />
      <div className="flex justify-center items-center gap-2">
        <WhiteButton name="BECOME SPONSOR" />
        <Button name="subscribe" />
      </div>
    </div>
  );
};

export default Header;
