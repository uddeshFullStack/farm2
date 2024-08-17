import React from 'react';
import CardComponentLower from './cardComponentLower';

const CardContainerLower = ({cardData}) => {
 

  return (
    <div className='flex flex-wrap justify-center items-center  gap-y-10 md:gap-x-10 mt-10'>
      {cardData.map((item, index) => (
        <CardComponentLower key={index} image={require(`../../public/farmFormIcons/LowerComponent/${index+1}.png`).default} topic={item.topic} description={item.description} />
      ))}
    </div>
  );
};

export default CardContainerLower;
