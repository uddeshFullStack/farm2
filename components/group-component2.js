import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const GroupComponent2 = ({
  className = "",
  propWidth,
  propMinWidth,
  onFrameButtonClick,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const router = useRouter();

  const onFrameButtonClick1 = useCallback(() => {
    router.push("/farm-deatils");
  }, [router]);

  return (
    <div
      className={`shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white flex flex-col items-start justify-start p-[19px] box-border gap-[15px] max-w-full z-[2] text-left text-base text-lite font-inter ${className}`}
      style={groupDivStyle}
    >
      <div className="w-[403px] h-[485px] relative hidden max-w-full">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white w-full h-full" />
        <div className="absolute top-[237px] left-[19px] text-lg font-medium text-primary-colour">
          Radheshyam Agro Tourism And Farm
        </div>
        <img
          className="absolute top-[19px] left-[19px] w-[360px] h-[202px] object-cover"
          alt=""
          src="/rectangle-185@2x.png"
        />
        <div className="absolute top-[291px] left-[19px] font-medium text-center inline-block w-[102px] h-[19px] min-w-[102px]">
          Nearest City
        </div>
        <div className="absolute top-[291px] left-[267px] text-taxt-colour text-right inline-block w-28 h-[19px] min-w-[112px]">
          Jaipur (20km)
        </div>
        <div className="absolute top-[323px] left-[20px] font-medium inline-block w-[84px] h-[19px] min-w-[84px]">
          Farm Area
        </div>
        <div className="absolute top-[323px] left-[296px] text-taxt-colour text-right inline-block w-[83px] h-[19px] min-w-[83px]">
          2000 Sqm
        </div>
        <div className="absolute top-[356px] left-[20px] font-medium inline-block w-[133px] h-[19px]">
          Accommodation
        </div>
        <div className="absolute top-[356px] left-[321px] text-taxt-colour text-right inline-block w-[58px] h-[19px] min-w-[58px]">
          Yes/No
        </div>
        <div className="absolute top-[389px] left-[20px] font-medium inline-block w-[60px] h-[19px] min-w-[60px]">
          Special
        </div>
        <div className="absolute top-[389px] left-[280px] text-taxt-colour text-right inline-block w-[99px] h-[19px] min-w-[99px]">
          Tractor Ride
        </div>
        <div className="absolute top-[431px] left-[23px] rounded-8xs bg-secondary-colour w-[350px] h-[35px] overflow-hidden flex flex-row items-center justify-center py-1 px-[49px] box-border whitespace-nowrap text-mid text-primary-colour">
          <div className="relative tracking-[0.05em] font-semibold inline-block min-w-[114px]">
            More Details
          </div>
        </div>
        <div className="absolute top-[268px] left-[110px] text-2xs font-medium text-center inline-block min-w-[45px]">
          (12,365)
        </div>
        <img
          className="absolute top-[265px] left-[19px] w-[15.8px] h-[17.3px]"
          alt=""
          src="/vector-10.svg"
        />
        <img
          className="absolute top-[265px] left-[36px] w-[15.8px] h-[17.3px]"
          alt=""
          src="/vector-10.svg"
        />
        <img
          className="absolute top-[265px] left-[53px] w-[15.8px] h-[17.3px]"
          alt=""
          src="/vector-10.svg"
        />
        <img
          className="absolute top-[265px] left-[70px] w-[15.8px] h-[17.3px]"
          alt=""
          src="/vector-10.svg"
        />
        <img
          className="absolute top-[265px] left-[87px] w-[15.8px] h-[17.3px]"
          alt=""
          src="/vector-10.svg"
        />
      </div>
      <div className="w-[403px] h-[485px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white hidden max-w-full" />
      <img
        className="self-stretch h-[202px] relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
        loading="lazy"
        alt=""
        src="/rectangle-185@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full text-lg text-primary-colour">
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="relative font-medium z-[3]">
            Radheshyam Agro Tourism And Farm
          </div>
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-center text-2xs text-lite mq450:flex-wrap">
            <div className="w-[136px] flex flex-col items-start justify-start gap-[9.7px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[7.2px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[1.2px]">
                  <img
                    className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                    loading="lazy"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                    loading="lazy"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                    loading="lazy"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                    alt=""
                    src="/vector-10.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="relative font-medium inline-block min-w-[45px] z-[3]">
                    (12,365)
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
                Jaipur (20km)
              </div>
              <div className="w-[83px] relative inline-block min-w-[83px] z-[3]">
                2000 Sqm
              </div>
              <div className="w-[58px] relative inline-block min-w-[58px] z-[3]">
                Yes/No
              </div>
              <div className="w-[99px] relative inline-block min-w-[99px] z-[3]">
                Tractor Ride
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-1 box-border max-w-full">
          <button
            className="cursor-pointer [border:none] py-[7px] px-5 bg-secondary-colour flex-1 rounded-8xs overflow-hidden flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[3] hover:bg-goldenrod"
            onClick={onFrameButtonClick}
          >
            <div className="relative text-mid tracking-[0.05em] font-semibold font-inter text-primary-colour text-left inline-block min-w-[114px]">
              More Details
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onFrameButtonClick: PropTypes.func,
};

export default GroupComponent2;
