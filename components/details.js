import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Details = ({
  className = "",
  address,
  farmerName,
  special,
  accommodation,
  activities,
  events,
  other,
  sightseeing,
  rentPerDay
}) => {
  const router = useRouter();

  const onButtonBackgroundClick = useCallback(() => {
    router.push("/book-farm");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-5xl text-primary-colour font-inter mq1100:flex-wrap ${className}`}
    >
      <div className="w-[340px] flex flex-col items-start justify-start gap-[88px] max-w-full mq450:gap-[44px]">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[5px] max-w-full text-center">
          <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[96px] mq450:text-lgi">
            Address
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-w-full text-left text-lg text-lite">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
              <div className="relative">
                <ul className="m-0 font-inherit text-inherit pl-6">
                  <li className="mb-0">{`${address.village}, ${address.post},${address.tehsil}`}</li>
                  <p className="m-0">District-{address.district}.</p>
                </ul>
                
              </div>
              <div className="w-[308px] relative inline-block">
                <ul className="m-0 text-inherit pl-6">
                  <li>
                    <span className="font-medium font-inter">
                      Farmer Name :
                    </span>
                    <span> {farmerName}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[238px] h-[100px] relative text-lg text-lite">
          <div className="mb-2 ml-[1.5px] top-[0px] left-[0px] text-5xl tracking-[-0.01em] font-semibold text-primary-colour inline-block min-w-[84px] mq450:text-lgi">
            Special
          </div>
          {special.map((item, index) => (
            <div key={index} className="relative">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>{item}</li>
            </ul>
          </div>
          ))}
        </div>
        <div className="w-[223px] flex flex-col items-start justify-start gap-[5px]">
          <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">
            Accommodation
          </div>
          <div className="self-stretch relative text-lg font-medium text-lite">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Number of Rooms - {accommodation.numberOfRooms}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[254px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border gap-[62px] text-lg text-lite mq450:gap-[31px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] text-5xl text-primary-colour">
            <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">{`Activities & Facilities`}</div>
          </div>
          {activities.map((activity, index) => (
            <div key={index} className="relative">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>{activity}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start gap-[1px]">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 text-5xl text-primary-colour">
            <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">{`Event or Festival `}</div>
          </div>
          {events.map((event, index) => (
            <div key={index} className="relative">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>{event}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="w-[214px] flex flex-col items-start justify-start gap-[5px] text-5xl text-primary-colour">
          <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[66px] mq450:text-lgi">{`Other `}</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] text-lg text-lite">
            <div className="self-stretch relative">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>Farm Area - {other.farmArea}</li>
              </ul>
            </div>
            {other.freeMilk && (
              <div className="relative inline-block min-w-[105px]">
                <ul className="m-0 font-inherit text-inherit pl-6">
                  <li>Free Milk</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[324px] flex flex-col items-start justify-start gap-[83px] max-w-full mq450:gap-[41px]">
        <div className="flex flex-col items-start justify-start gap-[5px]">
          <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">
            Sightseeing
          </div>
          <div className="flex flex-col items-start justify-start text-lg text-lite">
            {sightseeing.map((sight, index) => (
              <div key={index} className="relative">
                <ul className="m-0 font-inherit text-inherit pl-6">
                  <li>{sight}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[228px] flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[5px]">
          <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[100px] mq450:text-lgi">
            Rent IND
          </div>
          <div className="self-stretch relative text-lg font-medium text-taxt-colour">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>{`${rentPerDay.min}-${rentPerDay.max}/day/person`}</li>
            </ul>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[115px] relative whitespace-nowrap">
          <div
            className="absolute top-[0px] left-[0px] shadow-[0px_0px_4px_#378805] rounded-3xs bg-primary-colour w-full h-full cursor-pointer"
            onClick={onButtonBackgroundClick}
          />
          <div className="absolute top-[43px] left-[104px] text-5xl tracking-[-0.01em] font-semibold font-inter text-white text-left inline-block w-[117px] min-w-[117px] z-[1]">
            Book Now
          </div>
        </button>
      </div>
    </div>
  );
};

Details.propTypes = {
  className: PropTypes.string,
  address: PropTypes.shape({
    village: PropTypes.string,
    post: PropTypes.string,
    tehsil: PropTypes.string,
    district: PropTypes.string,
  }).isRequired,
  farmerName: PropTypes.string.isRequired,
  special: PropTypes.arrayOf(PropTypes.string).isRequired,
  accommodation: PropTypes.shape({
    numberOfRooms: PropTypes.number,
  }).isRequired,
  activities: PropTypes.arrayOf(PropTypes.string).isRequired,
  events: PropTypes.arrayOf(PropTypes.string).isRequired,
  other: PropTypes.shape({
    farmArea: PropTypes.string,
    freeMilk: PropTypes.bool,
  }).isRequired,
  sightseeing: PropTypes.arrayOf(PropTypes.string).isRequired,
  rentPerDay: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default Details;