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
      <Image src={image} alt="Section image" className='xsm:max-w-[300px] xsm:h-[240px] sm:max-w-[400px] sm:h-[300px] md:w-[450px] xl:w-[500px]'  />
  );
  
  return (
    <>
      {isTextFirst ? (
        <div className={`flex flex-col lg:flex-row ${bg_colour} p-10 xsm:p-2 sm:m-2 xsm:m-2`}>
          <div className="m-10 xsm:m-4 xsm:w-[280px] sm:w-[500px] md:w-[600px] xl:flex-1">
            {textContent}
          </div>
          <div className="m-10 xsm:m-4">
            {imageContent}
          </div>
        </div>
      ) : (
        <div className={`flex flex-col lg:flex-row ${bg_colour} p-10 xsm:p-2 sm:m-2 xsm:m-2`}>
          <div className="m-10 xsm:m-4">
            {imageContent}
          </div>
          <div className="m-10 xsm:m-4 xsm:w-[280px] sm:w-[500px] md:w-[600px] xl:flex-1">
            {textContent}
          </div>
        </div>
      )}
    </>
  );
};

export default InfoSection;