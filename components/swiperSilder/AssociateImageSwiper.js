import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const AssociateImageSwiper = ({ images, classNameAssociateChannelsMobile, linksPages }) => {
  // Create a helper function to group images into pairs
  const groupedImages = [];
  const groupedLinks = [];
  for (let i = 0; i < images.length; i += 2) {
    groupedImages.push([images[i], images[i + 1]]);
    groupedLinks.push([linksPages[i], linksPages[i + 1]]);
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
          <div className="relative flex flex-col h-auto w-full gap-2">
            {/* First image with link */}
            {imagePair[0] && groupedLinks[index][0] && (
              <Link href={groupedLinks[index][0]} target="_blank" rel="noopener noreferrer">
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden flex justify-center items-center bg-white">
                  <Image
                    alt={`Image ${index * 2 + 1}`}
                    src={imagePair[0]}
                    width={200}  // Keep the image dimensions to ensure quality
                    height={200}
                    layout="intrinsic"
                  />
                </div>
              </Link>
            )}
            {/* Second image with link */}
            {imagePair[1] && groupedLinks[index][1] && (
              <Link href={groupedLinks[index][1]} target="_blank" rel="noopener noreferrer">
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden flex justify-center items-center bg-white">
                  <Image
                    alt={`Image ${index * 2 + 2}`}
                    src={imagePair[1]}
                    width={200}  // Keep the image dimensions to ensure quality
                    height={200}
                    layout="intrinsic"
                  />
                </div>
              </Link>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AssociateImageSwiper;
