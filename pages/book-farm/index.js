

import Layout from "../layout";
import BookForm from "./bookForm";

const BookFarm = () => {
  return (
    <Layout>
      <div className="font-inter mt-12">
        <div className="font-semibold text-primary-colour text-md" style={{marginLeft:'95px'}}>
            <span className="text-xl font-extrabold">Book Farm -</span> Radheshyam Agro Tourism And Farm
        </div>
        <div>
          <BookForm/>
        </div>
      </div>
    </Layout>
  );
};

export default BookFarm;