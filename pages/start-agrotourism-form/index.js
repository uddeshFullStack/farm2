import React from 'react'
import Layout from '../layout';
import AgrotourismForm from './agrotourismForm';

const AgroTourism = () => {
    
  
    return (
    <Layout>
      <div className="font-inter">
        <nav className="flex items-center justify-center bg-white w-full mx-8 mt-16">
          <div className="text-primary-colour text-3xl font-bold">
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