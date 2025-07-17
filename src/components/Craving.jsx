import React from 'react'
import Heading from './common/Heading';
import CustomButton from './common/CustomButton';
import Descritpion from './common/Descritpion';

const Craving = () => {
    return (
        <>
            <div className="bg-[url(src/assets/images/png/Craving-bg-img.png)] bg-cover bg-center bg-no-repeat px-5 relative max-w-[1920px] mx-auto">
                <div className=" py-8 sm:py-10 md:py-15 lg:py-20 relative z-1">
                    <Heading className="mx-auto  !leading-[120%] !text-light-white text-[30px] sm:text-4xl md:text-[40px] lg:text-5xl font-semibold text-center max-w-[722px]" headText="Craving something cheesy, spicy, or just straight-up delicious" />
                    <Descritpion className="text-white-gray max-w-[465px] text-center mx-auto pt-4" text="Your next favorite pizza is waiting. Freshly baked, flavor-packed, and delivered hot to your door — every single time." />
                    <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-8 flex-wrap justify-center  ">
                        <CustomButton className="px-[29px] sm:px-[33px] py-3.5" btnText="Order Now" />
                        <CustomButton className="border border-[#FEFEFE] !bg-none px-4.5 sm:px-8 py-3.5 btn-blur-opacity-1" btnText="View Full Menu" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Craving