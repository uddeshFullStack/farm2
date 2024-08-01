import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const NextEvent = ({nextEventData}) => {
    const { eventDate, imageSrc }=nextEventData
  const calculateTimeLeft = () => {
    const eventDateTime = new Date(eventDate); // Use the eventDate prop
    const now = new Date();
    const difference = eventDateTime - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className='relative w-screen h-auto font-inter'>
      <Image
        src={imageSrc} // Use the imageSrc prop
        alt="Description of the event"
        layout="responsive"
      />
      <div className='absolute inset-0 flex flex-col items-center gap-[450px]'>
        <div className='text-[36px] text-white mt-52 font-extrabold'>
          Up Coming Event 2024
          <div className=''>
            <div className="flex flex-row justify-center mt-6">
              <div className="flex flex-col items-center min-w-12">
                <div className="text-[30px] font-extrabold" style={{ color: '#ff0000' }}>
                  {String(timeLeft.days).padStart(2, '0')} <span className='text-white'>:</span>
                </div>
                <div className="text-[12px] font-semibold">Days</div>
              </div>
              <div className="flex flex-col items-center mx-2 min-w-12">
                <div className="text-[30px] font-extrabold" style={{ color: '#051EFF' }}>
                  {String(timeLeft.hours).padStart(2, '0')} <span className='text-white'>:</span>
                </div>
                <div className="text-[12px] font-semibold">Hours</div>
              </div>
              <div className="flex flex-col items-center mx-2 min-w-12">
                <div className="text-[30px] font-extrabold" style={{ color: '#00FF38' }}>
                  {String(timeLeft.minutes).padStart(2, '0')} <span className='text-white'>:</span>
                </div>
                <div className="text-[12px] font-semibold">Minutes</div>
              </div>
              <div className="flex flex-col items-center min-w-12">
                <div className="text-[30px] font-extrabold" style={{ color: '#FBC800' }}>
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-[12px] font-semibold ml-4">Sec</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className='bg-secondary-colour text-primary-colour text-3xl font-semibold px-20 py-4 rounded-md ml-12 border-none cursor-pointer'>
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

NextEvent.propTypes = {
  eventDate: PropTypes.string.isRequired, // Prop validation for eventDate
  imageSrc: PropTypes.string.isRequired, // Prop validation for imageSrc
};

export default NextEvent;
