import React from 'react'
import CommonOtherPageForm from '../../components/commonOtherPageForm';


const GetTouchWith = () => {
    const inputFields = [
        { name: 'name', type: 'text', placeholder: 'Name', required: true },
        { name: 'phoneNo', type: 'number', placeholder: 'Phone No', required: true },
        { name: 'email', type: 'email', placeholder: 'E-mail' },
        { name: 'comment', type: 'textarea', placeholder: 'Comment' }
      ];
    
  return (
    <div className='flex flex-col justify-start items-start md:justify-center md:items-center m-10'>
        <div className='font-bold text-primary-colour text-7xl pt-16'>
            Get in Touch With Us!
        </div>
        <p className='text-justify w-auto text-[18px] '>
        We would love to hear from you! For inquiries, bookings, or more information, please reach out to us through our contact form, email, or phone number provided on our website. Follow us on social media to stay updated on the latest news, events, and farm experiences at Saran.farm.
        </p>
        <p className='text-justify  w-auto text-[20px]'>
        Come, explore, and discover the beauty of agriculture at Saran.farm – where nature, culture, and farming intertwine to create unforgettable memories.
        </p>
        <div  className='md:w-[700px] lg:w-[950px]'>
            <CommonOtherPageForm
            inputFields={inputFields}
            buttonText="Submit"
            page='aboutus'
            />
        </div>
    </div>
  )
}

export default GetTouchWith