import React, { useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Cta from "../components/cta/Cta";
import Header from "../components/about/header/Header";
import About from "../components/about/about/About";
import Sponsor from "../components/about/sponsor/Sponsor";
import Contact from "../components/about/contact/Contact";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Pod of Cast";
  }, []);
  return (
    <section>
      <Navigation />
      <Header />
      <About />
      <Sponsor />
      <Contact />
      <Cta />
      <Footer />
    </section>
  );
};

export default AboutPage;
