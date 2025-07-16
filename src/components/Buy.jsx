import React from 'react';
import CustomButton from './common/CustomButton';
import buyImg from '../assets/images/png/buy-img.png';
import buyBgImg from '../assets/images/png/buy-bg-img.png';


const PromoBanner = () => {
    return (
        <section
            className="w-full bg-cover bg-center text-white sm:h-[400px] px-4"
            style={{ backgroundImage: `url(${buyBgImg})` }}
        >            <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row gap-[44px]">
                <div className=" mt-[78px] mb-[2px]">
                    <p className="text-gradient text-[28px] leading-[140%]  mb-2">
                        Buy 1 Pizza, Get 1 Free!
                    </p>
                    <h2 className="text-[56px] mb-[4px] leading-[110%]  sm:whitespace-nowrap whitespace-normal">
                        Medium & Large pizzas
                    </h2>
                    <p className="text-gradient mb-3 text-[28px] leading-[140%] ">
                        Limited Offer
                    </p>
                   
                    <CustomButton btnText="Order Now" className="bg-gradient mt-4" />
                </div>

                <div className="flex gap-6 items-center justify-center relative">
                    <img
                        src={buyImg}
                        alt="Pizza 1"
                        className=""
                    />
                  

                    <span className="absolute top-0 right-0 text-xl sm:text-2xl rotate-12 text-white opacity-30 font-serif">
                        Tasty
                    </span>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
