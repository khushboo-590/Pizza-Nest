import React from 'react';

const Description = ({ className, text }) => {
  return (
    <p className={`font-nunito font-normal text-base leading-160 tracking-normal ${className}`}>
      {text}
    </p>
  );
};

export default Description;
