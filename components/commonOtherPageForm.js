import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Image from 'next/image';
import InputField from './InputField';
import { TextArea } from './TextArea';
import { useRouter } from 'next/router';
import { upsertAboutUs } from '../utils/supabaseQuery/AboutUsQuery';
import { upsertContactUs } from '../utils/supabaseQuery/ContactUsQuery';
import { upsertAgrotourismSuggestion } from '../utils/supabaseQuery/AgrotourismQuery';
import CommonThankYouDialog from '../components/CommonThankYouDialog';
import PhoneNumberInput from './phoneNumberInput';


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
    <div className="max-w-full p-4 my-10 font-inter shadow-slate-500 shadow-sm box-border rounded-md" style={{ marginLeft: '200px' }}>
      <div className="text-center mb-10">
        {heading && (
          <h1 className="text-primary-colour font-bold" style={{ fontSize: '35px' }}>
            {heading}
          </h1>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col">
          <div className="flex-grow">
            <div className={`grid ${imageUrl ? 'grid-cols-2' : 'grid-cols-1'} gap-8 mx-20`}>
              {imageUrl && (
                <div>
                  <Image
                    src={imageUrl}
                    alt="icon"
                    style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className={`flex flex-col space-y-4 ${!imageUrl ? 'mx-auto w-full max-w-2xl' : ''}`}>
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
              className="w-2/5 text-primary-colour bg-secondary-colour font-semibold py-3 rounded cursor-pointer text-2xl border-none"
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
          message={'our executive will contact you shortly'}
          onDone={handleDone}
        />
      )}
    </div>
  );
};

export default CommonOtherPageForm;
