import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import FarmCard from "./farm-cardComponent/farmCard";

const FarmCardSwiper = ({ farms, propWidth, propMinWidth }) => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000, // Adjust the delay as needed (3000ms = 3s)
        disableOnInteraction: false,
      }}
      loop={true} // Enable infinite looping
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      style={{ width: "100%", height: "auto" }} // Ensure Swiper has full width
    >
      {farms.map((farm) => (
        <SwiperSlide key={farm.id} style={{ display: "flex", justifyContent: "center" }}>
          <div className="w-full " style={{ minWidth: propMinWidth, maxWidth: propWidth }}>
            <FarmCard
              propWidth={propWidth}
              propMinWidth={propMinWidth}
              farm={farm}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FarmCardSwiper;
