
import React from 'react'
import ImageSwiper from '../swiperSilder/ImageSwiper';

const AssociateChannelsMobile = () => {
  const images = [
    require('../../public/aboutUs/Ellipse 41.jpg').default,
    require('../../public/aboutUs/Ellipse 41.jpg').default,
    require('../../public/aboutUs/Ellipse 41.jpg').default,
    require('../../public/aboutUs/Ellipse 41.jpg').default,
  ];

  return (
    <div className='w-screen bg-backgroundColor-image relative flex flex-col justify-center items-center py-0'>
      <div className='w-full h-auto flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-around my-8'>
        <div className='text-[24px] sm:text-[30px] md:text-[36px] text-primary-colour font-bold mb-8 md:mb-0'>
          Associate Channels
        </div>
        <div className='w-[50%] rounded-full'>
          <ImageSwiper classNameAssociateChannelsMobile={"rounded-full"}  images={images} />
        </div>
      </div>
    </div>
  );
}

export default AssociateChannelsMobile;
