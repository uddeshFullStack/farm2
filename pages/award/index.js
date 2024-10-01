import React from 'react';
import Layout from '../layout';
import AwardCard from '../../components/awardComponents/awardCard';
import { useRouter } from 'next/router'; // Import useRouter
import { awardImages } from '../../constant/awardData';

const Award = () => {
  const router = useRouter(); // Initialize useRouter

  const handleCardClick = (award) => {
    // Navigate to the dynamic URL /awards/[id]
    router.push(`/award/${award.id}`);
  };

  return (
    <Layout>
      <div className='flex flex-col justify-center items-center'>
        <div className='font-extrabold font-inter text-3xl text-primary-colour my-10'>
          Award Section
        </div>

        <div className="flex flex-wrap gap-5 justify-center font-inter">
          {awardImages?.map((award, index) => (
            <AwardCard
              key={index}
              image={award.src}
              text={award.text}
              numberOfPictures={award.images.length}
              onClick={() => handleCardClick(award)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Award;
