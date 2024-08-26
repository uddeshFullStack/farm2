import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import ImageSwiper from "../swiperSilder/ImageSwiper";

const FarmCard = ({ farm }) => {
  const router = useRouter();

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent any default behavior
    const farmData = encodeURIComponent(JSON.stringify(farm));
    router.push(`/farm-details/${farm.id}?farm=${farmData}`);
  };

  return (
    <div
    className={`shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white flex flex-col my-[1.5%] p-[2.5%] lg:p-[3.5%] box-border text-left text-base text-lite font-inter overflow-hidden`}
    >
      <div>
       <ImageSwiper images={["/Farm1.jpg", "/Farm2.jpg", "/Farm3.jpg"]} />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px] w-full">
        <div className="relative text-primary-colour w-full font-semibold truncate">
          {farm.farmName}
        </div>
        <div className="flex flex-row items-center justify-start gap-[1.2px] overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              className="h-[17.3px] w-[15.8px] relative min-h-[17px]"
              loading="lazy"
              alt={`Star ${i + 1}`}
              src="/vector-10.svg"
            />
          ))}
          <div className="text-sm ml-1 truncate">({farm.accommodation})</div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between w-full gap-x-4 truncate">
            <div className="font-medium">Nearest City</div>
            <div className="truncate">{farm.nearCity} ({farm.cityDistance})</div>
          </div>
          <div className="flex justify-between w-full gap-x-4 truncate">
            <div className="font-medium">Farm Area</div>
            <div className="truncate">{farm.farmArea}</div>
          </div>
          <div className="flex justify-between w-full gap-x-4 truncate">
            <div className="font-medium">Accommodation</div>
            <div className="truncate">{farm.accommodation}</div>
          </div>
          <div className="flex justify-between w-full gap-x-4 truncate">
            <div className="font-medium">Special</div>
            <div className="truncate">{farm.special}</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start my-2 py-0 pr-1.5 pl-1 box-border max-w-full">
        <button
          className="cursor-pointer border-none py-[7px] px-5 bg-secondary-colour flex-1 rounded-8xs overflow-hidden flex flex-row items-start justify-center box-border whitespace-nowrap hover:bg-goldenrod"
          onClick={handleButtonClick}
        >
          <div className="relative text-mid tracking-[0.05em] font-semibold font-inter text-primary-colour text-left inline-block truncate">
            More Details
          </div>
        </button>
      </div>
    </div>
  );
};

FarmCard.propTypes = {
  farm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageAlt: PropTypes.string.isRequired,
    farmName: PropTypes.string.isRequired,
    nearCity: PropTypes.string.isRequired,
    cityDistance: PropTypes.string.isRequired,
    farmArea: PropTypes.string.isRequired,
    accommodation: PropTypes.string.isRequired,
    special: PropTypes.string.isRequired,
  }).isRequired,
};

export default FarmCard;
