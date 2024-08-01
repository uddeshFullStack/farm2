import React from 'react';
import CardComponentUpper from './cardComponentUpper';// Assuming CardComponent1 is in a separate file

const CardContainerUpper = ({cards ,classNameUser}) => {

  return (
    <div>
      <div className="flex justify-between my-12">
        <div className="w-1/3 p-2">
          <CardComponentUpper image={cards[0].image} heading={cards[0].heading} description={cards[0].description} classNameUser={classNameUser}/>
        </div>
        <div className="w-1/3 p-2">
          <CardComponentUpper image={cards[1].image} heading={cards[1].heading} description={cards[1].description}  classNameUser={classNameUser} />
        </div>
        <div className="w-1/3 p-2">
          <CardComponentUpper image={cards[2].image} heading={cards[2].heading} description={cards[2].description}  classNameUser={classNameUser}/>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="w-1/3 p-2">
          <CardComponentUpper image={cards[3].image} heading={cards[3].heading} description={cards[3].description}  classNameUser={classNameUser}/>
        </div>
        <div className="w-1/3 p-2">
          <CardComponentUpper image={cards[4].image} heading={cards[4].heading} description={cards[4].description}  classNameUser={classNameUser}/>
        </div>
      </div>
    </div>
  );
};

export default CardContainerUpper;
