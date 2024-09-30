import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const AssociateImageSwiper = ({ images, classNameAssociateChannelsMobile }) => {
  // Create a helper function to group images into pairs
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push([images[i], images[i + 1]]);
  }

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
      {groupedImages.map((imagePair, index) => (
        <SwiperSlide key={index}>
          <div className="relative flex flex-col h-[75%] w-full">
            {/* First image */}
            {imagePair[0] && (
              <div className="w-full h-[50%]">
                <Image
                  className={`h-full w-full object-cover ${classNameAssociateChannelsMobile ? "rounded-full" : ""}`}
                  alt={`Image ${index * 2 + 1}`}
                  src={imagePair[0]}
                  width={1400}
                  height={628}
                  layout="intrinsic"
                />
              </div>
            )}
            {/* Second image */}
            {imagePair[1] && (
              <div className="w-full h-[50%] mt-4">
                <Image
                  className={`h-full w-full object-cover ${classNameAssociateChannelsMobile ? "rounded-full" : ""}`}
                  alt={`Image ${index * 2 + 2}`}
                  src={imagePair[1]}
                  width={1400}
                  height={628}
                  layout="intrinsic"
                />
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AssociateImageSwiper;
