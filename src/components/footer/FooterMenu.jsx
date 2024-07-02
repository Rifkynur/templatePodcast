import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row lg:gap-20">
      <ul className="flex flex-col gap-2">
        <li className="even:text-accentRed font-medium">
          <Link to="/about">About</Link>
        </li>
        <li className="even:text-accentRed font-medium">
          <Link to="/">Testimonial</Link>
        </li>
        <li className="even:text-accentRed font-medium">
          <Link to="/">Features</Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-2">
        <li className="first:text-accentRed font-medium">
          <Link to="/">Episodes</Link>
        </li>
        <li className="first:text-accentRed font-medium">
          <Link to="/">Pricing</Link>
        </li>
        <li className="first:text-accentRed font-medium">
          <Link to="/blog ">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterMenu;
