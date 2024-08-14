import GroupComponent1 from "./group-component1";
import PropTypes from "prop-types";

const UserReviews = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full text-center text-sm text-primary-colour font-inter mq750:pb-8 mq750:box-border ${className}`}
    >
      <div className="flex-1 bg-background flex flex-row items-start justify-center pt-[67px] px-[65px] pb-[100px] box-border gap-[18px] max-w-full mq750:pt-11 mq750:px-8 mq750:pb-[65px] mq750:box-border mq1275:flex-wrap">
        <div className="h-[506px] w-[1440px] relative bg-background hidden max-w-full" />
        <div className="flex-1 relative text-lg font-semibold text-left inline-block min-w-[210px] max-w-full z-[1]">
          Discover What Our Users Say About Saran Faram: Hear Their Remarkable
          Experiences and Success Stories
        </div>
        <div className="flex-[0.9248] flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border min-w-[207px] mq450:flex-1">
          <GroupComponent1 />
        </div>
        <div className="flex-[0.9248] flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border min-w-[207px] mq450:flex-1">
          <div className="self-stretch shadow-[0px_1px_2px_1px_rgba(0,_0,_0,_0.25)] rounded-md bg-white flex flex-col items-start justify-start pt-0 px-0 pb-6 gap-[19px] z-[1]">
            <div className="self-stretch h-[339px] relative shadow-[0px_1px_2px_1px_rgba(0,_0,_0,_0.25)] rounded-md bg-white hidden" />
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
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch h-[190px] relative tracking-[0.03em] inline-block z-[1]">
                  Visitors have the flexibility to choose the duration of their
                  farm stay, ranging from a few days to a few weeks. Visitors
                  have the flexibility to choose the duration of their farm
                  stay, ranging from a few days to a few weeks the duration of
                  their farm stay, ranging from a few days to.........
                </div>
                <img
                  className="w-28 h-[19px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-208.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <GroupComponent1 propAlignSelf="unset" propWidth="295px" imageSrc="/ellipse-37@2x.png" />
      </div>
    </section>
  );
};

UserReviews.propTypes = {
  className: PropTypes.string,
};

export default UserReviews;
