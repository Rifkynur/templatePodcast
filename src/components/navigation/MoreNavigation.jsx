import React from "react";
import { Link } from "react-router-dom";
const MoreNavigation = () => {
  return (
    <div className="bg-slate-300 absolute rounded-xl mt-20 px-3 py-1  ms-[42px] arrowNav">
      <Link to={"/blog"}>Blog</Link>
    </div>
  );
};

export default MoreNavigation;
