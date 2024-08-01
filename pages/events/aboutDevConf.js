import React, { useState } from 'react';

const AboutDevConf = ({ devConf, className, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const { title, description } = devConf;

  const words = description.split(' ');
  const displayText = isExpanded ? description : words.slice(0, 80).join(' ') + (words.length > 80 ? '...' : '');

  return (
    <div className={`flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg w-[1440px] font-inter ${className}`} {...props}>
      <div className='text-primary-colour font-bold text-2xl mb-4'>
        {title}
      </div>
      <div className='text-justify'>
        <p className='w-[800px] h-auto'>{displayText}</p>
        <div className='w-full flex justify-start mt-4'>
          <button
            onClick={toggleReadMore}
            className="cursor-pointer py-2 px-6 bg-primary-colour rounded-md flex items-center justify-center whitespace-nowrap border-[1px] border-solid border-primary-colour"
          >
            <span className="text-xl font-medium text-white">
              {isExpanded ? "Read Less" : "Read More"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDevConf;
