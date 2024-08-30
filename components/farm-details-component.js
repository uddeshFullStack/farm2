import PropTypes from "prop-types";
import ImageSwiper from "./swiperSilder/ImageSwiper";

const FarmDetailsComponent = ({ className = "", farmName ,farmImages}) => {
  const fetch = farmImages
  ?.filter(item => item && item.imageUrl) // Ensure valid items with imageurl
  ?.map(item => item.imageUrl);
  console.log("fetch is" ,farmImages);
// Step 2: Determine which images to use: top 3 from 'fetch' or default images
const imagesToDisplay = fetch?.length >= 3 
  ? fetch?.slice(0, 3) // Use top 3 images from 'fetch'
  : ["/Farm1.jpg", "/Farm2.jpg", "/Farm3.jpg"];
  return (
    <div
      className={`self-stretch mt-10 flex flex-col items-start justify-start gap-[28px] max-w-full text-center text-9xl text-primary-colour font-inter ${className}`}
    >
      <div className="w-[498px] flex flex-col items-start justify-start gap-[5px] max-w-full">
        <h3 className="m-0 relative text-inherit tracking-[-0.01em] font-bold font-inherit mq450:text-3xl">
          {farmName}
        </h3>
        <div className="flex flex-row items-start justify-start gap-[15px] text-smi text-star-listed-lite-color">
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <img
              className="h-[18px] w-[18.9px] relative min-h-[18px]"
              loading="lazy"
              alt=""
              src="/vector-41.svg"
            />
            <img
              className="h-[18px] w-[18.9px] relative min-h-[18px]"
              loading="lazy"
              alt=""
              src="/vector-5.svg"
            />
            <img
              className="h-[18px] w-[18.9px] relative min-h-[18px]"
              alt=""
              src="/vector-61.svg"
            />
            <img
              className="h-[18px] w-[18.9px] relative min-h-[18px]"
              alt=""
              src="/vector-7.svg"
            />
            <img
              className="h-[18px] w-[18.9px] relative min-h-[18px]"
              alt=""
              src="/vector-81.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[53px]">
              (12,365)
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
      <ImageSwiper images={imagesToDisplay} />
      </div>
    </div>
  );
};

FarmDetailsComponent.propTypes = {
  className: PropTypes.string,
  farmName: PropTypes.string.isRequired,
};

export default FarmDetailsComponent;