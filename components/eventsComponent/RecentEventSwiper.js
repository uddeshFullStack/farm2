import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import RecentEventCard from "./RecentEventCard";

const RecentEventSwiper = ({ events }) => {
  const swiperRef = useRef(null); // Swiper instance reference

  const handleSeeMoreClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop(); // Stop autoplay
    }
  };
  const handleSeeLessClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start(); 
    }
  };

  return (
    <Swiper
      ref={swiperRef} // Reference the Swiper
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {events.map((event, index) => (
        <SwiperSlide key={index}>
          <div className="w-full">
            <RecentEventCard event={event} onSeeMore={handleSeeMoreClick} onSeeLess={handleSeeLessClick} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecentEventSwiper;
