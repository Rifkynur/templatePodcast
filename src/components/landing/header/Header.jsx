import React from "react";
import CoversContainer from "./CoversContainer";
import Platform from "./Platform";
import Hero from "./Hero";
import { StichingRed } from "../../util/Stiching";
import Button from "../../util/Button";

const Header = () => {
  return (
    <>
      <div className="bg-primary relative pb-20 md:pb-28 lg:pb-36">
        <Hero />
        <Button name="subscribe" />
        <CoversContainer />
        <Platform />
        <StichingRed />
      </div>
    </>
  );
};

export default Header;
