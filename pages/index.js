import React, { useState } from "react";
import { groupData } from "../components/GroupData";
import TouristGlances from "../components/tourist-glances";
import Layout from "./layout";
import HomeFarmList from "../components/homeFarmList";
import CommonBadge from "../components/commonBadge";
import Image from "next/image";
import HomePageFrameRightComponent from "../components/HomePageFrameRightComponent";
import HomePageFrameLeftComponent from "../components/HomePageFrameLeftComponent";
import { componentsData } from "./constants";
import GroupComponent1 from "../components/group-component1";

const HomePage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <Layout>
      <section className="self-stretch flex flex-row pt-0 px-0 box-border max-w-full  mq450:box-border  mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <Image
            className="h-[628px] flex-1 relative max-w-full overflow-hidden object-cover"
            alt=""
            src="/form@2x.png"
            width={1000}
            height={628} 
          />
          <Image
            className="h-9 w-[207px] absolute !m-[0] right-[591px] bottom-[22px] z-[1]"
            loading="lazy"
            alt=""
            src="/group-4.svg"
            width={207}
            height={36}
          />
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-center py-[3%] lg:py-[4%] w-full" style={{ gap: '3vw' }}>
        <CommonBadge activity="Location" count={100} icon={require('../public/badgeIcons/Vector (1).jpg')} colour={"#004c35"} />
        <CommonBadge activity="Farm" count={100} icon={require('../public/badgeIcons/Vector (3).jpg')} colour={"#5a79e6"} />
        <CommonBadge activity="Booking" count={100} icon={require('../public/badgeIcons/Event Accepted.jpg')} colour={"#A0522D"} />
        <CommonBadge activity="Events" count={100} icon={require('../public/badgeIcons/Stage.jpg')} colour={"#50fb95"} />
        <CommonBadge activity="Tourist" count={100} icon={require('../public/badgeIcons/Traveler.jpg')} colour={"#fbc800"} />
      </div>
      <HomeFarmList />
      <section className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-[65px] pb-[114px] box-border max-w-full mq750:pl-8 mq750:pr-8 mq750:pb-[31px] mq750:box-border mq1100:pb-12 mq1100:box-border mq1275:pb-[74px] mq1275:box-border">
  <div className=" mt-16">
    <h2 className="relative font-bold text-7xl inline-block max-w-full mq450:text-3xl font-inter text-primary-colour ">
      Why Choose Saran Farm
    </h2>
    <div className="flex flex-wrap items-start justify-start gap-[80px]">
  {componentsData.map((data, index) => (
    <React.Fragment key={index}>
      {/* For large screens (min-width: 1024px), alternate between left and right components */}
      <div className="hidden lg:block">
        {index % 2 === 0 ? (
          <HomePageFrameLeftComponent
            data={data}
            isExpanded={expandedIndex === index}
            onExpand={() => handleExpand(index)}
          />
        ) : (
          <HomePageFrameRightComponent
            data={data}
            isExpanded={expandedIndex === index}
            onExpand={() => handleExpand(index)}
          />
        )}
      </div>

      {/* For small screens (max-width: 1023px), use only the left component */}
      <div className="lg:hidden">
        <HomePageFrameLeftComponent
          data={data}
          isExpanded={expandedIndex === index}
          onExpand={() => handleExpand(index)}
        />
      </div>
    </React.Fragment>
  ))}
</div>
  </div>
</section>

      <div className="flex flex-col bg-backgroundColor-custom-green p-10 w-full">
      <div className="w-2/3 sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 h-auto font-inter font-bold text-primary-colour text-justify responsive-text">
          Discover What Our Users Say About Saran Farm: Hear Their Remarkable Experiences and Success Stories
        </div>

        <div className="flex flex-wrap  gap-10 pt-5">
          <GroupComponent1 propAlignSelf="unset" propWidth="295px" groupData={groupData[0]} />
          <GroupComponent1 propAlignSelf="unset" propWidth="295px" groupData={groupData[1]} />
          <GroupComponent1 propAlignSelf="unset" propWidth="295px" groupData={groupData[2]} />   
        </div>
        
      </div>
      <TouristGlances />
    </Layout>
  );
};

export default HomePage;
