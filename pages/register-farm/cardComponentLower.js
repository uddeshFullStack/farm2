import Image from 'next/image';
import React from 'react';

const CardComponentLower = ({ image,topic,description }) => {
  return (
    <div className='h-50 my-10' style={{width:'420px'}}>
      <div className="flex p-4 rounded-md">
        {/* Image Column */}
        <div className="flex justify-center items-start">
          <Image
            src={image}
            alt="icon"
            className="w-16 h-16 bg-backgroundColor-image p-4 rounded-md"
          />
        </div>
        {/* Text Column */}
        <div className="ml-4">
          {/* Topic */}
          <div className="font-bold text-lg text-primary-colour">
            {topic}
          </div>
          {/* Description */}
          <div className=" text-justify pt-1">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponentLower;
