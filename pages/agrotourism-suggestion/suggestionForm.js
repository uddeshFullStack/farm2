
import icon from '../../public/agroTourismImage2.jpg';
import CommonOtherPageForm from '../../components/commonOtherPageForm';

const AgroSuggestion = () => {
  const inputFields = [
    { name: 'name', type: 'text', placeholder: 'Name', required: true },
    { name: 'phoneNo', type: 'text', placeholder: 'Phone No', required: true },
    { name: 'email', type: 'email', placeholder: 'E-mail' },
    { name: 'comment', type: 'textarea', placeholder: 'Comment' }
  ];

  return (
    <CommonOtherPageForm
      heading="Suggest Me AgroTourism"
      imageUrl={icon}
      inputFields={inputFields}
      buttonText="Submit"
      page={'agrotourism'}
    />
  );
};

export default AgroSuggestion;