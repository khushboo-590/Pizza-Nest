import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LIMITED_DATA } from '../utils/helper';
import cloudImg from '../assets/images/png/cloud-image.png'
import singleCloudImg from '../assets/images/png/single-cloud-image.png'
import CustomButton from './common/CustomButton';
import tamatoImg from '../assets/images/png/tamato-img.png'

const Delicious = () => {
      AOS.init({
            offset: 100,
            duration: 1000,     
            easing: 'ease-in-out',
            delay: 0,
            once: true,
        });
    return (
        <>
            <div className="px-5 py-8 sm:py-10 md:py-20 lg:py-25 relative max-w-[1920px] mx-auto">
                <img className='absolute pointer-events-none right-0 bottom-0   lg:block hidden lg:max-w-[300px] xl:max-w-[420px] animate-bounce' src={tamatoImg} alt="pizza-slice" />             
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex max-lg:flex-wrap gap-6 items-center">
                        {LIMITED_DATA.map((obj, index) => (
                            <div className="max-w-[700px] mx-auto lg:max-w-[558px] relative w-full min-h-[319px] pl-4 sm:pl-8 py-8 md:py-10 lg:py-[63px] rounded-xl bg-[url(./assets/images/png/limited-offer-bg-img.png)] bg-cover bg-center bg-no-repeat" key={index}>
                                <div className="z-1 relative lg:max-w-max" data-aos="fade-right">
                                    <h5 className='text-[28px] leading-[160%] text-gradient'>Delicious</h5>
                                    <h2 className='text-white text-[28px] sm:text-4xl font-semibold leading-[160%]'>{obj.title}</h2>
                                    <p className='text-xl leading-[160%] text-[#E9E9E9]'>Limited Time</p>
                                    <CustomButton className="!py-2.5 !px-4 !leading-[22px] mt-4" btnText="Order Now"/>
                                </div>
                                <img className='sm:absolute max-sm:ml-auto right-0 bottom-0 max-sm:max-w-[250px] pointer-events-none' data-aos="fade-left" src={obj.img} alt="pizza-img" />
                                <div className="absolute top-23 sm:top-[7px] right-2 sm:right-[49px]">
                                    <img className='sm:flex hidden pointer-events-none' src={cloudImg} alt="cloud-img" />
                                    <img className='flex sm:hidden pointer-events-none' src={singleCloudImg} alt="cloud-img" />
                                    <div className="absolute top-5 sm:top-[27px] right-8 sm:right-[35px]">
                                        <p className='text-white text-center leading-[160%]'>{obj.text}</p>
                                        <p className='uppercase text-2xl text-center leading-[140%] text-white'>{obj.price}</p>
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delicious