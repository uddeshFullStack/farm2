import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AssociateChannelsDesktop = () => {
  return (
    <div className='w-screen bg-backgroundColor-image relative flex flex-col justify-center items-center gap-y-24 py-0'>
      <div className='w-full h-auto flex flex-col md:flex-row flex-wrap justify-center items-start md:justify-around mt-10'>
        <div className='text-[36px] text-primary-colour font-bold mb-8 md:mb-0'>
          Associate Channels
        </div>
        <div>
          <Link href="https://buyonegram.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src={require('../../public/aboutUs/associate channels/icon.238b52d2_ZfUpwt.jpg').default}
              alt="Associate Channels"
              width={140}
              height={140}
              className="rounded-full bg-white"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
        <div>
          <Link href="https://talent.istart.rajasthan.gov.in/" target="_blank" rel="noopener noreferrer">
            <Image
              src={require('../../public/aboutUs/associate channels/istart-logo.jpg').default}
              alt="Associate Channels"
              width={140}
              height={140}
              className="rounded-full bg-white"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
      </div>
      <div className='w-[825px] h-auto flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-end md:gap-x-[325px] md:mb-20 md:px-40'>
        <div>
          <Link href="https://www.impunjab.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src={require('../../public/aboutUs/associate channels/PIM_Logo_Guideline_Artfile.jpg').default}
              alt="Associate Channels"
              width={140}
              height={140}
              className="rounded-full bg-white"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
        <div>
          <Link href="https://wadhwanifoundation.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src={require('../../public/aboutUs/associate channels/Wadhwani-Foundation-Logo.jpg').default}
              alt="Associate Channels"
              width={140}
              height={140}
              className="rounded-full bg-white"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssociateChannelsDesktop;
