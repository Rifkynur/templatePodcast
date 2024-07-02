import React from "react";
import SmallSpark from "../../../assets/vector/SmallSpark.svg";

const AllEpisodesHeader = () => {
  return (
    <div className="relative mx-auto max-w-[150px] md:max-w-[220px] lg:max-w-[300px]">
      <img src={SmallSpark} alt="illustration" className="absolute w-[25px] top-[-10px] left-[-10px] md:w-[50px] md:top-[-30px] md:left-[-30px] lg:w-[75px] lg:left-[-50px] lg:top-[-50px]" />
      <h3 className="font-bold text-lg text-center md:text-2xl lg:text-4xl">Latest Episode</h3>
    </div>
  );
};

export default AllEpisodesHeader;
