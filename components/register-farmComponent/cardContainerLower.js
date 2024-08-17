import React from "react";
import CardComponentLower from "./cardComponentLower";
import Image1 from "/farmFormIcons/LowerComponent/1.png";
import Image2 from "/farmFormIcons/LowerComponent/2.png";
import Image3 from "/farmFormIcons/LowerComponent/3.png";
import Image4 from "/farmFormIcons/LowerComponent/4.png";
import Image5 from "/farmFormIcons/LowerComponent/5.png";
import Image6 from "/farmFormIcons/LowerComponent/6.png";
import Image7 from "/farmFormIcons/LowerComponent/7.png";
import Image8 from "/farmFormIcons/LowerComponent/8.png";
import Image9 from "/farmFormIcons/LowerComponent/9.png";
import Image10 from "/farmFormIcons/LowerComponent/10.png";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
];

const CardContainerLower = ({ cardData }) => {
  console.log({ cardData });
  return (
    <div className="flex flex-wrap justify-center items-center  gap-y-10 md:gap-x-10 mt-10">
      {cardData.map((item, index) => (
        <CardComponentLower
          key={index}
          image={images[index]}
          topic={item.topic}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardContainerLower;
