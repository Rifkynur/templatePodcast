import React from "react";
import HeaderContent from "../../util/HeaderContent";
import Crown3 from "../../../assets/vector/Crown3.svg";

const ContactHeader = () => {
  return (
    <div>
      <div className="relative mx-auto max-w-[150px] md:max-w-[200px] lg:max-w-[450px] ">
        <HeaderContent title={"Get in touch"} desc={"Send your message to us"} />
        <img src={Crown3} alt="illustration" className="absolute w-[25px] top-[-10px] right-0 md:w-[50px] md:top-[-25px] md:right-[-25px] lg:w-[75px] lg:right-2" />
      </div>
    </div>
  );
};

export default ContactHeader;
