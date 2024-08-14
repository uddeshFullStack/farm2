import PropTypes from "prop-types";

const FrameComponent6 = ({ booking, eventAccepted }) => {
  return (
    <div className="relative w-[200px] h-[211px] text-center text-lg font-inter text-taxt-colour mb-10 ml-10">
      <div 
        style={{
          position: 'absolute',
          inset: '0',
          borderRadius: '50%',
          border: '8px solid #A0522D',
          backgroundColor: 'white',
        }}
      >
        <div className="relative w-full h-full">
          <img
            className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[51px] h-[51px] object-contain"
            src={eventAccepted}
            alt=""
          />
          <div className="absolute top-[75px] left-0 right-0 font-extrabold mt-8">
            <p className="m-0">Total</p>
            <p className="m-0">{booking}</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[16px] left-[17px] w-[166px] py-2 bg-sienna rounded-sm text-5xl font-extrabold text-white hover:bg-peru">
        100+
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  booking: PropTypes.string.isRequired,
  eventAccepted: PropTypes.string.isRequired,
};

export default FrameComponent6;