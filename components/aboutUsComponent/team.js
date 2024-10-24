import React from 'react'

import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { TeamProfileCard, profileCards } from '../../constant/aboutUsCard';
import ProfileCard from '../../components/aboutUsComponent/profileCard';

const Team = () => {
  return (
    <div className=' bg-primary-colour pt-20 pl-1 md:pl-0'> 
          <div className='flex justify-start md:justify-center font-extrabold text-[36px] text-white '>
            Meet Our Team
          </div>
          <div className="flex flex-col  md:flex-row md:flex-wrap justify-start  md:justify-center md:gap-x-[80px]">
            {TeamProfileCard.map((card, index) => (
              <div key={index} className="py-10 px-1 md:p-10">
                <ProfileCard
                  photo={card.image}
                  name={card.name}
                  title="CEO/Founder - Saran Farm"
                  description={card.description}
                  socialLinks={card.socialLinks}
                />
              </div>
            ))}
            </div>
          <div className='flex justify-start md:justify-center font-extrabold text-[36px] text-white '>
            Our Mentors
          </div>
          <div className="flex flex-col justify-start md:flex-row md:flex-wrap  md:justify-center md:gap-x-[80px]">
            {profileCards.slice(4, 8).map((card, index) => (
              <div key={index} className="py-10 px-1 md:p-10">
                <ProfileCard
                  photo={card.image}
                  name={card.name}
                  title="CEO/Founder - Saran Farm"
                  description={card.description}
                  socialLinks={card.socialLinks}
                />
              </div>
            ))}
            </div>
        </div>
  )
}

export default Team