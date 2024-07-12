import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[42.6px] max-w-full text-left text-5xl text-primary-colour font-inter mq750:gap-[21px] mq1275:flex-wrap ${className}`}
    >
      <img
        className="w-[445.4px] relative max-h-full object-cover min-h-[307px] max-w-full mq1275:flex-1"
        loading="lazy"
        alt=""
        src="/group-313@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[21px] min-w-[534px] max-w-full mq750:min-w-full">
        <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi">
          Sustainable and Responsible Tourism:
        </h3>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[17px] box-border max-w-full text-justify text-xl text-lite">
          <div className="h-48 w-[805px] relative tracking-[0.03em] inline-block shrink-0 max-w-full max-h-[192px] [word-break:break-word] mq450:text-base">
            <ul className="m-0 text-inherit pl-[27px]">
              <li className="mb-0">
                <span className="font-medium font-inter">
                  Support for Local Farmers:
                </span>
                <span>
                  {" "}
                  Saran.farm directly supports local farmers by providing them
                  with a platform to showcase their products and generate
                  additional income. By choosing Saran.farm, visitors contribute
                  to the economic well-being of farmers and help sustain local
                  agricultural practices.
                </span>
              </li>
              <li>
                <span className="font-medium font-inter">
                  Environmental Conservation:
                </span>
                <span className="font-inter">
                  {" "}
                  Saran.farm is committed to minimizing its environmental
                  impact. It promotes sustainable farming practices, such as
                  organic farming, water conservation, and waste management.
                  Visitors are encouraged to respect and appreciate the natural
                  surroundings................
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[49px]">
          <button className="cursor-pointer py-2 px-[25px] bg-primary-colour rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-primary-colour hover:bg-teal-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-teal-200">
            <div className="relative text-xl font-medium font-inter text-white text-left inline-block min-w-[91px]">
              See More
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
