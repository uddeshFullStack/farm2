import React from 'react';
import Layout from '../layout';
import GalleryCard from '../../components/galleryComponent/galleryCard';

// Generate the array of image objects
const images = Array.from({ length: 29 }, (_, index) => ({
  src: require(`../../public/galleryImages/Rectangle ${index + 233}.jpg`),
  text: 'Best seen picture',
  numberOfPictures: 15,
}));

const Gallery = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center  '>
        <div className=' font-extrabold font-inter text-3xl text-primary-colour my-10'>
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
      </div>
    </Layout>
  );
};

export default Gallery;
