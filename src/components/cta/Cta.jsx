import React from "react";
import CtaHeader from "./CtaHeader";
import CtaContent from "./CtaContent";
import CtaBg1 from "../../assets/img/ctaBg1.webp";
import CtaBg2 from "../../assets/img/ctaBg2.webp";

const Cta = () => {
  return (
    <div className="sectionContent bg-secondary flex flex-col items-center gap-10">
      <img src={CtaBg1} alt="bg 1" className="hidden absolute md:block left-0 bottom-0 md:w-[300px] lg:w-[373px]" draggable={false} />
      <img src={CtaBg2} alt="bg 2" className="hidden absolute md:block right-0 bottom-0 md:w-[270px] lg:w-[373px]" draggable={false} />
      <CtaHeader />
      <CtaContent />
    </div>
  );
};

export default Cta;
