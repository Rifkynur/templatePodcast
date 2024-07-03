import React from "react";
import FounderCard from "./FounderCard";
import Avatar from "../../../assets/img/about/avatar.webp";
import Avatar1 from "../../../assets/img/about/avatar1.webp";
import AboutFace from "../../../assets/vector/AboutFace.svg";
import AboutStar from "../../../assets/vector/AboutStar.svg";

const FounderContainer = () => {
  return (
    <div className="mt-5 px-2 flex flex-col gap-5 md:flex-row md:px-5 md:mt-8 lg:mt-10">
      <FounderCard name={"Porter Severus"} host={"Host 1"} img={Avatar} icon={AboutFace} />
      <FounderCard name={"Marques Keith"} host={"Host 2"} img={Avatar1} icon={AboutStar} />
    </div>
  );
};

export default FounderContainer;
