import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../layout';
import Image from 'next/image'; // Import Next.js Image
import ImageSwiper from '../../components/swiperSilder/ImageSwiper'; // Import the ImageSwiper component
import galleryImages from '../../components/galleryComponent/galleryData';

const GalleryDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic id from the URL

  // Find the gallery item based on the id
  const selectedGallery = galleryImages.find((gallery) => gallery.id === id);

  if (!selectedGallery) {
    return <div>Loading...</div>; // Handle loading state or no data found
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center font-inter w-[97vw] my-5 m-2">
        {/* Gallery Title */}
        <div className="font-extrabold font-inter text-5xl text-primary-colour my-7">
          {selectedGallery.title}
        </div>

        {/* Gallery Description */}
        <div className="text-md max-w-[800px] text-justify mb-4">
          {selectedGallery.description}
        </div>

        {/* Swiper for smaller screens */}
        <div className="block lg:hidden w-full">
          <ImageSwiper images={selectedGallery.images} />
        </div>

        {/* Show gallery images on larger screens */}
        <div className="hidden lg:block w-full">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {selectedGallery.images?.map((image, index) => (
              <div key={index} className="md:w-[300px] h-[300px] overflow-hidden">
                <Image
                    src={image} 
                    height={300}
                    width={300}
                    className="w-full h-[250px] "
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryDetail;
