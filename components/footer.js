import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  const router = useRouter();

  const onBookAFarmClick = useCallback(() => {
    router.push("/listed-farm");
  }, [router]);

  return (
    <footer
      className={`ml-[-3px] self-stretch bg-primary-colour flex flex-col items-end justify-start pt-[30px] pb-[25.5px] pr-[5px] pl-0 box-border gap-[25.8px] max-w-full text-left text-xl text-secondary-colour font-inter mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[400px] relative bg-primary-colour hidden" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[67px] pl-[65px] box-border max-w-full mq750:pl-8 mq750:pr-[33px] mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <div className="w-[435.1px] flex flex-col items-start justify-start gap-[42.8px] max-w-full text-14xl mq450:gap-[21px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.4px]">
              <h1 className="m-0 relative text-inherit font-black font-inherit z-[1] mq450:text-xl mq750:text-7xl">
                <p className="m-0">Saran</p>
                <p className="m-0 text-white">Farm</p>
              </h1>
              <blockquote className="m-0 self-stretch h-24 relative text-base inline-block shrink-0 z-[1] text-white">
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
            </div>
            <div className="flex flex-row items-start justify-start gap-[29px] max-w-full text-9xl mq450:flex-wrap">
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
                    alt=""
                    src="/vector-6.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px] z-[2]"
                    alt=""
                    src="/group-2-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[117px] pl-0 gap-[10px]">
            <div className="relative font-semibold inline-block min-w-[115px] z-[2] mq450:text-base">
              Direct Links
            </div>
            <div className="flex flex-col items-start justify-start gap-[8.5px] z-[2] text-base text-white">
              <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-0">
                <div className="relative inline-block min-w-[69px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Home</li>
                  </ul>
                </div>
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
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Events</li>
                  </ul>
                </a>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0">
                <div className="relative inline-block min-w-[109px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[17px] pl-0">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>About Us</li>
                  </ul>
                </a>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[77px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Gallery</li>
                  </ul>
                </a>
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
          <div className="w-[282px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative font-semibold inline-block min-w-[109px] z-[2] mq450:text-base">
              Contact Us
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-base text-white">
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <img
                  className="w-[25px] h-[22px] relative object-cover z-[2]"
                  alt=""
                  src="/rotary-dial-telephone@2x.png"
                />
                <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
                  <img
                    className="h-[22px] w-[22px] relative object-cover z-[2]"
                    alt=""
                    src="/download-mail@2x.png"
                  />
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <img
                    className="h-[23px] w-[23px] relative object-cover z-[2]"
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
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11.5px] gap-[10px]">
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
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block max-w-full z-[2]">
              Copyright @ 2023 Saran Farm. All Rights Reserved.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
