import { useCallback } from "react";
import { useRouter } from "next/router";
import QuickLinks from "./quick-links";
import ContactInfo from "./contact-info";
import PropTypes from "prop-types";

const GroupComponent5 = ({ className = "" }) => {
  const router = useRouter();

  const onSaranFarmTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <footer
      className={`ml-[-3px] self-stretch bg-primary-colour flex flex-col items-end justify-start pt-[30px] pb-[25.5px] pr-[5px] pl-0 box-border gap-[25.8px] max-w-full text-left text-14xl text-secondary-colour font-inter mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[400px] relative bg-primary-colour hidden" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[67px] pl-[65px] box-border max-w-full mq750:pl-8 mq750:pr-[33px] mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <div className="w-[435.1px] flex flex-col items-start justify-start gap-[10.4px] max-w-full">
            <h1
              className="m-0 relative text-inherit font-black font-inherit cursor-pointer z-[1] mq450:text-xl mq750:text-7xl"
              onClick={onSaranFarmTextClick}
            >
              <p className="m-0">Saran</p>
              <p className="m-0 text-white">Farm</p>
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[42.8px] max-w-full text-base text-white mq450:gap-[21px]">
              <blockquote className="m-0 self-stretch h-24 relative inline-block shrink-0 z-[1]">
                <p className="[margin-block-start:0] [margin-block-end:5px]">
                  <span className="font-inter text-white">{`"Escape to the tranquility of `}</span>
                  <span className="text-secondary-colour whitespace-pre-wrap">
                    <span className="font-medium font-inter">Saran.farm</span>
                  </span>
                  <span className="whitespace-pre-wrap">
                    <span className="text-secondary-colour whitespace-pre-wrap">
                      ,
                    </span>
                    <span className="whitespace-pre-wrap">
                      {" "}
                      where nature, culture, and authentic farm experiences come
                      together to create unforgettable memories."
                    </span>
                  </span>
                </p>
                <p className="m-0">
                  <span className="whitespace-pre-wrap">
                    <span className="whitespace-pre-wrap"> "</span>
                  </span>
                  <span className="font-medium font-inter text-secondary-colour">
                    Saran.farm:
                  </span>
                  <span className="font-inter text-white">
                    {" "}
                    Where city dwellers find solace, farmers find prosperity,
                    and the beauty of rural life is cherished."
                  </span>
                </p>
              </blockquote>
              <div className="flex flex-row items-start justify-start gap-[29px] max-w-full text-9xl text-secondary-colour mq450:flex-wrap">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-3xl">
                  Follow us:
                </h2>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="h-6 w-6 relative min-h-[24px] z-[2]"
                      loading="lazy"
                      alt=""
                      src="/group-1-2.svg"
                    />
                    <img
                      className="h-6 w-6 relative min-h-[24px] z-[2]"
                      loading="lazy"
                      alt=""
                      src="/vector-70.svg"
                    />
                    <img
                      className="h-6 w-6 relative min-h-[24px] z-[2]"
                      loading="lazy"
                      alt=""
                      src="/group-2.svg"
                    />
                    <img
                      className="h-6 w-6 relative min-h-[24px] z-[2]"
                      loading="lazy"
                      alt=""
                      src="/vector-6.svg"
                    />
                    <img
                      className="h-6 w-6 relative min-h-[24px] z-[2]"
                      loading="lazy"
                      alt=""
                      src="/group-2-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <QuickLinks />
          <ContactInfo />
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full z-[2]"
        loading="lazy"
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
            <div className="relative font-medium inline-block min-w-[94px] z-[2]">
              Privacy Policy
            </div>
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
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block max-w-full z-[2]">
              Copyright @ 2023 Saran Farm. All Rights Reserved.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

GroupComponent5.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent5;
