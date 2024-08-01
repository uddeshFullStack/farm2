import React from 'react';
import Layout from '../layout';
import { eventData ,recentEventData, devConfData ,nextEventData } from './contants';
import AboutUpComing from './aboutUpComing';
import RecentEvents from './recentEvents';
import AboutDevConf from './aboutDevConf';
import EventsTop from './eventsTop';
import NextEvent from './nextEvent';


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
