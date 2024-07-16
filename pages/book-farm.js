// import Main from "../components/main";
// import MainContent from "../components/main-content";
// import GroupComponent4 from "../components/group-component4";

// const BookFarm = () => {
//   return (
//     <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[65px] mix-blend-normal tracking-[normal] leading-[normal] mq750:gap-[32px] mq450:gap-[16px]">
//       <Main />
//       <MainContent />
//       <GroupComponent4 />
//     </div>
//   );
// };

// export default BookFarm;
// import Main from "../../components/main";

// import GroupComponent4 from "../../components/group-component4";
import MainContent from "../components/main-content";
import Layout from "./layout";
const BookFarm = () => {
  return (
    <Layout>
      {/* <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[65px] mix-blend-normal tracking-[normal] leading-[normal] mq750:gap-[32px] mq450:gap-[16px]">
        <Main /> */}
        <MainContent />
        {/* <GroupComponent4 /> */}
      {/* </div> */}
    </Layout>
  );
};

export default BookFarm;
