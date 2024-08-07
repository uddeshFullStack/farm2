import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import InputField from '../../components/inputField';
import { TextArea } from '../../components/textArea';
import { upsertStartAgrotourism } from '../../utils/supabaseQuery/StartAgrotourism';
import CommonThankYouDialog from '../../components/CommonThankYouDialog';
import { useRouter } from 'next/router';

const AgrotourismForm = () => 
{
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [openThankYou, setOpenThankYou] = useState(false);
    const commonClassName='w-96 p-2 border border-inputColor rounded h-8'
    const onSubmit = async (data) => {
      const response = await upsertStartAgrotourism(data);
      if (!response.error) setOpenThankYou(true);
      console.log(data);
    };
    const handleDone = () => {
      router.push(`/`);
    };
    return(
   <div className="max-w-full p-4 mt-12 bg-white">
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 mx-20" noValidate>
      <div className="grid grid-cols-1 gap-4 mr-10">
        <InputField label="Farm Name" name="farmName" register={register} required errors={errors} />
        <InputField label="Phone No" name="phoneNo" register={register} required errors={errors} type="number" />
        <InputField label="Address" name="address" register={register} required errors={errors} />
        <InputField label="Near City" name="nearCity" register={register} required errors={errors} />
        <InputField label="District" name="district" register={register} required errors={errors} />
        <InputField label="E-mail" name="email" register={register} errors={errors} type="email" />
      </div>

      {/* Right Grid - Remaining Fields */}
      <div className="grid grid-cols-1 gap-4 ml-10">
        <div className='text-primary-colour'>What are the resources you have to start AgriTourism center, please Mention- like Manpower, Water, Light, Road, Rooms, Hotels, etc.</div>
        <div className="grid grid-cols-1 gap-4 p-20  shadow-slate-500 shadow-sm  box-border  rounded-md">
            <InputField  name="resource1" register={register} errors={errors}  className={commonClassName} />
            <InputField  name="resource2" register={register} errors={errors} className={commonClassName} />
            <InputField  name="resource3" register={register} errors={errors}  className={commonClassName} />
            <InputField  name="landArea" placeholder={`Agriculture Land Area(sqm)*`} register={register} required errors={errors} className={commonClassName} type="number" />
        </div>
      </div>

      {/* Submit Button */}
      <div className="col-span-2 mb-4 flex justify-center">
        <button
          type="submit"
          className="w-1/4 bg-secondary-colour text-primary-colour font-semibold py-3 rounded cursor-pointer text-2xl border-none"
        >
          Submit
        </button>
      </div>
    </form>
    {openThankYou && (
        <CommonThankYouDialog
          open={openThankYou}
          onClose={() => setOpenThankYou(false)}
          topMessage={'Thanks for Agrotourism'}
          message={'our executive will contact you shortly'}
          onDone={handleDone}
        />
      )}
  </div>
  )
}

export default AgrotourismForm;