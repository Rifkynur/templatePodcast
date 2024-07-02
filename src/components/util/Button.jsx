import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex justify-center items-center mt-8 md:mt-12 lg:mt-20">
      <button className="bg-black uppercase font-bold text-white rounded-md border-black border px-2 py-1 shadow-btnShadowSmall md:shadow-btnShadowBig md:px-6 md:py-4 hover:bg-white hover:text-black duration-300 lg:px-12 lg:py-6">
        {name}
      </button>
    </div>
  );
};

export const WhiteButton = ({ name }) => {
  return (
    <div className="flex justify-center items-center mt-8 md:mt-12 lg:mt-20">
      <button className="bg-white uppercase font-bold text-black rounded-md border-black border-2 px-2 py-1 shadow-btnShadowSmall md:shadow-btnShadowBig md:px-6 md:py-4 hover:bg-black hover:text-white duration-300 lg:px-12 lg:py-6">
        {name}
      </button>
    </div>
  );
};
export default Button;
