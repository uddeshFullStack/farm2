import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const GroupComponent2 = ({
  className = "",
  propWidth,
  propMinWidth,
  onFrameButtonClick,
  farms,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const router = useRouter();

  const handleButtonClick = useCallback(() => {
    router.push("/farm-details");
  }, [router]);

  return (
    <div className={`flex flex-col items-start justify-start gap-4 max-w-full z-2 text-left text-base text-lite font-inter ${className}`}>
      {farms.map((farm, index) => (
        <div
          key={index}
          className="shadow-md rounded-md bg-white flex flex-col items-start justify-start p-5 box-border gap-4 max-w-full"
          style={groupDivStyle}
        >
          <img
            className="self-stretch h-52 relative max-w-full overflow-hidden shrink-0 object-cover z-3"
            loading="lazy"
            alt={farm.farmName}
            src={farm.imageUrl}
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-lg text-primary-colour">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <div className="relative font-medium z-3">
                {farm.farmName}
              </div>
              <div className="self-stretch flex flex-row items-end justify-between gap-5 text-center text-2xs text-lite mq450:flex-wrap">
                <div className="w-34 flex flex-col items-start justify-start gap-2.5">
                  <div className="self-stretch flex flex-row items-start justify-start gap-1.5">
                    <div className="flex-1 flex flex-row items-start justify-start gap-0.5">
                      {Array.from({ length: farm.ratingStars }).map((_, starIndex) => (
                        <img
                          key={starIndex}
                          className="h-4.5 w-4 relative min-h-[17px] z-3"
                          loading="lazy"
                          alt={`Star ${starIndex + 1}`}
                          src="/vector-10.svg"
                        />
                      ))}
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1">
                      <div className="relative font-medium inline-block min-w-[45px] z-3">
                        ({farm.ratingCount})
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-left text-base">
                    <div className="w-26 relative font-medium text-center inline-block min-w-[102px] z-3">
                      Nearest City
                    </div>
                    <div className="w-20 relative font-medium text-center inline-block min-w-[83px] z-3">
                      {farm.nearestCity}
                    </div>
                    <div className="relative font-medium inline-block min-w-[84px] z-3">
                      Farm Area
                    </div>
                    <div className="w-20 relative font-medium inline-block min-w-[83px] z-3">
                      {farm.farmArea}
                    </div>
                    <div className="relative font-medium inline-block min-w-[58px] z-3">
                      Accommodation
                    </div>
                    <div className="w-14 relative font-medium inline-block min-w-[58px] z-3">
                      {farm.accommodation}
                    </div>
                    <div className="relative font-medium inline-block min-w-[60px] z-3">
                      Special
                    </div>
                    <div className="w-24 relative font-medium inline-block min-w-[99px] z-3">
                      {farm.special}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-1 box-border max-w-full">
              <button
                className="cursor-pointer border-none py-1.5 px-5 bg-secondary-colour flex-1 rounded-8xs overflow-hidden flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-3 hover:bg-goldenrod"
                onClick={handleButtonClick}
              >
                <div className="relative text-mid tracking-wide font-semibold font-inter text-primary-colour text-left inline-block min-w-[114px]">
                  More Details
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  propWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  propMinWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onFrameButtonClick: PropTypes.func.isRequired,
  farms: PropTypes.arrayOf(
    PropTypes.shape({
      farmName: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      nearestCity: PropTypes.string.isRequired,
      farmArea: PropTypes.string.isRequired,
      accommodation: PropTypes.string.isRequired,
      special: PropTypes.string.isRequired,
      ratingCount: PropTypes.number.isRequired,
      ratingStars: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GroupComponent2;
