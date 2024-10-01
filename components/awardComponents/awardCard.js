import Image from 'next/image';
import React, { useState } from 'react';

const AwardCard = ({ image, text, numberOfPictures, onClick }) => {
  return (
    <div onClick={onClick} className="overflow-hidden rounded-md shadow-md border border-gray-200 w-[90vw] sm:w-[300px] smd:w-[350px] h-auto">
    <Image
      src={image} 
      alt={text} 
      height={300}
      width={300}
      className="w-full h-[250px] "
    />
    <div className="">
      <h3 className="text-lg font-semibold mb-2">{text}</h3>
      <p className="text-sm text-gray-600">{numberOfPictures} pictures</p>
    </div>
  </div>
  );
};

export default AwardCard;