import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { upsertContactUs } from '../utils/supabaseQuery/ContactUsQuery';
import { upsertAgrotourismSuggestion } from '../utils/supabaseQuery/AgrotourismQuery';
import CommonThankYouDialog from '../components/CommonThankYouDialog';
import PhoneNumberInput from './phoneNumberInput';
import { TextArea } from './textArea';
import InputField from './inputField';

const CommonOtherPageForm = ({ heading, imageUrl, inputFields, buttonText, page }) => {
  const [openThankYou, setOpenThankYou] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    let response;
    if (page === 'contactus') {
      response = await upsertContactUs(data);
    } else if (page === 'agrotourism') {
      response = await upsertAgrotourismSuggestion(data);
    }

    if (!response.error) setOpenThankYou(true);
    console.log(data);
  };

  const handleDone = () => {
    setOpenThankYou(false);
    reset();
    if (page === 'contactus') {
      router.push(`/contact-us`);
    } else if (page === 'agrotourism') {
      router.push(`/agrotourism-suggestion`);
    }
  };

  const commonInputClass = "w-full p-3 text-lg border border-inputColor rounded";

  return (
    <div className="p-4 font-inter shadow-slate-500 shadow-sm box-border rounded-md w-screen">
      <div className="text-center mb-10">
        {heading && (
          <h1 className="text-primary-colour font-bold" style={{ fontSize: '35px' }}>
            {heading}
          </h1>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={`flex flex-col justify-center items-center`}>
          <div className="w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center md:gap-5 lg:gap-20">
              {imageUrl && (
                <div>
                  <Image
                    src={imageUrl}
                    alt="icon"
                    style={{ width: '30vw', height: 'auto', maxHeight: '30vw', objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className={`flex flex-col space-y-4 w-full sm:w-2/3 lg:w-1/3`}>
                {inputFields.map((field, index) => (
                  <div key={index}>
                    {field.type === 'textarea' ? (
                      <TextArea
                        name={field.name}
                        register={register}
                        errors={errors}
                        className={`${commonInputClass} h-24`}
                        placeholder={field.placeholder}
                      />
                    ) : field.type === 'number' ? (
                      <PhoneNumberInput
                        label={field.label}
                        name={field.name}
                        errors={errors}
                      />
                    ) : (
                      <InputField
                        name={field.name}
                        register={register}
                        required={field.required}
                        errors={errors}
                        type={field.type}
                        className={`${commonInputClass} py-4`}
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button
              type="submit"
              className="text-primary-colour bg-secondary-colour py-3 rounded cursor-pointer border-none w-[50vw] md:w-[30vw] font-extrabold text-[4vw] md:text-[2vw] lg:text-[1vw]"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </form>
      {openThankYou && (
        <CommonThankYouDialog
          open={openThankYou}
          onClose={() => setOpenThankYou(false)}
          topMessage={'Thanks for Contacting'}
          message={'Our executive will contact you shortly'}
          onDone={handleDone}
        />
      )}
    </div>
  );
};

export default CommonOtherPageForm;
