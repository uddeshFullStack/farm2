import NameEmail from "./name-email";
import Location1 from "./location1";
import DateTime from "./date-time";
import PropTypes from "prop-types";

const MainContent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[65px] pb-[35px] box-border max-w-full mq750:pl-8 mq750:pr-8 mq750:box-border ${className}`}
    >
      <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[90px] max-w-full mq750:gap-[45px] mq450:gap-[22px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full mq750:gap-[22px]">
          <div className="relative text-primary-colour text-left inline-block max-w-full mq450:text-lgi">
            <b className="text-9xl font-inter">{`Book Farm - `}</b>
            <span className="text-5xl font-semibold font-inter">
              Radheshyam Agro Tourism And Farm
            </span>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[70px] max-w-full mq750:gap-[35px] mq450:gap-[17px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[403px] max-w-full mq750:min-w-full">
              <NameEmail namePlaceholder="Name* " />
              <NameEmail namePlaceholder="Phone No* " />
              <Location1 state="State" />
              <DateTime
                arrivalDateTime="Arrival Date/Time"
                dateIcons="12/07/2022"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[403px] max-w-full mq750:min-w-full">
              <NameEmail namePlaceholder="E-Mail " />
              <NameEmail namePlaceholder="WhatsApp No." />
              <Location1 state="Country" />
              <DateTime
                arrivalDateTime="Departure Date/Time"
                dateIcons="15/07/2022"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <button className="cursor-pointer [border:none] py-[23.5px] px-5 bg-secondary-colour w-[560px] rounded-8xs overflow-hidden shrink-0 flex flex-row items-start justify-center box-border max-w-full hover:bg-goldenrod">
            <a className="[text-decoration:none] h-[29px] relative text-5xl tracking-[0.05em] font-semibold font-inter text-primary-colour text-center inline-block min-w-[127px] mq450:text-lgi">
              Book Now
            </a>
          </button>
        </div>
      </form>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
