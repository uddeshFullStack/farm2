import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules"; // Removed Pagination module import
import RecentEventCard from "./RecentEventCard";

const RecentEventSwiper = ({ events }) => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 3000, // Adjust the delay as needed
        disableOnInteraction: false,
      }}
      loop={true} // Enable infinite looping
      modules={[Autoplay]} // Removed Pagination module
      className="mySwiper"
    >
      {events.map((event, index) => (
        <SwiperSlide key={index}>
          <div className="w-[80%] sm:w-[70%]">
            <RecentEventCard event={event} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecentEventSwiper;
