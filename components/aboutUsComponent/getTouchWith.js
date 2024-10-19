import React from 'react';
import AboutUsContact from '../../components/aboutUsComponent/AboutUsContact';

const GetTouchWith = () => {
  const inputFields = [
    { name: 'name', type: 'text', placeholder: 'Name', required: true },
    { name: 'phoneNo', type: 'text', placeholder: 'Phone No', required: true },
    { name: 'email', type: 'email', placeholder: 'E-mail' },
    { name: 'comment', type: 'textarea', placeholder: 'Comment' }
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='font-bold text-primary-colour text-5xl md:text-7xl pt-16 text-center'>
        Get in Touch With Us!
      </div>
      <div className='w-[90vw] max-w-3xl md:px-0'>
        <p className='text-justify text-lg md:text-xl'>
          We would love to hear from you! For inquiries, bookings or more information, please reach out to us through our contact form, email or phone number provided on our website. Follow us on social media to stay updated on the latest news, events and farm experiences at Saran.farm.
        </p>
        <p className='text-justify text-lg md:text-xl mt-4'>
          Come, explore and discover the beauty of agriculture at Saran.farm – where nature, culture and farming intertwine to create unforgettable memories.
        </p>
      </div>
      <div className="md:w-[700px] lg:w-[950px]">
        <AboutUsContact
          inputFields={inputFields}
          buttonText="Submit"
        />
      </div>
    </div>
  );
}

export default GetTouchWith;
