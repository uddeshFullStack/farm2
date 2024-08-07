import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../components/inputField';
import { indiaStates ,countries,amPmOptions } from './constant';
import { useRouter } from 'next/router';
import { upsertBookFarm } from '../../utils/supabaseQuery/BookFarmQuery';
import CommonThankYouDialog from '../../components/CommonThankYouDialog';


const BookForm = () => {
  const router = useRouter();
  // const submitUrl =`thanks-booking`
  const { register, handleSubmit, formState: { errors }, reset  } = useForm();
  const [openThankYou, setOpenThankYou] = useState(false);
  const classNameTop='grid grid-col-2 gap-2'
  const onSubmit = async (data) => {
    const response = await upsertBookFarm(data);
    if (!response.error) setOpenThankYou(true);
    console.log(data);
  };
  const handleDone = () => {
    setOpenThankYou(false);
    reset(); 
    router.push(`/book-farm`);
  };

  return (
    <div className="max-w-full p-4 mt-10" style={{width:'1500px', height:'500px'}}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 mx-20" noValidate>
        {/* Left Grid - Fields up to Image Upload */}
        <div className="grid grid-cols-1 gap-4 mr-10">
          <InputField label="Name" name="name" register={register} required errors={errors} classNameTop={classNameTop} style={{width:'600px'}} />
          <InputField label="Phone No" name="phoneNo" register={register} required errors={errors} type="number" classNameTop={classNameTop} style={{width:'600px'}} />
          <InputField label="State" name="state" register={register} errors={errors} classNameTop={classNameTop} style={{width:'620px', height:'45px'}} type="select" options={indiaStates} placeholder="Choose a state"/>
          <div className="flex flex-row  gap-11">
            <InputField label="Arrival Date" name="arrivalDate" register={register}  errors={errors} type="date" classNameTop={classNameTop} />
            <InputField label="Arrival Time" name="arrivalTime" register={register}  errors={errors} type="time" classNameTop={classNameTop} />
          </div>  
        </div>

        {/* Right Grid - Remaining Fields */}
        <div className="grid grid-cols-1 gap-4 ml-10">
          <InputField label="WhatsApp No" name="whatsappNo" register={register} errors={errors} type="number" classNameTop={classNameTop} style={{width:'600px'}}/>
          <InputField label="E-mail" name="email" register={register} errors={errors} type="email" classNameTop={classNameTop} style={{width:'600px'}}/>
          <InputField label="Counrty" name="country" register={register} errors={errors} classNameTop={classNameTop} style={{width:'620px', height:'45px'}} type="select" options={countries} placeholder="Choose a Country"/>
          <div className="flex flex-row gap-11">
            <InputField label="Departure Date" name="departureDate" register={register}  errors={errors} type="date" classNameTop={classNameTop} classNameLabel={'block w-45'}/>
            <InputField label="Departure Time" name="departureTime" register={register}  errors={errors} type="time" classNameTop={classNameTop} />           
          </div> 
        </div>

        {/* Submit Button */}
        <div className="col-span-2 mb-4 flex justify-center">
          <button
            type="submit"
            className="w-1/4 bg-secondary-colour text-primary-colour font-semibold py-3 rounded cursor-pointer text-2xl border-none "style={{marginTop:"60px"}}

          >
            Submit
          </button>
        </div>
      </form>
      {openThankYou && (
        <CommonThankYouDialog
          open={openThankYou}
          onClose={() => setOpenThankYou(false)}
          topMessage={'Thanks for Booking'}
          message={'Need Help? Call & WhatsApp'}
          contact={"+91 415121"}
          onDone={handleDone}
        />
      )}
    </div>
  );
};

export default BookForm;

