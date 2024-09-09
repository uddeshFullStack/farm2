import React, { useState } from 'react';

const AboutDevConf = ({ devConf, onSeeMore, onSeeLess, className, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && onSeeMore) {
      onSeeMore(); // Call onSeeMore when 'See More' is clicked
    } else if (isExpanded && onSeeLess) {
      onSeeLess(); // Call onSeeLess when 'Read Less' is clicked
    }
  };

  const { title, description } = devConf;

  const words = description.split(' ');
  const displayText = isExpanded ? description : words.slice(0, 80).join(' ') + (words.length > 80 ? '...' : '');

  return (
    <div 
      className={`flex flex-col items-center justify-center  bg-white rounded-lg mt-5`} 
      {...props}
    >
      <div className='text-primary-colour font-bold text-2xl mb-4 text-center'>
        {title}
      </div>
      <div className='text-justify'>
        <p className='h-auto mx-auto'>{displayText}</p>
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
