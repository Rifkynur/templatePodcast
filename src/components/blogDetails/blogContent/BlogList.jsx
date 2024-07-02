import React from "react";

const BlogList = () => {
  return (
    <div className="mt-8 flex flex-col gap-3 px-5 md:flex-row md:px-8 md:gap-6 md:mt-12 lg:px-16 lg:gap-5 lg:mt-[100px]">
      <div>
        <h4 className="text-sm font-bold text-center mb-5 lg:text-[22.65px]">Bullet list example:</h4>
        <ul className="flex list-disc marker:text-accentRed flex-col text-xs gap-2 md:gap-4 lg:text-base lg:gap-10">
          <li>
            Lorem ipsum dolor sit amet, <span className="font-bold">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis curs us dignissim odio. Sit vulputate et integer in.
          </li>
          <li>
            Sit vel, senectus iaculis morbi. <span className="font-bold">Amet</span> interdum imperdiet laoreet <span className="font-bold">morbi</span> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan.{" "}
            <span className="underline">Orci non here</span>
          </li>
          <li>
            Quis dictum cursus faucibus mattis dignissim. Pellent que <span className="font-bold">purus in sed</span> sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold text-center mb-5 lg:text-[22.65px]">Number list example:</h4>
        <ol className="flex list-decimal marker:text-accentRed marker:font-bold flex-col text-xs gap-2 md:gap-4 lg:text-base lg:gap-10">
          <li>
            Lorem ipsum dolor sit amet, <span className="font-bold">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis curs us dignissim odio. Sit vulputate et integer in.
          </li>
          <li>
            Sit vel, senectus iaculis morbi. <span className="font-bold">Amet</span> interdum imperdiet laoreet <span className="font-bold">morbi</span> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan.
            <span className="underline">Orci non here</span>
          </li>
          <li>
            Quis dictum cursus faucibus mattis dignissim. Pellent que <span className="font-bold">purus in sed</span> sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BlogList;
