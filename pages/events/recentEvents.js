import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const RecentEvents = ({ events }) => {
  return (
    <div className='p-14 font-inter'>
      <div className='text-primary-colour font-bold text-3xl pb-5'>
        Recent Events
      </div>
  
      {events.map((event, index) => (
        <div key={index} className='relative w-[1420px] mb-10'>
          <Image
            src={event.image}
            alt={event.description}
            layout="responsive"
          />
          <div className='absolute top-0 flex w-[410px] h-[509px] bg-[rgba(34,197,94,0.2)]'>
            <div className='flex flex-col px-16 pt-[100px] '>
              <div className='text-[36px] font-extrabold text-white'>{event.title}</div>
              <div className='flex items-center text-white'>
                <FontAwesomeIcon icon={faCalendarAlt} className='mr-2 mt-4' />
                <span className='mt-4'>{event.date}</span>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='ml-9 mr-2 mt-4' />
                <span className='mt-4'>{event.location}</span>
              </div>
              <div className='text-justify text-white pt-7'>
                {event.description}
              </div>
            </div>
          </div>
          <div className='absolute bottom-1 flex flex-row w-full h-[90px] bg-[rgba(250,200,0,0.80)] text-red-600 justify-between items-center font-inter'>
            <div className='text-white font-extrabold text-7xl'>
              <div className='flex flex-col items-center pl-[350px]'>
                {event.attendance}+
                <span className='text-sm font-normal text-primary-colour'>Attendance</span>
              </div>
            </div>
            <div className='text-white font-extrabold text-7xl'>
              <div className='flex flex-col items-center'>
                {event.days}+
                <span className='text-sm font-normal text-primary-colour'>Days</span>
              </div>
            </div>
            <div className='text-white font-extrabold text-7xl pr-[350px]'>
              <div className='flex flex-col items-center'>
                {event.speakers}+
                <span className='text-sm font-normal text-primary-colour'>Speakers</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentEvents
