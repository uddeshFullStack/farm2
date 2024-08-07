import React from 'react';
import CardComponentLower from './cardComponentLower';
import SalesBalanceIcon from '../../public/farmFormICons/LowerComponent/2.png';

const CardContainerLower = ({cardData}) => {
 

  return (
    <div className='flex flex-wrap justify-stretch gap-x-20 ml-12'>
      {cardData.map((item, index) => (
        <CardComponentLower key={index} image={require(`../../public/farmFormIcons/LowerComponent/${index+1}.png`).default} topic={item.topic} description={item.description} />
      ))}
    </div>
  );
};

export default CardContainerLower;
