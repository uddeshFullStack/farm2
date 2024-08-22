import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const ImageSwiper = ({ images }) => {
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
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative !h-[628px] w-full">
            <Image
              className="!h-[628px] w-full object-cover"
              alt=""
              src={image}
              width={1400}
              height={628}
              layout="intrinsic"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
