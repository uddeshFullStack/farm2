
import FarmDetailsComponent from "../../../components/farm-details-component";
import Details from "../../../components/details";
import Layout from "../../layout";
const FarmDetails = () => {
  return (
    <Layout>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[65px] pb-[15px] box-border max-w-full text-left text-5xl text-primary-colour font-inter mq750:pl-8 mq750:pr-8 mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px]">
          <FarmDetailsComponent />
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-[13px]">
            <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">
              About Farm
            </div>
            <div className="self-stretch relative text-xl text-lite text-justify mq450:text-base">
              Agro-tourism is a form of tourism that involves visiting and
              staying in farms or rural areas. It is a way to experience the
              culture, lifestyle, and environment of the countryside.
              Agro-tourism can offer various benefits to both visitors and
              hosts, such as: Agro-tourism is a form of tourism that involves
              visiting and staying in farms or rural areas. It is a way to
              experience the culture, lifestyle, and environment of the
              countryside. Agro-tourism can offer various benefits to both
              visitors and hosts, such as: Agro-tourism is a form of tourism that
              involves visiting and staying in farms or rural areas. It is a way
              to experience the culture, lifestyle, and environment of the
              countryside. Agro-tourism can offer various benefits to both
              visitors and hosts, such as: Agro-tourism is a form of tourism that
              involves visiting and staying in farms or rural areas. It is a way
              to experience the culture, lifestyle, and environment of the
              countryside. Agro-tourism can offer various benefits to both
              visitors and hosts, such as:
            </div>
          </div>
          <Details />
        </div>
      </section>
    </Layout>
  );
};

export default FarmDetails;
