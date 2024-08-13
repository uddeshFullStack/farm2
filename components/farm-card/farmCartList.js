'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FarmCard from "./farmCard";
import { fetchFarmList } from "../../utils/supabaseQuery/FarmQuery";

const FarmCardList = ({ propMinWidth, propWidth }) => {
  const [farmsData, setFarmsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getFarmList = async () => {
      try {
        const data = await fetchFarmList();
        const farmsArray = Array.isArray(data) ? data : [data]; 
        setFarmsData(farmsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching farm list:", error);
        setError(error);
        setLoading(false); 
      }
    };

    getFarmList();
  }, []);

  const handleMoreDetailsClick = (link) => {
    router.push(link);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching farm list: {error.message}</p>;

  return (
    <div className="flex flex-wrap justify-center items-center sm:gap-5">
      {farmsData.map((farm) => (
        <div
          key={farm.id}
          className="min-w-[290px] w-[25vw]">
          <FarmCard
            propWidth={propWidth}
            propMinWidth={propMinWidth}
            farm={farm}
            onFrameButtonClick={() => handleMoreDetailsClick(farm.moreDetailsLink)}
          />
        </div>
      ))}
    </div>
  );
};

export default FarmCardList;
