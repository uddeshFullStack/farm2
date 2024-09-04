import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { stateDistricts } from "../../constant/stateDistrict";
import { fetchFarmList } from "../../utils/supabaseQuery/FarmQuery";


const FarmLocationFilter = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async () => {
      try {
        const { data, count } = await fetchFarmList(10, 0, state, district); // Fetch max 10 farms
        console.log("Search results:", data);
        // Handle the fetched data (e.g., update state, display farms)
      } catch (error) {
        console.error("Error fetching farms:", error.message);
      }
    }, 500), // 500ms debounce delay
    [state, district]
  );

  const handleSearchClick = () => {
    debouncedSearch();
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-[95%] gap-[2vw] bg-background shadow-md rounded-md p-[2vw]">
      <div className="relative flex flex-row items-center gap-[1vw] border border-solid border-gray-300 p-[1vw] rounded w-full lg:w-[30%]">
        <select
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setDistrict(""); // Reset district when state changes
          }}
          className="w-[70%] lg:w-full text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] font-medium text-gray-600"
        >
          <option value="" disabled>Select Farm State</option>
          {Object.keys(stateDistricts).map((stateName) => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
      </div>

      <div className="relative flex flex-row items-center gap-[1vw] border border-solid border-gray-300 p-[1vw] rounded w-full lg:w-[30%]">
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="w-[70%] lg:w-full text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] font-medium text-gray-600"
          disabled={!state} // Disable district dropdown if no state is selected
        >
          <option value="" disabled>Select Farm District</option>
          {state &&
            stateDistricts[state].map((districtName) => (
              <option key={districtName} value={districtName}>
                {districtName}
              </option>
            ))}
        </select>
      </div>

      <button
        type="button"
        onClick={handleSearchClick}
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
  );
};

export default FarmLocationFilter;
