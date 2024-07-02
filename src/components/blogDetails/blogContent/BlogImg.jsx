import React from "react";
import Doodle from "../../../assets/img/blogDetails/Doodle.png";
import Doodle2 from "../../../assets/img/blogDetails/Doodle2.png";

const BlogImg = () => {
  return (
    <div className="px-5 mt-10 flex flex-col gap-8 md:flex-row lg:px-10 lg:pt-[100px]">
      <figure>
        <img src={Doodle} alt="doodle art" />
        <figcaption className="text-[8px] text-center mt-2 md:text-[12px] lg:text-[14px]">this is an image with a caption example</figcaption>
      </figure>
      <figure>
        <img src={Doodle2} alt="doodle art" />
        <figcaption className="text-[8px] text-accentRed underline text-center mt-2 md:text-[12px] lg:text-[14px]">download here</figcaption>
      </figure>
    </div>
  );
};

export default BlogImg;
