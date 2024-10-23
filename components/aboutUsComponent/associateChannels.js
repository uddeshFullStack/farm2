import React from 'react';
import AssociateChannelsDesktop from './associateChannelsDesktop';
import AssociateChannelsMobile from './associateChannelsMobile';

const AssociateChannels = () => {
  return (
    <div>
      {/* Show the desktop component on large screens (lg and above) */}
      <div className="hidden lg:block">
        <AssociateChannelsDesktop/>
      </div>
      
      {/* Show the mobile component on smaller screens */}
      <div className="block lg:hidden">
        <AssociateChannelsMobile />
      </div>
    </div>
  );
};

export default AssociateChannels;
