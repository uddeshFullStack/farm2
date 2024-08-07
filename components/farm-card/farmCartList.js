'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FarmCard from "./farmCard";
import { fetchFarmList } from "../../utils/supabaseQuery/FarmQuery";

const FarmCardList = ({ propMinWidth, propWidth }) => {
  const [farmsData, setFarmsData] = useState([]);
  const [chunkedFarms, setChunkedFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getFarmList = async () => {
      try {
        const data = await fetchFarmList();
        const farmsArray = Array.isArray(data) ? data : [data]; // Ensure data is an array
        setFarmsData(farmsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching farm list:", error);
        setError(error);
        setLoading(false); // Ensure loading state is set to false in case of error
      }
    };

    getFarmList();
  }, []);

  useEffect(() => {
    if (farmsData.length > 0) {
      const chunkedData = farmsData.reduce((acc, _, i) => {
        if (i % 3 === 0) {
          acc.push(farmsData.slice(i, i + 3));
        }
        return acc;
      }, []);
      setChunkedFarms(chunkedData);
    }
  }, [farmsData]);

  const handleMoreDetailsClick = (link) => {
    router.push(link);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching farm list: {error.message}</p>;

  return (
    <div className="self-stretch flex flex-wrap pl-[60px] items-start justify-start gap-[30px] max-w-full text-left text-base text-lite mq750:gap-[20px]">
      {chunkedFarms.map((farmGroup, index) => (
        <div
          key={index}
          className="self-stretch grid flex-row items-start justify-start gap-[100.5px] max-w-full grid-cols-[repeat(3,_minmax(302px,_1fr))] z-[1] mq750:gap-[25px] mq750:grid-cols-[minmax(302px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(302px,_524px))]">
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
