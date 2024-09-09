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
  const textContent = (
    <>
      <h2 className="text-xl font-bold text-green-800">{question}</h2>
      <p className="text-gray-600 text-[18px] text-justify">{answer}</p>
    </>
  );

  const imageContent = (
      <Image src={image} alt="Section image" className='w-full h-[250px] sm:h-[300px] lg:w-[350px]'  />
  );
  
  return (
    <div className='w-[100vw]'>
      {isTextFirst ? (
        <div className={`flex flex-col lg:flex-row p-5 sm:p-10 ${bg_colour} gap-x-4`}>
          <div className="">
            {textContent}
          </div>
          <div className="">
            {imageContent}
          </div>
        </div>
      ) : (
        <div className={`flex  p-5 sm:p-10  flex-col lg:flex-row ${bg_colour} gap-x-4 `}>
          <div className="">
            {imageContent}
          </div>
          <div className="">
            {textContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoSection;