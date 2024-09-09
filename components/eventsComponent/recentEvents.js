import React from 'react';
import RecentEventSwiper from './RecentEventSwiper';
const RecentEvent = ({ events }) => {
  return (
    <div className='font-inter w-[95vw] pt-10'>
      <div className='text-primary-colour font-bold text-2xl sm:text-3xl pb-5'>
        Recent Events
      </div>
      <div className=''>
        <RecentEventSwiper events={events} />
      </div>
    </div>
  );
};

export default RecentEvent;
