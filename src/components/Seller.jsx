import React from 'react'
import Heading from './common/Heading'
import { BEST_SELLERS } from '../utils/helper'
import Description from './common/Descritpion'
import CustomButton from './common/CustomButton'

const Seller = () => {
    return (
        <div className="max-w-[1140px] px-4 mx-auto">
            <div className="mt-[100px]">
                <div className="flex flex-col items-center">
                    <div className="w-full flex items-center justify-center gap-2 mb-2">
                        <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 1H-0.0083313" stroke="url(#leftGradient)" />
                            <defs>
                                <linearGradient id="leftGradient" x1="60" y1="1.76761" x2="55.9905" y2="-15.3725" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#EC6112" />
                                    <stop offset="0.380908" stopColor="#FF902E" />
                                    <stop offset="0.74047" stopColor="#FEFEFE" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <h4 className="text-lg leading-[120%] font-bold text-gradient whitespace-nowrap">Best Sellers</h4>
                        <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 1H-0.0083313" stroke="url(#rightGradient)" />
                            <defs>
                                <linearGradient id="rightGradient" x1="60" y1="1.76761" x2="55.9905" y2="-15.3725" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#EC6112" />
                                    <stop offset="0.380908" stopColor="#FF902E" />
                                    <stop offset="0.74047" stopColor="#FEFEFE" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className=" mx-auto mb-[40px] flex flex-col">
                        <Heading headText="Pizzas You Can’t Say No To" className="mt-2 text-center" />
                        <Description text="Tried, tested, and totally loved. These pizzas are always a crowd favorite." ClassName={`mt-4 text-center`} />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
                {BEST_SELLERS.map((pizza) => (
                    <div
                        key={pizza.id}
                        className="bg-white shadow-md p-6 text-center rounded-lg relative pt-[80px] w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] max-w-[276px] mb-14"
                    >
                        {/* Image Positioned Above */}
                        <img
                            src={pizza.img}
                            alt={pizza.name}
                            className="w-[130px] h-[130px] object-cover rounded-full absolute left-1/2 -translate-x-1/2 -top-[70px]"
                        />

                        {/* Price */}
                        <p className="text-gradient font-semibold text-[32px] leading-[140%]">{pizza.price}</p>

                        {/* Name */}
                        <h3 className="font-semibold text-[20px] mt-[2px] leading-[140%] text-black">
                            {pizza.name}
                        </h3>

                        {/* Description */}
                        <Description text={pizza.desc} ClassName="text-[#5C5C5C] mt-[2px]" />

                        {/* Button */}
                        <CustomButton btnText="Order Now" className="bg-gradient mt-3" />
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Seller
