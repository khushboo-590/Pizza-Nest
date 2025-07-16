import React from 'react';

const Description = ({ ClassName, text }) => {
  return (
    <p className={` text-base leading-[160%] font-nunito  ${ClassName}`}>
      {text}
    </p>
  );
};

export default Description;
