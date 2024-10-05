import React from 'react';
import Layout from '../layout';
import GalleryCard from '../../components/galleryComponent/galleryCard';
import { useRouter } from 'next/router'; // Import useRouter
import galleryImages from '../../components/galleryComponent/galleryData';

const Gallery = () => {
  const router = useRouter(); // Initialize useRouter

  const handleCardClick = (gallery) => {
    // Navigate to the dynamic URL /gallery/[id]
    router.push(`/gallery/${gallery.id}`);
  };

  return (
    <Layout>
      <div className='flex flex-col justify-center items-center w-[98vw]'>
        <div className='font-extrabold font-inter text-3xl text-primary-colour my-10'>
          Photo Gallery
        </div>
        <div className="flex flex-wrap gap-5 justify-center font-inter">
          {galleryImages.map((gallery, index) => (
            <GalleryCard
              key={index}
              image={gallery.src}
              title={gallery.title} // Pass the title of the gallery
              numberOfPictures={gallery.images.length} // Pass the number of images
              onClick={() => handleCardClick(gallery)} // Handle click event
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
