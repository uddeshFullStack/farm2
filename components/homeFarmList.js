import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import FarmCard from "./farm-card/farmCard";

const HomeFarmList = ({ className = "" ,propMinWidth,propWidth}) => {
  const farmsData = [
    {
      id: 1,
      farmName: "Radheshyam Agro Tourism And Farm",
      nearestCity: "Jaipur",
      cityDistance: "20km",
      farmArea: "2000 Sqm",
      accommodation: "Yes",
      specialFeatures: "Tractor Ride",
      moreDetailsLink: "/farm-details/1",
      imageSrc: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 1",
      accommodationDetails: "(12,365)",
    },
    {
      id: 2,
      farmName: "Another Farm Name",
      nearestCity: "Delhi",
      cityDistance: "30km",
      farmArea: "1500 Sqm",
      accommodation: "No",
      specialFeatures: "Organic Farming",
      moreDetailsLink: "/farm-details/2",
      imageSrc: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 2",
      accommodationDetails: "(8,765)",
    },
    {
      id: 3,
      farmName: "Radheshyam Agro Tourism And Farm",
      nearestCity: "Jaipur",
      cityDistance: "20km",
      farmArea: "2000 Sqm",
      accommodation: "Yes",
      specialFeatures: "Tractor Ride",
      moreDetailsLink: "/farm-details/1",
      imageSrc: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 1",
      accommodationDetails: "(12,365)",
    },
    {
      id: 4,
      farmName: "Another Farm Name",
      nearestCity: "Delhi",
      cityDistance: "30km",
      farmArea: "1500 Sqm",
      accommodation: "No",
      specialFeatures: "Organic Farming",
      moreDetailsLink: "/farm-details/2",
      imageSrc: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 2",
      accommodationDetails: "(8,765)",
    },
    {
      id: 5,
      farmName: "Radheshyam Agro Tourism And Farm",
      nearestCity: "Jaipur",
      cityDistance: "20km",
      farmArea: "2000 Sqm",
      accommodation: "Yes",
      specialFeatures: "Tractor Ride",
      moreDetailsLink: "/farm-details/1",
      imageSrc: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 1",
      accommodationDetails: "(12,365)",
    },
    {
      id: 6,
      farmName: "Another Farm Name",
      nearestCity: "Delhi",
      cityDistance: "30km",
      farmArea: "1500 Sqm",
      accommodation: "No",
      specialFeatures: "Organic Farming",
      moreDetailsLink: "/farm-details/2",
      imageSrc: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 2",
      accommodationDetails: "(8,765)",
    },
  ];

  // const handleMoreDetailsClick = (link) => {
  //   router.push(link);
  // };

  // Chunk farmsData into groups of 3 for rendering
  const chunkedFarms = farmsData.reduce((acc, _, i) => {
    if (i % 3 === 0) {
      acc.push(farmsData.slice(i, i + 3));
    }
    return acc;
  }, []);
  const router = useRouter();

  const onFrameButtonClick = useCallback((link) => {
    router.push(link);
  }, [router]);

  const onViewAllButtonClick = useCallback(() => {
    router.push("/listed-farm");
  }, [router]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[65px] box-border max-w-full text-center text-9xl text-primary-colour font-inter mq750:pb-[27px] mq750:box-border mq1275:pb-[42px] mq1275:box-border ${className}`}
    >
      <div className="flex-1 bg-background flex flex-col items-start justify-start pt-[65px] px-[65px] pb-[39px] box-border gap-[49px] max-w-full mq750:gap-[24px] mq750:pt-[27px] mq750:px-8 mq750:pb-5 mq750:box-border mq1275:pt-[42px] mq1275:pb-[25px] mq1275:box-border">
        <h2 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-3xl">
          Latest Listed Farms
        </h2>
        <div className="self-stretch flex flex-wrap items-start justify-between gap-[40px] max-w-full text-left text-base text-lite mq750:gap-[20px]">
        {/* <div className="self-stretch flex flex-wrap items-start justify-start gap-[30px] max-w-full text-left text-base text-lite mq750:gap-[20px]"> */}
            {chunkedFarms.map((farmGroup, index) => (
              <div
                key={index}
                className="self-stretch grid flex-row items-start justify-start gap-[50.5px] max-w-full grid-cols-[repeat(3,_minmax(302px,_1fr))] z-[1] mq750:gap-[25px] mq750:grid-cols-[minmax(302px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(302px,_524px))]">
                {farmGroup.map((farm) => (
                  <FarmCard
                    key={farm.id}
                    propWidth={propWidth}
                    propMinWidth={propMinWidth}
                    farm={farm}
                    onFrameButtonClick={() => onFrameButtonClick(farm.moreDetailsLink)}
                  />
                ))}
              </div>
            ))}
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <button
            className="cursor-pointer [border:none] py-3 px-5 bg-[transparent] w-80 flex flex-row items-start justify-center box-border relative gap-[10px] z-[1]"
            onClick={onViewAllButtonClick}
          >
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
    </section>
  );
};

HomeFarmList.propTypes = {
  className: PropTypes.string,
};

export default HomeFarmList;
