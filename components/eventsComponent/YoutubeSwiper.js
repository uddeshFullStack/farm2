import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import ReactPlayer from "react-player";

const YouTubeSwiper = ({ data }) => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState({}); // Track play/pause state for each video
  const [isAnyVideoPlaying, setIsAnyVideoPlaying] = useState(false); // Track if any video is playing

  const handlePlay = (videoId) => {
    setIsPlaying((prev) => ({ ...prev, [videoId]: true })); // Mark as playing
    setIsAnyVideoPlaying(true);
    swiperRef.current.swiper.autoplay.stop(); // Stop swiper autoplay when a video is playing
  };

  const handlePause = (videoId) => {
    setIsPlaying((prev) => ({ ...prev, [videoId]: false })); // Mark as paused
    setIsAnyVideoPlaying(false);
    swiperRef.current.swiper.autoplay.start(); // Start swiper autoplay when no video is playing
  };

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={20}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {data.map((video, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-row gap-1 justify-center items-center relative h-[200px]">
            <div className="w-2/3 xsm:w-2/5 lg:w-1/4 h-[200px]">
              <ReactPlayer
                url={video.videoLink}
                playing={isPlaying[video.videoLink] || false}
                controls={true}
                width="100%"
                height="100%"
                onPlay={() => handlePlay(video.videoLink)} // Call handlePlay on video play
                onPause={() => handlePause(video.videoLink)} // Call handlePause on video pause
              />
            </div>
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
