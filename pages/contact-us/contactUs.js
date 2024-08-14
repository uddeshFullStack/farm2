import icon from '../../public/ContactUsImage.jpg';
import CommonOtherPageForm from '../../components/commonOtherPageForm';

const ContactUs = () => {
  const inputFields = [
    { name: 'name', type: 'text', placeholder: 'Name', required: true },
    { name: 'phoneNo', type: 'number', placeholder: 'Phone No', required: true },
    { name: 'email', type: 'email', placeholder: 'E-mail', required: true },
    { name: 'comment', type: 'textarea', placeholder: 'Comment' }
  ];

  return (
    <CommonOtherPageForm
      heading="Contact Us"
      imageUrl={icon}
      inputFields={inputFields}
      buttonText="Submit"
      page={'contactus'}
    />
  );
};

export default ContactUs;
