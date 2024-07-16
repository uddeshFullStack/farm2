import React, { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const FarmCard = ({
  className = "",
  propWidth,
  propMinWidth,
  onFrameButtonClick,
  farm,
}) => {
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
      className={`shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white flex flex-col items-start justify-start p-[19px] box-border gap-[15px] max-w-full z-[2] text-left text-base text-lite font-inter ${className}`}
      style={groupDivStyle}
    >
      <img
        src={farm.imageSrc}
        alt={farm.imageAlt}
        className="self-stretch h-[202px] relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full text-lg text-primary-colour">
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="relative font-medium z-[3]">
            {farm.farmName}
          </div>
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-center text-2xs text-lite mq450:flex-wrap">
            <div className="w-[136px] flex flex-col items-start justify-start gap-[9.7px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[7.2px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[1.2px]">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                      loading="lazy"
                      alt={`Star ${i + 1}`}
                      src="/vector-10.svg"
                    />
                  ))}
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="relative font-medium inline-block min-w-[45px] z-[3]">
                    {farm.accommodationDetails}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[13.7px] text-left text-base">
                <div className="w-[102px] relative font-medium text-center inline-block min-w-[102px] z-[3]">
                  Nearest City
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[84px] z-[3]">
                    Farm Area
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                  <div className="relative font-medium z-[3]">
                    Accommodation
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <div className="relative font-medium inline-block min-w-[60px] z-[3]">
                    Special
                  </div>
                </div>
              </div>
            </div>
            <div className="w-28 flex flex-col items-end justify-start gap-[13.7px] text-right text-base text-taxt-colour">
              <div className="self-stretch relative inline-block min-w-[112px] z-[3]">
                {farm.nearestCity} ({farm.cityDistance})
              </div>
              <div className="w-[83px] relative inline-block min-w-[83px] z-[3]">
                {farm.farmArea}
              </div>
              <div className="w-[58px] relative inline-block min-w-[58px] z-[3]">
                {farm.accommodation}
              </div>
              <div className="w-[99px] relative inline-block min-w-[99px] z-[3]">
                {farm.specialFeatures}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-1 box-border max-w-full">
        <button
          className="cursor-pointer [border:none] py-[7px] px-5 bg-secondary-colour flex-1 rounded-8xs overflow-hidden flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[3] hover:bg-goldenrod"
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
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    farmName: PropTypes.string.isRequired,
    accommodationDetails: PropTypes.string.isRequired,
    nearestCity: PropTypes.string.isRequired,
    cityDistance: PropTypes.string.isRequired,
    farmArea: PropTypes.string.isRequired,
    accommodation: PropTypes.string.isRequired,
    specialFeatures: PropTypes.string.isRequired,
  }).isRequired,
};

export default FarmCard;
