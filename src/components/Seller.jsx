import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; import Heading from './common/Heading';
import { BESTSELLER_DATA } from '../utils/helper';
import { Line } from '../utils/icon';
import CustomButton from './common/CustomButton';
import Descritpion from './common/Descritpion';

const Seller = () => {
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
            <div className="px-5 py-8 sm:py-10 md:py-20 lg:py-25 bg-[url(src/assets/images/png/common-bg-img.png)] bg-no-repeat bg-cover bg-center">
                <div className='max-w-[1140px] w-full mx-auto'>
                    <div className=" flex justify-center items-center gap-1.5">
                        <div className="">
                            <Line />
                        </div>
                        <h4 className='text-gradient text-lg font-bold leading-[22px]'>Best Sellers</h4>
                        <div className=" rotate-[180deg]">
                            <Line />
                        </div>
                    </div>
                    <Heading className="text-center pt-2 text-[30px] sm:text-4xl md:text-[40px] lg:text-5xl !leading-[120%] " headText="Pizzas You Can’t Say No To"/>
                    < Descritpion className="text-[#373737] text-center pt-4" text="Tried, tested, and totally loved. These pizzas are always a crowd favorite"/>
                    <div className="pt-[125px] flex-wrap justify-center flex gap-x-6 gap-y-20" data-aos="fade-down" data-aos-duration="1000">
                        {BESTSELLER_DATA.map((obj, index) => (
                            <div className="max-w-[267px] relative bg-[#FEFEFE] border border-[#0000000F] rounded-bl-xl rounded-tr-xl p-6" key={index}>
                                <img className='absolute transform -top-[21%] -translate-x-1/2 left-1/2 pointer-events-none spin-slow' src={obj.img} alt="pizza-img" />
                                <div className="flex justify-center pt-[61px]">
                                    <h3 className='text-gradient font-semibold text-[32px] leading-[140%]'>{obj.price}</h3>
                                </div>
                                <p className="font-semibold text-[#010101] text-[28px] pt-[2px] text-center leading-[140%] whitespace-nowrap">{obj.title}</p>
                                <p className='leading-[160%] text-[#5C5C5C] text-center pt-[2px]'>{obj.description}</p>
                                <div className="flex justify-center mt-3">
                                    <CustomButton className="px-[16.5px] py-[9px]" btnText="order Now"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Seller