import PropTypes from "prop-types";

const TouristGlances = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[65px] pb-[100px] box-border max-w-full text-left text-9xl text-primary-colour font-inter mq750:pl-8 mq750:pr-8 mq750:pb-[65px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
        <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-3xl">
          Some Tourist Glances
        </h2>
        <div className="self-stretch flex flex-row items-start justify-start gap-[37px] max-w-full mq750:gap-[18px] mq1275:flex-wrap">
          <div className="h-[466px] flex-1 relative bg-gainsboro min-w-[529px] max-w-full mq750:min-w-full" />
          <div className="w-[459px] flex flex-col items-start justify-start gap-[42px] min-w-[459px] max-w-full mq450:gap-[21px] mq750:min-w-full mq1275:flex-1">
            <textarea
              className="[border:none] bg-gainsboro h-[212px] w-auto [outline:none] self-stretch relative"
              rows={11}
              cols={23}
            />
            <textarea
              className="[border:none] bg-gainsboro h-[212px] w-auto [outline:none] self-stretch relative"
              rows={11}
              cols={23}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

TouristGlances.propTypes = {
  className: PropTypes.string,
};

export default TouristGlances;
