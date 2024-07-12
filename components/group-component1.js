import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "", propAlignSelf, propWidth }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch shadow-[0px_1px_2px_1px_rgba(0,_0,_0,_0.25)] rounded-md bg-white flex flex-col items-start justify-start pt-0 px-0 pb-6 gap-[38px] z-[1] text-center text-sm text-primary-colour font-inter mq450:gap-[19px] ${className}`}
      style={groupDiv1Style}
    >
      <div className="self-stretch h-[339px] relative shadow-[0px_1px_2px_1px_rgba(0,_0,_0,_0.25)] rounded-md bg-white hidden" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.13)] rounded-t-md rounded-b-none bg-white flex flex-row items-end justify-start pt-[18px] px-6 pb-2.5 gap-[11px] z-[1] mq450:flex-wrap">
          <div className="h-[83px] w-[295px] relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.13)] rounded-t-md rounded-b-none bg-white hidden" />
          <img
            className="h-[55px] w-[55px] relative rounded-[50%] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/ellipse-37@2x.png"
          />
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative font-semibold inline-block min-w-[40px] z-[2]">
                Name
              </div>
              <div className="relative text-xs text-lite inline-block min-w-[31px] z-[2]">
                State
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-6 text-justify text-base text-lite">
          <div className="flex-1 relative tracking-[0.03em] z-[1]">
            Visitors have the flexibility to choose the duration of their farm
            stay, ranging from a few days to a few weeks. Visitors have the
            flexibility to choose the duration of their farm stay, ranging from
            a few days to a few weeks
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-6">
        <img
          className="h-[19px] w-28 relative z-[1]"
          loading="lazy"
          alt=""
          src="/group-208.svg"
        />
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default GroupComponent1;
