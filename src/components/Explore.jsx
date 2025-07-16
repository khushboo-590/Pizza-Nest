import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../utils/helper'; 
import CustomButton from './common/CustomButton';

const MenuSection = () => {
    const [activeTab, setActiveTab] = useState('All');

    const filteredItems =
        activeTab === 'All'
            ? MENU_ITEMS
            : MENU_ITEMS.filter((item) => item.category === activeTab);

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto text-center">
            <h4 className="text-orange-500 font-semibold mb-1">Our Menu</h4>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Explore Flavours, Pick Your Cravings
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {MENU_CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-5 py-2 border rounded-full text-sm font-medium transition ${activeTab === category
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 items-center mx-auto">
                {filteredItems.slice(0, 3).map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow w-full sm:w-[270px] text-left transition hover:shadow-lg relative mb-28"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="rounded-lg w-full h-auto object-cover"
                        />
                        <div className="absolute max-w-[324px] -bottom-30 mx-4 transform  bg-white text-center rounded-[8px] p-4 shadow-lg">
                            <p className="text-orange-500 font-semibold">
                                {item.price.join(' / ')}
                            </p>
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                            <div className="text-yellow-400 text-lg">★★★★★</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pt-10 flex justify-center">
                <CustomButton
                    btnText="View More"
                    className="bg-gradient"
                />
            </div>

        </section>
    );
};

export default MenuSection;
