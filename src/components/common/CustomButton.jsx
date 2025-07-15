import React from 'react';

const CustomButton = ({ btnText, className }) => {
    return (
        <button className={`py-4 px-8 text-base leading-[100%] font-semibold font-nunito text-white bg-gradient rounded-[12px] ${className}`}>
            {btnText}
        </button>
    );
};

export default CustomButton;
