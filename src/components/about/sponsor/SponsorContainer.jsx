import React from "react";
import SponsorCard from "./SponsorCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

import TestimonialCardNavigation from "../../landing/testimonials/TestimonialCardNavigation";

import Spotify from "../../../assets/img/about/Spotify.png";
import Youtube from "../../../assets/img/about/Youtube.png";
import GooglePodcast from "../../../assets/img/about/GooglePodcast.png";

const SponsorContainer = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="px-2">
          <SponsorCard img={GooglePodcast} />
        </SwiperSlide>
        <SwiperSlide className="px-2">
          <SponsorCard img={Spotify} />
        </SwiperSlide>
        <SwiperSlide className="px-2">
          <SponsorCard img={Youtube} />
        </SwiperSlide>
        <TestimonialCardNavigation />
      </Swiper>
    </div>
  );
};

export default SponsorContainer;
