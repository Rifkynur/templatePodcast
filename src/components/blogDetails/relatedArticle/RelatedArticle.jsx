import React from "react";
import BlogCardContainer from "../../landing/blog/BlogCardContainer";
import HeaderContent from "../../util/HeaderContent";
import { StichingRed } from "../../util/Stiching";
import Button from "../../util/Button";

const RelatedArticle = () => {
  return (
    <div className="sectionContent bg-primary">
      <HeaderContent title={"Related Article"} desc={"News, Tips, Tricks and more"} />
      <BlogCardContainer />
      <Button name={"browse all"} />
      <StichingRed />
    </div>
  );
};

export default RelatedArticle;
