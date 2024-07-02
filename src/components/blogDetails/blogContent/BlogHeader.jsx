import React from "react";
import CrownBlue1 from "../../../assets/vector/CrownBlue1.svg";

const BlogHeader = () => {
  return (
    <div className="relative mx-auto max-w-[300px] md:max-w-[500px] lg:max-w-[800px]">
      <img src={CrownBlue1} alt="illustration" className="absolute w-[25px] top-[-10px] left-4 md:w-[50px] md:top-[-30px] md:left-[-10px] lg:w-[75px] lg:top-[-50px] lg:left-[-40px]" />
      <h3 className="text-lg text-center font-bold md:text-2xl lg:text-4xl">Doodle for our podcast background room</h3>
    </div>
  );
};

export default BlogHeader;
