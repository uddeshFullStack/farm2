import React, { useState, useCallback } from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import CustomPhoneInput from './CustomPhoneInput';
import 'react-phone-number-input/style.css';

const PhoneNumberInput = ({ label, name, errors }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = useCallback(
    (value) => {
      setValue(value);

      // Validate phone number
      if (value && !isValidPhoneNumber(value)) {
        setError('Invalid phone number');
      } else {
        setError('');
      }
    },
    [setValue, setError]
  );

  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <CustomPhoneInput
        placeholder="Enter Phone Number"
        defaultCountry="IN"
        value={value}
        onChange={handleChange}
      />
      {(errors[name] || error) && (
        <span id={`${name}-error`} className="text-red-500 text-sm">
          {errors[name] || error}
        </span>
      )}
    </div>
  );
};

export default PhoneNumberInput;
