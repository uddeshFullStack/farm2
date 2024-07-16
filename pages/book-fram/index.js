import Main from "../../components/main";
import MainContent from "../../components/main-content";
import GroupComponent4 from "../../components/group-component4";
import Layout from "../layout";
import Testing from "../testing";

const BookFarm = () => {
  return (
    <Layout>
      <Testing/>
      {/* <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[65px] mix-blend-normal tracking-[normal] leading-[normal] mq750:gap-[32px] mq450:gap-[16px]">
        <Main /> */}
        <MainContent />
        {/* <GroupComponent4 /> */}
      {/* </div> */}
    </Layout>
  );
};

export default BookFarm;