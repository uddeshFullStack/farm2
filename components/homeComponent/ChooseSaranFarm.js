import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import HomePageFrameLeftComponent from "../HomePageFrameLeftComponent";
import HomePageFrameRightComponent from "../HomePageFrameRightComponent";
import { useMediaQuery } from 'react-responsive';

const ChooseSaranFarm = ({ componentsData, expandedIndex, handleExpand, swiperRef }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start font-inter px-[65px] pb-[25px] box-border max-w-full mq750:pl-8 mq750:pr-8 mq750:pb-[31px] mq750:box-border mq1100:pb-12 mq1100:box-border mq1275:pb-[74px] mq1275:box-border pt-10">
      <div className="relative font-bold text-7xl inline-block max-w-full text-primary-colour">
        Why Choose Saran Farm: Explore Our Features and Offerings
      </div>

      {isMobile ? (
        <Swiper
          ref={swiperRef} // Attach swiperRef to Swiper component
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
          {componentsData.map((data, index) => (
            <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
              <HomePageFrameLeftComponent
                data={data}
                isExpanded={expandedIndex === index}
                onExpand={() => handleExpand(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex flex-wrap gap-10 pt-5">
          {componentsData.map((data, index) => (
            <div key={index} className="hidden lg:block">
              {index % 2 === 0 ? (
                <HomePageFrameLeftComponent
                  data={data}
                  isExpanded={expandedIndex === index}
                  onExpand={() => handleExpand(index)}
                />
              ) : (
                <HomePageFrameRightComponent
                  data={data}
                  isExpanded={expandedIndex === index}
                  onExpand={() => handleExpand(index)}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChooseSaranFarm;
