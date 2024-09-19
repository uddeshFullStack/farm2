import React, { useRef, useState } from "react";
import { groupData } from "../components/GroupData";
import TouristGlances from "../components/tourist-glances";
import Layout from "./layout";
import HomeFarmList from "../components/homeFarmList";
import CommonBadge from "../components/commonBadge";
import ImageSwiper from "../components/swiperSilder/ImageSwiper";
import { useRouter } from "next/router";
import Review from "../components/homeComponent/Review";
import ChooseSaranFarm from "../components/homeComponent/ChooseSaranFarm";
import { componentsData } from "../constant/homePageLowerPartData";

const HomePage = () => {
  const swiperRef = useRef(null); // Ref for Swiper instance
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);

    if (swiperRef.current && swiperRef.current.swiper) {
      if (index === expandedIndex) {
        // Resume autoplay if collapsed
        swiperRef.current.swiper.autoplay.start();
      } else {
        // Stop autoplay if expanded
        swiperRef.current.swiper.autoplay.stop();
      }
    }
  };

  return (
    <Layout>
      <section className="self-stretch flex flex-row pt-0 px-0 box-border max-w-full mq450:box-border mq750:box-border relative">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full font-inter">
          <ImageSwiper images={["/Farm1.jpg", "/Farm2.jpg", "/Farm3.jpg"]} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-[1] lg:hidden m-4">
            <h1 className="text-md sm:text-2xl font-bold mb-1 sm:mb-4 mt-0">
              Discover the Beauty of Our Farms
            </h1>
            <p className="text-sm sm:text-lg mb-2 sm:mb-6 mt-0 px-0 xsm:pl-8">
              Experience authentic farm life and support local communities.
            </p>
            <button
              className="bg-secondary-colour text-primary-colour rounded-full border-none cursor-pointer px-2 xsm:px-5 h-10 font-extrabold"
              onClick={() => router.push("/listed-farm")}
            >
              Explore Farms
            </button>
          </div>
        </div>
      </section>

      <div
        className="flex flex-wrap items-center justify-center py-[3%] lg:py-[4%] w-full"
        style={{ gap: "2vw" }}
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
          activity="Events"
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
      <ChooseSaranFarm
        componentsData={componentsData}
        expandedIndex={expandedIndex}
        handleExpand={handleExpand}
        swiperRef={swiperRef} // Pass swiperRef to ChooseSaranFarm
      />
      <Review groupData={groupData} />
      <TouristGlances />
    </Layout>
  );
};

export default HomePage;
