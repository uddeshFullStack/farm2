
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link"; // Import the Link component from Next.js

const Footer = ({ className = "" }) => {
  const router = useRouter();

  return (
    <footer
      className={`w-screen  self-stretch bg-primary-colour flex flex-col items-end justify-start pt-[30px] pb-[25.5px] pr-[5px] pl-0 box-border gap-[25.8px] text-left text-xl text-secondary-colour font-inter mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[400px] relative bg-primary-colour hidden" />
      <div className="self-stretch flex flex-row items-start justify-end py-0  box-border max-w-full mq750:pl-2 mq750:pr-[3px] mq750:box-border">
        <div className="flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <div className=" flex flex-col items-start justify-start gap-y-5">
            <div className="">
              <h1 className="m-0 relative text-inherit font-black font-inherit  mq450:text-xl mq750:text-7xl">
                <p className="m-0">Saran</p>
                <p className="m-0 text-white">Farm</p>
              </h1>
              <blockquote className="m-0 self-stretch h-24 relative text-base inline-block shrink-0  text-white">
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
            <div className=" ">
              <h2 className="m-0 text-inherit font-semibold font-inherit mq450:text-3xl">
                Follow us:
              </h2>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <img
                    className="h-6 w-6 relative min-h-[24px] "
                    loading="lazy"
                    alt=""
                    src="/group-1-2.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px] "
                    loading="lazy"
                    alt=""
                    src="/vector-70.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px] "
                    loading="lazy"
                    alt=""
                    src="/group-2.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px] "
                    alt=""
                    src="/vector-6.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px] "
                    alt=""
                    src="/group-2-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col items-start justify-start py-0  pl-0 gap-[10px]">
            <div className="relative font-semibold inline-block min-w-[115px]  mq450:text-base">
              Direct Links
            </div>
            <div className="flex flex-col items-start justify-start gap-[8.5px]  text-base text-white">
              <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-0">
                  <Link href="/" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
                    <ul className="m-0 font-inherit text-inherit pl-[21px]">
                      <li>Home</li>
                    </ul>
                  </Link>
              </div>
              <div className="flex flex-row items-start justify-start">
                  <Link href="/book-farm" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
                    <ul className="m-0 font-inherit text-inherit pl-[21px]">
                      <li>Book Farm</li>
                    </ul>
                  </Link>
              </div>
              <div className="flex flex-row items-start justify-start">
                <Link href="/listed-farm" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
                    <ul className="m-0 font-inherit text-inherit pl-[21px]">
                      <li>Listed Farm</li>
                    </ul>
                  </Link>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-0">
                <Link href="/register-farm" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
                    <ul className="m-0 font-inherit text-inherit pl-[21px]">
                      <li>Registered Farm</li>
                    </ul>
                  </Link>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-0">
                <Link href="/events" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Events</li>
                  </ul>
                </Link>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0">
                <Link href="/contact-us" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[109px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Contact Us</li>
                  </ul>
                </Link>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[17px] pl-0">
                <Link href="/about-us" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>About Us</li>
                  </ul>
                </Link>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0">
                <Link href="/gallery" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[77px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Gallery</li>
                  </ul>
                </Link>
              </div>
              <div className="w-[119px] flex flex-row items-start justify-start">
              <Link href="/award" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[77px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Award</li>
                  </ul>
                </Link>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col items-start justify-start py-0 pl-0 gap-[10px]">
  <div className="relative font-semibold inline-block min-w-[115px] md:text-base">
    Direct Links
  </div>
  
  <div className="grid grid-cols-2 gap-y-[8.5px] text-base text-white md:grid-cols-1">
    <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-0">
      <Link href="/" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li>Home</li>
        </ul>
      </Link>
    </div>

    <div className="flex flex-row items-start justify-start">
      <Link href="/listed-farm" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li>Book Farm</li>
        </ul>
      </Link>
    </div>

    <div className="flex flex-row items-start justify-start">
      <Link href="/listed-farm" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li>Listed Farm</li>
        </ul>
      </Link>
    </div>

    <div className="flex flex-row items-start justify-start py-0 px-0">
      <Link href="/register-farm" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[170px]">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li>Registered Farm</li>
        </ul>
      </Link>
    </div>

    <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-0">
      <Link href="/events" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[75px]">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li>Events</li>
        </ul>
      </Link>
    </div>

    <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0">
      <Link href="/contact-us" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[109px]">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li>Contact Us</li>
        </ul>
      </Link>
    </div>

    <div className="flex flex-row items-start justify-start py-0 pr-[17px] pl-0">
      <Link href="/about-us" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px]">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li>About Us</li>
        </ul>
      </Link>
    </div>

    <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0">
      <Link href="/gallery" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[77px]">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li>Gallery</li>
        </ul>
      </Link>
    </div>

    <div className="w-[119px] flex flex-row items-start justify-start">
      <Link href="/award" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[77px]">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li>Award</li>
        </ul>
      </Link>
    </div>
  </div>
</div>

          <div className="w-[282px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative font-semibold inline-block min-w-[109px] mq450:text-base">
              Contact Us
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-base text-white">
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <img
                  className="w-[25px] h-[22px] relative object-cover "
                  alt=""
                  src="/rotary-dial-telephone@2x.png"
                />
                <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
                  <img
                    className="h-[22px] w-[22px] relative object-cover "
                    alt=""
                    src="/download-mail@2x.png"
                  />
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <img
                    className="h-[23px] w-[23px] relative object-cover"
                    alt=""
                    src="/interior@2x.png"
                  />
                </div>
              </div>
              {/* <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px]">
                  <div className="relative whitespace-nowrap ">
                    +91 9680524270
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11.5px] gap-[10px]">
                    <div className="relative whitespace-nowrap">
                      moshinkhanrander@gmail.com
                    </div>
                    <div className="self-stretch relative ">
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
                    className="w-[116.9px] h-[78px] relative object-cover "
                    loading="lazy"
                    alt=""
                    src="/westendlondonmapwithpin-1@2x.png"
                  />
                </div>
              </div> */}
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
  <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px]">
    <div className="relative whitespace-nowrap">
      +91 9680524270
    </div>
    <div className="flex flex-col sm:flex-col xsm:flex-row gap-2 md:flex-col md:gap-x-0 md:gap-y-[10.5px]">
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11.5px] gap-[10px]">
        <div className="relative whitespace-nowrap">
          moshinkhanrander@gmail.com
        </div>
        <div className="self-stretch relative">
          <p className="[margin-block-start:0] [margin-block-end:2px]">
            R-CAT, Tonk Rd, Panch Batti,
          </p>
          <p className="[margin-block-start:0] [margin-block-end:2px]">
            Sangram Colony, Ashok Nagar,
          </p>
          <p className="m-0">Jaipur, Rajasthan 302007</p>
        </div>
      </div>
      <div className="sm:w-[30vw] w-[25vw] md:w-[116.9px] md:h-[108px]">
        <img
          className="w-full h-full object-cover"
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
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full "
        alt=""
        src="/vector-95-1.svg"
      />
      <div className="w-[1413px] flex flex-row items-start justify-end py-0 px-[38px] box-border max-w-full text-sm text-white">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
            <div className="relative font-medium ">
              All images and trademarks belong to their respective owners.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[14.5px] max-w-full mq1100:flex-wrap">
            <div className="relative font-medium ">
              Terms and conditions
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-px h-[15px] relative "
                alt=""
                src="/policy-icon.svg"
              />
            </div>
            <Link href="/privacy-policy" className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[94px] ">
              Privacy Policy
            </Link>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-px h-[15px] relative "
                alt=""
                src="/policy-icon.svg"
              />
            </div>
            <div className="relative font-medium inline-block min-w-[92px] ">
              Refund Policy
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-px h-[15px] relative "
                alt=""
                src="/policy-icon.svg"
              />
            </div>
            <Link href="/copyright" className="[text-decoration:none] relative font-medium text-[inherit] inline-block max-w-full ">
              Copyright @ 2023 Saran Farm. All Rights Reserved.
            </Link>
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
