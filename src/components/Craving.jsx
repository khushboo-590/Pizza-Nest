import React from 'react'
import Description from './common/Descritpion'
import Heading from './common/Heading'
import CustomButton from './common/CustomButton'

const Craving = () => {
    return (
        <div className=' mt-10 md:mt-[60px] lg:mt-[100px]  bg-black px-4'>
            <div className='max-w-[1440px] py-7 md:py-10 lg:py-20 mx-auto'>
                <div className=' max-w-[772px] flex flex-col mx-auto'>
                    <Heading headText={`Craving something cheesy, spicy, or just straight-up delicious?`} ClassName={`text-white `} />
                    <Description text={`Your next favorite pizza is waiting. Freshly baked, flavor-packed, and delivered hot to your door — every single time.`} ClassName={`text-[#E8E8E8] max-w-[465px] mt-4 mx-auto text-center`} />
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 lg:mt-8 mx-auto">
                        <CustomButton btnText="Order Now" className="bg-gradient" />
                        <CustomButton btnText="View Full Menu" className="backdrop-blur-[30.9px] border border-[#FEFEFE] bg-[#FEFEFE0F]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Craving
