import React from "react";

const SponsorCard = ({ img }) => {
  return (
    <div className="border-2 border-black p-5 rounded-lg lg:p-10 bg-white">
      <div className=" border-b-[.5px] border-black py-2 md:py-5 lg:pb-5">
        <img src={img} alt="platform" className="mx-auto w-[150px] h-[30px] object-contain md:w-[200px] lg:w-[300px]" />
      </div>
      <p className="text-center text-[10px] pt-2 md:text-xs md:py-5 lg:text-sm lg:pt-8">
        Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.
      </p>
    </div>
  );
};

export default SponsorCard;
