import React from "react";
import CardComponentLower from "./cardComponentLower";
const images = [
  "/farmFormIcons/LowerComponent/1.png",
  "/farmFormIcons/LowerComponent/2.png",
  "/farmFormIcons/LowerComponent/3.png",
  "/farmFormIcons/LowerComponent/4.png",
  "/farmFormIcons/LowerComponent/5.png",
  "/farmFormIcons/LowerComponent/6.png",
  "/farmFormIcons/LowerComponent/7.png",
  "/farmFormIcons/LowerComponent/8.png",
  "/farmFormIcons/LowerComponent/9.png",
  "/farmFormIcons/LowerComponent/10.png",
];

const CardContainerLower = ({ cardData }) => {
  return (
    <div className="flex flex-wrap justify-center items-center  gap-y-10 md:gap-x-10 mt-10">
      {cardData.map((item, index) => (
        <CardComponentLower
          key={index}
          image={item.image}
          topic={item.topic}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardContainerLower;
