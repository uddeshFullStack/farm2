import PropTypes from "prop-types";

const FrameComponent3 = ({
  className = "",
  authenticFarmExperiences,
  handsOnFarmActivities,
  saranfarmOffersAWideRange,
  farmEducation,
  saranfarmProvidesEducatio,
  group272,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[42px] max-w-full text-center text-5xl text-primary-colour font-inter mq750:gap-[21px] mq1275:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[17px] min-w-[535px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
          <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi">
            {authenticFarmExperiences}
          </h3>
          <div className="self-stretch h-48 relative text-xl tracking-[0.03em] text-lite text-justify inline-block mq450:text-base">
            <ul className="m-0 text-inherit pl-[27px]">
              <li className="mb-0">
                <span className="font-medium font-inter">
                  {handsOnFarmActivities}
                </span>
                <span>{saranfarmOffersAWideRange}</span>
              </li>
              <li>
                <span className="font-medium font-inter">{farmEducation}</span>
                <span className="font-inter">{saranfarmProvidesEducatio}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[30px]">
          <button className="cursor-pointer py-2 px-[25px] bg-primary-colour rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-primary-colour hover:bg-teal-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-teal-200">
            <div className="relative text-xl font-medium font-inter text-white text-left inline-block min-w-[91px]">
              See More
            </div>
          </button>
        </div>
      </div>
      <img
        className="w-[445px] relative max-h-full object-cover max-w-full mq1275:flex-1"
        loading="lazy"
        alt=""
        src={group272}
      />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  authenticFarmExperiences: PropTypes.string,
  handsOnFarmActivities: PropTypes.string,
  saranfarmOffersAWideRange: PropTypes.string,
  farmEducation: PropTypes.string,
  saranfarmProvidesEducatio: PropTypes.string,
  group272: PropTypes.string,
};

export default FrameComponent3;
