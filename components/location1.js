import PropTypes from "prop-types";

const Location1 = ({ className = "", state }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[15px] max-w-full text-left text-xl text-taxt-colour font-inter ${className}`}
    >
      <div className="relative inline-block min-w-[51px] mq450:text-base">
        {state}
      </div>
      <div className="self-stretch h-12 relative max-w-full text-7xl text-lite">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)_inset] w-full h-full flex flex-row items-start justify-start max-w-full">
          <div className="self-stretch flex-1 relative rounded-10xs bg-white box-border max-w-full border-[0.5px] border-solid border-silver" />
          <div className="h-0 w-[72px] relative hidden mq450:text-2xl">
            Name
          </div>
        </div>
        <img
          className="absolute top-[16px] left-[554px] w-8 h-4 z-[1]"
          alt=""
          src="/arrival-details.svg"
        />
      </div>
    </div>
  );
};

Location1.propTypes = {
  className: PropTypes.string,
  state: PropTypes.string,
};

export default Location1;
