import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Heading from "./common/Heading";
import { LeftArrow, Line, RightArrow } from "../utils/icon";
import pizzaImg from "../assets/images/png/testimonial-img.png";
import { TESTIMONIAL_AVATAR, TESTIMONIALS_DATA } from "../utils/helper";
import CustomButton from "./common/CustomButton";
import Description from "./common/Descritpion";

const Testimonial = () => {
    return (
        <div className="relative px-5 py-8 sm:py-10 md:py-20 lg:py-25 bg-[url('src/assets/images/png/common-bg-img.png')] bg-no-repeat bg-cover bg-center">
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
                    headText="What Our Customers Say"
                />
                <div className="flex flex-col lg:flex-row max-lg:justify-center max-lg:items-center relative gap-10">
                    <div className="relative w-full max-w-[523px] sm:ml-[37px] sm:pb-[76px] pb-10">
                        <img
                            src={pizzaImg}
                            alt="Pizza"
                            className="w-full rounded-xl object-cover"
                        />
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
                                        className={`cursor-pointer rounded-full ${sizeClass} transition-all duration-300`}
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
                        className="lg:!absolute bottom-0 right-0 max-w-[680px] w-full"
                    >
                        {TESTIMONIALS_DATA.map((obj, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-xl shadow-lg p-6 w-full relative h-[298px] mt-2">
                                    <Description
                                        className="text-[#545454]"
                                        text={obj.text}
                                    />
                                    <h4 className="font-semibold text-2xl text-black mt-4 mb-0.5 leading-[140%]">{obj.name}</h4>
                                    <p className="text-base leading-[160%] mb-6 text-[#545454]">{obj.role}</p>

                                    <div className="flex items-center gap-2">
                                        <CustomButton
                                            className="group prevBtn hover:!bg-none hover:!bg-light-white !rounded-[4px] border !px-[15px] !py-3.5 transition"
                                            btnText={
                                                <span className="text-white group-hover:text-black transition-colors duration-300">
                                                    <LeftArrow />
                                                </span>
                                            }
                                        />

                                        <CustomButton
                                            className="group nextBtn hover:!bg-none hover:!bg-light-white !rounded-[4px] border !px-[15px] !py-3.5 transition"
                                            btnText={
                                                <span className="text-white group-hover:text-black transition-colors duration-300">
                                                    <RightArrow />
                                                </span>}/>

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
