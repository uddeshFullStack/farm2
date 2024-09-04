import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import GroupComponent1 from "../group-component1"; // Import GroupComponent1 for review data

const ReviewSwiper = ({ reviews, propWidth }) => {
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
      {reviews.map((data, index) => (
        <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
          <GroupComponent1
            propAlignSelf="unset"
            propWidth={propWidth}
            groupData={data}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSwiper;
