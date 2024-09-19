import React, { useState, useEffect } from 'react';
import AssociateChannelsMobile from './associateChannelsMobile';
import AssociateChannelsDesktop from './associateChannelsDesktop';


const AssociateChannels = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set to true if the screen width is smaller than 768px (md breakpoint)
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <AssociateChannelsMobile /> : <AssociateChannelsDesktop />}
    </>
  );
};

export default AssociateChannels;
