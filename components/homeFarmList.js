import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import FarmCard from "./farm-cardComponent/farmCard";

const HomeFarmList = ({ className = "", propMinWidth, propWidth }) => {
  const farmsData = [
    {
      id: 1,
      farmName: "Radheshyam Agro Tourism And Farm",
      nearCity: "Jaipur",
      cityDistance: "20km",
      farmArea: "2000 Sqm",
      accommodation: "Yes",
      special: "Tractor Ride",
      moreDetailsLink: "/farm-details/1",
      photo: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 1",
      accommodationDetails: "(12,365)",
    },
    {
      id: 2,
      farmName: "Another Farm Name",
      nearCity: "Delhi",
      cityDistance: "30km",
      farmArea: "1500 Sqm",
      accommodation: "No",
      special: "Organic Farming",
      moreDetailsLink: "/farm-details/2",
      photo: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 2",
      accommodationDetails: "(8,765)",
    },
    {
      id: 3,
      farmName: "Radheshyam Agro Tourism And Farm",
      nearCity: "Jaipur",
      cityDistance: "20km",
      farmArea: "2000 Sqm",
      accommodation: "Yes",
      special: "Tractor Ride",
      moreDetailsLink: "/farm-details/1",
      photo: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 1",
      accommodationDetails: "(12,365)",
    },
    {
      id: 4,
      farmName: "Another Farm Name",
      nearCity: "Delhi",
      cityDistance: "30km",
      farmArea: "1500 Sqm",
      accommodation: "No",
      special: "Organic Farming",
      moreDetailsLink: "/farm-details/2",
      photo: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 2",
      accommodationDetails: "(8,765)",
    },
    {
      id: 5,
      farmName: "Radheshyam Agro Tourism And Farm",
      nearCity: "Jaipur",
      cityDistance: "20km",
      farmArea: "2000 Sqm",
      accommodation: "Yes",
      special: "Tractor Ride",
      moreDetailsLink: "/farm-details/1",
      photo:"/rectangle-185@2x.png",
      imageAlt: "Farm Image 1",
      accommodationDetails: "(12,365)",
    },
    {
      id: 6,
      farmName: "Another Farm Name",
      nearCity: "Delhi",
      cityDistance: "30km",
      farmArea: "1500 Sqm",
      accommodation: "No",
      special: "Organic Farming",
      moreDetailsLink: "/farm-details/2",
      photo: "/rectangle-185@2x.png",
      imageAlt: "Farm Image 2",
      accommodationDetails: "(8,765)",
    },
  ];

  const router = useRouter();

  const onFrameButtonClick = useCallback((link) => {
    router.push(link);
  }, [router]);

  const onViewAllButtonClick = useCallback(() => {
    router.push("/listed-farm");
  }, [router]);

  return (
<section
  className={`self-stretch bg-background flex flex-col items-center justify-center mx-[2%] py-[2%] box-border max-w-full text-center text-9xl text-primary-colour font-inter `}
>
  <div className="flex-1 flex flex-col items-center justify-center box-border gap-y-10 gap-[5%] max-w-full ">
    <h2 className="m-0 text-inherit font-bold font-inherit text-center">
      Latest Listed Farms
    </h2> 
        <div className="self-stretch flex flex-wrap justify-center text-left text-base text-lite gap-[5%]">
          {farmsData.map((farm) => (
            <FarmCard
              key={farm.id}
              propWidth={propWidth}
              propMinWidth={propMinWidth}
              farm={farm}
              onFrameButtonClick={() => onFrameButtonClick(farm.moreDetailsLink)}
            />
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
  propMinWidth: PropTypes.string,
  propWidth: PropTypes.string,
};

export default HomeFarmList;
