import { useCallback } from "react";
import Main from "../components/main";
import { useRouter } from "next/router";
import GroupComponent2 from "../components/group-component2";
import GroupComponent6 from "../components/group-component6";
import Footer1 from "../components/footer1";
import GroupComponent5 from "../components/group-component5";

const ListedFarm = () => {
  const router = useRouter();

  const onMoreButtonsClick = useCallback(() => {
    router.push("/farm-deatils");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[48px] mix-blend-normal leading-[normal] tracking-[normal] mq750:gap-[24px]">
      <Main />
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-[65px] pb-[55px] box-border max-w-full mq1275:pb-[23px] mq1275:box-border mq750:pl-8 mq750:pr-8 mq750:pb-5 mq750:box-border">
        <form className="m-0 flex-1 flex flex-col items-end justify-start gap-[51px] max-w-full mq750:gap-[25px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
              <h2 className="m-0 relative text-9xl font-bold font-inter text-primary-colour text-center mq450:text-3xl">
                Listed Farms
              </h2>
            </div>
            <button className="cursor-pointer [border:none] py-[13px] px-5 bg-secondary-colour w-[414px] rounded-8xs overflow-hidden shrink-0 flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-goldenrod">
              <div className="relative text-xl capitalize font-medium font-inter text-primary-colour text-center">
                Suggest Me AgriTourism
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[50px] max-w-full mq750:gap-[25px]">
            <div className="self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-background overflow-x-auto flex flex-row items-start justify-start py-[31px] px-[30px] box-border gap-[49px] max-w-full mq750:gap-[24px]">
              <div className="h-[114px] w-[1310px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-background shrink-0 hidden max-w-full" />
              <div className="w-96 rounded bg-white box-border shrink-0 flex flex-row items-start justify-between pt-2.5 pb-[9px] pr-[42px] pl-[30px] max-w-[calc(100%_-_866px)] gap-[20px] z-[1] border-[1.5px] border-solid border-star-listed-lite-color mq450:pr-5 mq450:box-border">
                <div className="h-[52px] w-96 relative rounded bg-white box-border hidden max-w-full border-[1.5px] border-solid border-star-listed-lite-color" />
                <div className="relative text-5xl capitalize font-medium font-inter text-star-listed-lite-color text-left z-[2] mq450:text-lgi">
                  Select Farm State
                </div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <img
                    className="w-[26px] h-[13px] relative z-[2]"
                    alt=""
                    src="/input-icons.svg"
                  />
                </div>
              </div>
              <div className="w-96 rounded bg-white box-border shrink-0 flex flex-row items-start justify-start pt-2.5 px-[30px] pb-[9px] gap-[60px] max-w-[calc(100%_-_866px)] z-[1] border-[1.5px] border-solid border-star-listed-lite-color mq450:gap-[30px]">
                <div className="h-[52px] w-96 relative rounded bg-white box-border hidden max-w-full border-[1.5px] border-solid border-star-listed-lite-color" />
                <div className="relative text-5xl capitalize font-medium font-inter text-star-listed-lite-color text-center z-[1] mq450:text-lgi">
                  Select Farm District
                </div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <img
                    className="w-[26px] h-[13px] relative z-[1]"
                    alt=""
                    src="/input-icons.svg"
                  />
                </div>
              </div>
              <div className="h-[52px] w-96 relative shrink-0 max-w-[calc(100%_-_866px)]">
                <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start pt-3 px-[51px] pb-2.5 box-border h-full z-[1]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-primary-colour" />
                  <div className="relative text-5xl capitalize font-medium font-inter text-white text-left inline-block min-w-[81px] z-[1] mq450:text-lgi">
                    Search
                  </div>
                </div>
                <img
                  className="absolute top-[13px] left-[315px] w-[26px] h-[26px] overflow-hidden z-[2]"
                  alt=""
                  src="/tablersearch.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px_48.5px] min-h-[2060px] max-w-full mq750:gap-[24px]">
              <div className="w-[403px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white flex flex-col items-start justify-start p-[19px] box-border gap-[15px] min-w-[383px] max-w-full z-[2] mq450:min-w-full">
                <div className="w-[403px] h-[485px] relative hidden max-w-full">
                  <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white w-full h-full" />
                  <div className="absolute top-[237px] left-[19px] text-lg font-medium font-inter text-primary-colour text-left">
                    Radheshyam Agro Tourism And Farm
                  </div>
                  <img
                    className="absolute top-[19px] left-[19px] w-[360px] h-[202px] object-cover"
                    alt=""
                    src="/rectangle-185@2x.png"
                  />
                  <div className="absolute top-[291px] left-[19px] text-base font-medium font-inter text-lite text-center inline-block w-[102px] h-[19px] min-w-[102px]">
                    Nearest City
                  </div>
                  <div className="absolute top-[291px] left-[267px] text-base font-inter text-taxt-colour text-right inline-block w-28 h-[19px] min-w-[112px]">
                    Jaipur (20km)
                  </div>
                  <div className="absolute top-[323px] left-[20px] text-base font-medium font-inter text-lite text-left inline-block w-[84px] h-[19px] min-w-[84px]">
                    Farm Area
                  </div>
                  <div className="absolute top-[323px] left-[296px] text-base font-inter text-taxt-colour text-right inline-block w-[83px] h-[19px] min-w-[83px]">
                    2000 Sqm
                  </div>
                  <div className="absolute top-[356px] left-[20px] text-base font-medium font-inter text-lite text-left inline-block w-[133px] h-[19px]">
                    Accommodation
                  </div>
                  <div className="absolute top-[356px] left-[321px] text-base font-inter text-taxt-colour text-right inline-block w-[58px] h-[19px] min-w-[58px]">
                    Yes/No
                  </div>
                  <div className="absolute top-[389px] left-[20px] text-base font-medium font-inter text-lite text-left inline-block w-[60px] h-[19px] min-w-[60px]">
                    Special
                  </div>
                  <div className="absolute top-[389px] left-[280px] text-base font-inter text-taxt-colour text-right inline-block w-[99px] h-[19px] min-w-[99px]">
                    Tractor Ride
                  </div>
                  <div className="absolute top-[431px] left-[23px] rounded-8xs bg-secondary-colour w-[350px] h-[35px] overflow-hidden flex flex-row items-center justify-center py-1 px-[49px] box-border whitespace-nowrap">
                    <div className="relative text-mid tracking-[0.05em] font-semibold font-inter text-primary-colour text-left inline-block min-w-[114px]">
                      More Details
                    </div>
                  </div>
                  <div className="absolute top-[268px] left-[110px] text-2xs font-medium font-inter text-star-listed-lite-color text-center inline-block min-w-[45px]">
                    (12,365)
                  </div>
                  <img
                    className="absolute top-[265px] left-[19px] w-[15.8px] h-[17.3px]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="absolute top-[265px] left-[36px] w-[15.8px] h-[17.3px]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="absolute top-[265px] left-[53px] w-[15.8px] h-[17.3px]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="absolute top-[265px] left-[70px] w-[15.8px] h-[17.3px]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="absolute top-[265px] left-[87px] w-[15.8px] h-[17.3px]"
                    alt=""
                    src="/vector-10.svg"
                  />
                </div>
                <div className="w-[403px] h-[485px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                  <img
                    className="h-[202px] flex-1 relative max-w-full overflow-hidden object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-185@2x.png"
                  />
                  <div className="!m-[0] absolute top-[10px] left-[-19px] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-green flex flex-row items-start justify-start pt-1 px-3 pb-[3px] z-[4]">
                    <div className="h-6 w-[59px] relative rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-green hidden" />
                    <div className="relative text-sm font-semibold font-inter text-white text-left inline-block min-w-[35px] z-[5]">
                      Offer
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative text-lg font-medium font-inter text-primary-colour text-left z-[3]">
                      Radheshyam Agro Tourism And Farm
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[136px] flex flex-col items-start justify-start gap-[9.7px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[7.2px]">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[1.2px]">
                            <img
                              className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                              alt=""
                              src="/vector-10.svg"
                            />
                            <img
                              className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                              alt=""
                              src="/vector-10.svg"
                            />
                            <img
                              className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                              alt=""
                              src="/vector-10.svg"
                            />
                            <img
                              className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                              alt=""
                              src="/vector-10.svg"
                            />
                            <img
                              className="h-[17.3px] w-[15.8px] relative min-h-[17px] z-[3]"
                              alt=""
                              src="/vector-10.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <div className="relative text-2xs font-medium font-inter text-star-listed-lite-color text-center inline-block min-w-[45px] z-[3]">
                              (12,365)
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[13.7px]">
                          <div className="w-[102px] relative text-base font-medium font-inter text-lite text-center inline-block min-w-[102px] z-[3]">
                            Nearest City
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-px">
                            <div className="relative text-base font-medium font-inter text-lite text-left inline-block min-w-[84px] z-[3]">
                              Farm Area
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                            <div className="relative text-base font-medium font-inter text-lite text-left z-[3]">
                              Accommodation
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-px">
                            <div className="relative text-base font-medium font-inter text-lite text-left inline-block min-w-[60px] z-[3]">
                              Special
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-28 flex flex-col items-end justify-start gap-[13.7px]">
                        <div className="self-stretch relative text-base font-inter text-taxt-colour text-right inline-block min-w-[112px] z-[3]">
                          Jaipur (20km)
                        </div>
                        <div className="w-[83px] relative text-base font-inter text-taxt-colour text-right inline-block min-w-[83px] z-[3]">
                          2000 Sqm
                        </div>
                        <div className="w-[58px] relative text-base font-inter text-taxt-colour text-right inline-block min-w-[58px] z-[3]">
                          Yes/No
                        </div>
                        <div className="w-[99px] relative text-base font-inter text-taxt-colour text-right inline-block min-w-[99px] z-[3]">
                          Tractor Ride
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-1 box-border max-w-full">
                    <button
                      className="cursor-pointer [border:none] py-[7px] px-5 bg-secondary-colour flex-1 rounded-8xs overflow-hidden flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[3] hover:bg-goldenrod"
                      onClick={onMoreButtonsClick}
                    >
                      <div className="relative text-mid tracking-[0.05em] font-semibold font-inter text-primary-colour text-left inline-block min-w-[114px]">
                        More Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <GroupComponent2 propWidth="403px" propMinWidth="383px" />
              <GroupComponent6 />
              <GroupComponent2 propWidth="403px" propMinWidth="383px" />
              <GroupComponent2 propWidth="403px" propMinWidth="383px" />
              <GroupComponent6 />
              <GroupComponent2 propWidth="403px" propMinWidth="383px" />
              <GroupComponent2 propWidth="403px" propMinWidth="383px" />
              <GroupComponent2 propWidth="403px" propMinWidth="383px" />
              <GroupComponent2 propWidth="403px" propMinWidth="383px" />
              <GroupComponent2 propWidth="403px" propMinWidth="383px" />
              <GroupComponent2 propWidth="403px" propMinWidth="383px" />
            </div>
          </div>
          <Footer1 />
        </form>
      </main>
      <GroupComponent5 />
    </div>
  );
};

export default ListedFarm;
