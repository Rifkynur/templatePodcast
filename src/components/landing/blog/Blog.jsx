import React from "react";
import HeaderContent from "../../util/HeaderContent";
import BlogCardContainer from "./BlogCardContainer";
import Button from "../../util/Button";
import { StichingRed } from "../../util/Stiching";

const Blog = () => {
  return (
    <div className="sectionContent">
      <HeaderContent title={"Article and News"} desc={"News, tips, tricks and more"} />
      <BlogCardContainer />
      <Button name={"browse all"} />
      <StichingRed />
    </div>
  );
};

export default Blog;
