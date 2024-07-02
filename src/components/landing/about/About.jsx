import React from "react";
import AboutHeader from "./AboutHeader";
import Quote from "./Quote";
import { StichingBlack } from "../../util/Stiching";

const About = () => {
  return (
    <div className="sectionContent">
      <AboutHeader />
      <Quote />
      <StichingBlack />
    </div>
  );
};

export default About;
