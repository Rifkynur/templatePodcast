import React, { useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import Cta from "../components/cta/Cta";
import Footer from "../components/footer/Footer";
import Header from "../components/blogDetails/header/Header";
import BlogImg from "../components/blogDetails/blogImg/BlogImg";
import BlogContent from "../components/blogDetails/blogContent/BlogContent";
import RelatedArticle from "../components/blogDetails/relatedArticle/RelatedArticle";

const BlogDetails = () => {
  useEffect(() => {
    document.title = "Blog Details | Podc of Cast";
  }, []);
  return (
    <section>
      <Navigation />
      <Header />
      <BlogImg />
      <BlogContent />
      <RelatedArticle />
      <Cta />
      <Footer />
    </section>
  );
};

export default BlogDetails;
