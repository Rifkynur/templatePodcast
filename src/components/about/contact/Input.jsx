import React from "react";

const Input = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col text-[12px] gap-3 mt-2 lg:text-base">
      <label className="font-bold after:content-['*'] after:text-accentRed">{label}</label>
      <input type={type} placeholder={placeholder} className="border border-black rounded-lg py-2 px-3 focus:outline-accentRed lg:p-5" />
    </div>
  );
};

export default Input;
