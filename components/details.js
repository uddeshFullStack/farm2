import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Details = ({ className = "" }) => {
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
                  <li className="mb-0">Vill-Jhashi, Post-Kalwar, Th- Kalwar</li>
                </ul>
                <p className="m-0"> District-Jaipur.</p>
              </div>
              <div className="w-[308px] relative inline-block">
                <ul className="m-0 text-inherit pl-6">
                  <li>
                    <span className="font-medium font-inter">
                      Farmer Name :
                    </span>
                    <span> Shri Harprit Shing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[238px] h-[100px] relative text-lg text-lite">
          <div className="absolute top-[0px] left-[0px] text-5xl tracking-[-0.01em] font-semibold text-primary-colour inline-block min-w-[84px] mq450:text-lgi">
            Special
          </div>
          <div className="absolute top-[78px] left-[0px] z-[1]">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>{`Indoor & Outdoor Games`}</li>
            </ul>
          </div>
          <div className="absolute top-[34px] left-[0px]">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Horse Riding</li>
            </ul>
          </div>
          <div className="absolute top-[57px] left-[0px]">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Tractor Ride</li>
            </ul>
          </div>
        </div>
        <div className="w-[223px] flex flex-col items-start justify-start gap-[5px]">
          <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">
            Accommodation
          </div>
          <div className="self-stretch relative text-lg font-medium text-lite">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Number of Rooms - 03</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[254px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border gap-[62px] text-lg text-lite mq450:gap-[31px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] text-5xl text-primary-colour">
            <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">{`Activities & Facilities`}</div>
          </div>
          <div className="w-[136px] relative inline-block">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Horse Riding</li>
            </ul>
          </div>
          <div className="relative z-[1]">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Tractor Ride</li>
            </ul>
          </div>
          <div className="self-stretch relative z-[2]">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>{`Indoor & Outdoor Games`}</li>
            </ul>
          </div>
          <div className="w-[136px] relative inline-block">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Horse Riding</li>
            </ul>
          </div>
          <div className="relative z-[1]">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Tractor Ride</li>
            </ul>
          </div>
          <div className="self-stretch relative z-[2]">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>{`Indoor & Outdoor Games`}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1px]">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 text-5xl text-primary-colour">
            <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">{`Event or Festival `}</div>
          </div>
          <div className="w-[115px] relative inline-block">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Kajari Teej</li>
            </ul>
          </div>
          <div className="relative">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Krishana Janmastmi</li>
            </ul>
          </div>
          <div className="w-[115px] relative inline-block">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Kajari Teej</li>
            </ul>
          </div>
          <div className="relative">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>Krishana Janmastmi</li>
            </ul>
          </div>
        </div>
        <div className="w-[214px] flex flex-col items-start justify-start gap-[5px] text-5xl text-primary-colour">
          <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[66px] mq450:text-lgi">{`Other `}</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] text-lg text-lite">
            <div className="self-stretch relative">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>Farm Area - 2000sqm</li>
              </ul>
            </div>
            <div className="relative inline-block min-w-[105px]">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>Free Milk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[324px] flex flex-col items-start justify-start gap-[83px] max-w-full mq450:gap-[41px]">
        <div className="flex flex-col items-start justify-start gap-[5px]">
          <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">
            Sightseeing
          </div>
          <div className="flex flex-col items-start justify-start text-lg text-lite">
            <div className="relative">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>{`Aamer Fort, Jantar Manter `}</li>
              </ul>
            </div>
            <div className="w-[147px] relative inline-block z-[1]">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>Sheesh Mahal</li>
              </ul>
            </div>
            <div className="w-[161px] relative inline-block z-[2]">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>{`The City Palace `}</li>
              </ul>
            </div>
            <div className="relative">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>{`Aamer Fort, Jantar Manter `}</li>
              </ul>
            </div>
            <div className="w-[147px] relative inline-block z-[1]">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>Sheesh Mahal</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[228px] flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[5px]">
          <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[100px] mq450:text-lgi">
            Rent IND
          </div>
          <div className="self-stretch relative text-lg font-medium text-taxt-colour">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li>1500-2000/day/person</li>
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
};

export default Details;
