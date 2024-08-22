import { useState } from "react";
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
import ImageSwiper from "../components/swiperSilder/ImageSwiper";

const HomePage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <Layout>
      <section className="self-stretch flex flex-row pt-0 px-0 box-border max-w-full mq450:pb-14 mq450:box-border mq750:pb-[86px] mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <ImageSwiper images={["/Farm1.jpg", "/Farm2.jpg", "/Farm3.jpg"]} />
        </div>
      </section>
      <div
        className="flex flex-wrap items-center justify-center py-[4%] w-full"
        style={{ gap: "3vw" }}
      >
        <CommonBadge
          activity="Location"
          count={100}
          icon={require("../public/badgeIcons/Vector (1).jpg")}
          colour={"#004c35"}
        />
        <CommonBadge
          activity="Farm"
          count={100}
          icon={require("../public/badgeIcons/Vector (3).jpg")}
          colour={"#5a79e6"}
        />
        <CommonBadge
          activity="Booking"
          count={100}
          icon={require("../public/badgeIcons/Event Accepted.jpg")}
          colour={"#A0522D"}
        />
        <CommonBadge
          activity="Events Covered"
          count={100}
          icon={require("../public/badgeIcons/Stage.jpg")}
          colour={"#50fb95"}
        />
        <CommonBadge
          activity="Tourist"
          count={100}
          icon={require("../public/badgeIcons/Traveler.jpg")}
          colour={"#fbc800"}
        />
      </div>
      <HomeFarmList />
      <section className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-[65px] pb-[114px] box-border max-w-full mq750:pl-8 mq750:pr-8 mq750:pb-[31px] mq750:box-border mq1100:pb-12 mq1100:box-border mq1275:pb-[74px] mq1275:box-border">
        <div className="flex flex-wrap items-start justify-start gap-[80px]">
          <h2 className="m-0 relative font-bold text-7xl inline-block max-w-full mq450:text-3xl font-inter text-primary-colour">
            Why Choose Saran Farm
          </h2>
          {componentsData.map((data, index) =>
            index % 2 === 0 ? (
              <HomePageFrameLeftComponent
                key={index}
                data={data}
                isExpanded={expandedIndex === index}
                onExpand={() => handleExpand(index)}
              />
            ) : (
              <HomePageFrameRightComponent
                key={index}
                data={data}
                isExpanded={expandedIndex === index}
                onExpand={() => handleExpand(index)}
              />
            )
          )}
        </div>
      </section>

      <div className="flex flex-col bg-backgroundColor-custom-green p-10 w-full">
        <div className="w-2/3 sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 h-auto font-inter font-bold text-primary-colour text-justify responsive-text">
          Discover What Our Users Say About Saran Farm: Hear Their Remarkable
          Experiences and Success Stories
        </div>

        <div className="flex flex-wrap  gap-10 pt-5">
          <GroupComponent1
            propAlignSelf="unset"
            propWidth="295px"
            groupData={groupData[0]}
          />
          <GroupComponent1
            propAlignSelf="unset"
            propWidth="295px"
            groupData={groupData[1]}
          />
          <GroupComponent1
            propAlignSelf="unset"
            propWidth="295px"
            groupData={groupData[2]}
          />
        </div>
      </div>
      <TouristGlances />
    </Layout>
  );
};

export default HomePage;
