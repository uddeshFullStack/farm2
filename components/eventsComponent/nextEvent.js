import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const NextEvent = ({ nextEventData }) => {
  const router = useRouter();
  const { eventDate, imageSrc } = nextEventData;

  const calculateTimeLeft = () => {
    const eventDateTime = new Date(eventDate);
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
  const handleResgister =()=>{
    router.push(`/register-event`);
  }

  return (
    <div className="relative w-screen h-auto  font-inter">
      <Image
        src={imageSrc}
        alt="Description of the event"
        layout="responsive"
        className="object-cover"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-8 ">
        <div className="text-center text-white font-extrabold" style={{fontSize:'3vw' ,marginTop:'8vw'}}>
          Upcoming Event 2024
          <div className="mt-4 sm:mt-6" >
            <div className="flex justify-center space-x-1 sm:space-x-2">
              <div className="flex flex-col items-center">
                <div className="font-extrabold" style={{ color: '#ff0000', }}>
                  {String(timeLeft.days).padStart(2, '0')}
                  <span className="text-white">:</span>
                </div>
                <div className=" font-semibold" style={{fontSize:'1.5vw' }}>Days</div>
              </div>
              <div className="flex flex-col items-center">
                <div className=" font-extrabold" style={{ color: '#051EFF' }}>
                  {String(timeLeft.hours).padStart(2, '0')}
                  <span className="text-white">:</span>
                </div>
                <div className="font-semibold" style={{fontSize:'1.5vw' }}>Hours</div>
              </div>
              <div className="flex flex-col items-center">
                <div className=" font-extrabold" style={{ color: '#00FF38' }}>
                  {String(timeLeft.minutes).padStart(2, '0')}
                  <span className="text-white">:</span>
                </div>
                <div className="font-semibold"style={{fontSize:'1.5vw' }}>Minutes</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-extrabold" style={{ color: '#FBC800' }}>
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className=" font-semibold ml-2 sm:ml-4" style={{fontSize:'1.5vw' }}>Sec</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20%]" style={{marginBottom:'12vw',marginLeft:'20vw' ,width:'40vw'}}>
          <button className="bg-secondary-colour text-primary-colour  rounded-md border-none cursor-pointer w-[50%] h-10 font-extrabold" onClick={()=>handleResgister()}>
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

NextEvent.propTypes = {
  nextEventData: PropTypes.shape({
    eventDate: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default NextEvent;
