import React from 'react';

const Description = ({ className, text }) => {
  return (
    <p className={`text-base font-nunito leading-[160%] ${className}`}>
      {text}
    </p>
  );
};

export default Description;
