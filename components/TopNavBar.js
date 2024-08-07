import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const TopNavBar = ({ className = "" }) => {
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const router = useRouter();
  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <header
      className={`self-stretch bg-primary-colour flex flex-row items-end justify-start pt-5 px-[65px] pb-[45px] box-border gap-[40px] max-w-full text-left text-lg text-white font-inter mq750:gap-[20px] mq750:pl-8 mq750:pr-8 mq750:box-border ${className}`}
    >
      <div className="h-[199px] w-[1440px] relative bg-primary-colour hidden max-w-full" />
      <div className="flex flex-row items-start justify-start bg-[url('/sf-page0001-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
        <img
          className="h-[125px] w-[125px] relative object-cover z-[2] cursor-pointer"
          loading="lazy"
          alt=""
          src="/sf-page0001-1@2x.png"
          onClick={onLogoClick}
        />
      </div>
      <div className="flex-1 flex flex-col items-end justify-start gap-[44px] max-w-full mq750:gap-[22px]">
        <div className="w-[599px] flex flex-row items-start justify-start max-w-full z-[1]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[30.6px] max-w-full z-[2] mq750:gap-[15px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="h-[30px] w-[18.8px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[109px] whitespace-nowrap">
                  +123654897
                </a>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
              <div className="h-[30px] w-[39px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <a className="[text-decoration:none] relative text-[inherit] whitespace-nowrap">
                  udh..........ei@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[6.5px]">
                <div className="h-[26px] w-[26px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
                <div className="h-[26px] w-[26px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
                <div className="w-6 h-6 relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className="h-[26px] w-[26px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                    src="/group.svg"
                  />
                </div>
                <div className="h-[26px] w-[26px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[60px] relative rounded bg-secondary-colour max-w-full z-[1]">
          <div className="absolute top-[calc(50%_-_30px)] left-[0px] rounded bg-secondary-colour w-full h-full hidden" />
          <nav className="m-0 absolute top-[0px] left-[0px] rounded bg-secondary-colour w-full h-full max-w-full z-[3] text-left text-lg text-taxt-colour font-inter">
            <div className="absolute top-[calc(50%_-_30px)] left-[0px] rounded bg-secondary-colour w-full h-full hidden" />
            <div className="m-0 absolute top-[18px] left-[53px] w-[540px] flex flex-row items-start justify-between max-w-full z-[4] text-left text-lg text-taxt-colour font-inter">
              <div className="m-0 flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] z-[2] text-left text-lg text-taxt-colour font-inter">
              <Link href="/" className="[text-decoration:none] uppercase font-medium text-[inherit] hover:text-white transition-colors duration-200">
                  Home
              </Link>
            <div className="relative">
              <button 
                onClick={() => setShowRegisterDropdown(!showRegisterDropdown)}
                className="text-black hover:text-white transition-colors duration-200 bg-secondary-colour border-none mr-12 hover:underline"
                style={{fontSize:'19px'}}
              >
                REGISTER FARM
              </button>
              <Link href="/book-farm" className="[text-decoration:none] uppercase font-medium text-[inherit] whitespace-nowrap hover:text-white transition-colors duration-200">
                Book Farm
              </Link>
            {showRegisterDropdown && (
              <div className="left-0 w-63 bg-backgroundColor-custom-green" style={{marginTop:'18px'}}>
                <Link href="/register-farm" className="  py-[11.5px] [text-decoration:none] block text-black hover:bg-white text-lg px-2">
                  &gt; APPLY TO LIST YOUR FARM
                </Link>
                <Link href="/start-agrotourism-form" className=" py-[11.5px] [text-decoration:none] block  text-lg text-black hover:bg-white px-2">
                  &gt; WANT TO START AGROTOURISM
                </Link>
              </div>
            )}
          </div>
              
              <Link href="/events" className="[text-decoration:none] uppercase font-medium text-[inherit] whitespace-nowrap hover:text-white transition-colors duration-200">
                Events
              </Link>
              </div>
            </div>
            <div className="absolute top-[18px] left-[871px] w-[175px] h-6 z-[4]">
              <div className="relative">
                <button 
                  onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                  className="text-black hover:text-white transition-colors duration-200 bg-secondary-colour border-none mr-12 hover:underline"
                  style={{fontSize:'19px'}}
                >
                  MORE
                </button>
              {showMoreDropdown && (
                <div className="left-0 w-63 bg-backgroundColor-custom-green" style={{marginTop:'18px'}}>
                  <Link href="/about-us" className="  py-[11.5px] [text-decoration:none] block text-black hover:bg-white text-lg px-2">
                    &gt; ABOUT US
                  </Link>
                  <Link href="/contact-us" className=" py-[11.5px] [text-decoration:none] block  text-lg text-black hover:bg-white px-2">
                    &gt; CONTACT US
                  </Link>
                  <Link href="/gallery" className="  py-[11.5px] [text-decoration:none] block text-black hover:bg-white text-lg px-2">
                    &gt; GALLERY
                  </Link>
                  <Link href="/award" className=" py-[11.5px] [text-decoration:none] block  text-lg text-black hover:bg-white px-2">
                    &gt; AWARD
                  </Link>
                </div>
              )}
            </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

TopNavBar.propTypes = {
  className: PropTypes.string,
};

export default TopNavBar;
