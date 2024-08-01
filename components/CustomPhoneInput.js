import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const CustomPhoneInput = React.forwardRef((props) => (
  <div className="w-full mb-3">
    <PhoneInput
      {...props}
      inputComponent={({ ref, ...inputProps }) => (
        <input
          ref={ref}
          {...inputProps}
          className="w-full h-7 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    />
  </div>
));

export default CustomPhoneInput;
