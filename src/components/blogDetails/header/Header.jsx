import React from "react";
import HeaderImg from "./HeaderImg";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <div className="py-5 md:px-16 lg:pt-6  relative bg-primary">
      <HeaderTitle />
      <HeaderImg />
    </div>
  );
};

export default Header;
