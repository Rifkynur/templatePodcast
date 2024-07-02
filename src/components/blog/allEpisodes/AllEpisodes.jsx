import React from "react";
import AllEpisodesHeader from "./AllEpisodesHeader";
import AllEpisodesCategory from "./AllEpisodesCategory";
import AllEpisodesList from "./AllEpisodesList";
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
