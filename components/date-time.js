import PropTypes from "prop-types";

const DateTime = ({ className = "", arrivalDateTime, dateIcons }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-start gap-[52px] text-left text-xl text-taxt-colour font-inter mq750:flex-wrap mq750:gap-[26px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[189px]">
        <div className="relative mq450:text-base">{arrivalDateTime}</div>
        <div className="self-stretch flex flex-row items-start justify-start relative text-7xl text-lite">
          <div className="flex-1 shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)_inset] flex flex-row items-start justify-start">
            <div className="h-12 flex-1 relative rounded-10xs bg-white box-border border-[0.5px] border-solid border-silver" />
            <div className="h-0 w-[72px] relative hidden mq450:text-2xl">
              Name
            </div>
          </div>
          <div className="absolute !m-[0] top-[calc(50%_-_12px)] left-[34px] text-xl inline-block min-w-[109px] z-[1] mq450:text-base">
            {dateIcons}
          </div>
          <img
            className="h-[37px] w-[37px] absolute !m-[0] top-[5px] right-[24px] overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/simplelineiconscalender.svg"
          />
        </div>
      </div>
      <div className="w-[277px] flex flex-col items-start justify-start gap-[9px] text-mini text-lite">
        <div className="relative inline-block min-w-[104px]">
          Hour : Minutes
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[36px] text-7xl mq450:gap-[18px]">
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="w-[140px] shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)_inset] flex flex-row items-start justify-start">
              <div className="h-12 flex-1 relative rounded-10xs bg-white box-border border-[0.5px] border-solid border-silver" />
              <div className="h-0 w-[72px] relative hidden mq450:text-2xl">
                Name
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 ml-[-94px] text-xl">
              <div className="relative inline-block min-w-[49px] whitespace-nowrap z-[1] mq450:text-base">
                10:15
              </div>
            </div>
          </div>
          <div className="w-[101px] flex flex-row items-start justify-start py-0 pr-[17px] pl-0 box-border">
            <div className="flex-1 shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)_inset] flex flex-row items-start justify-start">
              <div className="h-12 flex-1 relative rounded-10xs bg-white box-border border-[0.5px] border-solid border-silver" />
              <div className="h-0 w-[72px] relative hidden mq450:text-2xl">
                Name
              </div>
            </div>
            <input
              className="w-[66px] [border:none] [outline:none] bg-[transparent] h-9 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border font-inter text-xl text-lite ml-[-83px]"
              placeholder="am/pm"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

DateTime.propTypes = {
  className: PropTypes.string,
  arrivalDateTime: PropTypes.string,
  dateIcons: PropTypes.string,
};

export default DateTime;
