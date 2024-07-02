import React from "react";
import Button from "../../util/Button";

const ButtonForm = () => {
  return (
    <div className="flex justify-between items-end text-[8px] md:text-[10px] lg:text-sm">
      <span className="before:content-['*'] before:text-accentRed">required</span>
      <Button name={"Send Message"} />
      <p className="w-[70px] md:w-[100px] lg:w-[150px]">
        Viverra at port accumsan.<span className="text-accentRed">Orci non</span>
      </p>
    </div>
  );
};

export default ButtonForm;
