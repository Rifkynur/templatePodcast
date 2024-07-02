import React from "react";
import Logo from "../../assets/img/logo.png";
import Tiktok from "../../assets/img/tiktok.png";
import Twitter from "../../assets/img/twitter.png";
import Instagram from "../../assets/img/instagram.png";

const FooterLogo = () => {
  return (
    <div className="max-w-[250px] flex flex-col gap-4">
      <div className="flex items-end gap-3">
        <img src={Logo} alt="logo" />
        <span>&copy;2021</span>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex items-center gap-3">
        <img src={Twitter} alt="twitter" />
        <img src={Instagram} alt="instagram" />
        <img src={Tiktok} alt="tiktok" />
      </div>
    </div>
  );
};

export default FooterLogo;
