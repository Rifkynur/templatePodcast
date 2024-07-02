import React from "react";

const BlogDescription = () => {
  return (
    <div className="mt-5  px-2 md:px-8 lg:px-20 lg:mt-20">
      <div className=" flex flex-col gap-2 border-b border-black pb-5 md:flex-row md:gap-5 md:pb-8 lg:pb-20">
        <div>
          <p className="text-xs md:text-[14px] md:leading-[19px] lg:leading-[25.6px] lg:text-base">
            Lorem ipsum dolor sit amet, <span className="font-bold">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in.
          </p>
          <p className="text-xs mt-2 md:text-[14px] md:mt-5 md:leading-[19px] lg:leading-[25.6px] lg:text-base">
            Sit vel, senectus iaculis morbi. <span className="font-bold">Amet</span> interdum imperdiet laoreet <span className="font-bold">morbi</span> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan.{" "}
            <span className="underline">Orci non here</span>
          </p>
        </div>
        <div>
          <p className="text-xs md:text-[14px] md:leading-[19px] lg:leading-[25.6px] lg:text-base">
            Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend est cons ctetur interdum eu in auctor. Gravida leo et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
