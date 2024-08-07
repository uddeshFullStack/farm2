import React from 'react'
import ProfileCard from './profileCard'
import { profileCards } from './constant'
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Team = () => {
    const socialLinks = [
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaInstagram />, url: '#' },
        { icon: <FaFacebook />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
      ];
  return (
    <div className=' bg-primary-colour pt-20'> 
          <div className='flex justify-center font-extrabold text-[36px] text-white '>
            Meet Our Team
          </div>
          <div className="flex flex-wrap justify-around gap-x-[52px]">
            {profileCards.slice(0, 4).map((card, index) => (
              <div key={index} className="p-10">
                <ProfileCard
                  photo={card.image}
                  name={card.name}
                  title="CEO/Founder - Saran Farm"
                  description={card.description}
                  socialLinks={socialLinks}
                />
              </div>
            ))}
            </div>
            <div className='flex justify-center font-extrabold text-[36px] text-white mt-36 '>
            Our Mentors
          </div>
          <div className="flex flex-wrap justify-around gap-x-[52px]">
            {profileCards.slice(4, 8).map((card, index) => (
              <div key={index} className="p-10">
                <ProfileCard
                  photo={card.image}
                  name={card.name}
                  title="CEO/Founder - Saran Farm"
                  description={card.description}
                  socialLinks={socialLinks}
                />
              </div>
            ))}
            </div>
        </div>
  )
}

export default Team