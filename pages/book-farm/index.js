import { useRouter } from "next/router";
import Layout from "../layout";
import BookForm from "../../components/bookFarmComponent/bookForm";


const BookFarm = () => {
  const router = useRouter();
  const { farmName } = router.query;

  const handleSelectFarm = () => {
    router.push("/listed-farm"); // Route to the farm list page
  };

  return (
    <Layout>
      <div className="font-inter mt-12 flex flex-col justify-center items-center md:justify-start md:items-start md:ml-4 lg:ml-14">
        <div className="flex items-center font-semibold text-primary-colour text-md" style={{ width: "95vw" }}>
          <span className="text-xl font-extrabold text-primary-colour">Book Farm- </span>
          {farmName ? (
            <span>{farmName}</span>
          ) : (
            <button
              className="text-primary-colour  font-semibold ml-1 py-3 rounded cursor-pointer border-none w-[100px] lg:w-[120px] text-[14px]"
              onClick={()=>handleSelectFarm()}
            >
              Select Farm
            </button>
          )}
        </div>
        <BookForm />
      </div>
    </Layout>
  );
};

export default BookFarm;
