import React from 'react';
import Layout from '../layout';
import AboutUpComing from '../../components/eventsComponent/aboutUpComing';
import RecentEvents from '../../components/eventsComponent/recentEvents';
import AboutDevConf from '../../components/eventsComponent/aboutDevConf';
import EventsTop from './eventsTop';
import NextEvent from '../../components/eventsComponent/nextEvent';
import { devConfData, eventData, nextEventData, reasons, recentEventData } from '../../constant/eventsData';
import SimpleSlider from '../../components/eventsComponent/SimpleSlider';


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
        <AboutUpComing data={eventData}  reasons={reasons}/>
      </div>
      <div>
        {/* <SimpleSlider  events={recentEventData}/> */}
        {/* <EventSwiper events={recentEventData} devConf={devConfData}/> */}
        <RecentEvents  events={recentEventData}/>
      </div>
    </Layout>
  );
};

export default Events;
