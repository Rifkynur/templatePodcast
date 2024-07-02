import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TestimonialCard from "./TestimonialCard";
import TestimonialCardNavigation from "./TestimonialCardNavigation";
import { Navigation } from "swiper/modules";

import Avatar from "../../../assets/img/avatar.png";
import Avatar1 from "../../../assets/img/avatar1.png";
import Avatar2 from "../../../assets/img/avatar2.png";
import Avatar3 from "../../../assets/img/avatar3.png";
import Spotify from "../../../assets/img/Spotify.png";
import GooglePodcast from "../../../assets/img/GooglePodcast.png";
import Youtube from "../../../assets/img/Youtube.png";

const TestimonialCardContainer = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 20,
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
        <SwiperSlide>
          <TestimonialCard name={"Luna lovegood,"} avatar={Avatar1} platform={Spotify} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard name={"Emily Blunt,"} avatar={Avatar2} platform={GooglePodcast} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard name={"Mia Winters,"} avatar={Avatar3} platform={Youtube} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard name={"Jimat Surajat"} avatar={Avatar} platform={Spotify} />
        </SwiperSlide>

        <TestimonialCardNavigation />
      </Swiper>
    </>
  );
};

export default TestimonialCardContainer;
