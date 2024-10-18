import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import AboutDevConf from './aboutDevConf';

const RecentEventCard = ({ event, onSeeMore,onSeeLess }) => {
    console.log("event data :", event);
  return (
    <div className='w-full mb-10 mx-auto'>
        <div className='relative '>
        <img src={event.image} alt={event.title} className="w-full lg:h-[628px]" />
        <div className='absolute top-0 flex h-[55%] w-2/3 sm:h-[55%] sm:w-3/5 p-5 bg-[rgba(34,197,94,0.2)] bg-opacity-20 z-[2]'>
            <div className='relative w-full sm:px-5 pt-[5%] flex flex-row sm:flex-col'>
            <div className='text-justify text-white xsm:pt-2 sm:pt-3 md:pt-4 lg:pt-6 text-[6px] xsm:text-[8px] sm:text-[16px] md:text-[18px] lg:text-[24px] bg-transparent translate-x-[10%] font-extrabold'>
                {event.title}
                <div className='flex items-center text-white text-[10px] font-semibold xsm:text-[8px] sm:text-[16px] md:text-[18px] lg:text-[24px]'>
                <FontAwesomeIcon icon={faCalendarAlt} className='mr-2 mt-4 w-10' />
                <span className='mt-4'>{event.date}</span>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='ml-4 mt-4 mr-2 xsm:text-[4px] sm:text-[10px] md:text-[12px] lg:text-[16px]' />
                <span className='mt-4'>{event.location}</span>
                </div>
            </div>
            <div className='text-justify text-white xsm:pt-2 sm:pt-3 md:pt-4 lg:pt-6 text-[4px] xsm:text-[6px] sm:text-[10px] md:text-[14px] lg:text-[16px] bg-transparent translate-x-[10%]'>
                {event.description}
            </div>
            </div>
        </div>
        <div className='absolute bottom-1 flex flex-row sm:flex-row w-full h-auto bg-[rgba(250,200,0,0.80)] justify-between items-center font-inter z-[2]'>
            <div className='text-white font-extrabold text-[10px] sm:text-[14px] md:text-3xl lg:text-7xl pl-[15px]'>
            <div className='flex flex-col items-center'>
                {event.attendance}+
                <span className='font-normal text-primary-colour'>Attendance</span>
            </div>
            </div>
            <div className='text-white font-extrabold text-[10px] sm:text-[14px] md:text-3xl lg:text-7xl'>
            <div className='flex flex-col items-center'>
                {event.days}
                <span className='font-normal text-primary-colour'>Days</span>
            </div>
            </div>
            <div className='text-white font-extrabold text-[10px] sm:text-[14px] md:text-3xl lg:text-7xl pr-[15px]'>
            <div className='flex flex-col items-center'>
                {event.speakers}+
                <span className='font-normal text-primary-colour'>Speakers</span>
            </div>
            </div>
        </div>
        </div> 
        <AboutDevConf devConf={event.devConfData}  onSeeMore={onSeeMore} onSeeLess={onSeeLess}/>
    </div>
  );
};

export default RecentEventCard;
