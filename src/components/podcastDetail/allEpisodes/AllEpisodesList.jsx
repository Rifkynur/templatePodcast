import React from "react";
import ContentCard from "../../landing/content/ContentCard";

import cover1 from "../../../assets/img/cover1.png";
import cover2 from "../../../assets/img/cover2.png";
import cover3 from "../../../assets/img/cover3.png";
import cover4 from "../../../assets/img/cover4.png";
import cover5 from "../../../assets/img/cover5.png";
import cover6 from "../../../assets/img/cover6.png";
import Crown4 from "../../../assets/vector/Crown4.svg";

const AllEpisodesList = () => {
  return (
    <div className="mt-3 md:mt-10">
      <div className="flex realative px-2 flex-col gap-4 md:flex-row flex-wrap md:px-0 md:justify-center lg:gap-8">
        <ContentCard eps={6} cover={cover4} title={"Pandemic Becoming Endemic"} btn1={"covid-19"} btn2={"health"} />
        <ContentCard eps={5} cover={cover5} title={"Tesla Autopilot Controversy"} btn1={"automation"} btn2={"tech"} />
        <ContentCard eps={4} cover={cover2} title={"Women's Rights? Is it alright?"} btn1={"women's rights"} />
        <ContentCard eps={3} cover={cover6} title={"How to Deal with Self–Confidence"} btn1={"self-esteem"} btn2={"health"} />
        <ContentCard eps={2} cover={cover3} title={"Type of Social Classes of People"} btn1={"social class"} btn2={"wealth"} />
        <ContentCard eps={1} cover={cover1} title={"Are you a Perplexed Mind Person?"} btn1={"mind-behaviour"} btn2={"health"} />
        <img src={Crown4} alt="illustration" className="absolute hidden md:block md:w-[70px] md:bottom-16 md:left-0 lg:w-[194px] lg:left-[-50px] " />
      </div>
    </div>
  );
};

export default AllEpisodesList;
