import React from 'react'
import Layout from '../layout'
import image1 from '../../public/aboutUs/Rectangle.jpg'
import Image from 'next/image'
import InfoSection from '../../components/infoSecton'
import CardContainerUpper from '../register-farm/cardContainerUpper'
import { cards, profileCards } from './constant'


import Team from './team'
import AssociateChannels from './associateChannels'
import GetTouchWith from './getTouchWith'


const AboutUs = () => {
  
  const classNameUser='absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full'
  return (
    <Layout>
      <div className='font-inter'>   
        <div className='self-stretch relative'>
          <Image src={image1} alt='image1'className='w-full'></Image>
          <div className='absolute top-12 left-0 w-full h-full flex  justify-center'>
            <h1 className='text-4xl font-bold text-white'>About Us</h1>
          </div>
        </div>
        <div>
          <InfoSection question={'What is Saran Farm ?'} answer={'Welcome to Saran.farm, a sustainable agritourism startup dedicated to connecting farmers, consumers, and nature enthusiasts. At Saran.farm, we believe in the power of authentic farm experiences to foster a deeper understanding of agriculture, promote sustainable practices, and support local communities.'} image={image1} isTextFirst={true}/>
        </div>
        <div className='bg-backgroundColor-image w-full pl-12 py-10'>
          <CardContainerUpper cards={cards} classNameUser={classNameUser}/>
        </div>
        <div>
          <InfoSection question={'“Our Mission'} answer={'Our mission is to revolutionize the way people engage with farming by offering immersive and educational farm experiences. We strive to bridge the gap between urban and rural communities, creating a platform that celebrates the beauty of nature, the importance of sustainable agriculture, and the rich cultural heritage of farming communities.'} image={image1} isTextFirst={false}/>
        </div>
        <div>
          <InfoSection question={'Our Farm Experiences'} answer={'At Saran.farm, we offer a diverse range of farm experiences tailored to meet the interests and preferences of our visitors. From hands-on activities like planting, harvesting, and animal care to educational programs on organic farming and sustainable agriculture, there is something for everyone. Our farm-to-table experiences allow visitors to taste the freshness of locally sourced produce and enjoy farm-fresh meals prepared with love.'} image={image1} isTextFirst={true}/>
        </div>
        <div>
          <Team/>
        </div>
        <div>
          <AssociateChannels/>
        </div>
            
        <div>
          <GetTouchWith/>
        </div>
    </div>
    </Layout>
  )
}

export default AboutUs