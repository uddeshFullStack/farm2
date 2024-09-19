import React from "react";
import Layout from "../layout";
import CardContainerUpper from "../../components/register-farmComponent/cardContainerUpper";
import CardContainerLower from "../../components/register-farmComponent/cardContainerLower";
import Link from "next/link";
import { lowerCardData, cards } from "../../constant/registerFarmData";
import FarmForm from "../../components/register-farmComponent/registerFarmForm";

const RegisterFarm = () => {
  return (
    <Layout>
      <div className="font-inter w-screen">
        <nav className="flex flex-wrap justify-center md:justify-between items-center m-[3%]">
          <div className="text-primary-colour text-lg font-semibold py-4">
            Apply To List Your Farm
          </div>
          <Link
            href="/start-agrotourism-form"
            className="[text-decoration:none] bg-secondary-colour rounded text-lg font-semibold p-[1%] text-primary-colour cursor-pointer hover:scale-105"
          >
            Want To Start AgroTourism
          </Link>
        </nav>
        <div className="p-[3%] mt-16 sm:mt-0">
          <CardContainerUpper cards={cards} />
        </div>
        <div>
          <FarmForm />
        </div>
        <div>
          <CardContainerLower cardData={lowerCardData} />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterFarm;
