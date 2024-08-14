
import image from '../../public/Vector.jpg'
import CommonApplyBook from "../../components/CommonApplyBook"
import Layout from '../layout';
const ContactUs = () => {
  return (
    <Layout>
      <div className="font-inter">
        <CommonApplyBook imageUrl={image} message={'our executive will contact'} contact={'you shortly'} topMessage={'Thanks for Contacting Us'}/>  
      </div>
    </Layout>
  )
}
export default ContactUs;