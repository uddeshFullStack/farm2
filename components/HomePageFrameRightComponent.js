import React from "react";
import PropTypes from "prop-types";

const HomePageFrameRightComponent = ({ data, className = "", maxWords = 40, isExpanded, onExpand }) => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className={`self-stretch flex flex-row items-start justify-start gap-[42px] max-w-full text-left text-5xl text-primary-colour font-inter mq750:gap-[21px] mq1275:flex-wrap ${className}`}>
      <img
        className="w-[445.4px] relative min-h-[307px] object-cover max-w-full mq1275:flex-1"
        loading="lazy"
        alt={data.imageAlt}
        src={data.imageSrc}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[25px] min-w-[534px] max-w-full mq750:min-w-full">
        <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
          {data.title}
        </h3>
        <div className={`self-stretch flex flex-col items-start justify-start gap-[17px] text-justify text-xl text-lite ${isExpanded ? "h-auto" : "h-48"}`}>
          <div className="self-stretch relative tracking-[0.03em] inline-block mq450:text-base">
            <ul className="m-0 text-inherit pl-[27px]">
              {data.points.map((point, index) => (
                <li key={index} className={index === 0 ? "mb-0" : ""}>
                  <span className="font-medium font-inter">{point.title}: </span>
                  <span>{isExpanded ? point.description : truncateText(point.description, maxWords)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`flex flex-row items-start justify-start py-0 px-[30px] ${className}`}>
            <button onClick={onExpand} className="cursor-pointer py-2 px-[25px] bg-primary-colour rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-primary-colour hover:bg-teal-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-teal-200">
              <div className="relative text-xl font-medium font-inter text-white text-left inline-block min-w-[91px]">
                {isExpanded ? "See Less" : "See More"}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

HomePageFrameRightComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    buttonText: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
  maxWords: PropTypes.number,
  isExpanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
};

export default HomePageFrameRightComponent;
