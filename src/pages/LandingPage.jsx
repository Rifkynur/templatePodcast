import React, { useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import Header from "../components/landing/header/Header";
import About from "../components/landing/about/About";
import Features from "../components/landing/features/Features";
import Testimonial from "../components/landing/testimonials/Testimonial";
import Content from "../components/landing/content/Content";
import Pricing from "../components/landing/pricing/Pricing";
import Blog from "../components/landing/blog/Blog";
import Cta from "../components/cta/Cta";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Home | Pod of Cast";
  }, []);
  return (
    <section>
      <Navigation />
      <Header />
      <About />
      <Testimonial />
      <Features />
      <Content />
      <Pricing />
      <Blog />
      <Cta />
      <Footer />
    </section>
  );
};

export default LandingPage;
