import React from "react";
import AllEpisodesHeader from "./AllEpisodesHeader";
import AllEpisodesList from "./AllEpisodesList";
import AllEpisodesCategory from "./AllEpisodesCategory";
import { StichingRed } from "../../util/Stiching";

const AllEpisodes = () => {
  return (
    <div className="sectionContent">
      <AllEpisodesHeader />
      <AllEpisodesCategory />
      <AllEpisodesList />
      <StichingRed />
    </div>
  );
};

export default AllEpisodes;
