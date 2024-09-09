import React from 'react';
import Image from 'next/image';

const ProfileCard = ({ photo, name, title, description, socialLinks }) => {
  return (
    <div className="flex bg-primary-colour rounded-lg w-[90w] md:w-[394px] h-auto gap-x-4">
      {/* Left column for image */}
      <div>
        <Image 
          src={photo} 
          alt={name} 
          width={140} 
          height={140} 
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col text-white m-0">
        <h2 className="text-[16px] font-bold text-secondary-colour m-0 mb-[3px]">{name}</h2>
        <p className="text-[12px] m-0">{title}</p>

        {/* Social icons */}
        <div className="flex mt-0 gap-2">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} className="text-white hover:text-gray-200 m-0">
              {link.icon}
            </a>
          ))}
        </div>
        <hr className="border-t border-white m-0 mt-[6px]" />
        <p className="text-[13px] m-0">{description}</p>
        <hr className="border-t border-white m-0" />
      </div>
    </div>
  );
};

export default ProfileCard;