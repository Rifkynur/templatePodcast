import React from "react";
import Button from "../util/Button";
import Youtube from "../../assets/vector/youtube.svg";
import GooglePodcast from "../../assets/vector/googlePodcast.svg";
import Spotify from "../../assets/vector/spotify.svg";
import Spark2 from "../../assets/vector/SmallSpark2.svg";

const CtaContent = () => {
  return (
    <div className="flex flex-col gap-5 relative">
      <img src={Spark2} alt="illustration" className="absolute w-[25px] right-0 top-3 md:w-[50px] md:right-[-35px] lg:w-[62px] lg:top-8 lg:right-[-50px]" />
      <Button name={"download now"} />
      <div className="flex flex-col items-center">
        <p className="mb-2">Content also available on:</p>
        <div className="flex items-center justify-center gap-5">
          <img src={GooglePodcast} alt="google Pdcast" />
          <img src={Youtube} alt="youtube" />
          <img src={Spotify} alt="spotify" />
        </div>
      </div>
    </div>
  );
};

export default CtaContent;
