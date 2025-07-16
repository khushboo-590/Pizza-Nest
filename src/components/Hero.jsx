

// import React from 'react';
// import CustomButton from './common/CustomButton';
// import heroBg from '../assets/images/png/hero-bg-img.png';

// const Hero = () => {
//     return (
//         <div
//             className="bg-no-repeat bg-cover bg-center max-w-[1360px] mx-auto bg-black rounded-[24px] px-4 md:px-[60px] lg:px-[110px]"
//             style={{ backgroundImage: `url(${heroBg})` }}
//         >
//             <div className="pt-[80px] md:pt-[100px] lg:pt-[131px] pb-[100px] md:pb-[150px] lg:pb-[192px] max-w-full md:max-w-[644px]">
//                 <div className="flex flex-col">
//                     <h1 className="text-[64px]  leading-[120%] font-bold text-white font-nunito-sans">
//                         Where Every Slice Feels Like Home
//                     </h1>

//                     <p className="text-base leading-[160%] mt-4 text-white font-nunito max-w-full sm:max-w-[520px] lg:max-w-[558px]">
//                         At Pizza Nest, we bake more than pizza — we bake comfort. Customize<br />
//                         your perfect slice, or choose from our signature favorites.
//                     </p>

//                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
//                         <CustomButton btnText="Order Now" className="bg-gradient" />
//                         <CustomButton btnText="View Full Menu" className="backdrop-blur-[30.9px] border border-[#FEFEFE] bg-[#FEFEFE0F]" />
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-4 mt-8 text-white max-w-full sm:max-w-[331px] justify-center items-center">
//                         <div className="flex flex-col max-w-[155px] text-center">
//                             <p className="text-[28px] font-semibold leading-[120%]">5,000+</p>
//                             <p className="text-base leading-[120%] font-semibold text-dark-gray">Pizzas Delivered</p>
//                         </div>
//                         <div className="w-[1px] h-[50px] bg-[#D5D5D5] hidden sm:block"></div>
//                         <div className="flex flex-col max-w-[155px] text-center">
//                             <p className="text-[28px] font-semibold leading-[120%]">1,200+</p>
//                             <p className="text-base leading-[120%] font-semibold text-dark-gray">Happy Customers</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

import React from 'react'
import starImg from '../assets/images/png/star-img.png'
import { ArrowLine } from '../utils/icon'
import CustomButton from './common/CustomButton'
import Description from './common/Descritpion'
import Heading from './common/Heading'

const Hero = () => {
    return (
        <div className='max-w-[1440px] bg-off-white sm:px-10 px-5 w-full mx-auto'>
            <div className="bg-[url(src/assets/images/png/hero-bg-img.png)] relative bg-no-repeat bg-center bg-cover flex flex-col items-center w-full md:min-h-[710px] rounded-3xl  px-5">
                <div className="max-w-[593px] w-full md:absolute mt-[127px] xl:left-[110px] left-[75px] mb-[188px]">
                    <Heading className="font-bold !leading-[120%] font-nunitosans text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] text-white"
                        headText="Where Every Slice Feels Like Home"/>
                    <Description className={'text-off-white mt-4 mb-8 max-w-[540px] w-full'} text="At Pizza Nest, we bake more than pizza — we bake comfort. Customize
                        your perfect slice, or choose from our signature favorites"/>
                    <div className="flex flex-col sm:flex-row gap-6 mb-6">
                        <CustomButton btnText="Order Now"/>
                        <CustomButton className={'!bg-none btn-blur-opacity-1 border border-white'} btnText ="View Full Menu"/>
                    </div>
                    <div className="flex flex-col gap-y-2 sm:flex-row items-center">
                        <div className="max-w-[155px] w-full">
                            <h4 className='font-nunito mb-[2px] font-semibold text-2xl text-white w-full text-center leading-[34px]' >5,000+</h4>
                            <p className='font-semibold font-nunito text-base text-center text-lighter-gray leading-[120%] w-full'> Pizzas Delivered</p>
                        </div>
                        <div className="border border-[#D5D5D5] sm:h-[39px] max-sm:w-full"></div>
                        <div className="max-w-[155px] w-full">
                            <h4 className='font-nunito mb-[2px] font-semibold text-2xl text-white w-full text-center leading-[34px]'>98%</h4>
                            <p className='font-semibold font-nunito text-base text-center text-lighter-gray leading-[120%] w-full'> Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="absolute xl:top-[173px] top-[80px] xl:left-[684px] left-[600px] lg:flex hidden">
                    <ArrowLine />
                </div>
                <div className="absolute xl:top-[138px] max-w-max lg:top-[180px] bottom-10 xl:left-[963px] lg:left-[800px] sm:right-10 max-sm:left-1/2 transform max-sm:-translate-x-1/2">
                    <div className="size-[114px] relative p-3">
                        <img className='absolute top-0 animate-spin [animation-duration:5s] hidden lg:block  left-0 w-full h-full z-10' src={starImg} alt="star" />
                        {/* <div className="rounded-full flex justify-center border-3 border-white/80 items-center w-full h-full relative z-20">
                            <span className='leading-[120%] text-[25px] font-semibold font-nunito text-white'>₹ 299</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
