import React from "react";
import { FaPlay } from "react-icons/fa";

const FeatureDetailsButton = () => {
  return (
    <div className="flex gap-2 text-[8px] mt-2 md:text-xs lg:text-sm lg:mt-16">
      <button className="bg-black uppercase font-bold text-white rounded-md border-black border px-2 py-1 shadow-btnShadowSmall md:shadow-btnShadowBig md:px-6 md:py-4 hover:bg-white hover:text-black duration-300 lg:px-12 lg:py-6">
        Subscribe
      </button>
      <button className="bg-white flex items-center gap-1 uppercase font-bold text-black rounded-md border-black border px-2 py-1 shadow-btnShadowSmall md:shadow-btnShadowBig md:px-6 md:py-4 hover:bg-black hover:text-white duration-300 lg:px-12 lg:py-6">
        <FaPlay /> LISTEN NOW <span className="text-accentRed">(46 min)</span>
      </button>
    </div>
  );
};

export default FeatureDetailsButton;
