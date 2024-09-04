import React from 'react';
import RecentEventSwiper from './RecentEventSwiper';
const RecentEvent = ({ events }) => {
  return (
    <div className='p-5 sm:p-10 md:p-14 font-inter'>
      <div className='text-primary-colour font-bold text-2xl sm:text-3xl pb-5'>
        Recent Events
      </div>
      
      <div className='flex items-center justify-center'>
        <div className='!w-[2000px]'>
          <RecentEventSwiper events={events} />
         </div>
      </div>
      
    </div>
  );
};

export default RecentEvent;
