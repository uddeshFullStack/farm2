

import Layout from "../layout";
import BookForm from "./bookForm";

const BookFarm = () => {
  return (
    <Layout>
      <div className="font-inter mt-12 flex flex-col justify-center items-center md:justify-start md:items-start md:ml-4 lg:ml-14">
        <div className="font-semibold text-primary-colour text-md" style={{width:'95vw'}}>
            <span className="text-xl font-extrabold">Book Farm -</span> 
            Radheshyam Agro Tourism And Farm
        </div>
          <BookForm/>
      </div>
    </Layout>
  );
};

export default BookFarm;