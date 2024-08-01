import React from 'react';
import Image from 'next/image';

const InfoSection = ({ question, answer, image, isTextFirst }) => {
  let bg_colour='';
  if(!isTextFirst){
    bg_colour='bg-white'
  }
  else{
    bg_colour='bg-backgroundColor-custom-green'
  }
  const className=`w-[1310px] h-[443px] ${bg_colour} flex m-20  md:flex-row`
  const textContent = (
    <div className="md:w-1/2 p-4 md:flex-row m-10">
      <h2 className="text-xl font-bold text-green-800 mb-2 md:mr-4">{question}</h2>
      <p className="text-gray-600 w-[504px] h-[132px] text-[18px] text-justify">{answer}</p>
    </div>
  );

  const imageContent = (
    <div className="my-10 md:w-1/2 p-4">
      <Image src={image} alt="Section image" width={538} height={367} />
    </div>
  );
  
  return (
    <div className={className}>
      {isTextFirst ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : (
        <>
          {imageContent}
          {textContent}
        </>
      )}
    </div>
  );
};

export default InfoSection;