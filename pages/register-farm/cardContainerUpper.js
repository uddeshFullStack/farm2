import React from 'react';
import CardComponentUpper from './cardComponentUpper'; // Assuming CardComponent1 is in a separate file

const CardContainerUpper = ({ cards, classNameUser }) => {
  return (
<div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-[10%] gap-y-20">
        {cards.map((card, index) => (
          <CardComponentUpper
            key={index}
            image={card.image}
            heading={card.heading}
            description={card.description}
            classNameUser={classNameUser}
          />
        ))}
      </div>
  );
};

export default CardContainerUpper;
