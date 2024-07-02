import React from "react";
import Youtube from "../../../assets/img/Youtube.png";
import Spotify from "../../../assets/img/Spotify.png";
import GooglePodcast from "../../../assets/img/GooglePodcast.png";

const Platform = () => {
  return (
    <div className="border-t-2 border-b-2 border-black w-[80%] mx-auto mt-10 py-4 flex items-center justify-between pe-4 md:mt-16 lg:mt-32 lg:py-8">
      <h2 className="font-bold text-xs md:text-base lg:text-xl">Supported by:</h2>
      <div className="flex gap-5 md:gap-8 lg:gap-12">
        <img src={Spotify} alt="spotify" className="w-12 object-contain md:w-20 lg:w-40" />
        <img src={GooglePodcast} alt="Google podcast" className="w-12 object-contain md:w-20 lg:w-40" />
        <img src={Youtube} alt="youtube" className="w-12 object-contain md:w-20 lg:w-40" />
      </div>
    </div>
  );
};

export default Platform;
