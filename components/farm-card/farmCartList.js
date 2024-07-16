import React from "react";
import { useRouter } from "next/router";
import FarmCard from "./farmCard"
const FarmCardList = ({ propMinWidth, propWidth }) => {
  const router = useRouter();

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

  const handleMoreDetailsClick = (link) => {
    router.push(link);
  };

  // Chunk farmsData into groups of 3 for rendering
  const chunkedFarms = farmsData.reduce((acc, _, i) => {
    if (i % 3 === 0) {
      acc.push(farmsData.slice(i, i + 3));
    }
    return acc;
  }, []);

  return (
    <div className="self-stretch flex flex-wrap items-start justify-start gap-[30px] max-w-full text-left text-base text-lite mq750:gap-[20px]">
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
              onFrameButtonClick={() => handleMoreDetailsClick(farm.moreDetailsLink)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FarmCardList;
