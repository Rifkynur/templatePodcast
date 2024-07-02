import React from "react";
import Youtube from "../../assets/img/Youtube.png";
import Spotify from "../../assets/img/Spotify.png";
import GooglePodcast from "../../assets/img/GooglePodcast.png";
import AppStore from "../../assets/img/app_store.png";
import GooglePlay from "../../assets/img/google_play.png";

const FooterPlatform = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-14">
      <div className="flex flex-col gap-2 lg:gap-5">
        <p>Listen to episodes on your fav platform:</p>
        <div className="flex items-center gap-2 lg:gap-5">
          <img src={GooglePodcast} alt="google podcast" className="w-[50px] object-contain lg:w-24" />
          <img src={Spotify} alt="spotify" className="w-[50px] object-contain lg:w-24" />
          <img src={Youtube} alt="youtube" className="w-[50px] object-contain lg:w-24" />
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:gap-5">
        <p className="">App available on:</p>
        <div className="flex gap-2">
          <img src={AppStore} alt="app store" className="w-[20px] lg:w-[36px]" />
          <img src={GooglePlay} alt="play store" className="w-[20px] lg:w-[36px]" />
        </div>
      </div>
    </div>
  );
};

export default FooterPlatform;
