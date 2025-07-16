import React from 'react'
import deliveryImg from '../assets/images/png/delivery-img.png'
import Heading from './common/Heading'
import Description from './common/Descritpion'
import checkIcon from '../assets/images/svg/check-icon.svg'
import CustomButton from './common/CustomButton'
import { DELIVERY_FEATURES } from '../utils/helper'

const Delivery = () => {
  return (
      <div className="  bg-[#F8F8F880]">
          <div className="py-[100px]  max-w-[1140px] px-4 mx-auto">
              <div className="flex flex-wrap lg:flex-nowrap gap-[33px] items-center justify-between mt-10">
                  {/* Left Content */}
                  <div className="w-full lg:max-w-[50%] mt-[10px]">
                      <div className="flex gap-2 items-center mb-2">
                          <h4 className="text-lg font-bold leading-[120%] text-gradient">Food Delivery</h4>
                          <svg width="61" height="2" viewBox="0 0 61 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <line x1="0.832031" y1="1.05023" x2="60.8404" y2="1.05023" stroke="url(#paint0_linear_256_306)" />
                              <defs>
                                  <linearGradient id="paint0_linear_256_306" x1="0.832032" y1="2.31785" x2="4.10359" y2="-11.5765" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#EC6112" />
                                      <stop offset="1" stopColor="#FF902E" />
                                  </linearGradient>
                              </defs>
                          </svg>
                      </div>

                      <Heading headText="Fast, Fresh & Always On Time" ClassName="max-w-[483px] text-left mb-[15px]" />

                      <Description
                          text="We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away."
                          ClassName="max-w-[493px] light-black"
                      />

                      <div className="mt-3 flex flex-col gap-2 justify-center">
                          {DELIVERY_FEATURES.map((feature, index) => (
                              <div key={index} className="flex gap-[6px] items-start">
                                  <img src={checkIcon} alt="check" />
                                  <Description text={feature} ClassName="light-black m-0" />
                              </div>
                          ))}
                          <CustomButton btnText="Order Now" className="bg-gradient mt-4 max-w-[149px]" />
                      </div>
                  </div>

                  {/* Right Image */}
                  <div className="w-full lg:max-w-[50%] mt-6 lg:mt-0">
                      <img src={deliveryImg} alt="Delivery" className="w-full h-auto object-cover rounded-md" />
                  </div>
              </div>



            </div>  
    </div>
  )
}

export default Delivery
