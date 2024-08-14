import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { upsertAboutUs } from '../utils/supabaseQuery/AboutUsQuery';
import { upsertContactUs } from '../utils/supabaseQuery/ContactUsQuery';
import { upsertAgrotourismSuggestion } from '../utils/supabaseQuery/AgrotourismQuery';
import CommonThankYouDialog from '../components/CommonThankYouDialog';
import PhoneNumberInput from './phoneNumberInput';
import { TextArea } from './textArea';
import InputField from './inputField';

const CommonOtherPageForm = ({ heading, imageUrl, inputFields, buttonText, page }) => {
  const [openThankYou, setOpenThankYou] = useState(false);
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    let response;
    if (page === 'aboutus') {
      response = await upsertAboutUs(data);
    } else if (page === 'contactus') {
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
    if (page === 'aboutus') {
      router.push(`/about-us`);
    } else if (page === 'contactus') {
      router.push(`/contact-us`);
    } else if (page === 'agrotourism') {
      router.push(`/agrotourism-suggestion`);
    }
  };

  const commonInputClass = "w-full p-3 text-lg border border-inputColor rounded";

  return (
    <div className="p-4 font-inter shadow-slate-500 shadow-sm box-border rounded-md" style={{width:'100vw'}}>
      <div className="text-center mb-10">
        {heading && (
          <h1 className="text-primary-colour font-bold" style={{ fontSize: '35px' }}>
            {heading}
          </h1>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full">
            <div className={`flex ${imageUrl ? 'flex-col lg:flex-row' : 'flex-col'} md:gap-5 lg:gap-20 justify-center items-center `}>
              <div>
              {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt="icon"
                    style={{ width: '30vw', height: 'auto', maxHeight: '30vw', objectFit: 'cover' }}
                  />
              )}
              </div>
              <div className={`flex flex-col space-y-4 w-2/3 lg:w-1/3 ${!imageUrl ? 'w-[50%]' : ''}`}>
                {inputFields.map((field, index) => (
                  <div key={index}>
                    {field.type === 'textarea' ? (
                      <TextArea
                        name={field.name}
                        register={register}
                        errors={errors}
                        className={`${commonInputClass} ${!imageUrl ? 'h-24 w-[300px]' : 'h-24'}`}
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
                        className={`${commonInputClass} ${!imageUrl ? 'py-4 w-[300px]' : ''}`}
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="text-primary-colour bg-secondary-colour font-semibold py-3 rounded cursor-pointer border-none" style={{width:'20vw',fontSize:'2vw'}}
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
