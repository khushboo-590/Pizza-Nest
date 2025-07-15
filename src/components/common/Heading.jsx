import React from 'react';

const Heading = ({ ClassName, headText }) => {
    return (
        <h2 className={` font-semibold text-5xl leading-[120%]  text-center ${ClassName}`}>
            {headText}
        </h2>
    );
};

export default Heading;
