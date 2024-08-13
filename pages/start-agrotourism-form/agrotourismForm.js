import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../components/inputField';
import { TextArea } from '../../components/textArea';
import { upsertStartAgrotourism } from '../../utils/supabaseQuery/StartAgrotourism';
import CommonThankYouDialog from '../../components/CommonThankYouDialog';
import { useRouter } from 'next/router';

const AgrotourismForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [openThankYou, setOpenThankYou] = useState(false);
    const commonClassName = 'w-96 p-2 border border-inputColor rounded h-8';

    const onSubmit = async (data) => {
        const response = await upsertStartAgrotourism(data);
        if (!response.error) setOpenThankYou(true);
        console.log(data);
    };

    const handleDone = () => {
        setOpenThankYou(false);
        reset();
        router.push(`/`);
    };

    return (
        <div className="p-2 m-3 sm:m-5 md:m-20">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 mx-4 md:grid-cols-2 "
                noValidate
            >
                {/* Left Grid */}
                <div className="grid grid-cols-1 gap-4">
                    <InputField
                        label="Farm Name"
                        name="farmName"
                        register={register}
                        required
                        errors={errors}
                        classNameTop="grid grid-cols-1 gap-2"
                        style={{ width: '90%' }}
                        
                    />
                    <InputField
                        label="Phone No"
                        name="phoneNo"
                        register={register}
                        required
                        errors={errors}
                        type="number"
                        classNameTop="grid grid-cols-1 gap-2"
                        style={{ width: '90%' }}
                    />
                    <InputField
                        label="Address"
                        name="address"
                        register={register}
                        required
                        errors={errors}
                        classNameTop="grid grid-cols-1 gap-2"
                        style={{ width: '90%' }}
                    />
                    <InputField
                        label="Near City"
                        name="nearCity"
                        register={register}
                        required
                        errors={errors}
                        classNameTop="grid grid-cols-1 gap-2"
                        style={{ width: '90%' }}
                    />
                    <InputField
                        label="District"
                        name="district"
                        register={register}
                        required
                        errors={errors}
                        classNameTop="grid grid-cols-1 gap-2"
                        style={{ width: '90%' }}
                    />
                    <InputField
                        label="E-mail"
                        name="email"
                        register={register}
                        errors={errors}
                        type="email"
                        classNameTop="grid grid-cols-1 gap-2"
                        style={{ width: '90%' }}
                    />
                </div>

                {/* Right Grid */}
                <div className="grid grid-cols-1 gap-4">
                    <p className='text-primary-colour'>What are the resources you have to start AgriTourism center, please Mention- like Manpower, Water, Light, Road, Rooms, Hotels, etc.</p>
                    <div className="p-8 shadow-slate-500 shadow-sm box-border rounded-md grid grid-cols-1 gap-8 md:p-10 lg:p-20">
                        <InputField
                            name="resource1"
                            register={register}
                            errors={errors}
                            className={commonClassName}
                            classNameTop="grid grid-cols-1 gap-2"
                            style={{ width: '90%' }}
                        />
                        <InputField
                            name="resource2"
                            register={register}
                            errors={errors}
                            className={commonClassName}
                            classNameTop="grid grid-cols-1 gap-2"
                            style={{ width: '90%' }}
                        />
                        <InputField
                            name="resource3"
                            register={register}
                            errors={errors}
                            className={commonClassName}
                            classNameTop="grid grid-cols-1 gap-2"
                            style={{ width: '90%' }}
                        />
                        <InputField
                            name="landArea"
                            placeholder="Agriculture Land Area(sqm)*"
                            register={register}
                            required
                            errors={errors}
                            className={commonClassName}
                            type="number"
                            classNameTop="grid grid-cols-1 gap-2"
                            style={{ width: '90%' }}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 mb-4 flex justify-center">
                    <button
                        type="submit"
                        className=" w-screen bg-secondary-colour text-primary-colour font-semibold py-3 rounded cursor-pointer text-xl md:text-2xl border-none"
                        style={{ marginTop: '60px' }}
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
                    message={'Our executive will contact you shortly'}
                    onDone={handleDone}
                />
            )}
        </div>
    );
};

export default AgrotourismForm;
