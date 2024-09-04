import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import GroupComponent1 from "../group-component1";
import { useMediaQuery } from 'react-responsive';

const Review = ({ groupData }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex flex-col bg-backgroundColor-custom-green py-10 w-full">
      <div className="p-7 w-2/3 sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 h-auto font-inter font-bold text-primary-colour text-justify responsive-text">
        Discover What Our Users Say About Saran Farm: Hear Their Remarkable
        Experiences and Success Stories
      </div>

      {isMobile ? (
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          style={{ width: "100%", height: "auto" }}
        >
          {groupData.map((data, index) => (
            <SwiperSlide className="mr-0" key={index} style={{ display: "flex", justifyContent: "center" }}>
            <div className="w-[300px]">
              <GroupComponent1
                propAlignSelf="unset"

                groupData={data}
              />
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex flex-wrap gap-10 pt-5">
          {groupData.map((data, index) => (
            <GroupComponent1
              key={index}
              propAlignSelf="unset"
              propWidth="295px"
              groupData={data}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
