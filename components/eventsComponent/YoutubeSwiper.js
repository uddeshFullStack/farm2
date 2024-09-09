import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import YouTube from "react-youtube";

const YouTubeSwiper = ({ data }) => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState({}); // To track the play/pause state of each video

  const videoOptions = {
    width: '100%',
    height: '200px',
    playerVars: {
      autoplay: 0, // Disable autoplay to avoid conflicts with Swiper autoplay
    },
  };

  const handleVideoClick = (event, videoId) => {
    const player = event.target;
    const videoState = isPlaying[videoId] || false; // Get the current video state

    if (videoState) {
      player.pauseVideo();
      setIsPlaying((prev) => ({ ...prev, [videoId]: false })); // Mark as paused
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.autoplay.stop(); // Start swiper autoplay
      }
    } else {
      player.playVideo();
      setIsPlaying((prev) => ({ ...prev, [videoId]: true })); // Mark as playing
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.autoplay.start
        (); // Stop swiper autoplay
      }
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
            <div className="w-2/3 xsm:w-2/5 lg:w-1/4 h-[200px]">
              <YouTube
                videoId={video.videoLink.split("v=")[1]}
                opts={videoOptions}
                onClick={(event) => handleVideoClick(event, videoId)}
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
