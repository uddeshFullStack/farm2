import React from 'react'
import Layout from '../layout';
import AgrotourismForm from './agrotourismForm';

const AgroTourism = () => {
    
  
    return (
    <Layout>
      <div className="font-inter p-2 m-3 sm:m-5 md:m-10">
        <nav className="flex items-center justify-start lg:justify-center bg-white w-full lg:mx-8 my-10">
          <div className="text-primary-colour text-lg lg:text-3xl font-bold pl-4">
              WANT TO START AGROTOURISM
          </div>
        </nav>
        <div>
            <AgrotourismForm/>
        </div>
    </div>
    </Layout>
    );
  };

export default AgroTourism