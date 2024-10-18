import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Image from "next/image";

const TouristGlances = ({ className = "" }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section
    className={`self-stretch flex flex-row items-start justify-start mt-4 px-[65px] pb-[25px] box-border max-w-full text-left text-9xl text-primary-colour font-inter mq750:pl-8 mq750:pr-8 mq750:pb-[65px] mq750:box-border ${className}`}
  >
    <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full mq750:gap-[25px]">
      <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-3xl">
        Some Tourist Glances
      </h2>
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
        <SwiperSlide>
            <div className="relative w-full" style={{ paddingTop: '75%' }}>
              <Image
                src='/TouristGlance1.jpg'
                layout="fill"
                objectFit="cover"
                alt="Tourist Glance 1"
                className="absolute inset-0"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full" style={{ paddingTop: '75%' }}>
              <Image
                src='/TouristGlance2.jpg'
                layout="fill"
                objectFit="cover"
                alt="Tourist Glance 2"
                className="absolute inset-0"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full" style={{ paddingTop: '75%' }}>
              <Image
                src='/TouristGlance3.png'
                layout="fill"
                objectFit="cover"
                alt="Tourist Glance 3"
                className="absolute inset-0"
              />
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      ) : (
        <div className="self-stretch flex flex-row items-start justify-start gap-[37px] max-w-full mq750:gap-[18px] mq1275:flex-wrap">
          <div className="h-[466px] flex-1 relative bg-gainsboro min-w-[529px] max-w-full mq750:min-w-full">
            <Image
                  src='/TouristGlance1.jpg'
                  layout="fill"
                  objectFit="cover"
                  alt="Tourist Glance 1"
                  className="absolute inset-0"
              />
          </div>
          <div className="w-[459px] flex flex-col items-start justify-start gap-[42px] min-w-[459px] max-w-full mq450:gap-[21px] mq750:min-w-full mq1275:flex-1">
          <div className="flex flex-col items-start justify-start gap-[21px] min-w-full max-w-full">
            <Image
              src='/TouristGlance2.jpg'
              layout="responsive"
              width={459}
              height={212}
              objectFit="cover"
              alt="Tourist Glance 2"
              className="w-full h-auto"
            />
            <Image
              src='/TouristGlance3.png'
              layout="responsive"
              width={459}
              height={212}
              objectFit="cover"
              alt="Tourist Glance 3"
              className="w-full h-auto"
            />
          </div>
        </div>
        </div>
      )}
      </div>
    </section>
  );
};

TouristGlances.propTypes = {
  className: PropTypes.string,
};

export default TouristGlances;
