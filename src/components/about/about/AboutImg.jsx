import React from "react";
import Img from "../../../assets/img/about/img.png";

const AboutImg = () => {
  return (
    <div className="px-2 md:px-10 lg:px-12 flex justify-center">
      <img src={Img} alt="img" />
    </div>
  );
};

export default AboutImg;
