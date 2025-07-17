import React from 'react';
import { HOW_IT_WORKS_DATA } from '../utils/helper';
import CustomButton from './common/CustomButton';
import Description from './common/Descritpion';
import Heading from './common/Heading';
import { Line } from '../utils/icon'; 
import leftArrow from './../assets/images/svg/arrow.svg'

const Works = () => {
    return (
        <section className="py-8 sm:py-10 md:py-20 lg:py-25 px-5 max-w-[1140px] mx-auto font-montserrat">
            <div className="flex justify-center items-center gap-1.5">
                <Line />
                <h4 className="text-gradient text-lg font-bold">How It Works</h4>
                <div className="rotate-180"><Line /></div>
            </div>
            <Heading
                className="font-semibold text-[30px] sm:text-4xl md:text-[40px] lg:text-5xl text-center max-w-[569px] mx-auto my-6"
                headText="Your Perfect Pizza in Just 3 Easy Steps!"/>
            <div className="flex md:flex-row flex-col justify-center items-center gap-6">
                <div className="flex md:flex-row flex-col justify-center items-center gap-6 flex-wrap">
                    {HOW_IT_WORKS_DATA.map(({ id, icon: Icon, title, desc }, index) => (
                        <div key={id} className='relative '>
                            <div className="max-w-[364px] flex flex-col items-center text-center ">
                                <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-[#FDEDE3] mb-3 me pointer-events-none">
                                    <Icon />
                                </div>
                                <p
                                    className="font-semibold text-2xl min-[910px]:text-[24px] text-black leading-[150%]">
                                    {title}
                                </p>
                                <Description
                                    className="font-normal max-w-[316px] mt-2 mb-3 text-[#373737]"
                                    text={desc}
                                />
                                <CustomButton className="!py-[10px] !px-[16px]" btnText="View Menu" />
                            </div>
                            {index !== HOW_IT_WORKS_DATA.length - 1 && (
                                <img
                                    src={leftArrow}
                                    alt="arrow"
                                    className="max-lg:mx-auto  h-[12px] w-[80px] md:rotate-0 rotate-90 top-8 xl:block hidden   left-50 lg:w-[191px] md:w-[140px] absolute "
                                />
                            )}
                        </div>
                    ))}
                </div>
           </div>
        </section>
    );
};

export default Works;
