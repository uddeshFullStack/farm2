import { useState, useCallback } from "react";
import { useRouter } from "next/router";

import Layout from "../layout";
import FarmCardList from "../../components/farm-cardComponent/farmCartList";
import Link from "next/link";

const ListedFarm = () => {
  const router = useRouter();
  
  // State management for state and district
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const onSearchClick = useCallback(() => {
    console.log("Selected State:", state);
    console.log("Selected District:", district);
    router.push("/farm-details");
  }, [state, district, router]);

  return (
    <Layout>
      <main className="flex flex-col items-start justify-start px-[4vw] py-[2.5vw] font-inter">
        <form className="w-full flex flex-col items-end gap-[3vw]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full mt-[1vw] gap-[2vw]">
            <h2 className="text-[5vw] lg:text-[2vw] font-bold text-primary-colour">
              Listed Farms
            </h2>
            <Link
              href="/agrotourism-suggestion"
              className="bg-secondary-colour rounded text-[4vw] lg:text-[1.5vw] font-semibold px-[6vw] lg:px-[1.5vw] py-[1vw] lg:py-[0.5vw] text-primary-colour hover:scale-105"
            >
              Suggest Me AgriTourism
            </Link>
          </div>

          <div className="flex flex-col gap-[3vw] w-full">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-[95%] gap-[2vw] bg-background shadow-md rounded-md p-[2vw]">
              
              <div className="relative flex flex-row items-center gap-[1vw] border border-solid border-gray-300 p-[1vw] rounded w-full lg:w-[30%]">
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-[70%] lg:w-full text-[4vw] lg:text-[1.5vw] font-medium text-gray-600"
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
                  className="w-[70%] lg:w-full text-[4vw] lg:text-[1.5vw] font-medium text-gray-600"
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
                className="flex flex-row items-center justify-center bg-primary-colour text-white text-[4vw] lg:text-[1.5vw] font-medium rounded p-[1vw] lg:p-[0.5vw] w-full lg:w-[30%]"
              >
                Search
                <img
                  className="w-[6vw] lg:w-[1.5vw] h-[6vw] lg:h-[1.5vw] ml-[1vw]"
                  alt="search-icon"
                  src="/tablersearch.svg"
                />
              </button>
            </div>

            <div>
              <FarmCardList />
            </div>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default ListedFarm;
