import React from "react";
import host from "../../../assets/img/host.png";
import { Link } from "react-router-dom";

const ContentCard = ({ eps, tag1, tag2, title, cover }) => {
  return (
    <Link to={"/podcast-details"}>
      <div className={`border-2 border-black rounded-xl p-2 ${eps === 6 || eps === 3 || eps === 2 ? "text-accentRed shadow-coverShadowmSmall lg:shadow-coverShadowBig" : ""}`}>
        <div className="flex gap-3 items-center ">
          <img src={cover} alt="cover" className="w-[80px] lg:w-[166px]" />
          <div className="text-xs md:max-w-[250px] lg:max-w-[350px]">
            <span className="font-bold text-accentRed lg:text-base">Eps. {eps}</span>
            <h3 className="font-bold pb-2 border-b-2 border-black lg:text-[22px] lg:leading-[31.71px]">{title}</h3>
            <p className="pt-2 text-black lg:text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="text-xs mt-4 flex gap-2 text-black">
            <span className="px-2 py-1 rounded-md border border-black ">{tag1}</span>
            {tag2 && <span className="px-2 py-1 rounded-md border border-black ">{tag2}</span>}
          </div>
          <div className="flex items-center text-[10px]">
            <span className="font-bold text-black">Hosted by: </span>
            <img src={host} alt="host" className="w-[30px]" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
