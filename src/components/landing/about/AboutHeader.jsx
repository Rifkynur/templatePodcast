import React from "react";
import Illustration1 from "../../../assets/img/Illustration1.png";
import Illustration2 from "../../../assets/img/Illustration2.png";

const AboutHeader = () => {
  return (
    <div className="">
      <h2 className="font-bold max-w-[280px] mx-auto text-xl text-center md:text-3xl md:max-w-[400px] lg:text-[59px]  lg:max-w-[800px] lg:leading-[71px]">Talk. Listen. Get inspired by every minute of it.</h2>
      <div className="flex flex-col items-center justify-center mt-8 md:flex-row md:mt-10 lg:mt-24  ">
        <div className="text-center  px-5">
          <img src={Illustration1} alt="ilustration" className="mx-auto w-[50%]" />
          <p className="text-xs md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
        </div>
        <div className="text-center px-5">
          <img src={Illustration2} alt="ilustration" className="mx-auto w-[50%]" />
          <p className="text-xs md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
