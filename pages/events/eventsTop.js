import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const EventsTop = ({ filePath }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = filePath; // Use the filePath prop
    link.download = 'uddeshResume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Download button clicked');
  };

  return (
    <div className='flex flex-row justify-around w-screen font-inter pt-10 pb-8 gap-x-[750px]'>
      <div className='text-primary-colour font-bold text-5xl'>Events & Conference</div>
      <div className='text-primary-colour font-bold text-5xl'>
        <button
          onClick={handleDownload}
          className="bg-primary-colour text-white flex items-center px-4 py-2 rounded font-semibold cursor-pointer"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Event Menu Pdf Download
        </button>
      </div>
    </div>
  );
};

EventsTop.propTypes = {
  filePath: PropTypes.string.isRequired, // Prop validation for filePath
};

export default EventsTop;
