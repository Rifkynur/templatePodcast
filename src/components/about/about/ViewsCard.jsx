import React from "react";

const ViewsCard = ({ count, desc }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center border-2 border-black p-2 rounded-lg shadow-viewShadowSmall md:p-5 lg:p-[80px] lg:w-[373px] lg:h-[235px] lg:shadow-viewShadowBig">
      <h3 className="text-2xl font-bold md:text-4xl lg:text-[59.3px] lg:leading-[71px]">
        {count}
        <span className="text-accentRed ">K</span>
      </h3>
      <p className="text-[8px] md:text-sm lg:text-base">{desc}</p>
    </div>
  );
};

export default ViewsCard;
