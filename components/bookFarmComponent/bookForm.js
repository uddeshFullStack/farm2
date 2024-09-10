import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/inputField";
import { useRouter } from "next/router";
import { upsertBookFarm } from "../../utils/supabaseQuery/BookFarmQuery";
import CommonThankYouDialog from "../../components/CommonThankYouDialog";
import { countries, indiaStates } from "../../constant/bookformData";

const BookForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [openThankYou, setOpenThankYou] = useState(false);

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
    <div className="p-4 mt-10 " style={{ width: "95vw" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1  md:grid-cols-2 "
        noValidate
      >
        {/* Left Grid - Fields up to Image Upload */}
        <div className="grid grid-cols-1 gap-4">
          <InputField
            label="Name"
            name="name"
            register={register}
            required
            errors={errors}
            classNameTop="grid grid-cols-1 gap-2"
            style={{ width: "80%" }}
          />
          <InputField
            label="Phone No"
            name="phoneNo"
            register={register}
            required
            errors={errors}
            type="number"
            classNameTop="grid grid-cols-1 gap-2"
            style={{ width: "80%" }}
          />
          <InputField
            label="State"
            name="state"
            register={register}
            errors={errors}
            classNameTop="grid grid-cols-1 gap-2"
            style={{ width: "84%", height: "45px" }}
            type="select"
            options={indiaStates}
            placeholder="Choose a state"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <InputField
              label="Arrival Date"
              name="arrivalDate"
              register={register}
              style={{ width: "80%" }}
              errors={errors}
              type="date"
              classNameTop="grid grid-cols-1 gap-2"
            />
            <InputField
              label="Arrival Time"
              name="arrivalTime"
              register={register}
              errors={errors}
              style={{ width: "80%" }}
              type="time"
              classNameTop="grid grid-cols-1 gap-2"
            />
          </div>
        </div>

        {/* Right Grid - Remaining Fields */}
        <div className="grid grid-cols-1 gap-4">
          {/* <InputField
            type="tel"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}" // Example pattern for 10 digit numbers
            required
            label="WhatsApp No"
            name="whatsappNo"
            register={register}
            errors={errors}
            classNameTop="grid grid-cols-1 gap-2"
            style={{ width: "80%" }}
          /> */}
          <InputField
            label="E-mail"
            name="email"
            register={register}
            errors={errors}
            type="email"
            classNameTop="grid grid-cols-1 gap-2"
            style={{ width: "80%" }}
          />
          <InputField
            label="Country"
            name="country"
            register={register}
            errors={errors}
            classNameTop="grid grid-cols-1 gap-2"
            style={{ width: "84%", height: "45px" }}
            type="select"
            options={countries}
            placeholder="Choose a Country"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <InputField
              label="Departure Date"
              name="departureDate"
              register={register}
              style={{ width: "80%" }}
              errors={errors}
              type="date"
              classNameTop="grid grid-cols-1 gap-2"
            />
            <InputField
              label="Departure Time"
              name="departureTime"
              style={{ width: "80%" }}
              register={register}
              errors={errors}
              type="time"
              classNameTop="grid grid-cols-1 gap-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 mb-4 flex justify-center">
          <button
            type="submit"
            className="bg-secondary-colour text-primary-colour font-semibold py-3 rounded cursor-pointer text-xl md:text-2xl border-none"
            style={{ marginTop: "60px", width: "40vw" }}
          >
            Submit
          </button>
        </div>
      </form>
      {openThankYou && (
        <CommonThankYouDialog
          open={openThankYou}
          onClose={() => setOpenThankYou(false)}
          topMessage={"Thanks for Booking"}
          message={"Need Help? Call & WhatsApp"}
          contact={"+91 415121"}
          onDone={handleDone}
        />
      )}
    </div>
  );
};

export default BookForm;
