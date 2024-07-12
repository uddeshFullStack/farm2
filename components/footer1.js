import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] text-center text-9xl text-primary-colour font-inter ${className}`}
    >
      <div className="w-[291px] flex flex-row items-start justify-start gap-[5px]">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 text-white">
          <div className="self-stretch flex flex-row items-start justify-start py-2 pr-4 pl-[18px] relative">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-10xs bg-primary-colour" />
            <b className="flex-1 relative tracking-[0.05em] z-[1] mq450:text-3xl">
              1
            </b>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
          <div className="flex flex-row items-start justify-start py-2 pr-3.5 pl-4 relative">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-10xs bg-secondary-colour" />
            <b className="relative tracking-[0.05em] inline-block min-w-[20px] z-[1] mq450:text-3xl">
              2
            </b>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-2 pr-3.5 pl-4 relative">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-10xs bg-secondary-colour" />
          <b className="relative tracking-[0.05em] inline-block min-w-[20px] z-[1] mq450:text-3xl">
            3
          </b>
        </div>
        <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0 text-taxt-colour">
          <h2 className="m-0 relative text-inherit tracking-[0.05em] font-semibold font-inherit inline-block min-w-[58px] mq450:text-3xl">
            ......
          </h2>
        </div>
        <div className="flex flex-row items-start justify-start py-2 pr-1.5 pl-2 relative">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-10xs bg-secondary-colour" />
          <b className="relative tracking-[0.05em] inline-block min-w-[36px] z-[1] mq450:text-3xl">
            10
          </b>
        </div>
      </div>
    </div>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
