import React from 'react'
import starImg from '../assets/images/png/star-img.png'
import { ArrowLine } from '../utils/icon'
import CustomButton from './common/CustomButton'
import Descritpion from './common/Descritpion'
import Heading from './common/Heading'

const Hero = () => {
    return (
        <div className='max-w-[1440px] bg-dark-white sm:px-10 px-5 w-full mx-auto'>
            <div className="bg-[url(./assets/images/png/hero-bg-img.png)] relative bg-no-repeat bg-center bg-cover flex flex-col items-center w-full min-h-[500px] md:min-h-[610px] lg:min-h-[710px] rounded-3xl px-5">
                <div className="max-w-[593px] w-full md:absolute mt-8 sm:mt-10 md-:mt20 lg:mt-[127px] xl:left-[110px] left-[75px] mb-10 sm:mb-20 md:mt-30 lg:mb-[188px]">
                    <Heading className="font-bold !leading-[120%]  text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] text-white"
                        headText="Where Every Slice Feels Like Home"/>
                    <Descritpion className={'text-dark-white mt-4 mb-8 max-w-[540px] w-full'} text="At Pizza Nest, we bake more than pizza — we bake comfort. Customize
                        your perfect slice, or choose from our signature favorites"/>
                    <div className="flex flex-col sm:flex-row gap-6 mb-6">
                        <CustomButton btnText="Order Now"/>
                        <CustomButton className={'!bg-none btn-blur-opacity-1 border border-white'} btnText ="View Full Menu"/>
                    </div>
                    <div className="flex flex-col gap-y-2 sm:flex-row items-center">
                        <div className="max-w-[155px] w-full">
                            <h4 className=' mb-[2px] font-semibold text-2xl text-white w-full text-center leading-[34px]' >5,000+</h4>
                            <p className='font-semibold  text-base text-center text-lighter-gray leading-[120%] w-full'> Pizzas Delivered</p>
                        </div>
                        <div className="border border-[#D5D5D5] sm:h-[39px] max-sm:w-full "></div>
                        <div className="max-w-[155px] w-full">
                            <h4 className=' mb-[2px] font-semibold text-2xl text-white w-full text-center leading-[34px]'>98%</h4>
                            <p className='font-semibold  text-base text-center text-lighter-gray leading-[120%] w-full'> Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="absolute xl:top-[173px] top-[80px] xl:left-[684px] left-[600px] lg:flex hidden">
                    <ArrowLine />
                </div>
                <div className="absolute xl:top-[138px] max-w-max lg:top-[180px] bottom-10 xl:left-[963px] lg:left-[800px] sm:right-10 max-sm:left-1/2 transform max-sm:-translate-x-1/2">
                    <div className="size-[114px] relative p-3">
                        <img className='absolute top-0 animate-spin [animation-duration:5s] hidden lg:block  left-0 w-full h-full z-10' src={starImg} alt="star" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
