import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from './../assets/images/png/delivery-img.png'
import line from './../assets/images/png/delivery-line.png'
import Heading from './common/Heading'
import { DELIVERY__DATA } from '../utils/helper'
import CustomButton from './common/CustomButton'
import Description from './common/Descritpion'
import tamatoImg from '../assets/images/png/tamato-img.png'

const Delivery = () => {
    AOS.init({
        offset: 100,
        duration: 1000,     
        easing: 'ease-in-out',
        delay: 0,
        once: true,
    });
    return (
        <div className="px-5 py-8 sm:py-10 md:py-20 lg:py-25 bg-[url(src/assets/images/png/common-bg-img.png)] bg-no-repeat bg-cover bg-center relative ">
            <img className='absolute pointer-events-none left-0 bottom-[-90px]  lg:block hidden lg:max-w-[300px] xl:max-w-[420px] animate-bounce rotate-180' src={tamatoImg} alt="pizza-slice" />          
            <div className=' max-w-[1140px] mx-auto'>
                <div className='flex -mx-3 flex-wrap lg:flex-row flex-col-reverse lg:gap-0 gap-7'>
                    <div className='lg:w-1/2 w-full px-3 ' data-aos="zoom-in" >
                        <div className='flex items-center gap-[6px]'>
                            <Description className={'!font-bold !text-[18px] !leading-[120%] text-gradient'} text="Food Delivery" />
                            <img src={line} alt="line" className='w-[60px] h-[1px]' />
                        </div>
                        <Heading className={'text-[30px] sm:text-4xl md:text-[40px] lg:text-5xl w-ful  lg:max-w-[463px]'}
                            headText="Fast, Fresh & Always On Time" />
                        <Description className={'text-[#373737] mb-3 font-normal mt-[15px] w-full lg:max-w-[463px]'} text="We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away." />
                        <div className='flex flex-col gap-[8px] max-lg:grid max-lg:grid-cols-2  mt-10'>
                            {DELIVERY__DATA.map((obj, index) => (
                                <div key={index} className='flex gap-[6px]'>
                                    <obj.icon />
                                    <Description className={'font-normal text-[#373737]'} text={obj.info} />
                                </div>
                            ))}
                        </div>
                        <CustomButton className={'mt-6'} btnText="Order Now" />
                    </div>
                    <div className='lg:w-1/2 w-full px-3'>
                        <img src={image} alt="image" className='max-w-[612px] w-full block mx-auto pointer-events-none' data-aos="zoom-out" data-aos-duration="1200" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Delivery