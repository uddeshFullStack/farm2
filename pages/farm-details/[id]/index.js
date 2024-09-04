import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FarmDetailsComponent from "../../../components/farm-details-component";
import Details from "../../../components/details";
import Layout from "../../layout";
import ReviewCard from "../../../components/farm-detailsComponent/reviewCard";
import { fetchFarmDetailsById } from "../../../utils/supabaseQuery/FarmQuery";


const FarmDetails = () => {
  const router = useRouter();
  const { query } = router;
  const id = query.id;

  const [farmND, setFarmND] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const farmDetails = await fetchFarmDetailsById(id);
          setFarmND(farmDetails);
        } catch (error) {
          console.error("Error fetching farm details:", error);
        }
      };

      fetchData();
    }
  }, [id]);

  if (!farmND) return <div>Loading...</div>; // Optionally, add a loading state

  const farm = farmND;
  const FarmImages = farm.imageDescription ? JSON.parse(farm.imageDescription) : [];

  return (
    <Layout>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[65px] pb-[15px] box-border max-w-full text-left text-5xl text-primary-colour font-inter mq750:pl-8 mq750:pr-8 mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px]">
          <FarmDetailsComponent farmName={farm.farmName} farmImages={FarmImages} />
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-[13px]">
            <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">
              About Farm
            </div>
            <div className="self-stretch relative text-xl text-lite text-justify mq450:text-base">
              {farm.about}
            </div>
          </div>
          <Details
            farmName={farm.farmName}
            address={farm.address}
            state={farm.state}
            district={farm.district}
            farmerName={farm.farmerName}
            special={farm.special}
            accommodation={farm.accommodation}
            activities={farm.activities}
            events={farm.events}
            other={farm.other}
            sightseeing={farm.sightseeing}
            rentPerDay={farm.rentPerDay}
          />
        </div>
      </section>
      <div>
        <ReviewCard
          image={require("../../../public/galleryImages/Rectangle 234.jpg")}
          name={"Jennifer"}
          description="Agro-tourism is a form of tourism that involves visiting & staying in farms or rural areas. It is a way to experience the culture, lifestyle, and environment of the countryside. Agro-tourism can offer various benefits to both visitors and hosts, such as........"
          ratings={{
            overall: 5,
            location: 5,
            quality: 4,
            comfort: 5,
            price: 5,
          }}
          phoneNumber={"53652"}
          email={"gfdsfxcg@gmail.com"}
          phoneImage={require("../../../public/Ringer Volume.png")}
        />
      </div>
    </Layout>
  );
};

export default FarmDetails;
