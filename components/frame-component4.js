import { useCallback } from "react";
import { useRouter } from "next/router";
import GroupComponent2 from "./group-component2";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    router.push("/farm-deatils");
  }, [router]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[65px] box-border max-w-full text-center text-9xl text-primary-colour font-inter mq750:pb-[27px] mq750:box-border mq1275:pb-[42px] mq1275:box-border ${className}`}
    >
      <div className="flex-1 bg-background flex flex-col items-start justify-start pt-[65px] px-[65px] pb-[39px] box-border gap-[49px] max-w-full mq750:gap-[24px] mq750:pt-[27px] mq750:px-8 mq750:pb-5 mq750:box-border mq1275:pt-[42px] mq1275:pb-[25px] mq1275:box-border">
        <div className="w-[1440px] h-[1309px] relative bg-background hidden max-w-full" />
        <h2 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-3xl">
          Latest Listed Farms
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-base text-lite mq750:gap-[20px]">
          <div className="self-stretch grid flex-row items-start justify-start gap-[50.5px] max-w-full grid-cols-[repeat(3,_minmax(302px,_1fr))] z-[1] mq750:gap-[25px] mq750:grid-cols-[minmax(302px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(302px,_524px))]">
            <GroupComponent2 onFrameButtonClick={onFrameButtonClick} />
            <GroupComponent2 propWidth="unset" propMinWidth="unset" />
            <GroupComponent2 propWidth="unset" propMinWidth="unset" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[59px] max-w-full mq750:gap-[29px]">
            <div className="self-stretch grid flex-row items-start justify-start gap-[50.5px] max-w-full grid-cols-[repeat(3,_minmax(302px,_1fr))] mq750:gap-[25px] mq750:grid-cols-[minmax(302px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(302px,_524px))]">
              <GroupComponent2 propWidth="unset" propMinWidth="unset" />
              <GroupComponent2 propWidth="unset" propMinWidth="unset" />
              <GroupComponent2 propWidth="unset" propMinWidth="unset" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <button className="cursor-pointer [border:none] py-3 px-5 bg-[transparent] w-80 flex flex-row items-start justify-center box-border relative gap-[10px] z-[1]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-secondary-colour" />
                <div className="flex flex-row items-start justify-start gap-[20px] z-[1]">
                  <div className="relative text-5xl font-medium font-inter text-primary-colour text-left inline-block min-w-[92px] mq450:text-lgi">
                    View All
                  </div>
                  <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                    <img
                      className="w-8 h-[11.5px] relative"
                      alt=""
                      src="/vector-95.svg"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
