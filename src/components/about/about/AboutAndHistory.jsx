import React from "react";
import SmallSpark from "../../../assets/vector/SmallSpark.svg";

const AboutAndHistory = () => {
  return (
    <div className="p-8 relative mt-2 md:mt-5 lg:mt-10">
      <img src={SmallSpark} alt="illustration" className="absolute w-[25px] left-[76px] top-6 md:w-[50px] md:left-[260px] md:top-2 lg:w-[62px] lg:left-[420px] lg:top-0" />
      <div className="border-b-[.5px] border-black pb-8">
        <h4 className="font-bold text-lg text-center md:text-2xl lg:text-4xl">About and History</h4>
        <div className="flex flex-col gap-2 mt-2 md:flex-row md:mt-8">
          <div className="md:w-1/2">
            <p className="text-[8px] md:text-[14px] lg:text-base">
              Eu non <span className="font-bold">diam</span> phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam <span className="font-bold">elementum pulvinar</span> .
            </p>
            <p className="text-[8px] md:text-[14px] lg:text-base mt-1 md:mt-3">Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.</p>
          </div>
          <div className="md:w-1/2">
            <p className="text-[8px] md:text-[14px] lg:text-base">
              Lorem ipsum dolor sit amet, <span className="font-bold">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi.
              <span className="font-bold">Amet</span> interdum imperdiet laoreet <span className="font-bold">morbi</span> tincidunt fermentum, libero. Ante enim eget.
            </p>
            <p className="text-[8px] md:text-[14px] lg:text-base mt-1 md:mt-3">Viverra at porttitor accumsan. Orci non here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndHistory;
