import React from "react";

const PricingCard = ({ list, price, name }) => {
  return (
    <div className="lg:w-[373px] relative z-[5] mx-auto">
      <div className={`p-5 pt-5 border-2 border-black rounded-lg lg:py-[60px] lg:px-[40px] ${name === "Family" ? "bg-primary" : "bg-white"}`}>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl lg:text-4xl">{name}</h3>
          {name === "Family" ? <span className="text-xs bg-accentRed text-white font-bold p-1 rounded-md">most popular</span> : null}
        </div>
        <p className="text-sm max-w-[270px] mt-5">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
        <div className="flex justify-between items-center text-xs mt-10 lg:mt-[90px]">
          <button className="bg-black text-white shadow-btnShadowSmall px-2 py-1 rounded-md font-bold border border-black hover:text-black hover:bg-white duration-200 lg:text-sm lg:px-9 lg:py-5">Subscribe</button>
          <h4 className="text-accentRed font-bold lg:text-[22.65px] lg:leading-[31.71px]">
            ${price} <br />
            <span className="text-[#4D4D4D]">/month</span>
          </h4>
        </div>
      </div>
      <div className={`p-5 pt-5 border-2 border-black rounded-lg mt-2 md:h-[250px] lg:p-[40px] lg:h-[312px] ${name === "Family" ? "bg-primary" : "bg-white"}`}>
        <h4 className="text-sm">What’s included:</h4>
        <ul className="text-xs ms-3 flex flex-col gap-3 mt-3 lg:text-base">
          {list?.map((item, index) => (
            <li key={index} className={`list-disc ${name === "Family" || name === "Official" ? "first:font-bold" : ""}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
