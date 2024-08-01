import React from 'react';
import Layout from '../layout';
 // Import the image correctly
import CardContainerUpper from './cardContainerUpper';
import FarmForm from './registerFarmForm';
import CardContainerLower from './cardContainerLower';
import Link from 'next/link';
import { cards ,cardData } from './contants';


const RegisterFarm = () => {


  return (
    <Layout>
      <div className="container font-inter ">
        <nav className="flex justify-between items-center py-4 bg-white w-full mx-8 px-8 mt-6">
          <div className="text-primary-colour text-lg font-semibold">
            Apply To List Your Farm
          </div>
          <Link href="/agrotourism-form" className="[text-decoration:none] bg-secondary-colour mr-28 rounded text-lg font-semibold w-100 h-13 px-16 py-3 text-primary-colour cursor-pointer hover:scale-105" >
            Want To Start AgroTourism
          </Link>
        </nav>
        <div className='mx-8 px-8'>
            <CardContainerUpper cards={cards}/>
        </div>
        <div>
          <FarmForm/>
        </div>
        <div>
          <CardContainerLower cardData={cardData}/>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterFarm;
