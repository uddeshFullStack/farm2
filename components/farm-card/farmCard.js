import React, { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const FarmCard = ({ className = "", propWidth, propMinWidth, onFrameButtonClick, farm }) => {
  const groupDivStyle = {
    width: propWidth,
    minWidth: propMinWidth,
  };

  const router = useRouter();

  const handleButtonClick = useCallback(() => {
    if (onFrameButtonClick) {
      onFrameButtonClick();
    } else {
      router.push("/farm-details");
    }
  }, [router, onFrameButtonClick]);

  return (
    <div
      className={`shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white flex flex-col items-start justify-start p-[19px] box-border gap-[15px] text-left text-base text-lite font-inter ${className}`}
      style={groupDivStyle}
    >
      <img
        src={farm.photo}
        alt={farm.imageAlt}
        className="self-stretch h-[202px] relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px] w-full">
        <div className="relative text-primary-colour font-semibold">
          {farm.farmName}
        </div>
        <div className="flex flex-row items-center justify-start gap-[1.2px]">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              className="h-[17.3px] w-[15.8px] relative min-h-[17px]"
              loading="lazy"
              alt={`Star ${i + 1}`}
              src="/vector-10.svg"
            />
          ))}
          <div className="text-sm ml-1">({farm.accommodation})</div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <div className="font-medium">Nearest City</div>
            <div>{farm.nearCity} ({farm.cityDistance})</div>
          </div>
          <div className="flex justify-between w-full">
            <div className="font-medium">Farm Area</div>
            <div>{farm.farmArea}</div>
          </div>
          <div className="flex justify-between w-full">
            <div className="font-medium">Accommodation</div>
            <div>{farm.accommodation}</div>
          </div>
          <div className="flex justify-between w-full">
            <div className="font-medium">Special</div>
            <div>{farm.special}</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-1 box-border max-w-full">
        <button
          className="cursor-pointer border-none py-[7px] px-5 bg-secondary-colour flex-1 rounded-8xs overflow-hidden flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[3] hover:bg-goldenrod"
          onClick={handleButtonClick}
        >
          <div className="relative text-mid tracking-[0.05em] font-semibold font-inter text-primary-colour text-left inline-block min-w-[114px]">
            More Details
          </div>
        </button>
      </div>
    </div>
  );
};

FarmCard.propTypes = {
  className: PropTypes.string,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  onFrameButtonClick: PropTypes.func,
  farm: PropTypes.shape({
    photo: PropTypes.string.isRequired,
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