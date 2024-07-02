import React from "react";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialCardContainer from "./TestimonialCardContainer";
import { StichingBlack } from "../../util/Stiching";

const Testimonial = () => {
  return (
    <div className="py-20 md:py-28 lg:py-36 relative bg-secondary">
      <TestimonialHeader />
      <TestimonialCardContainer />
      <StichingBlack />
    </div>
  );
};

export default Testimonial;
