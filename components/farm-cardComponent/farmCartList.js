import React, { useState, useEffect } from "react";
import FarmCard from "./farmCard";
import { fetchFarmList } from "../../utils/supabaseQuery/FarmQuery";
import Pagination from "../pagination/Pagination";

const FarmCardList = ({ propMinWidth, propWidth }) => {
  const [allFarmsData, setAllFarmsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [farmsPerPage, setFarmsPerPage] = useState(10);

  const totalPages = Math.ceil((allFarmsData.count || 0) / farmsPerPage);

  // Function to update farmsPerPage based on screen size
  const updateFarmsPerPage = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setFarmsPerPage(10); // Mobile view
    } else {
      setFarmsPerPage(20); // PC view
    }
  };

  // Function to fetch farm data for the current page
  const handlePageChange = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const offset = (page - 1) * farmsPerPage;
      const data = await fetchFarmList(farmsPerPage, offset);
      setAllFarmsData(data);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching farm list:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Initial data fetch and setup when component is first rendered
  useEffect(() => {
    updateFarmsPerPage(); // Set initial farmsPerPage based on screen size
    handlePageChange(1);  // Fetch data for the first page
    window.addEventListener("resize", updateFarmsPerPage); // Update farmsPerPage on window resize
    return () => {
      window.removeEventListener("resize", updateFarmsPerPage);
    };
  }, []);

  // Re-fetch data when farmsPerPage changes
  useEffect(() => {
    handlePageChange(1);
  }, [farmsPerPage]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching farm list: {error.message}</p>;

  return (
    <>

      <div className="flex flex-wrap justify-center items-center sm:gap-10">
        {allFarmsData?.data?.map((farm) => (
          <div key={farm.id} className="min-w-[290px] w-[25vw]">
            <FarmCard
              propWidth={propWidth}
              propMinWidth={propMinWidth}
              farm={farm}
            />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        totalPages={totalPages}
      />
      </>
  );
};

export default FarmCardList;
