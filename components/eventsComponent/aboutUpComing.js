import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import YouTubeSwiper from './YoutubeSwiper';


const AboutUpComing = ({ data ,reasons }) => {
  // console.log("about  ", data);
  return (
    <div className='bg-backgroundColor-custom-green font-inter text-justify flex flex-col w-screen'>
      <div className='text-primary-colour font-bold text-2xl sm:text-3xl text-center py-8 sm:py-14'>
        About This Upcoming Event
      </div>
      <div className=''>
        <YouTubeSwiper data={data} />
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
      description: PropTypes.string.isRequired,
    }).isRequired,
    videoLink: PropTypes.string.isRequired,
    reasons: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default AboutUpComing;
