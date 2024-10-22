import React from 'react';

export const TextArea = ({ label, name, register, errors, style, className, placeholder }) => {
  const words = label?.split(' ');
  let firstLine, secondLine;

  if (words?.length === 1) {
    // If there's only one word, add a colon after it
    firstLine = `${words[0]}:`;
    secondLine = '';
  } else {
    // Add a colon after the second word if both words are present
    firstLine = `${words?.slice(0, 2)?.join(' ')}`;
    secondLine = `${words?.slice(2)?.join(' ')}:`; // Remaining words
  }

  return (
    <div className="flex mb-4">
      {label && (
        <label className="block w-40">
          <div>{firstLine}</div>  {/* First one or two words with colon */}
          {secondLine && <div>{secondLine}</div>}  {/* Remaining words on a new line */}
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
};
