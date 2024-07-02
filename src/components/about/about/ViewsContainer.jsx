import React from "react";
import ViewsCard from "./ViewsCard";

const ViewsContainer = () => {
  return (
    <div className="absolute top-[-30px] w-full flex justify-center gap-4 left-[-50%] translate-x-1/2 md:top-[-50px] lg:top-[-120px]">
      <ViewsCard count={76} desc={"Community Members"} />
      <ViewsCard count={128} desc={"Podcast Subscribers"} />
      <ViewsCard count={59} desc={"Daily Listeners"} />
    </div>
  );
};

export default ViewsContainer;
