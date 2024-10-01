import { useRouter } from 'next/router';
import { awardImages } from '../../constant/awardData'; // Assuming you have this constant
import Layout from '../layout';
import Image from 'next/image'; // Import Next.js Image
import ImageSwiper from '../../components/swiperSilder/ImageSwiper' // Import the ImageSwiper component

const AwardDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic id from the URL

  // Find the award by id from the data
  const selectedAward = awardImages.find((award) => award.id === id);

  if (!selectedAward) {
    return <div>Loading...</div>; // Handle loading state or no data found
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center font-inter w-[97vw] my-5 m-2">
        <div className='font-extrabold font-inter text-5xl text-primary-colour my-10'>
          {selectedAward.text}
        </div>
        <div className='text-md max-w-[800px] text-justify mb-2 '>
          {selectedAward.description}
        </div>
        
        {/* Swiper for smaller screens */}
        <div className="block lg:hidden w-full">
          <ImageSwiper
            images={selectedAward.images}
          />
        </div>

        {/* Show award images on larger screens */}
        <div className="hidden lg:block w-full">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {selectedAward.images?.map((image, index) => (
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

export default AwardDetail;
