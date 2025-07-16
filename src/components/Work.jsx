// import React from 'react'
// import Heading from './common/Heading'
// import { HOW_IT_WORKS } from '../utils/helper'
// import arrow from '../assets/images/svg/arrow.svg'
// import CustomButton from './common/CustomButton'

// const Work = () => {
//     return (
//         <div className="max-w-[1140px] px-4 mx-auto">
//             <div className="mt-[100px]">
//                 <div className="flex flex-col items-center">
//                     <div className="w-full flex items-center justify-center gap-2 mb-2">
//                         {/* Left Line */}
//                         <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M60 1H-0.0083313" stroke="url(#leftGradient)" />
//                             <defs>
//                                 <linearGradient id="leftGradient" x1="60" y1="1.76761" x2="55.9905" y2="-15.3725" gradientUnits="userSpaceOnUse">
//                                     <stop stopColor="#EC6112" />
//                                     <stop offset="0.380908" stopColor="#FF902E" />
//                                     <stop offset="0.74047" stopColor="#FEFEFE" stopOpacity="0" />
//                                 </linearGradient>
//                             </defs>
//                         </svg>

//                         <h4 className="text-lg leading-[120%] font-bold text-gradient whitespace-nowrap">How It Works</h4>

//                         {/* Right Line */}
//                         <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M60 1H-0.0083313" stroke="url(#rightGradient)" />
//                             <defs>
//                                 <linearGradient id="rightGradient" x1="60" y1="1.76761" x2="55.9905" y2="-15.3725" gradientUnits="userSpaceOnUse">
//                                     <stop stopColor="#EC6112" />
//                                     <stop offset="0.380908" stopColor="#FF902E" />
//                                     <stop offset="0.74047" stopColor="#FEFEFE" stopOpacity="0" />
//                                 </linearGradient>
//                             </defs>
//                         </svg>
//                     </div>

//                     <div className="max-w-[588px] mx-auto mb-[40px]">
//                         <Heading headText="Your Perfect Pizza in Just 3 Easy Steps!" className="mt-2 text-center" />
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-wrap lg:flex-row gap-6 mt-10 ">
//                  <div className="flex flex-row xl:justify-between gap-6 mt-10 flex-wrap lg:flex-nowrap justify-center">
//                 {HOW_IT_WORKS.map((step, index) => (
//                     <div key={index} className="flex flex-col items-center max-w-[364px] text-center relative p-6">
//                         <div className="size-[70px] rounded-full bg-orange-50 flex items-center justify-center mb-3">
//                             <img src={step.icon} alt={step.title} className="" />
//                         </div>
//                         {index < HOW_IT_WORKS.length - 1 && (
//                             <div className="hidden xl:block absolute top-[50px] right-[-65px] transform ">
//                                 <img src={arrow}/>
//                             </div>
//                         )}

//                         <h3 className="text-2xl font-semibold mb-2 leading-[150%]">{step.title}</h3>
//                         <p className=" leading-[150%] text-base text-black">{step.description}</p>
//                         <CustomButton btnText={`View Menu`} className={`bg-gradient  mt-3`}/>
                      
//                     </div>
//                 ))}
//                     </div>
//             </div>
//         </div>
//     )
// }

// export default Work

// import React from 'react'
// import Heading from './common/Heading'
// import leftArrow from './../assets/images/svg/arrow.svg'
// import { Line, Order, Pizza, Track } from '../utils/icon'
// import Description from './common/Descritpion'
// import CustomButton from './common/CustomButton'

// const HowItWorks = () => {
//     return (
//         <div className="px-5 py-25">
//             <div className=' max-w-[1140px] mx-auto'>
//                 <div className=" flex justify-center items-center gap-1.5">
//                     <div className="">
//                         <Line />
//                     </div>
//                     <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>How It Works</h4>
//                     <div className=" rotate-[180deg]">
//                         <Line />
//                     </div>
//                 </div>
//                 <Heading className={'font-semibold text-[48px] text-center mx-auto max-w-[569px]  mt-2 mb-[40px]'} headText="Your Perfect Pizza in Just 3 Easy Steps!"/>

