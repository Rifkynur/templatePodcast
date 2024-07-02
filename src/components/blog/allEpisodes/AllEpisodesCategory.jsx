import React from "react";

const AllEpisodesCategory = () => {
  return (
    <div className="px-2 py-5 md:px-5 lg:px-10 lg:py-8">
      <ul className="flex gap-2 py-2 font-medium text-[10px] border-b-[.5px] border-black justify-between md:text-sm md:py-5 lg:text-[22px] lg:py-8">
        <li className="text-accentRed">All</li>
        <li>Business</li>
        <li>News</li>
        <li>Tips & Trick</li>
        <li>Podcast</li>
        <li>Productivity</li>
      </ul>
    </div>
  );
};

export default AllEpisodesCategory;
