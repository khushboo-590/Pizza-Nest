import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heading from './common/Heading'
import tastyPizza from '../assets/images/png/tasty-pizza-img.png';
import CustomButton from './common/CustomButton';

const Buy = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,         
            easing: 'ease-in-out',
            delay: 0,
            once: true,          
        });
    }, []);
    return (
        <>
            <div className="bg-[url(./assets/images/png/tasty-bg-image.png)] bg-cover px-5 lg:h-[400px] max-w-[1920px] mx-auto">
                <div className="max-w-[1194px] mx-auto">
                    <div className="pt-[17px] pb-[33px] flex max-sm:flex-wrap justify-center gap-5 lg:gap-[44px] items-center">
                        <div className="md:max-w-[400px] lg:max-w-[597px]" data-aos="slide-left"
                            data-aos-duration="1000">
                            <p className='text-gradient pb-0.5 font-semibold text-2xl md:text-[28px] leading-[140%] '>Buy 1 Pizza, Get 1 Free!</p>
                            <Heading className="text-white !text-[30px] md:!text-[40px] lg:!text-[56px]"  headText="Medium & Large pizzas"/>
                            <p className='text-gradient font-semibold text-2xl md:text-[28px] leading-[140%] pt-1 w-full'>Limited Offer</p>
                            <CustomButton className="px-[32.5px] btn-gradient py-[15px] mt-3" btnText="Order Now"/>
                        </div>
                        <div className="relative flex items-center" data-aos="slide-right"
                            data-aos-duration="1000">
                            <img className='max-w-[400px]  lg:max-w-[553px] w-full pointer-events-none' src={tastyPizza} alt="pizza-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Buy
