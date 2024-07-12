import FrameComponent3 from "./frame-component3";
import PropTypes from "prop-types";

const WhySaran = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[37px] max-w-full text-left text-9xl text-primary-colour font-inter mq750:gap-[18px] ${className}`}
    >
      <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-3xl">
        Why Choose Saran Faram
      </h2>
      <FrameComponent3
        authenticFarmExperiences="Authentic Farm Experiences:"
        handsOnFarmActivities="Hands-on Farm Activities:"
        saranfarmOffersAWideRange=" Saran.farm offers a wide range of hands-on activities, such as planting, harvesting, milking cows, and feeding animals. Visitors can actively participate in these activities, gaining a deeper appreciation for the hard work and dedication of farmers."
        farmEducation="Farm Education:"
        saranfarmProvidesEducatio=" Saran.farm provides educational opportunities for visitors to learn about various farming practices, including organic farming, sustainable agriculture, and traditional farming techniques. agriculture, and traditional farming techniques. Through workshops and guided tours, visitors can............"
        group272="/group-272@2x.png"
      />
    </div>
  );
};

WhySaran.propTypes = {
  className: PropTypes.string,
};

export default WhySaran;
