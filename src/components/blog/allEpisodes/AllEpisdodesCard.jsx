import React from "react";
import { Link } from "react-router-dom";

const AllEpisdodesCard = ({ title, title1, date, tag, img }) => {
  return (
    <Link to="/blog-details" className="cursor-pointer">
      <div className={`border-2 bg-white border-black rounded-lg p-2 ${title === "PODCAST" ? "shadow-blogShadowSmall lg:shadow-blogShadowBig" : ""} md:w-[320px] lg:w-[570px] md:h-[550px] lg:h-[670px]`}>
        <img src={img} alt="blog" className="w-full object-contain" />
        <div className="py-10 border-b border-black">
          <span className="font-bold">{title}</span>
          <h2 className={`font-bold ${title === "PODCAST" ? "text-accentRed" : "text-black"} py-2 text-2xl lg:py-8 lg:text-4xl`}>{title1}</h2>
          <p className="text-xs lg:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-2 text-xs">
            {tag?.map((item, index) => {
              return (
                <span key={index} className="border border-black p-1 rounded-md">
                  {item}
                </span>
              );
            })}
          </div>
          <p className="text-xs font-bold">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default AllEpisdodesCard;
