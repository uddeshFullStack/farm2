import React from 'react';
import AssociateImageSwiper from '../swiperSilder/AssociateImageSwiper';

const AssociateChannelsMobile = () => {
  const images = [
    require('../../public/aboutUs/associate channels/icon.238b52d2_ZfUpwt.jpg').default,
    require('../../public/aboutUs/associate channels/istart-logo.jpg').default,
    require('../../public/aboutUs/associate channels/PIM_Logo_Guideline_Artfile.jpg').default,
    require('../../public/aboutUs/associate channels/Wadhwani-Foundation-Logo.jpg').default,
  ];

  
  const linksPages = [
    "https://buyonegram.com/",
    "https://talent.istart.rajasthan.gov.in/",
    "https://www.impunjab.org/",
    "https://wadhwanifoundation.org/",
  ];
  

  return (
    <div className='w-screen bg-backgroundColor-image relative flex flex-col justify-center items-center py-0'>
      <div className='w-full h-auto flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-around my-8'>
        <div className='text-[24px] sm:text-[30px] md:text-[36px] text-primary-colour font-bold mb-8 md:mb-0'>
          Associate Channels
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-[200px] h-auto rounded-full'>
            <AssociateImageSwiper classNameAssociateChannelsMobile={"rounded-full bg-white"} images={images} linksPages={linksPages} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssociateChannelsMobile;
