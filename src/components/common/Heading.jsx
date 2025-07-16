import React from 'react';

const Heading = ({ className, headText }) => {
    return (
        // <h2 className={` text-[28px] sm:text-4xl  md:text-[40px] lg:text-5xl leading-[120%]  text-center  not-italic font-semibold ${ClassName}`}>
        //     {headText}
        // </h2>
        <h2 className={`font-semibold leading-[135%] ${className}`}>{headText}</h2>

    );
};

export default Heading;
