import React from 'react';
import Image from 'next/image';

const CardComponentUpper = ({ image, heading, description,classNameUser }) => {
  return (
    <div className="relative bg-white shadow-slate-500 shadow-sm  box-border  rounded-md" style={{ width: '390px', height: '250px' }}>
      <div className={classNameUser || "absolute -top-12 left-1/2 transform -translate-x-1/2 bg-backgroundColor-image p-2 rounded-full"}>
        <Image src={image} alt="icon" width={64} height={64} className="h-13 w-13" />
      </div>
      <div className="shadow-md rounded-lg px-6  mt-6 pt-6 flex flex-col justify-between" style={{height:'225px'}}>
        <h2 className="text-lg font-bold text-primary-colour text-center">{heading}</h2>
        <p className="mt-1 text-justify flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default CardComponentUpper;
