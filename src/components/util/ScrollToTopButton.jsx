import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={toTop} className="bg-primary z-[2] cursor-pointer border-2 border-black rounded-full p-3 fixed bottom-8 right-3 lg:right-6">
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTopButton;
