// import React from 'react';
// import CustomButton from './common/CustomButton';
// import heroBg from '../assets/images/png/hero-bg-img.png';

// const Hero = () => {
//     return (
//         <div
//             className="bg-no-repeat bg-cover bg-center max-w-[1360px] mx-auto bg-black rounded-[24px]"
//             style={{ backgroundImage: `url(${heroBg})` }}
//         >
//             <div className="md:max-w-[644px] ml-[110px] pt-[131px] pb-[192px]">
//                 <div className="flex-col flex  ">
//                     <h1 className="text-64 leading-120 font-bold text-white font-nunito-sans">
//                         Where Every Slice Feels Like Home
//                     </h1>
//                     <p className="text-base leading-160 mt-4 text-white font-nunito max-w-[558px]">
//                         At Pizza Nest, we bake more than pizza — we bake comfort. Customize<br />
//                         your perfect slice, or choose from our signature favorites
//                     </p>
//                     <div className="flex gap-6 mt-8">
//                         <CustomButton btnText="Order Now" className="bg-gradient" />
//                         <CustomButton btnText="View Full Menu" className={`border-1 border-white`} />
//                     </div>
//                     <div className="flex gap-10 mt-8 text-white max-w-[331px] justify-center items-center">
//                         <div className="flex flex-col max-w-[155px] text-center">
//                             <p className="text-28 font-semibold leading-[120%]">5,000+</p>
//                             <p className="text-base leading[120 font-semibold text-dark-gray">Pizzas Delivered</p>
//                         </div>
//                         <div className="w-[1px] h-[50px] border-[#D5D5D5] border-r "></div>
//                         <div className="flex flex-col max-w-[155px] text-center">
//                             <p className="text-28 font-semibold leading-[120%]">1,200+</p>
//                             <p className="text-base leading-120 font-semibold text-dark-gray">Happy Customers</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

import React from 'react';
import CustomButton from './common/CustomButton';
import heroBg from '../assets/images/png/hero-bg-img.png';

const Hero = () => {
    return (
        <div
            className="bg-no-repeat bg-cover bg-center max-w-[1360px] mx-auto bg-black rounded-[24px] px-4 md:px-[60px] lg:px-[110px]"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="pt-[80px] md:pt-[100px] lg:pt-[131px] pb-[100px] md:pb-[150px] lg:pb-[192px] max-w-full md:max-w-[644px]">
                <div className="flex flex-col">
                    <h1 className="custom-text-[64px]  leading-[120%] font-bold text-white font-nunito-sans">
                        Where Every Slice Feels Like Home
                    </h1>

                    <p className="text-base leading-[160%] mt-4 text-white font-nunito max-w-full sm:max-w-[520px] lg:max-w-[558px]">
                        At Pizza Nest, we bake more than pizza — we bake comfort. Customize<br />
                        your perfect slice, or choose from our signature favorites.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
                        <CustomButton btnText="Order Now" className="bg-gradient" />
                        <CustomButton btnText="View Full Menu" className="backdrop-blur-[30.9px] border border-[#FEFEFE] bg-[#FEFEFE0F]" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-8 text-white max-w-full sm:max-w-[331px] justify-center items-center">
                        <div className="flex flex-col max-w-[155px] text-center">
                            <p className="text-[28px] font-semibold leading-[120%]">5,000+</p>
                            <p className="text-base leading-[120%] font-semibold text-dark-gray">Pizzas Delivered</p>
                        </div>
                        <div className="w-[1px] h-[50px] bg-[#D5D5D5] hidden sm:block"></div>
                        <div className="flex flex-col max-w-[155px] text-center">
                            <p className="text-[28px] font-semibold leading-[120%]">1,200+</p>
                            <p className="text-base leading-[120%] font-semibold text-dark-gray">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
