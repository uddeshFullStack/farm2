import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';

const AboutUpComing = ({ data }) => {
  const { eventTitle, eventDetails, videoLink, reasons } = data;
  return (
    <div className='bg-backgroundColor-custom-green font-inter text-justify flex flex-col  w-screen'>
      <div className='text-primary-colour font-bold text-2xl sm:text-3xl text-center py-8 sm:py-14'>
        About This Upcoming Event
      </div>
      <div className='flex flex-col lg:flex-row justify-center text-start w-full ml-8 md:ml-14 lg:ml-0 '>
        <div className='w-2/3  lg:w-1/4 flex-shrink-0 mb-8 lg:mb-0 lg:mr-8'>
          <iframe
            className='w-full h-48 sm:h-64'
            src={videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='flex flex-col bg-white shadow-lg rounded-lg p-4 w-2/3 lg:w-1/4 sm:text-base sm:p-4 lg:max-w-sm'>
          <div className='font-semibold text-xl text-primary-colour'>
            {eventTitle}
          </div>
          <div className='text-lg mt-1'>
            {eventDetails?.date}
          </div>
          <div className='mt-4 text-sm text-gray-700 overflow-hidden'>
            {eventDetails?.description}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center text-center pt-16 sm:pt-20 pb-4'>
        <div className='text-primary-colour font-bold text-xl sm:text-2xl'>
          Why Join Us
        </div>
        <div className='flex flex-col items-center'>
          {reasons?.map((reason, index) => (
            <div key={index} className='flex items-center mt-2 text-sm sm:text-base'>
              <FontAwesomeIcon icon={faCheckCircle} className='text-gray-600 mr-[.5px] sm:mr-2' />
              <p className='m-0'>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AboutUpComing.propTypes = {
  data: PropTypes.shape({
    eventTitle: PropTypes.string.isRequired,
    eventDetails: PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
    videoLink: PropTypes.string.isRequired,
    reasons: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default AboutUpComing;
