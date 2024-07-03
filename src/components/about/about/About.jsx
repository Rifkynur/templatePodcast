import React from "react";
import ViewsContainer from "./ViewsContainer";
import HeaderContent from "../../util/HeaderContent";
import AboutImg from "./AboutImg";
import AboutAndHistory from "./AboutAndHistory";
import Founder from "./Founder";

const About = () => {
  return (
    <div className="relative sectionContent">
      <ViewsContainer />

      <HeaderContent title={"What our listeners say"} desc={"Their experience throughout every platform"} />
      <AboutImg />
      <AboutAndHistory />
      <Founder />
    </div>
  );
};

export default About;
