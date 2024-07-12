import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "", booking, eventAccepted }) => {
  return (
    <div
      className={`h-[211px] w-[200px] relative text-center text-lg text-taxt-colour font-inter ${className}`}
    >
      <button className="cursor-pointer [border:none] py-2 px-[49px] bg-sienna absolute top-[166px] left-[17px] rounded-sm w-[166px] flex flex-row items-start justify-start box-border z-[1] hover:bg-peru">
        <div className="h-[45px] w-[166px] relative rounded-sm bg-sienna hidden" />
        <div className="relative text-5xl font-extrabold font-inter text-white text-left inline-block min-w-[63px] z-[2] mq450:text-lgi">
          100+
        </div>
      </button>
      <div className="absolute top-[0px] left-[0px] w-full h-[200px]">
        <div className="absolute top-[92px] left-[62px] font-extrabold z-[1]">
          <p className="[margin-block-start:0] [margin-block-end:3px]">Total</p>
          <p className="m-0">{booking}</p>
        </div>
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-sienna w-full h-full" />
          <img
            className="absolute top-[30px] left-[75px] w-[51px] h-[51px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={eventAccepted}
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  booking: PropTypes.string,
  eventAccepted: PropTypes.string,
};

export default FrameComponent6;
