// import React, { useState } from 'react';
// import { MENU_CATEGORIES, MENU_ITEMS } from '../utils/helper';
// import CustomButton from './common/CustomButton';

// const MenuSection = () => {
//     const [activeTab, setActiveTab] = useState('All');

//     const filteredItems =
//         activeTab === 'All'
//             ? MENU_ITEMS
//             : MENU_ITEMS.filter((item) => item.category === activeTab);

//     return (
//         <section className="py-16 px-4 max-w-7xl mx-auto text-center">
//             <h4 className="text-orange-500 font-semibold mb-1">Our Menu</h4>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-8">
//                 Explore Flavours, Pick Your Cravings
//             </h2>
//             <div className="flex flex-wrap justify-center gap-3 mb-12">
//                 {MENU_CATEGORIES.map((category) => (
//                     <button
//                         key={category}
//                         onClick={() => setActiveTab(category)}
//                         className={`px-5 py-2 border rounded-full text-sm font-medium transition ${activeTab === category
//                                 ? 'bg-orange-500 text-white'
//                                 : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                             }`}
//                     >
//                         {category}
//                     </button>
//                 ))}
//             </div>
//             <div className="flex flex-wrap justify-center gap-6 items-center mx-auto">
//                 {filteredItems.slice(0, 3).map((item) => (
//                     <div
//                         key={item.id}
//                         className="bg-white rounded-xl shadow w-full sm:w-[270px] text-left transition hover:shadow-lg relative mb-28"
//                     >
//                         <img
//                             src={item.image}
//                             alt={item.title}
//                             className="rounded-lg w-full h-auto object-cover"
//                         />
//                         <div className="absolute max-w-[324px] -bottom-30 mx-4 transform  bg-white text-center rounded-[8px] p-4 shadow-lg">
//                             <p className="text-orange-500 font-semibold">
//                                 {item.price.join(' / ')}
//                             </p>
//                             <h3 className="text-lg font-bold">{item.title}</h3>
//                             <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
//                             <div className="text-yellow-400 text-lg">★★★★★</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="pt-10 flex justify-center">
//                 <CustomButton
//                     btnText="View More"
//                     className="bg-gradient"
//                 />
//             </div>

//         </section>
//     );
// };

// export default MenuSection;

import React, { useState } from "react";
import { MENU_DATA } from "../utils/helper.js";
import { Line, RatingSvg } from "../utils/icon.jsx";
import Heading from "./common/Heading";
import CustomButton from "./common/CustomButton.jsx";
import pizzaSlice from '../assets/images/png/pizza-slice-img.png';


const categories = ["All", "Veg Pizzas", "Non-Veg Pizzas", "Combos & Drinks", "Sides & Dips"];

const OurMenu = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const getTitleKey = (category) => {
        switch (category) {
            case "All": return "title1";
            case "Veg Pizzas": return "title2";
            case "Non-Veg Pizzas": return "title3";
            case "Combos & Drinks": return "title4";
            case "Sides & Dips": return "title5";
            default: return "title1";
        }
    };

    const titleKey = getTitleKey(activeCategory);

    return (
        <div className="px-5 py-25 relative">
            <img className='absolute pointer-events-none left-0 top-0 max-xl:w-full max-xl:max-w-[150px] animate-bounce' src={pizzaSlice} alt="pizza-slice" />

            <div className='flex justify-center items-center flex-col mx-auto  max-w-[1140px] '>
                <div className=" flex justify-center items-center gap-1.5 mb-2 max-w-[1140px] mx-auto">
                    <div className="">
                        <Line />
                    </div>
                    <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>Best Sellers</h4>
                    <div className=" rotate-[180deg]">
                        <Line />
                    </div>
                </div>
                <Heading className="text-center mt-2 text-5xl !leading-[120%] mb-10 max-w-[550px] w-full" headText="Explore Flavours, Pick Your Cravings" />
                <div className="flex flex-wrap justify-center gap-6 mb-10 w-full">
                    {categories.map((category, i) => (
                        <CustomButton
                            key={i}
                            btnText={category}
                            onClick={() => setActiveCategory(category)}
                            className={`!px-5 !py-[9px] max-w-[170px] !leading-[22px] w-full rounded-full border
        ${activeCategory === category
                                    ? "bg-prime text-white border-transparent"
                                    : "!bg-none !bg-white !text-light-gray !border-light-gray"
                                }`}
                        >
                            {category}
                        </CustomButton>
                    ))}
                </div>




                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {MENU_DATA.map((item, i) => (
                        <div className="" key={i}>
                            <img className="object-cover w-full" src={item.image} alt="pizza" />
                            <div className="max-w-[324px] p-5 mx-auto w-full bg-white border border-black/10 rounded-[8px] -translate-y-[29px] flex flex-col justify-center items-center">
                                <p className="text-prime-gradient text-2xl font-semibold leading-[34px] text-center">{item.price}</p>
                                <h4 className="text-2xl font-semibold text-center leading-[34px] text-black my-0.5">
                                    {item[titleKey]}
                                </h4>
                                <p className="text-base text-unmuted-gray leading-[160%] text-center px-2 mb-1">{item.desc}</p>
                                <RatingSvg />
                            </div>
                        </div>
                    ))}

                </div>
                <CustomButton className={'mt-[3px] !leading-[22px]'} btnText="View More" />
            </div>
        </div>
    );
};

export default OurMenu;
