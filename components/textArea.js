import React from 'react'

export const TextArea = ({ label, name, register, errors, style, className ,placeholder}) => (
    <div className="flex mb-4">
      {label && (
        <label className="block w-40">
          {label}:
        </label>
      )}
      <textarea
        {...register(name)}
        className={className || "flex-1 p-2 border border-inputColor rounded"}
        style={style || { boxShadow: 'inset 0 1px 12px rgba(0, 0, 0, 0.1)' }}
        placeholder={placeholder}
      />
    </div>
);
