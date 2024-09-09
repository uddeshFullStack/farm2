import Image from "next/image";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CommonBadge = ({ icon, activity, count, colour }) => {
  const [borderWidth, setBorderWidth] = useState('4px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint is 768px in Tailwind CSS
        setBorderWidth('8px');
      } else if(window.innerWidth >=340 )
      {
        setBorderWidth('4px');
      }else{
        setBorderWidth('3px')
      }
    };

    // Call the function on component mount and on window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-[40px] h-[40px] xsm:w-[55px] xsm:h-[55px] sm:w-[80px] sm:h-[80px] lg:w-[200px] lg:h-[200px] text-center text-sm lg:text-lg font-inter text-taxt-colour m-2 lg:m-5">
      <div
      style={{
        position: 'absolute',
        inset: '0',
        borderRadius: '50%',
        border: `${borderWidth} solid ${colour}`,
        backgroundColor: 'white',
      }}
    >
        <div className="relative w-full h-full">
          <Image
            className="absolute top-[3px] w-[10px] h-[10px] lg:top-[30px] left-1/2 -translate-x-1/2 xsm:w-[15px] xsm:h-[15px] lg:w-[51px] lg:h-[51px] object-contain"
            src={icon}
            alt=""
          />
          <div className="absolute -top-[17px] xsm:-top-[10px] sm:top-[0px] lg:top-[65px] left-0 right-0 font-extrabold mt-8">
            <p className="m-0 text-[6px] xsm:text-[8px] sm:text-[10px] lg:text-[1.5vw]">Total</p>
            <p className="m-0 text-[6px] xsm:text-[8px] sm:text-[10px] lg:text-[1.5vw] ">{activity}</p>
          </div>
        </div>
      </div>
      <div 
        className="absolute -bottom-[13px] text-[8px] left-[2px] w-[35px] xsm:-bottom-[10px] xsm:w-[50px] xsm:left-[3px]   sm:w-[75px]  md:-bottom-[5px] sm:left-[3px] md:w-[75px] md:left-[3px] lg:-bottom-[16px]   lg:left-[17px]  lg:w-[166px] py-1 lg:py-2 rounded-sm  xsm:text-xsm lg:text-5xl font-extrabold text-white hover:bg-peru"
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