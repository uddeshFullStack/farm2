import Image from "next/image";
import PropTypes from "prop-types";

const CommonBadge = ({ icon, activity, count, colour }) => {
  return (
    <div className="relative w-[80px] h-[80px] lg:w-[200px] lg:h-[200px] text-center text-sm lg:text-lg font-inter text-taxt-colour m-2 lg:m-5">
      <div
        style={{
          position: 'absolute',
          inset: '0',
          borderRadius: '50%',
          border: `8px solid ${colour}`,
          backgroundColor: 'white',
        }}
      >
        <div className="relative w-full h-full">
          <Image
            className="absolute top-[10px] lg:top-[30px] left-1/2 -translate-x-1/2 w-[15px] h-[15px] lg:w-[51px] lg:h-[51px] object-contain"
            src={icon}
            alt=""
          />
          <div className="absolute lg:top-[65px] left-0 right-0 font-extrabold mt-8">
            <p className="m-0 text-[10px] lg:text-[1.5vw]">Total</p>
            <p className="m-0 text-[10px] lg:text-[1.5vw] ">{activity}</p>
          </div>
        </div>
      </div>
      <div 
        className="absolute -bottom-[10px] lg:-bottom-[16px] left-[20px]  lg:left-[17px] w-[40px] lg:w-[166px] py-1 lg:py-2 rounded-sm  xsm:text-sm lg:text-5xl font-extrabold text-white hover:bg-peru"
        style={{ backgroundColor: colour }}
      >
        {count}+
      </div>
    </div>
  );
};

CommonBadge.propTypes = {
  activity: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  colour: PropTypes.string.isRequired,
};

export default CommonBadge;