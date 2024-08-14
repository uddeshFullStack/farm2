import Image from 'next/image'
import React from 'react'

const AssociateChannels = () => {
  return (
    <div className='w-full bg-backgroundColor-image relative flex flex-col justify-center items-center py-10'>
      <div className='w-full h-auto flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-around mt-20'>
        <div className='text-[36px] text-primary-colour font-bold mb-8 md:mb-0'>
          Associate Channels
        </div>
        <div>
          <Image
            src={require('../../public/aboutUs/Ellipse 41.jpg').default}
            alt="Associate Channels"
            width={140}
            height={140}
            className="rounded-full"
          />
          </div>
          <div>
            <Image
            src={require('../../public/aboutUs/Ellipse 41.jpg').default}
            alt="Associate Channels"
            width={140}
            height={140}
            className="rounded-full"
            />
          </div>
        </div>
        <div className='w-full h-auto flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-around md:mb-20 md:px-40'>
          <div>
            <Image
              src={require('../../public/aboutUs/Ellipse 41.jpg').default}
              alt="Associate Channels"
              width={140}
              height={140}
              className="rounded-full"
            />
            </div>
            <div>
              <Image
              src={require('../../public/aboutUs/Ellipse 41.jpg').default}
              alt="Associate Channels"
              width={140}
              height={140}
              className="rounded-full"
              />
            </div>
          </div>
        </div>
  )
}

export default AssociateChannels