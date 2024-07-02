import React from "react";
import BlogHeader from "./BlogHeader";
import BlogDescription from "./BlogDescription";
import BlogQuote from "./BlogQuote";
import BlogList from "./BlogList";
import BlogImg from "./BlogImg";
const BlogContent = () => {
  return (
    <div className="sectionContent">
      <BlogHeader />
      <BlogDescription />
      <BlogQuote />
      <BlogList />
      <BlogImg />
    </div>
  );
};

export default BlogContent;
