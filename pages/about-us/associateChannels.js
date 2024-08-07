import Image from 'next/image'
import React from 'react'

const AssociateChannels = () => {
  return (
    <div className='w-full h-[613px] bg-backgroundColor-image relative flex flex-col justify-center'>
          <div className='w-full h-[613px]  flex flex-row justify-around mt-20'>
              <div className='text-[36px] text-primary-colour font-bold mb-8'>
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
          <div className='w-full h-[613px] flex flex-row justify-center gap-96 ml-28'>
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