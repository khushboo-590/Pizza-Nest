import React, { useState } from "react";
import { MENU_DATA } from "../utils/helper.js";
import { Line, RatingSvg } from "../utils/icon.jsx";
import Heading from "./common/Heading";
import CustomButton from "./common/CustomButton.jsx";
import pizzaSlice from '../assets/images/png/pizza-slice-img.png';

const categories = ["All", "Veg Pizzas", "Non-Veg Pizzas", "Combos & Drinks", "Sides & Dips"];
const Explore = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    return (
        <div className="px-5 py-8 sm:py-10 md:py-20 lg:py-25 relative">
            <img className='absolute pointer-events-none left-0 top-0 max-w-[90px] md:max-w-[140px] lg:max-w-[195px] animate-bounce' src={pizzaSlice} alt="pizza-slice" />

            <div className='flex justify-center items-center flex-col mx-auto  max-w-[1140px] '>
                <div className=" flex justify-center items-center gap-1.5 mb-2 max-w-[1140px] mx-auto">
                    <div className="">
                        <Line />
                    </div>
                    <h4 className='text-gradient text-lg font-bold leading-[22px]'>Menu us</h4>
                    <div className=" rotate-[180deg]">
                        <Line />
                    </div>
                </div>
                <Heading className="text-center mt-2 text-[30px] sm:text-4xl md:text-[40px] lg:text-5xl !leading-[120%] mb-10 max-w-[550px] w-full" headText="Explore Flavours, Pick Your Cravings" />
                <div className="flex flex-wrap justify-center gap-6 mb-10 w-full">
                    {categories.map((category, i) => (
                        <CustomButton
                            key={i}
                            btnText={category}
                            onClick={() => setActiveCategory(category)}
                            className={`!px-5 !py-[9px] max-w-[170px] !leading-[22px] w-full rounded-full border text-base
        ${activeCategory === category
                                    ? "bg-prime text-white border-transparent"
                                    : "!bg-none !bg-white !text-light-gray !border-light-gray"
                                }`}>
                            {category}
                        </CustomButton>
                    ))}
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {MENU_DATA[activeCategory].map((item, i) => (
                        <div key={i}>
                            <img className="object-cover w-full h-[292px] pointer-events-none" src={item.image} alt={item.title} />
                            <div className="max-w-[324px] p-5 mx-auto w-full bg-white border border-black/10 rounded-[8px] -translate-y-[29px] flex flex-col justify-center items-center">
                                <p className="text-gradient text-2xl font-semibold leading-[34px] text-center">{item.price}</p>
                                <h4 className="text-2xl font-semibold text-center leading-[34px] text-black my-0.5">
                                    {item.title}
                                </h4>
                                <p className="text-base text-unmuted-gray leading-[160%] text-center px-2 mb-1">{item.desc}</p>
                                <RatingSvg />
                            </div>
                        </div>
                    ))}
                </div>

                <CustomButton className={' mt-4 lg:mt-8 !leading-[22px]'} btnText="View More" />
            </div>
        </div>
    );
};

export default Explore;

