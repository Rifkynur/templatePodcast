import CoverCard from "./CoverCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cover1 from "../../../assets/img/cover1.webp";
import cover2 from "../../../assets/img/cover2.webp";
import cover3 from "../../../assets/img/cover3.webp";
import cover4 from "../../../assets/img/cover4.webp";
import cover5 from "../../../assets/img/cover5.webp";
import cover6 from "../../../assets/img/cover6.webp";

const CoversContainer = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <CoverCard bg={cover1} title={"Perplexed Mind"} />
        </SwiperSlide>
        <SwiperSlide>
          <CoverCard bg={cover2} title={"Women’s Rights"} />
        </SwiperSlide>
        <SwiperSlide>
          <CoverCard bg={cover3} title={"Social Class"} />
        </SwiperSlide>
        <SwiperSlide>
          <CoverCard bg={cover4} title={"Pandemic Endemic"} />
        </SwiperSlide>
        <SwiperSlide>
          <CoverCard bg={cover5} title={"Tesla Autopilot"} />
        </SwiperSlide>
        <SwiperSlide>
          <CoverCard bg={cover6} title={"Self–confidence"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CoversContainer;
