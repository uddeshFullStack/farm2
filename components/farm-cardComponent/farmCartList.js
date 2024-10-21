import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import FarmCard from "./farmCard";
import { fetchFarmList } from "../../utils/supabaseQuery/FarmQuery";
import Pagination from "../pagination/Pagination";
import { stateDistricts } from "../../constant/stateDistrict";

const FarmCardList = ({ propMinWidth, propWidth }) => {
  const [allFarmsData, setAllFarmsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [farmsPerPage, setFarmsPerPage] = useState(10);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

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

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (page) => {
      setLoading(true);
      setError(null);
      try {
        const offset = (page - 1) * farmsPerPage;
        const data = await fetchFarmList(farmsPerPage, offset, state, district);
        setAllFarmsData(data);
        setCurrentPage(page);
      } catch (error) {
        console.error("Error fetching farm list:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 500), // 500ms debounce delay
    [farmsPerPage, state, district]
  );

  // Initial data fetch and setup when component is first rendered
  useEffect(() => {
    updateFarmsPerPage(); // Set initial farmsPerPage based on screen size
    debouncedSearch(1);  // Fetch data for the first page
    window.addEventListener("resize", updateFarmsPerPage); // Update farmsPerPage on window resize
    return () => {
      window.removeEventListener("resize", updateFarmsPerPage);
    };
  }, []);

  // Re-fetch data when farmsPerPage changes or search filters change
  useEffect(() => {
    debouncedSearch(1);
  }, [farmsPerPage, state, district]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching farm list: {error.message}</p>;

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-[95%] gap-[2vw] bg-background shadow-md rounded-md p-[2vw] mb-[2vw]">
        <div className="relative flex flex-row items-center gap-[1vw] border border-solid border-gray-300 p-[1vw] rounded w-full lg:w-[30%]">
          <select
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setDistrict(""); // Reset district when state changes
            }}
            className="w-[100%] lg:w-full text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] font-medium text-gray-600"
          >
            <option value="" disabled className="text-[2vw]">Select Farm State</option>
            {Object.keys(stateDistricts).map((stateName) => (
              <option key={stateName} value={stateName}  className="text-[2vw]">
                {stateName}
              </option>
            ))}
          </select>
        </div>

        <div className="relative flex flex-row items-center gap-[1vw] border border-solid border-gray-300 p-[1vw] rounded w-full lg:w-[30%]">
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-[100%] lg:w-full text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] font-medium text-gray-600"
            disabled={!state} // Disable district dropdown if no state is selected
          >
            <option value="" disabled className="text-[2vw]">Select Farm District</option>
            {state &&
              stateDistricts[state].map((districtName) => (
                <option key={districtName} value={districtName} className="text-[2vw]">
                  {districtName}
                </option>
              ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => debouncedSearch(1)}
          className="flex flex-row items-center justify-center bg-primary-colour text-white text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] font-medium rounded p-[1vw] lg:p-[0.5vw] w-full lg:w-[30%]"
        >
          Search
          <img
            className="w-[6vw] text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] h-[6vw] sm:h-[3vw] md:h-[2.5vw] lg:h-[1.5vw] ml-[1vw]"
            alt="search-icon"
            src="/tablersearch.svg"
          />
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center sm:gap-10">
        {allFarmsData?.data?.map((farm) => (
          <div key={farm.id} className="w-full md:min-w-[290px] md:w-[25vw]">
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
        setCurrentPage={debouncedSearch}
        totalPages={totalPages}
      />
    </>
  );
};

export default FarmCardList;
