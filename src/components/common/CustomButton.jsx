import React from 'react'

const CustomButton = ({ btnText, className, key, onClick }) => {
    return (
        <button key={key} onClick={onClick} className={` px-8 py-4 bg-prime active:scale-90 relative z-10 duration-300 text-base hover:scale-110 font-semibold rounded-xl cursor-pointer text-white !leading-[137%] ${className}`}>
            {btnText}
        </button>
    )
}

export default CustomButton
