
import image from '../../public/Vector.jpg'
import CommonApplyBook from "../../components/CommonApplyBook"
import Layout from '../layout';
const Booking = () => {
  return (
    <Layout>
      <div className="font-inter px-10">
        <CommonApplyBook imageUrl={image} message={'Need Help? Call & WhatsApp'} contact={'+77 2525 9966'} topMessage={'Thanks for Booking'}/>
      </div>
    </Layout>
  )
}
export default Booking;