import React from 'react';

const Minutes = () => {
  const options = Array.from({ length: 60 }, (_, i) => i); // Create an array from 0 to 59

  return (
    <>
      {options.map((minute,index) => (
        <option key={index} value={minute < 10 ? `0${minute}` : `${minute}`}>
          {minute < 10 ? `0${minute}` : `${minute}`}
        </option>
      ))}
      </>
  );
};

export default Minutes;