//                 <div className='flex md:flex-row flex-col max-md:justify-center max-md:items-center md:gap-0 gap-6
//       '>
//                     <div className='max-w-[364px] flex justify-between flex-col '>
//                         <div className='w-[70px] mx-auto h-[70px] flex items-center justify-center rounded-[50%] bg-[#FDEDE3] mb-3'>
//                             <Pizza />
//                         </div>
//                         <Description className={'font-semibold text-[20px] min-[910px]:text-[24px] mt-3 text-center '} text="Choose Your Pizza"/>
//                         <Description className={'font-normal text-center max-w-[316px] mt-2 mb-3 '} text="Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas."/>
//                         <CustomButton className={'!py-[10px] !px-[16px] mx-auto block'} btnText="View Menu"/>
//                     </div>

//                     <img src={leftArrow} alt="line" className='max-lg:mx-auto mt-[45px] h-[12px] w-[80px] max-md:mb-[45px] md:rotate-0 rotate-90 lg:w-[191px]  md:w-[140px]' />

//                     <div className='max-w-[364px] flex justify-between flex-col'>
//                         <div className=''>
//                             <div className='w-[70px] mx-auto h-[70px] flex items-center justify-center rounded-[50%] bg-[#FDEDE3] mb-3'>
//                                 <Order />
//                             </div>
//                             <Description className={'font-semibold text-[20px] min-[910px]:text-[24px] mt-3 text-center '} text="Place Your Order"/>
//                             <Description className={'font-normal text-center max-w-[316px] mt-2 mb-3 '} text="BConfirm your cart, choose delivery or pickup, and pay securely — all in under
//                                 a minute."/>
//                         </div>
//                         <CustomButton className={'!py-[10px] !px-[16px] mx-auto block'} btnText="View Menu"/></div>
                   

//                     <img src={leftArrow} alt="line" className='max-lg:mx-auto mt-[45px] md:rotate-0 rotate-90 w-[80px] max-md:mb-[45px] h-[12px] min-lg:w-[191px] md:w-[140px]' />

//                     <div className='max-w-[364px] flex justify-between flex-col'>
//                         <div>
//                             <div className='w-[70px] mx-auto h-[70px] flex items-center justify-center rounded-[50%] bg-[#FDEDE3] mb-3'>
//                                 <Track />
//                             </div>
//                             <Description className={'font-semibold text-[20px] min-[910px]:text-[24px] mt-3 text-center '} text="Track & Enjoy"/>
//                             <Description className={'font-normal text-center max-w-[316px] mt-2 mb-3 '} text="Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness
//                                 and dig in!"/>
//                         </div>
//                         <CustomButton className={'!py-[10px] !px-[16px] mx-auto'}btnText="View Menu"/>
//                     </div>
//                 </div>
//             </div>
//             </div>
    
//     )
// }

// export default HowItWorks

import React from 'react';
import { HOW_IT_WORKS } from '../utils/helper';
import CustomButton from './common/CustomButton';
import Description from './common/Descritpion';
import Heading from './common/Heading';
import { Line } from '../utils/icon'; 
import leftArrow from './../assets/images/svg/arrow.svg'


const HowItWorks = () => {
    return (
        <section className="py-10 px-5 max-w-[1140px] mx-auto font-montserrat">
            <div className="flex justify-center items-center gap-1.5">
                <Line />
                <h4 className="text-prime-gradient text-lg font-bold">How It Works</h4>
                <div className="rotate-180"><Line /></div>
            </div>

            <Heading
                className="font-semibold text-[48px] text-center max-w-[569px] mx-auto my-6"
                headText="Your Perfect Pizza in Just 3 Easy Steps!"
            />

            <div className="flex md:flex-row flex-col justify-center items-center gap-6">
                <div className="flex md:flex-row flex-col justify-center items-center gap-6 flex-wrap">
                    {HOW_IT_WORKS.map(({ id, icon: Icon, title, desc }, index) => (
                        <div key={id} className='relative '>
                            <div className="max-w-[364px] flex flex-col items-center text-center ">
                                <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-[#FDEDE3] mb-3 me">
                                    <Icon />
                                </div>
                                <Description
                                    className="font-semibold text-[20px] min-[910px]:text-[24px]"
                                    text={title}
                                />
                                <Description
                                    className="font-normal max-w-[316px] mt-2 mb-3"
                                    text={desc}
                                />
                                <CustomButton className="!py-[10px] !px-[16px]" btnText="View Menu" />
                            </div>
                            {index !== HOW_IT_WORKS.length - 1 && (
                                <img
                                    src={leftArrow}
                                    alt="arrow"
                                    className="max-lg:mx-auto  h-[12px] w-[80px] md:rotate-0 rotate-90 top-8 lg:block hidden   left-50 lg:w-[191px] md:w-[140px] absolute "
                                />
                            )}
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default HowItWorks;
