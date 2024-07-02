import React from "react";
import { useSwiper } from "swiper/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const TestimonialCardNavigation = () => {
  const swiper = useSwiper();
  return (
    <div className="mt-5 flex justify-center items-center gap-8 md:justify-start md:px-8">
      <button onClick={() => swiper.slidePrev()} className="p-2 border-2 border-black rounded-full hover:border-[#CD4631] hover:text-[#CD4631] duration-200" aria-label="prev button">
        <FaChevronLeft />
      </button>
      <button onClick={() => swiper.slideNext()} className="p-2 border-2 border-black rounded-full hover:border-[#CD4631] hover:text-[#CD4631] duration-200" aria-label="next button">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default TestimonialCardNavigation;
