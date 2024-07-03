import React from "react";
import ContentCard from "../../landing/content/ContentCard";

import cover1 from "../../../assets/img/cover1.webp";
import cover2 from "../../../assets/img/cover2.webp";
import cover3 from "../../../assets/img/cover3.webp";
import cover4 from "../../../assets/img/cover4.webp";
import cover5 from "../../../assets/img/cover5.webp";
import cover6 from "../../../assets/img/cover6.webp";
import Crown4 from "../../../assets/vector/Crown4.svg";

const AllEpisodesList = () => {
  return (
    <div className="mt-3 md:mt-10">
      <div className="flex realative px-2 flex-col gap-4 md:flex-row flex-wrap md:px-0 md:justify-center lg:gap-8">
        <ContentCard eps={6} cover={cover4} title={"Pandemic Becoming Endemic"} tag1={"covid-19"} tag2={"health"} />
        <ContentCard eps={5} cover={cover5} title={"Tesla Autopilot Controversy"} tag1={"automation"} tag2={"tech"} />
        <ContentCard eps={4} cover={cover2} title={"Women's Rights? Is it alright?"} tag1={"women's rights"} />
        <ContentCard eps={3} cover={cover6} title={"How to Deal with Self–Confidence"} tag1={"self-esteem"} tag2={"health"} />
        <ContentCard eps={2} cover={cover3} title={"Type of Social Classes of People"} tag1={"social class"} tag2={"wealth"} />
        <ContentCard eps={1} cover={cover1} title={"Are you a Perplexed Mind Person?"} tag1={"mind-behaviour"} tag2={"health"} />
        <img src={Crown4} alt="illustration" className="absolute hidden md:block md:w-[70px] md:bottom-16 md:left-0 lg:w-[194px] lg:left-[-50px] " />
      </div>
    </div>
  );
};

export default AllEpisodesList;
