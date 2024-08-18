import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { upsertBreakEvenData } from "../../utils/supabaseQuery/FarmQuery";
import { useRouter } from "next/router";
import CommonThankYouDialog from "../CommonThankYouDialog";
import InputField from "../inputField";
import { TextArea } from "../textArea";

const FarmForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [openThankYou, setOpenThankYou] = useState(false);

  const onSubmit = async (data) => {
    const response = await upsertBreakEvenData(data);
    if (!response.error) setOpenThankYou(true);
  };

  const handleDone = () => {
    router.push(`/listed-farm`);
  };

  return (
    <div className="w-screen pr-2 pt-8 bg-backgroundColor-custom-green">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-20"
        noValidate
      >
        {/* Left Grid - Fields up to Image Upload */}
        <div className="grid grid-cols-1 gap-4">
          <InputField
            label="Farm Name"
            name="farmName"
            register={register}
            required
            errors={errors}
          />
          <InputField
            label="Address"
            name="address"
            register={register}
            required
            errors={errors}
          />
          <InputField
            label="Near City"
            name="nearCity"
            register={register}
            required
            errors={errors}
          />
          <InputField
            label="District"
            name="district"
            register={register}
            required
            errors={errors}
          />
          <InputField
            label="Phone No"
            name="phoneNo"
            register={register}
            required
            errors={errors}
            type="number"
          />
          <InputField
            label="WhatsApp No"
            name="whatsappNo"
            register={register}
            required
            errors={errors}
            type="number"
          />
          <InputField
            label="E-mail"
            name="email"
            register={register}
            errors={errors}
            type="email"
          />
          <InputField
            label="Farm Area (sqm)"
            name="farmArea"
            register={register}
            errors={errors}
          />
          <InputField
            label="Website"
            name="website"
            register={register}
            errors={errors}
            type="url"
          />
          <InputField
            label="Upload Farm photo (jpg format)"
            name="photo"
            register={register}
            required
            errors={errors}
            type="file"
            accept="image/jpeg"
          />
        </div>

        {/* Right Grid - Remaining Fields */}
        <div className="grid grid-cols-1 gap-4">
          <InputField
            label="Rent/Day/p"
            name="rent"
            register={register}
            errors={errors}
          />
          <InputField
            label="Accommodation"
            name="accommodation"
            register={register}
            errors={errors}
          />
          <TextArea
            label="Activities & Facilities"
            name="activities"
            register={register}
            errors={errors}
          />
          <TextArea
            label="Events & Festival"
            name="events"
            register={register}
            errors={errors}
          />
          <TextArea
            label="Sightseeing"
            name="sightseeing"
            register={register}
            errors={errors}
          />
          <TextArea
            label="Special"
            name="special"
            register={register}
            errors={errors}
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 mb-4 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-1/4 bg-secondary-colour text-primary-colour font-semibold py-3 rounded cursor-pointer text-lg md:text-2xl border-none"
          >
            Submit
          </button>
        </div>
      </form>
      {openThankYou && (
        <CommonThankYouDialog
          open={openThankYou}
          onClose={() => setOpenThankYou(false)}
          topMessage={"Thanks for Registering"}
          message={"Our executive will contact you shortly"}
          onDone={handleDone}
        />
      )}
    </div>
  );
};

export default FarmForm;
