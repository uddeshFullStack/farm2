import { useMemo } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import Image from "next/image";


const StarRating = ({ rating }) => {
  return (
    <div className="flex ">
      {[...Array(5)].map((_, index) => (
        <FaStar 
          key={index} 
          className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};


const GroupComponent1 = ({ className = "", propAlignSelf, propWidth, groupData}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const { name, state, description, image_src, rating } = groupData;

  console.log("image: ",image_src);

  return (
    <div
      className={` h-[339px] self-stretch shadow-[0px_1px_2px_1px_rgba(0,_0,_0,_0.25)] rounded-md bg-white flex flex-col items-start justify-start pt-0 px-0 pb-6 gap-[38px] z-[1] text-center text-sm text-primary-colour font-inter mq450:gap-[19px] ${className}`}
      style={groupDiv1Style}
    >
      <div className="self-stretch  relative shadow-[0px_1px_2px_1px_rgba(0,_0,_0,_0.25)] rounded-md bg-white hidden" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.13)] rounded-t-md rounded-b-none bg-white flex flex-row items-end justify-start pt-[18px] px-6 pb-2.5 gap-[11px] z-[1] mq450:flex-wrap">
          <div className="h-[83px] w-[295px] relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.13)] rounded-t-md rounded-b-none bg-white hidden" />
          <Image
              src={image_src || require('/public/ellipse-12@2x.png')} // Fallback to default profile image
              alt="Profile Image"
              width={55}
              height={55}
              className="rounded-full object-contain"
              loading="lazy"
            />

          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative font-semibold inline-block min-w-[40px] z-[2]">
                {name}
              </div>
              <div className="relative text-xs text-lite inline-block min-w-[31px] z-[2]">
                {state}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-6 text-justify text-base text-lite">
          <div className="flex-1 relative tracking-[0.03em] z-[1]">
            {description}
          </div>
          
        </div>
        <div className="ml-5">
        <StarRating rating={rating}/>
        </div>
        
      </div>
      
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  index: PropTypes.number,
};

export default GroupComponent1;