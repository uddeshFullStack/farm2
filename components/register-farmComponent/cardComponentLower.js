import Image from "next/image";
import React from "react";

import React from "react";
import CardComponentLower from "./cardComponentLower";
import Image1 from "../../public/farmFormIcons/LowerComponent/1.png";
import Image2 from "../../public/farmFormIcons/LowerComponent/2.png";
import Image3 from "../../public/farmFormIcons/LowerComponent/3.png";
import Image4 from "../../public/farmFormIcons/LowerComponent/4.png";
import Image5 from "../../public/farmFormIcons/LowerComponent/5.png";
import Image6 from "../../public/farmFormIcons/LowerComponent/6.png";
import Image7 from "../../public/farmFormIcons/LowerComponent/7.png";
import Image8 from "../../public/farmFormIcons/LowerComponent/8.png";
import Image9 from "../../public/farmFormIcons/LowerComponent/9.png";
import Image10 from "../../public/farmFormIcons/LowerComponent/10.png";

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

const CardComponentLower = ({ key, image, topic, description }) => {
  return (
    <div className="h-50 " style={{ width: "420px" }}>
      <div className="p-4 rounded-md xl:flex md:flex">
        <div className="flex justify-center items-start">
          <Image
            priority
            src={image[key]}
            alt="icon"
            className="w-16 h-16 bg-backgroundColor-image p-4 rounded-md"
          />
        </div>
        <div className="ml-4">
          <div className="font-bold text-lg text-primary-colour">{topic}</div>
          <div className=" text-justify pt-1">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default CardComponentLower;
