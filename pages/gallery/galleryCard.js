import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const GalleryCard = ({ image, text, numberOfPictures }) => {
  return (
    <div className="overflow-hidden rounded-md shadow-md border border-gray-200 w-[90vw] sm:w-[300px] smd:w-[350px] h-auto">
      <Image
        src={image} 
        alt={text} 
        className="w-full h-[250px] "
      />
      <div className="">
        <h3 className="text-lg font-semibold mb-2">{text}</h3>
        <p className="text-sm text-gray-600">{numberOfPictures} pictures</p>
      </div>
    </div>
  );
};

GalleryCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  numberOfPictures: PropTypes.number.isRequired,
};

export default GalleryCard;