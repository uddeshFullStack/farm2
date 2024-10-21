import Image from 'next/image'
import React from 'react'

const AssociateChannelsDesktop = () => {
  return (
    <div className='w-full bg-backgroundColor-image relative flex flex-col justify-center items-center gap-y-24 py-0'>
      <div className='w-full h-auto flex flex-col md:flex-row flex-wrap justify-center items-start md:justify-around  mt-10'>
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
      <div className='w-[825px] h-auto flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-end md:gap-x-[325px] md:mb-20 md:px-40'>
          <div className=''>
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

export default AssociateChannelsDesktop