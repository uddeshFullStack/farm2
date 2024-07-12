import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  const router = useRouter();

  const onSFPage00011ImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <header
      className={`self-stretch bg-primary-colour flex flex-row flex-wrap items-end justify-start pt-5 px-[65px] pb-[45px] box-border gap-[40px] max-w-full text-left text-lg text-white font-inter mq750:gap-[20px] mq750:pl-8 mq750:pr-8 mq750:box-border ${className}`}
    >
      <div className="h-[199px] w-[1440px] relative bg-primary-colour hidden max-w-full" />
      <img
        className="h-[125px] w-[125px] relative object-cover cursor-pointer z-[1]"
        loading="lazy"
        alt=""
        src="/sf-page0001-1@2x.png"
        onClick={onSFPage00011ImageClick}
      />
      <div className="flex-1 flex flex-col items-end justify-start gap-[44px] min-w-[744px] top-[0] z-[99] sticky max-w-full mq750:gap-[22px] mq1100:min-w-full">
        <div className="flex flex-row items-start justify-start gap-[30.6px] max-w-full z-[1] mq750:gap-[15px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-[30px] w-[18.8px] relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[109px] whitespace-nowrap">
                +123654897
              </a>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-[30px] w-[39px] relative"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <a className="[text-decoration:none] relative text-[inherit] whitespace-nowrap">
                udh..........ei@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[6.5px]">
              <img
                className="h-[26px] w-[26px] relative min-h-[26px]"
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
              <img
                className="h-[26px] w-[26px] relative min-h-[26px]"
                loading="lazy"
                alt=""
                src="/vector-4.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-6 h-6 relative"
                  loading="lazy"
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <img
                className="h-[26px] w-[26px] relative min-h-[26px]"
                loading="lazy"
                alt=""
                src="/group.svg"
              />
              <img
                className="h-[26px] w-[26px] relative min-h-[26px]"
                loading="lazy"
                alt=""
                src="/group-2.svg"
              />
            </div>
          </div>
        </div>
        <nav className="m-0 self-stretch rounded bg-secondary-colour flex flex-row items-start justify-start py-[18px] px-[53px] box-border gap-[278px] max-w-full z-[1] text-left text-lg text-taxt-colour font-inter mq1275:hidden mq750:gap-[69px] mq1100:gap-[139px] mq1100:pl-[26px] mq1100:pr-[26px] mq1100:box-border">
          <div className="h-[60px] w-[1145px] relative rounded bg-secondary-colour hidden max-w-full" />
          <nav className="m-0 w-[540px] flex flex-row items-start justify-between gap-[20px] max-w-full z-[2] text-left text-lg text-taxt-colour font-inter">
            <div className="flex flex-row items-start justify-start pt-0 pb-0.5 px-0">
              <a className="[text-decoration:none] relative uppercase font-medium text-[inherit] inline-block min-w-[55px] shrink-0">
                Home
              </a>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0.5">
              <a className="[text-decoration:none] relative uppercase font-medium text-[inherit] whitespace-nowrap">
                Register farm
              </a>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0.5">
              <a className="[text-decoration:none] relative uppercase font-medium text-[inherit] inline-block min-w-[106px] whitespace-nowrap">
                book farm
              </a>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 pb-0.5 px-0">
              <a className="[text-decoration:none] relative uppercase font-medium text-[inherit] inline-block min-w-[72px] shrink-0">
                events
              </a>
            </div>
          </nav>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0.5 z-[2]">
            <a className="[text-decoration:none] relative uppercase font-medium text-[inherit] inline-block min-w-[53px]">
              more
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
