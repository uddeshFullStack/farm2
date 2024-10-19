import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { upsertBreakEvenData } from "../../utils/supabaseQuery/FarmQuery";
import { useRouter } from "next/router";
import CommonThankYouDialog from "../CommonThankYouDialog";
import InputField from "../inputField";
import { TextArea } from "../textArea";
import ImageUpload from "./ImageUpload";
import { stateDistricts } from "../../constant/stateDistrict";

const FarmForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [openThankYou, setOpenThankYou] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]); // State to store uploaded images
  const [isUploadComplete, setIsUploadComplete] = useState(false); // State to track if upload is complete
  const [selectedState, setSelectedState] = useState(""); // State to track selected state
  const [districtOptions, setDistrictOptions] = useState([]); // State to store district options

  const onImagesUpload = (images) => {
    setUploadedImages(images); // Store uploaded images
    setIsUploadComplete(true); // Set upload complete to true
  };

  const onSubmit = async (data) => {
    if (!isUploadComplete) {
      return; // Prevent submission if images are not uploaded
    }

    // Combine form data with uploaded images
    const dataWithImages = {
      ...data,
      imageDescription: JSON.stringify(uploadedImages), // Convert array to JSON string
    };

    const response = await upsertBreakEvenData(dataWithImages);
    if (!response.error) setOpenThankYou(true);
  };

  const handleDone = () => {
    router.push(`/listed-farm`);
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    const updatedDistrictOptions = stateDistricts[state] || [];
    setDistrictOptions(updatedDistrictOptions);
  };

  return (
    <div className="w-screen pr-2 pt-8 bg-backgroundColor-custom-green">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-14 mx-4 md:mx-20"
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
            style={{height:"35px"}}
            label="State"
            name="state"
            register={register}
            required
            errors={errors}
            type="select"
            options={Object.keys(stateDistricts).map((state) => ({
              value: state,
              label: state,
            }))}
            placeholder="Select a state"
            onChange={handleStateChange} // Pass the onChange event here
          />
          <InputField
            style={{height:"35px"}}
            label="District"
            name="district"
            register={register}
            required
            errors={errors}
            type="select"
            options={districtOptions.map((district) => ({
              value: district,
              label: district,
            }))}
            placeholder="Select a district"
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
          <ImageUpload onImagesUpload={onImagesUpload} />
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
            className={`w-full md:w-1/4 bg-secondary-colour ${!isUploadComplete ?'cursor-not-allowed':''} text-primary-colour font-semibold py-3 rounded text-lg md:text-2xl border-none cursor-pointer`}
            disabled={!isUploadComplete} // Disable if upload is not complete
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
