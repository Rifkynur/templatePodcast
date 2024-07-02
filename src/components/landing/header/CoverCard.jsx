import React from "react";
// import cover1 from "../../../assets/img/cover.png";
import { Link } from "react-router-dom";

const CoverCard = ({ bg, title }) => {
  return (
    <Link to={"/podcast-details"}>
      <div className="top-20 left-0 w-48 h-48 bg-no-repeat mx-auto mt-24 bg-center bg-cover flex justify-start items-end rounded-sm md:w-64 md:h-64 lg:w-[373px] lg:h-[373px] " style={{ backgroundImage: `url(${bg})` }}>
        <h2 className="tracking-[-8%] font-bold text-[#81ADC8] mx-3 text-base md:text-lg lg:text-4xl mb-3 ">{title}</h2>
      </div>
    </Link>
  );
};

export default CoverCard;
