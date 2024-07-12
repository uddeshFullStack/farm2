import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[42.6px] max-w-full text-left text-5xl text-primary-colour font-inter mq750:gap-[21px] mq1275:flex-wrap ${className}`}
    >
      <img
        className="w-[445.4px] relative max-h-full object-cover min-h-[307px] max-w-full mq1275:flex-1"
        loading="lazy"
        alt=""
        src="/group-272-1@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[25px] min-w-[534px] max-w-full mq750:min-w-full">
        <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
          Escape from City Life:
        </h3>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[17px] box-border max-w-full text-justify text-xl text-lite">
          <div className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full">
            <div className="self-stretch h-48 relative tracking-[0.03em] inline-block mq450:text-base">
              <ul className="m-0 text-inherit pl-[27px]">
                <li className="mb-0">
                  <span className="font-medium font-inter">
                    Tranquil Surroundings:
                  </span>
                  <span>
                    {" "}
                    Saran.farm is nestled in picturesque rural landscapes,
                    offering a serene and peaceful environment away from the
                    noise and pollution of the city. Visitors can unwind, relax,
                    and rejuvenate amidst the beauty of nature.
                  </span>
                </li>
                <li>
                  <span className="font-medium font-inter">{`Digital Detox: `}</span>
                  <span className="font-inter">
                    Saran.farm provides an opportunity for visitors to
                    disconnect from their digital devices and immerse themselves
                    in the simplicity of rural life. It allows them to take a
                    break from the constant distractions of technology and
                    reconnect with nature and themselves.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-8">
              <button className="cursor-pointer py-2 px-[25px] bg-primary-colour rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-primary-colour hover:bg-teal-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-teal-200">
                <div className="relative text-xl font-medium font-inter text-white text-left inline-block min-w-[91px]">
                  See More
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
