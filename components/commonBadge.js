import Image from "next/image";
import PropTypes from "prop-types";

const CommonBadge = ({ icon, activity, count, colour }) => {
  return (
    <div className="relative w-[200px] h-[200px] text-center text-lg font-inter text-taxt-colour mb-10 ml-10">
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
            className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[51px] h-[51px] object-contain"
            src={icon}
            alt=""
          />
          <div className="absolute top-[65px] left-0 right-0 font-extrabold mt-8">
            <p className="m-0">Total</p>
            <p className="m-0">{activity}</p>
          </div>
        </div>
      </div>
      <div 
        className="absolute -bottom-[16px] left-[17px] w-[166px] py-2 rounded-sm text-5xl font-extrabold text-white hover:bg-peru"
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