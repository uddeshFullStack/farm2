import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[35px] box-border gap-[47px] max-w-full text-left text-5xl text-primary-colour font-inter mq750:gap-[23px] ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-100.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-16 pl-[69px] box-border max-w-full mq750:pl-[34px] mq750:pr-8 mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
          <div className="w-[436px] flex flex-row flex-wrap items-start justify-start gap-[58px] max-w-full mq450:gap-[29px]">
            <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[82px] mq450:text-lgi">
              Reviws
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[192px] text-lgi text-lite">
              <div className="self-stretch flex flex-row items-end justify-start gap-[10px]">
                <img
                  className="h-[65px] w-[65px] relative rounded-[50%] object-cover"
                  loading="lazy"
                  alt=""
                  src="/ellipse-12@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="flex flex-row items-start justify-start py-0 px-1">
                      <div className="flex flex-row items-start justify-start gap-[18px]">
                        <b className="relative inline-block min-w-[77px]">
                          Jennifar
                        </b>
                        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-xs text-star-listed-lite-color">
                          <div className="relative font-medium inline-block min-w-[94px]">
                            (10 March 2019)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-center text-mini text-taxt-colour">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[3.3px]">
                        <img
                          className="h-[22px] w-[23.2px] relative min-h-[22px]"
                          loading="lazy"
                          alt=""
                          src="/vector-91.svg"
                        />
                        <img
                          className="h-[22px] w-[23.2px] relative min-h-[22px]"
                          loading="lazy"
                          alt=""
                          src="/vector-101.svg"
                        />
                        <img
                          className="h-[22px] w-[23.2px] relative min-h-[22px]"
                          loading="lazy"
                          alt=""
                          src="/vector-11.svg"
                        />
                        <img
                          className="h-[22px] w-[23.2px] relative min-h-[22px]"
                          loading="lazy"
                          alt=""
                          src="/vector-12.svg"
                        />
                        <img
                          className="h-[22px] w-[23.2px] relative min-h-[22px]"
                          loading="lazy"
                          alt=""
                          src="/vector-13.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <div className="relative font-semibold inline-block min-w-[77px]">
                          Very Good
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-justify text-xl text-lite">
            <div className="w-[1166px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1275:flex-wrap">
              <div className="w-[538px] flex flex-col items-start justify-start gap-[20.5px] min-w-[538px] max-w-full mq1275:flex-1 mq750:min-w-full">
                <div className="self-stretch relative mq450:text-base">{`Agro-tourism is a form of tourism that involves visiting & staying in farms or rural areas. It is a way to experience the culture, lifestyle, and environment of the countryside Agro-tourism can offer various benefits to both visitors and hosts, such as...........`}</div>
                <div className="flex flex-row items-end justify-start gap-[43px] text-left text-lg mq750:flex-wrap mq750:gap-[21px]">
                  <div className="flex flex-col items-start justify-start gap-[19px]">
                    <div className="relative font-medium inline-block min-w-[75px]">
                      Location
                    </div>
                    <div className="relative font-medium inline-block min-w-[61px]">
                      Quality
                    </div>
                  </div>
                  <div className="h-[61px] w-[154px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                    <div className="w-[110.7px] flex-1 flex flex-row flex-wrap items-start justify-start gap-[23px_2.1px]">
                      <img
                        className="h-[18px] w-[18px] relative"
                        loading="lazy"
                        alt=""
                        src="/vector-41.svg"
                      />
                      <img
                        className="h-[18px] w-[18px] relative"
                        alt=""
                        src="/vector-5.svg"
                      />
                      <img
                        className="h-[18px] w-[18px] relative"
                        alt=""
                        src="/vector-61.svg"
                      />
                      <img
                        className="h-[18px] w-[18px] relative"
                        alt=""
                        src="/vector-7.svg"
                      />
                      <img
                        className="h-[18px] w-[18px] relative"
                        alt=""
                        src="/vector-81.svg"
                      />
                      <img
                        className="h-[18px] w-[18px] relative"
                        alt=""
                        src="/vector-41.svg"
                      />
                      <img
                        className="h-[18px] w-[18px] relative"
                        alt=""
                        src="/vector-5.svg"
                      />
                      <img
                        className="h-[18px] w-[18px] relative"
                        alt=""
                        src="/vector-61.svg"
                      />
                      <img
                        className="h-[18px] w-[18px] relative"
                        alt=""
                        src="/vector-7.svg"
                      />
                      <img
                        className="h-[18px] w-[18px] relative"
                        alt=""
                        src="/vector-81.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[223px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-col items-start justify-start gap-[19px] shrink-0">
                        <div className="relative font-medium inline-block min-w-[72px]">
                          Comfort
                        </div>
                        <div className="relative font-medium inline-block min-w-[44px]">
                          price
                        </div>
                      </div>
                      <div className="h-[61px] w-[110.7px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                        <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start gap-[23px_2.1px] shrink-0">
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/vector-41.svg"
                          />
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/vector-5.svg"
                          />
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/vector-61.svg"
                          />
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/vector-7.svg"
                          />
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/vector-81.svg"
                          />
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/vector-41.svg"
                          />
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/vector-5.svg"
                          />
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/vector-61.svg"
                          />
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/vector-7.svg"
                          />
                          <img
                            className="h-[18px] w-[18px] relative"
                            alt=""
                            src="/vector-81.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[472px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[6.5px]">
                    <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                      <div className="w-[25px] h-[25px] relative rounded-[50%] box-border border-[0px] border-solid border-secondary-colour" />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <div className="w-[27px] h-[27px] relative rounded-[50%] box-border border-[0px] border-solid border-secondary-colour" />
                    </div>
                    <div className="h-[30px] w-[30px] relative rounded-[50%] bg-secondary-colour box-border border-[0px] border-solid border-secondary-colour" />
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <div className="w-[27px] h-[27px] relative rounded-[50%] box-border border-[0px] border-solid border-secondary-colour" />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                      <div className="w-[25px] h-[25px] relative rounded-[50%] box-border border-[0px] border-solid border-secondary-colour" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[445px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[445px] max-w-full text-left text-5xl text-primary-colour mq1275:flex-1 mq750:min-w-full">
                <div className="self-stretch shadow-[0px_0px_4px_#378805] rounded-3xs bg-white flex flex-col items-end justify-start py-[25px] px-[60px] box-border gap-[13px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="w-[445px] h-[266px] relative shadow-[0px_0px_4px_#378805] rounded-3xs bg-white hidden max-w-full" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
                      <img
                        className="h-[100px] w-[100px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/ringer-volume@2x.png"
                      />
                    </div>
                    <div className="relative tracking-[-0.01em] font-medium z-[1] mq450:text-lgi">{`Need Help? Call & WhatsApp`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[17px] pl-[18px] text-11xl text-lite">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[31px] pl-[30px]">
                        <div className="relative font-semibold whitespace-nowrap z-[1] mq750:text-5xl mq450:text-lg">
                          +77 2525 9966
                        </div>
                      </div>
                      <h3 className="m-0 relative text-6xl font-normal font-inherit whitespace-nowrap z-[1] mq450:text-xl">
                        farmsupport@gmail.com
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
