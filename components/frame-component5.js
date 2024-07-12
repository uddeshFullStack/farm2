import FrameComponent6 from "./frame-component6";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[65px] pb-[123px] box-border max-w-full text-center text-lg text-taxt-colour font-inter mq750:pl-8 mq750:pr-8 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
        <div className="h-[211px] w-[200px] relative">
          <button className="cursor-pointer [border:none] py-2 px-[49px] bg-primary-colour absolute top-[166px] left-[17px] rounded-sm w-[166px] flex flex-row items-start justify-start box-border z-[1] hover:bg-teal-100">
            <div className="h-[45px] w-[166px] relative rounded-sm bg-primary-colour hidden" />
            <div className="relative text-5xl font-extrabold font-inter text-white text-left inline-block min-w-[63px] z-[2] mq450:text-lgi">
              100+
            </div>
          </button>
          <div className="absolute top-[0px] left-[0px] w-full h-[200px]">
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-primary-colour w-full h-full" />
              <img
                className="absolute top-[28px] left-[81px] w-[37.9px] h-[53px] z-[1]"
                loading="lazy"
                alt=""
                src="/vector-8.svg"
              />
            </div>
            <div className="absolute top-[92px] left-[60px] font-extrabold z-[1]">
              <p className="[margin-block-start:0] [margin-block-end:3px]">
                Total
              </p>
              <p className="m-0">Location</p>
            </div>
          </div>
        </div>
        <div className="h-[211px] w-[200px] relative text-left text-5xl text-white">
          <div className="absolute top-[166px] left-[16.5px] rounded-sm bg-royalblue flex flex-row items-start justify-start py-2 px-[50px] z-[1]">
            <div className="h-[45px] w-[166px] relative rounded-sm bg-royalblue hidden" />
            <div className="relative font-extrabold inline-block min-w-[63px] z-[2] mq450:text-lgi">
              100+
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-full h-[200px] text-center text-lg text-taxt-colour">
            <a className="[text-decoration:none] absolute top-[92px] left-[76px] font-extrabold text-[inherit] z-[1]">
              <p className="[margin-block-start:0] [margin-block-end:3px]">
                Total
              </p>
              <p className="m-0">Farm</p>
            </a>
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue w-full h-full" />
              <img
                className="absolute top-[30px] left-[68.2px] w-[58.6px] h-[51px] z-[1]"
                loading="lazy"
                alt=""
                src="/vector-9.svg"
              />
            </div>
          </div>
        </div>
        <FrameComponent6
          booking="Booking"
          eventAccepted="/event-accepted@2x.png"
        />
        <FrameComponent6
          booking="Events Coverd"
          eventAccepted="/stage@2x.png"
        />
        <FrameComponent6 booking="Tourist" eventAccepted="/traveler@2x.png" />
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
