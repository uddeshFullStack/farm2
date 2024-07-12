import { useCallback } from "react";
import SaranDetails from "./saran-details";
import { useRouter } from "next/router";
import ContactInfo from "./contact-info";
import PropTypes from "prop-types";

const GroupComponent4 = ({ className = "" }) => {
  const router = useRouter();

  const onBookAFarmClick = useCallback(() => {
    router.push("/listed-farm");
  }, [router]);

  return (
    <section
      className={`ml-[-3px] self-stretch bg-primary-colour flex flex-col items-end justify-start pt-[30px] pb-[25.5px] pr-[5px] pl-0 box-border gap-[25.8px] max-w-full text-left text-sm text-white font-inter mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[400px] relative bg-primary-colour hidden" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[67px] pl-[65px] box-border max-w-full mq750:pl-8 mq750:pr-[33px] mq750:box-border">
        <footer className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-xl text-secondary-colour font-inter mq1275:flex-wrap">
          <SaranDetails />
          <div className="flex flex-col items-start justify-start py-0 pr-[117px] pl-0 gap-[10px]">
            <div className="relative font-semibold inline-block min-w-[115px] z-[2] mq450:text-base">
              Direct Links
            </div>
            <div className="flex flex-col items-start justify-start gap-[8.5px] z-[2] text-base text-white">
              <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-0">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[69px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Home</li>
                  </ul>
                </a>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div
                  className="relative inline-block min-w-[119px] cursor-pointer"
                  onClick={onBookAFarmClick}
                >
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Book a Farm</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative inline-block min-w-[122px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Listed Farms</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-0">
                <div className="relative shrink-0">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Register Farm</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-0">
                <div className="relative inline-block min-w-[75px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Events</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0">
                <div className="relative inline-block min-w-[109px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[17px] pl-0">
                <div className="relative inline-block min-w-[95px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0">
                <div className="relative inline-block min-w-[77px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Gallery</li>
                  </ul>
                </div>
              </div>
              <div className="w-[119px] flex flex-row items-start justify-start">
                <div className="relative inline-block min-w-[72px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Award</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ContactInfo />
        </footer>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full z-[2]"
        loading="lazy"
        alt=""
        src="/vector-95-1.svg"
      />
      <div className="w-[1413px] flex flex-row items-start justify-end py-0 px-[38px] box-border max-w-full">
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
    </section>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent4;
