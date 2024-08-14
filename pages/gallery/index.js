import React from 'react';
import Layout from '../layout';
import GalleryCard from './galleryCard';

// Generate the array of image objects
const images = Array.from({ length: 29 }, (_, index) => ({
  src: require(`../../public/galleryImages/Rectangle ${index + 233}.jpg`),
  text: 'Best seen picture',
  numberOfPictures: 15,
}));

const Gallery = () => {
  return (
    <Layout>
      <div className='inline-block  justify-center font-extrabold font-inter text-3xl text-primary-colour my-10' style={{marginLeft:"650px"}}>
           Photo Gallery
      </div>

      <div className="flex flex-wrap gap-5 justify-center font-inter">
        {images.map((image, index) => (
          <GalleryCard
            key={index}
            image={image.src}
            text={image.text}
            numberOfPictures={image.numberOfPictures}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Gallery;
