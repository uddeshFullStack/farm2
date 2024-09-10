import React from 'react';
import Layout from '../layout';
import AboutUpComing from '../../components/eventsComponent/aboutUpComing';
import RecentEvents from '../../components/eventsComponent/recentEvents';
import EventsTop from '../../components/eventsComponent/eventsTop';
import NextEvent from '../../components/eventsComponent/nextEvent';
import { eventData, nextEventData, reasons, recentEventData } from '../../constant/eventsData';



const Events = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center'>
        <div>
        <EventsTop filePath="../../uddeshFinalResume.pdf" />
        </div>
        <div>
          <NextEvent nextEventData={nextEventData}/>
        </div>
        <div>
          <AboutUpComing data={eventData}  reasons={reasons}/>
        </div>
        <div>
          <RecentEvents  events={recentEventData}/>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
