import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import YouTube from "react-youtube";

const YouTubeSwiper = ({ data }) => {
  const swiperRef = useRef(null);

  const videoOptions = {
    width: '100%',
    height: '200px',
    playerVars: {
      autoplay: 0, // Disable autoplay to avoid conflicts with Swiper autoplay
    },
  };

  const handleVideoPlay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleVideoPause = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={20}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {data.map((video, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-row gap-1 justify-center items-center relative h-[200px]">
            <div className="w-2/3 xsm:w-2/5  lg:w-1/4 h-[200px]">
              <YouTube
                videoId={video.videoLink.split("v=")[1]}
                opts={videoOptions}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              />
            </div>
            {/* <div className="flex flex-col bg-white shadow-lg rounded-lg p-4 w-2/3 xsm:w-2/5  lg:w-1/4 h-[180px] py-10 sm:text-base sm:p-4">
              <div className="font-semibold text-xl text-primary-colour">
                {video?.eventTitle}
              </div>
              <div className="text-lg mt-1">
                {video?.eventDetails?.date}
              </div>
              <div className="mt-4 text-sm text-gray-700 overflow-hidden">
                {video?.eventDetails?.description}
              </div>
            </div> */}
            <div className="flex flex-col bg-white shadow-lg rounded-lg p-4 w-2/3 xsm:w-2/5 lg:w-1/4 h-[180px] py-10 sm:text-base sm:p-4 overflow-y-auto">
            <div className="font-semibold text-xl text-primary-colour">
              {video?.eventTitle}
            </div>
            <div className="text-lg mt-1">
              {video?.eventDetails?.date}
            </div>
            <div className="mt-4 text-sm text-gray-700">
              {video?.eventDetails?.description}
            </div>
          </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default YouTubeSwiper;
