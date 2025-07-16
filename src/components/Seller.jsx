// import React from 'react'
// import Heading from './common/Heading'
// import { BEST_SELLERS } from '../utils/helper'
// import Description from './common/Descritpion'
// import CustomButton from './common/CustomButton'

// const Seller = () => {
//     return (
//         <div className="max-w-[1140px] px-4 mx-auto">
//             <div className="mt-[100px]">
//                 <div className="flex flex-col items-center">
//                     <div className="w-full flex items-center justify-center gap-2 mb-2">
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

//                         <h4 className="text-lg leading-[120%] font-bold text-gradient whitespace-nowrap">Best Sellers</h4>
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

//                     <div className=" mx-auto mb-[40px] flex flex-col">
//                         <Heading headText="Pizzas You Can’t Say No To" className="mt-2 text-center" />
//                         <Description text="Tried, tested, and totally loved. These pizzas are always a crowd favorite." ClassName={`mt-4 text-center`} />
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-wrap justify-center gap-6 mt-12">
//                 {BEST_SELLERS.map((pizza) => (
//                     <div
//                         key={pizza.id}
//                         className="bg-white shadow-md p-6 text-center rounded-lg relative pt-[80px] w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] max-w-[276px] mb-14"
//                     >
//                         {/* Image Positioned Above */}
//                         <img
//                             src={pizza.img}
//                             alt={pizza.name}
//                             className="w-[130px] h-[130px] object-cover rounded-full absolute left-1/2 -translate-x-1/2 -top-[70px]"
//                         />

//                         {/* Price */}
//                         <p className="text-gradient font-semibold text-[32px] leading-[140%]">{pizza.price}</p>

//                         {/* Name */}
//                         <h3 className="font-semibold text-[20px] mt-[2px] leading-[140%] text-black">
//                             {pizza.name}
//                         </h3>

//                         {/* Description */}
//                         <Description text={pizza.desc} ClassName="text-[#5C5C5C] mt-[2px]" />

//                         {/* Button */}
//                         <CustomButton btnText="Order Now" className="bg-gradient mt-3" />
//                     </div>
//                 ))}
//             </div>



//         </div>
//     )
// }

// export default Seller

import React from 'react';
import Heading from './common/Heading';
import { BESTSELLER_DATA } from '../utils/helper';
import { Line } from '../utils/icon';
import CustomButton from './common/CustomButton';
import Description from './common/Descritpion';

const BestSellers = () => {
    return (
        <>
            <div className="px-5 py-25 bg-[url(src/assets/images/png/best-seller-bg-img.png)] bg-no-repeat bg-cover bg-center">
                <div className='max-w-[1140px] w-full mx-auto'>
                    <div className=" flex justify-center items-center gap-1.5">
                        <div className="">
                            <Line />
                        </div>
                        <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>Best Sellers</h4>
                        <div className=" rotate-[180deg]">
                            <Line />
                        </div>
                    </div>
                    <Heading className="text-center pt-2 text-5xl !leading-[120%] " headText="Pizzas You Can’t Say No To"/>
                    < Description className="text-[#373737] text-center pt-4"text="Tried, tested, and totally loved. These pizzas are always a crowd favorite"/>
                    <div className="pt-[125px] flex-wrap justify-center flex gap-x-6 gap-y-20">
                        {BESTSELLER_DATA.map((item, index) => (
                            <div className="max-w-[267px] relative bg-[#FEFEFE] border border-[#0000000F] rounded-bl-xl rounded-tr-xl p-6" key={index}>
                                <img className='absolute transform -top-[21%] -translate-x-1/2 left-1/2' src={item.img} alt="pizza-img" />
                                <div className="flex justify-center pt-[61px]">
                                    <h3 className='text-prime-gradient font-semibold text-[32px] leading-[140%]'>{item.price}</h3>
                                </div>
                                <p className="font-semibold text-[#010101] text-[28px] pt-[2px] text-center leading-[140%] whitespace-nowrap">{item.title}</p>
                                <p className='leading-[160%] text-[#5C5C5C] text-center pt-[2px]'>{item.description}</p>
                                <div className="flex justify-center mt-3">
                                    <CustomButton className="px-[16.5px] py-[9px]" btnText="order Now"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>            </div>
        </>
    )
}

export default BestSellers