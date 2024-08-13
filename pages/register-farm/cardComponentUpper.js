import React from 'react';
import Image from 'next/image';

const CardComponentUpper = ({ image, heading, description,classNameUser }) => {
  return (
    <div className="relative bg-white shadow-slate-500 shadow-sm  box-border  rounded-md  h-[250px] xsm:w-[330px]">
      <div className={classNameUser || "absolute -top-12 left-1/2 transform -translate-x-1/2 bg-backgroundColor-image rounded-full"}>
        <Image src={image} alt="icon" width={70} height={70} />
      </div>
      <div className="rounded-lg px-6  mt-6 pt-6 flex flex-col justify-between h-[225px] " >
        <h2 className="text-lg font-bold text-primary-colour text-center">{heading}</h2>
        <p className="mt-1 text-justify flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default CardComponentUpper;
