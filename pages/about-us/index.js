import React from 'react'
import Layout from '../layout'
import missionImage from '../../public/aboutUs/ourMission.jpg'
import ourExperienceImage from '../../public/aboutUs/Experienece.jpg'
import AboutImage from '../../public/aboutUs/AboutImage2.jpg'
import whySaranImage from '../../public/aboutUs/whySaranMain.jpg'
import Image from 'next/image'
import InfoSection from '../../components/infoSecton'
import CardContainerUpper from '../../components/register-farmComponent/cardContainerUpper'
import Team from '../../components/aboutUsComponent/team'
import AssociateChannels from '../../components/aboutUsComponent/associateChannels'
import GetTouchWith from '../../components/aboutUsComponent/getTouchWith'
import { cardsData } from '../../constant/aboutUsCard'


const AboutUs = () => {
  
  const classNameUser='absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full'
  return (
    <Layout>
      <div className='font-inter'>   
        <div className='w-screen relative'>
          <Image src={AboutImage} alt='image1' className='w-full h-[628px]' />
          <div className='absolute inset-0 flex justify-center items-start'>
            <h1 className='text-4xl font-bold text-black'>About Us</h1>
          </div>
        </div>

        <div>
  <InfoSection
    question={'What is Saran Farm ?'}
    answer={
      'Welcome to Saran Farm, a sustainable agritourism startup dedicated to connecting farmers, consumers and nature enthusiasts. At Saran Farm, we believe in the power of authentic farm experiences to foster a deeper understanding of agriculture, promote sustainable practices and support local communities.'
    }
    image={whySaranImage}
    isTextFirst={true}
  />
</div>
<div className="bg-backgroundColor-image w-screen py-20">
  <CardContainerUpper cards={cardsData} classNameUser={classNameUser} />
</div>
<div>
  <InfoSection
    image={missionImage}
    question={'Our Mission'}
    answer={
      'Our mission is to revolutionize the way people engage with farming by offering immersive and educational farm experiences. We strive to bridge the gap between urban and rural communities, creating a platform that celebrates the beauty of nature, the importance of sustainable agriculture and the rich cultural heritage of farming communities.'
    }
    isTextFirst={false}
  />
</div>
<div>
  <InfoSection
    image={ourExperienceImage}
    question={'Our Farm Experiences'}
    answer={
      'At Saran Farm, we offer a diverse range of farm experiences tailored to meet the interests and preferences of our visitors. From hands-on activities like planting, harvesting and animal care to educational programs on organic farming and sustainable agriculture, there is something for everyone. Our farm-to-table experiences allow visitors to taste the freshness of locally sourced produce and enjoy farm-fresh meals prepared with love.'
    }
    isTextFirst={true}
  />
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