import React from "react";
import AllEpisdodesCard from "./AllEpisdodesCard";

import Blog1 from "../../../assets/img/blog/blog1.webp";
import Blog2 from "../../../assets/img/blog/blog2.webp";
import Blog3 from "../../../assets/img/blog/blog3.webp";
import Blog4 from "../../../assets/img/blog/blog4.webp";

const tag1 = ["bussines", "podcast", "startup"];
const tag2 = ["arts", "tips and trick", "creative"];
const tag3 = ["news", "nature"];
const tag4 = ["productivity", "mindset"];
const AllEpisodesList = () => {
  return (
    <div className="mt-8 relative px-2 flex flex-col gap-5 md:flex-row md:justify-center md:flex-wrap">
      <AllEpisdodesCard tag={tag1} img={Blog1} title1={"Setup Your Own Podcast"} title={"PODCAST"} date={"Sep 14, 2021"} />
      <AllEpisdodesCard tag={tag2} img={Blog2} title1={"Doodle Artwork 101"} title={"TIPS & TRICK"} date={"Sep 12, 2021"} />
      <AllEpisdodesCard tag={tag4} img={Blog3} title1={"Mother Nature Taking Over"} title={"NEWS"} date={"Sep 10, 2021"} />
      <AllEpisdodesCard tag={tag3} img={Blog4} title1={"How to Be Productive"} title={"PRODUCTIVITY"} date={"Sep 8, 2021"} />
    </div>
  );
};

export default AllEpisodesList;
