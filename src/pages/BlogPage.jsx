import React, { useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Cta from "../components/cta/Cta";
import Header from "../components/blog/header/Header";
import AllEpisodes from "../components/blog/allEpisodes/AllEpisodes";

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog Details | Podc of Cast";
  }, []);
  return (
    <section>
      <Navigation />
      <Header />
      <AllEpisodes />
      <Cta />
      <Footer />
    </section>
  );
};

export default BlogPage;
