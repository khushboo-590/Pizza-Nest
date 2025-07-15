import React from 'react';

const Description = ({ ClassName, text }) => {
  return (
    <p className={`font-nunito  text-base leading-[160%]  ${ClassName}`}>
      {text}
    </p>
  );
};

export default Description;
