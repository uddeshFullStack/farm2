import PropTypes from "prop-types";

const ContactInfo = ({ className = "" }) => {
  return (
    <div
      className={`w-[282px] flex flex-col items-start justify-start gap-[8px] text-left text-xl text-secondary-colour font-inter ${className}`}
    >
      <div className="relative font-semibold inline-block min-w-[109px] z-[2] mq450:text-base">
        Contact Us
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-base text-white">
        <div className="flex flex-col items-start justify-start gap-[7px]">
          <img
            className="w-[25px] h-[22px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/rotary-dial-telephone@2x.png"
          />
          <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
            <img
              className="h-[22px] w-[22px] relative object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/download-mail@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <img
              className="h-[23px] w-[23px] relative object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/interior@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px]">
            <div className="relative whitespace-nowrap z-[2]">
              +91 9680524270
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="relative whitespace-nowrap z-[2]">
                  moshinkhanrander@gmail.com
                </div>
                <div className="self-stretch relative z-[2]">
                  <p className="[margin-block-start:0] [margin-block-end:2px]">
                    R-CAT, Tonk Rd, Panch Batti,
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:2px]">
                    Sangram Colony, Ashok Nagar,
                  </p>
                  <p className="m-0">Jaipur, Rajasthan 302007</p>
                </div>
              </div>
              <img
                className="w-[116.9px] h-[78px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/westendlondonmapwithpin-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo;
