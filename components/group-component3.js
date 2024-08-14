import SaranDetails from "./saran-details";
import QuickLinks from "./quick-links";
import ContactInfo from "./contact-info";
import PropTypes from "prop-types";

const GroupComponent3 = ({ className = "" }) => {
  return (
    <footer
      className={`ml-[-3px] self-stretch bg-primary-colour flex flex-col items-end justify-start pt-[30px] pb-[25.5px] pr-[5px] pl-0 box-border gap-[25.8px] max-w-full text-left text-xl text-secondary-colour font-inter mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[400px] relative bg-primary-colour hidden" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[67px] pl-[65px] box-border max-w-full mq750:pl-8 mq750:pr-[33px] mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <SaranDetails />
          <QuickLinks />
          <ContactInfo />
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full z-[2]"
        alt=""
        src="/vector-95-1.svg"
      />
      <div className="w-[1413px] flex flex-row items-start justify-end py-0 px-[38px] box-border max-w-full text-sm text-white">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
            <div className="relative font-medium z-[2]">
              All images and trademarks belong to their respective owners.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[14.5px] max-w-full mq1100:flex-wrap">
            <div className="relative font-medium z-[2]">
              Terms and conditions
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-px h-[15px] relative z-[2]"
                alt=""
                src="/policy-icon.svg"
              />
            </div>
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[94px] z-[2]">
              Privacy Policy
            </a>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-px h-[15px] relative z-[2]"
                alt=""
                src="/policy-icon.svg"
              />
            </div>
            <div className="relative font-medium inline-block min-w-[92px] z-[2]">
              Refund Policy
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-px h-[15px] relative z-[2]"
                alt=""
                src="/policy-icon.svg"
              />
            </div>
            <div className="relative font-medium inline-block max-w-full z-[2]">
              Copyright @ 2023 Saran Farm. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
