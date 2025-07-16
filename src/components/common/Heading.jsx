import React from 'react';

const Heading = ({ className, headText }) => {
    return (
        <h2 className={`font-semibold leading-[135%] ${className}`}>{headText}</h2>
    );
};
export default Heading;
