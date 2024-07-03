import React from "react";
import BlogCard from "./BlogCard";
import Blog1 from "../../../assets/img/blog1.webp";
import Blog2 from "../../../assets/img/blog2.webp";
import Crown2 from "../../../assets/vector/Crown2.svg";
import Star2 from "../../../assets/vector/Star2.svg";

const tag1 = ["bussines", "startup"];
const tag2 = ["art", "creative", "tips and trick"];
const BlogCardContainer = () => {
  return (
    <div className="mt-8 relative z-0 px-2 flex flex-col gap-5 md:flex-row md:justify-center ">
      <img src={Star2} alt="illustration" className="absolute z-[-1] hidden md:block md:left-[-80px] md:top-[-50px]" />
      <img src={Crown2} alt="illstration" className="absolute hidden bottom-[-90px] right-0 lg:block" />

      <BlogCard tag={tag1} img={Blog1} title={"PODCAST"} title1={"Setup your own podcast"} date={"Sep 14, 2021"} />
      <BlogCard tag={tag2} img={Blog2} title={"TIPS & TRICK"} title1={"Doodle artwork 101"} date={"Sep 12, 2021"} />
    </div>
  );
};

export default BlogCardContainer;
