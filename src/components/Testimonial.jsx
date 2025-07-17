import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Heading from "./common/Heading";
import { LeftArrow, Line, RightArrow } from "../utils/icon";
import pizzaImg from "../assets/images/png/testimonial-img.png";
import { TESTIMONIAL_AVATAR, TESTIMONIALS_DATA } from "../utils/helper";
import CustomButton from "./common/CustomButton";
import Descritpion from "./common/Descritpion";

const Testimonial = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out',
        });
    }, []);
    return (
        <div className="relative px-5 py-8 sm:py-10 md:py-20 lg:py-25 bg-[url('src/assets/images/png/common-bg-img.png')] bg-no-repeat bg-cover bg-center max-w-[1920px] mx-auto">
            <div className="relative max-w-[1140px] mx-auto">
                <div className="flex justify-center items-center gap-1.5">
                    <Line />
                    <h4 className="text-gradient text-lg font-bold leading-[22px]">Testimonial</h4>
                    <div className="rotate-[180deg]">
                        <Line />
                    </div>
                </div>
                <Heading
                    className="font-semibold text-[30px] sm:text-4xl md:text-[40px] lg:text-5xl text-center mx-auto max-w-[569px] !leading-[120%] mt-2 mb-15"
                    headText="What Our Customers Say" />
                <div className="flex flex-col lg:flex-row max-lg:justify-center max-lg:items-center relative gap-10" data-aos-delay="200" data-aos="zoom-out">
                    <div className="relative w-full max-w-[523px] sm:ml-[37px] md:pb-[76px]  pb-3">
                        <img
                            src={pizzaImg}
                            alt="Pizza"
                            className="w-full rounded-xl object-cover pointer-events-none" />
                        <div className="absolute top-[60px] sm-mx:top-[70px] left-[-10px] sm:left-[-36px] flex flex-col gap-2 sm:gap-4">
                            {TESTIMONIAL_AVATAR.map((avatar, i) => {
                                const sizeClass =
                                    i === 1
                                        ? 'w-[33px] h-[34px] sm:w-[74px] sm:h-[74px] max-w-[33px] max-h-[34px] sm:max-w-[74px] sm:max-h-[74px]'
                                        : 'w-[24px] h-[24px] sm:w-[60px] sm:h-[60px] max-w-[24px] max-h-[24px] sm:max-w-[60px] sm:max-h-[60px]';
                                return (
                                    <img
                                        key={i}
                                        src={avatar}
                                        alt="avatar"
                                        className={`cursor-pointer rounded-full ${sizeClass} transition-all duration-300 pointer-events-none`}
                                    />
                                );
                            })}

                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        loop={true}
                        navigation={{
                            nextEl: ".nextBtn",
                            prevEl: ".prevBtn",
                        }}
                        className="lg:!absolute bottom-0 right-0 max-w-[680px] w-full">
                        {TESTIMONIALS_DATA.map((obj, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-xl shadow-lg p-6 w-full relative h-[298px] mt-2">
                                    <Descritpion
                                        className="text-[#545454]"
                                        text={obj.text}
                                    />
                                    <div className='flex  justify-between'>
                                        <div>
                                            <h4 className="font-semibold text-2xl text-black mt-4 mb-0.5 leading-[140%]">{obj.name}</h4>
                                            <p className="text-base leading-[160%] mb-6 text-[#545454]">{obj.role}</p></div>
                                        <svg className=' opacity-30' width="73" height="62" viewBox="0 0 73 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40.4271 47.1885C40.4271 43.3803 41.4224 40.1823 43.413 37.5944C44.8238 35.8115 46.738 34.6402 49.1556 34.0805C51.5357 33.5266 53.786 33.4877 55.8199 33.9594C56.5123 29.8482 55.3872 25.4948 52.531 20.8817C49.6691 16.2715 45.9792 12.8051 41.4613 10.4827L48.3031 0.637695C51.7651 2.35138 55.054 4.52378 58.0832 7.15057C61.1557 9.77735 63.882 12.7979 66.3054 16.2123C68.7288 19.6267 70.5464 23.4825 71.7148 27.8533C72.8832 32.224 73.2078 36.6813 72.6495 41.2685C71.9225 47.327 69.9665 52.1738 66.7815 55.7656C63.5993 59.4035 59.6353 61.2225 54.8895 61.2225C50.7135 61.2225 47.2472 59.9676 44.5035 57.423C41.7888 54.9304 40.4328 51.5145 40.4357 47.1755L40.4271 47.1885ZM0.943059 47.1885C0.943059 43.3803 1.93838 40.1823 3.92903 37.5944C5.34267 35.7769 7.25686 34.5984 9.6716 34.0589C12.095 33.5252 14.3164 33.4934 16.3359 33.9637C17.0283 29.8958 15.9465 25.5251 13.0817 20.8947C10.2255 16.3075 6.5385 12.8455 2.02061 10.5087L8.84505 0.637695C12.3099 2.35138 15.57 4.52234 18.6252 7.15057C21.7254 9.8166 24.4789 12.8609 26.8214 16.2123C29.2275 19.631 31.0191 23.4825 32.1875 27.8533C33.3744 32.2206 33.6934 36.7783 33.1266 41.2685C32.4082 47.327 30.4609 52.1738 27.2845 55.7656C24.111 59.3776 20.1542 61.1836 15.4142 61.1836C11.2309 61.1893 7.76606 59.9243 5.01955 57.3884C2.30477 54.8957 0.945944 51.4799 0.943059 47.1409V47.1885Z" fill="url(#paint0_linear_133_5957)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_133_5957" x1="72.9155" y1="47.1435" x2="-1.25894" y2="40.9071" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#EC6112" />
                                                    <stop offset="1" stop-color="#FF902E" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CustomButton
                                            className="group prevBtn hover:!bg-none hover:!bg-light-white !rounded-[4px] border !px-[15px] !py-3.5 transition"
                                            btnText={
                                                <span className="text-white group-hover:text-black transition-colors duration-300">
                                                    <LeftArrow />
                                                </span>
                                            } />
                                        <CustomButton
                                            className="group nextBtn hover:!bg-none hover:!bg-light-white !rounded-[4px] border !px-[15px] !py-3.5 transition"
                                            btnText={
                                                <span className="text-white group-hover:text-black transition-colors duration-300">
                                                    <RightArrow />
                                                </span>} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
