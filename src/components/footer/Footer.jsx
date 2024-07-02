import React from "react";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import FooterPlatform from "./FooterPlatform";
import FootNote from "./FootNote";

const Footer = () => {
  return (
    <footer>
      <div className="sectionContent px-5 flex flex-col gap-8 md:flex-row md:justify-center lg:gap-28">
        <FooterLogo />
        <FooterMenu />
        <FooterPlatform />
      </div>
      <div className="px-5 pb-5 md:pb-8">
        <FootNote />
      </div>
    </footer>
  );
};

export default Footer;
