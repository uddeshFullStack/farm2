import React from 'react';
import Layout from '../layout';
import AboutUpComing from '../../components/eventsComponent/aboutUpComing';
import RecentEvents from '../../components/eventsComponent/recentEvents';
import AboutDevConf from '../../components/eventsComponent/aboutDevConf';
import EventsTop from './eventsTop';
import NextEvent from '../../components/eventsComponent/nextEvent';
import { devConfData, eventData, nextEventData, recentEventData } from '../../constant/eventsData';


const Events = () => {
  return (
    <Layout>
      <div>
      <EventsTop filePath="../../uddeshFinalResume.pdf" />
      </div>
      <div>
        <NextEvent nextEventData={nextEventData}/>
      </div>
      <div>
        <AboutUpComing data={eventData}/>
      </div>
      <div>
        <RecentEvents  events={recentEventData}/>
      </div>
      <div>
        <AboutDevConf devConf={devConfData}/>
      </div>
    </Layout>
  );
};

export default Events;
