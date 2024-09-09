import { useState, useCallback } from "react";
import { useRouter } from "next/router";

import Layout from "../layout";
import FarmCardList from "../../components/farm-cardComponent/farmCartList";
import Link from "next/link";
import FarmLocationFilter from "../../components/listFamComponent/FarmLocationFilter";

const ListedFarm = () => {
  const router = useRouter();
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center  py-[2.5vw] font-inter">
        <form className="w-[95vw] md:w-[90vw] flex flex-col items-center gap-[3vw] ml-[6px] xsm:ml-0 xsm:p-3 sm:p-4 md:p-10 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between w-full mt-[1vw] gap-[2vw]">
            <h2 className="text-[5vw] lg:text-[2vw] font-bold text-primary-colour">
              Listed Farms
            </h2>
            <div>
              <Link
                href="/agrotourism-suggestion"
                className="bg-secondary-colour rounded text-[4vw] lg:text-[1.5vw] font-semibold px-[6vw] lg:px-[1.5vw] py-[1vw] lg:py-[0.5vw] text-primary-colour hover:scale-105"
              >
                Suggest Me AgriTourism
              </Link>
            </div>

          </div>

          <div className="flex flex-col gap-[3vw] w-full">
            {/* <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-[95%] gap-[2vw] bg-background shadow-md rounded-md p-[2vw]">
              
              <div className="relative flex flex-row items-center gap-[1vw] border border-solid border-gray-300 p-[1vw] rounded w-full lg:w-[30%]">
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-[70%] lg:w-full text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] font-medium text-gray-600"
                >
                  <option value="" disabled>Select Farm State</option>
                  <option value="State1">State 1</option>
                  <option value="State2">State 2</option>
                  <option value="State3">State 3</option>
                </select>
              </div>

              <div className="relative flex flex-row items-center gap-[1vw] border border-solid border-gray-300 p-[1vw] rounded w-full lg:w-[30%]">
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-[70%] lg:w-full text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] font-medium text-gray-600"
                >
                  <option value="" disabled>Select Farm District</option>
                  <option value="District1">District 1</option>
                  <option value="District2">District 2</option>
                  <option value="District3">District 3</option>
                </select>
              </div>

              <button
                type="button"
                onClick={onSearchClick}
                className="flex flex-row items-center justify-center bg-primary-colour text-white text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] font-medium rounded p-[1vw] lg:p-[0.5vw] w-full lg:w-[30%]"
              >
                Search
                <img
                  className="w-[6vw] text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] h-[6vw] sm:h-[3vw] md:h-[2.5vw] lg:h-[1.5vw] ml-[1vw]"
                  alt="search-icon"
                  src="/tablersearch.svg"
                />
              </button>
            </div> */}
            {/* <FarmLocationFilter/> */}
  
            <FarmCardList  />

          </div>
        </form>
      </main>
    </Layout>
  );
};

export default ListedFarm;
