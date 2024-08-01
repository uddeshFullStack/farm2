import React from 'react';

const InputField = ({ 
  label, 
  name, 
  register, 
  required, 
  type = 'text', 
  errors, 
  accept, 
  style, 
  className, 
  placeholder, 
  classNameTop, 
  classNameLabel, 
  options = [] // New prop for dropdown options
}) => (
  <div className={classNameTop || `flex mb-4`}>
    {label && (
      <label className={classNameLabel || "block w-40"}>
        {label}{required && <span className="text-red-500">*</span>}:
      </label>
    )}
    {type === 'select' ? (
      <select
        {...register(name, { required })}
        className={className || "flex-1 p-2 border border-inputColor rounded h-6 w-40"}
        style={style || { boxShadow: 'inset 0 1px 12px rgba(0, 0, 0, 0.1)' }}
      >
        <option value="">{placeholder || 'Select an option'}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        {...register(name, { required })}
        className={className || "flex-1 p-2 border border-inputColor rounded h-6 w-40"}
        style={type === 'file' ? { boxShadow: 'none', ...style } : (style || { boxShadow: 'inset 0 1px 12px rgba(0, 0, 0, 0.1)' })}
        accept={accept}
        placeholder={placeholder ? `${placeholder}` : ''}
      />
    )}
    {errors[name] && <span className="text-red-500">This field is required</span>}
  </div>
);

export default InputField;
