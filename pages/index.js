import FrameComponent7 from "../components/frame-component7";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import WhySaran from "../components/why-saran";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import FrameComponent3 from "../components/frame-component3";
import UserReviews from "../components/user-reviews";
import TouristGlances from "../components/tourist-glances";
import GroupComponent from "../components/group-component";

const HomePage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start mix-blend-normal leading-[normal] tracking-[normal]">
      <FrameComponent7 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[133px] box-border max-w-full mq450:pb-14 mq450:box-border mq750:pb-[86px] mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[628px] flex-1 relative max-w-full overflow-hidden object-cover"
            alt=""
            src="/form@2x.png"
          />
          <img
            className="h-9 w-[207px] absolute !m-[0] right-[591px] bottom-[22px] z-[1]"
            loading="lazy"
            alt=""
            src="/group-4.svg"
          />
        </div>
      </section>
      <FrameComponent5 />
      <FrameComponent4 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[65px] pb-[114px] box-border max-w-full mq750:pl-8 mq750:pr-8 mq750:pb-[31px] mq750:box-border mq1100:pb-12 mq1100:box-border mq1275:pb-[74px] mq1275:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[95px] max-w-full mq450:gap-[24px] mq750:gap-[47px]">
          <WhySaran />
          <FrameComponent2 />
          <FrameComponent1 />
          <FrameComponent />
          <FrameComponent3
            authenticFarmExperiences="Personalized Experiences:"
            handsOnFarmActivities="Tailored Farm Programs:"
            saranfarmOffersAWideRange=" Saran.farm offers customizable farm programs to cater to the unique interests and preferences of visitors. Whether they are interested in animal husbandry, organic gardening, or rural crafts, Saran.farm can curate a personalized experience to meet their specific needs."
            farmEducation="Flexible Duration of Stay:"
            saranfarmProvidesEducatio=" Visitors have the flexibility to choose the duration of their farm stay, ranging from a few days to a few weeks. This allows them to fully immerse themselves in the farm experience and adapt to the rhythm of rural life at their own pace."
            group272="/group-333@2x.png"
          />
        </div>
      </section>
      <UserReviews />
      <TouristGlances />
      <GroupComponent />
    </div>
  );
};

export default HomePage;
